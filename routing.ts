namespace jacdac {
    export const enum StatusEvent {
        ProxyStarted = 200,
        ProxyPacketReceived = 201,
        Identify = 202,
    }

    /**
     * Register platform specific code to be run before jacdac starts
     */
    export let onPlatformStart: () => void

    /**
     * Platform specific product identifier. Initialize in onPlatformStart
     */
    export let productIdentifier: number
    /**
     * Firmware version for this build
     */
    export let firmwareVersion: string
    /**
     * Device description repoted in the control service
     */
    export let deviceDescription: string

    export const CHANGE = "change"
    export const CONNECT = "connect"
    export const DISCONNECT = "disconnect"
    export const DEVICE_CONNECT = "deviceConnect"
    export const DEVICE_DISCONNECT = "deviceDisconnect"
    export const DEVICE_CHANGE = "deviceChange"
    export const DEVICE_ANNOUNCE = "deviceAnnounce"
    export const SELF_ANNOUNCE = "selfAnnounce"
    export const PACKET_PROCESS = "packetProcess"
    export const REPORT_RECEIVE = "reportReceive"
    export const REPORT_UPDATE = "reportUpdate"
    export const RESTART = "restart"
    export const PACKET_RECEIVE = "packetReceive"
    export const EVENT = "packetEvent"
    export const STATUS_EVENT = "statusEvent"
    export const IDENTIFY = "identify"
    export const REFRESH = "refresh"
    export const REFRESH_REGISTER_POLL = 50
    export const REGISTER_REFRESH_RATE = 250
    export const REGISTER_OPTIONAL_REFRESH_RATE = 1000
    export const REGISTER_READ_TIMEOUT = 750

    export class Bus extends jacdac.EventSource {
        readonly servers: Server[] = []
        readonly devices: Device[] = []
        private _myDevice: Device
        private restartCounter = 0
        private resetIn = 2000000 // 2s
        private autoBindCnt = 0
        private _eventCounter = 0
        private controlServer: ControlServer
        public proxyMode = false
        public readonly unattachedClients: Client[] = []
        public readonly allClients: Client[] = []

        constructor() {
            super()
        }

        get running() {
            return !!this.controlServer
        }

        start() {
            if (this.running) return

            this.controlServer = new ControlServer()
            this.controlServer.start()
        }

        addServer(server: Server) {
            server.serviceIndex = this.servers.length
            this.servers.push(server)
        }

        private gcDevices() {
            const now = control.millis()
            const cutoff = now - 2000
            this.selfDevice.lastSeen = now // make sure not to gc self

            let numdel = 0
            for (let i = 0; i < this.devices.length; ++i) {
                const dev = this.devices[i]
                if (dev.lastSeen < cutoff) {
                    this.devices.splice(i, 1)
                    i--
                    dev._destroy()
                    numdel++
                }
            }
            if (numdel) {
                this.emit(DEVICE_CHANGE)
                this.emit(CHANGE)
            }
        }

        /**
         * Gets the Jacdac device representing the running device
         */
        get selfDevice() {
            if (!this._myDevice) {
                this._myDevice = new Device(
                    control.deviceLongSerialNumber().toHex(),
                    Buffer.create(4)
                )
            }
            return this._myDevice
        }

        mkEventCmd(evCode: number) {
            if (!this._eventCounter) this._eventCounter = 0
            this._eventCounter =
                (this._eventCounter + 1) & CMD_EVENT_COUNTER_MASK
            if (evCode >> 8) panic("invalid evcode")
            return (
                CMD_EVENT_MASK |
                (this._eventCounter << CMD_EVENT_COUNTER_POS) |
                evCode
            )
        }

        clearAttachCache() {
            for (const d of this.devices) {
                // add a dummy byte at the end (if not done already), to force re-attach of services
                if ((d.services.length & 3) == 0)
                    d.services = d.services.concat(Buffer.create(1))
            }
        }

        get isClient() {
            return roleManagerServer.running
        }

        queueAnnounce() {
            const ids = this.servers.map(h => (h.running ? h.serviceClass : -1))
            if (this.restartCounter < 0xf) this.restartCounter++
            ids[0] =
                this.restartCounter |
                (this.isClient ? ControlAnnounceFlags.IsClient : 0) |
                ControlAnnounceFlags.SupportsACK |
                ControlAnnounceFlags.SupportsBroadcast |
                ControlAnnounceFlags.SupportsFrames
            const buf = Buffer.create(ids.length * 4)
            for (let i = 0; i < ids.length; ++i)
                buf.setNumber(NumberFormat.UInt32LE, i * 4, ids[i])
            JDPacket.from(SystemCmd.Announce, buf)._sendReport(this.selfDevice)
            this.emit(SELF_ANNOUNCE)
            for (const cl of this.allClients) cl.announceCallback()
            this.gcDevices()

            // send resetin to whoever wants to listen for it
            if (this.isClient && this.resetIn)
                JDPacket.from(
                    ControlReg.ResetIn | CMD_SET_REG,
                    jdpack("u32", [this.resetIn])
                ).sendAsMultiCommand(SRV_CONTROL)

            if (
                jacdac.roleManagerServer.autoBind &&
                jacdac.roleManagerServer.running
            ) {
                this.autoBindCnt++
                // also, only do it every two announces (TBD)
                if (this.autoBindCnt >= 2) {
                    this.autoBindCnt = 0
                    jacdac.roleManagerServer.bindRoles()
                }
            }
        }

        detachClient(client: Client) {
            if (this.unattachedClients.indexOf(client) < 0) {
                this.unattachedClients.push(client)
                this.clearAttachCache()
            }
        }

        attachClient(client: Client) {
            this.unattachedClients.removeElement(client)
        }

        startClient(client: Client) {
            this.unattachedClients.push(client)
            this.allClients.push(client)
            this.clearAttachCache()
        }

        destroyClient(client: Client) {
            this.unattachedClients.removeElement(client)
            this.allClients.removeElement(client)
            this.clearAttachCache()
        }

        reattach(dev: Device) {
            dev.lastSeen = control.millis()
            log(
                `roles: attaching to ${dev.toString()}; cl=${
                    this.unattachedClients.length
                }/${this.allClients.length}`
            )
            const newClients: Client[] = []
            const occupied = Buffer.create(dev.services.length >> 2)
            for (const c of dev.clients) {
                if (c.broadcast) {
                    c._detach()
                    continue // will re-attach
                }
                const newClass = dev.serviceClassAt(c.serviceIndex)
                if (
                    newClass == c.serviceClass &&
                    dev.matchesRoleAt(
                        c.roleQuery,
                        c.serviceClass,
                        c.serviceIndex
                    )
                ) {
                    log(`rebound ${c.roleName}`)
                    newClients.push(c)
                    occupied[c.serviceIndex] = 1
                } else {
                    c._detach()
                }
            }
            dev.clients = newClients

            this.emit(DEVICE_ANNOUNCE, dev)

            if (this.unattachedClients.length == 0) {
                log(`all clients attached`)
                return
            }

            for (let i = 4; i < dev.services.length; i += 4) {
                if (occupied[i >> 2]) continue
                const serviceClass = dev.services.getNumber(
                    NumberFormat.UInt32LE,
                    i
                )
                for (const cc of this.unattachedClients) {
                    if (cc.serviceClass == serviceClass) {
                        log(`reattach: ${cc.role} -> ${dev.shortId}:${i >> 2}`)
                        if (cc._attach(dev, serviceClass, i >> 2)) {
                            log(`success`)
                            break
                        }
                    }
                }
            }
        }

        processPacket(pkt: JDPacket) {
            // log("route: " + pkt.toString())
            const devId = pkt.deviceIdentifier
            const multiCommandClass = pkt.multicommandClass

            // TODO implement send queue for packet compression

            if (pkt.requiresAck) {
                pkt.requiresAck = false // make sure we only do it once
                if (pkt.deviceIdentifier == this.selfDevice.deviceId) {
                    const crc = pkt.crc
                    const ack = JDPacket.onlyHeader(crc)
                    ack.serviceIndex = JD_SERVICE_INDEX_CRC_ACK
                    ack._sendReport(this.selfDevice)
                }
            }

            this.emit(PACKET_PROCESS, pkt)

            if (multiCommandClass != null) {
                if (!pkt.isCommand) return // only commands supported in multi-command
                for (const h of this.servers) {
                    if (h.serviceClass == multiCommandClass && h.running) {
                        // pretend it's directly addressed to us
                        pkt.deviceIdentifier = this.selfDevice.deviceId
                        pkt.serviceIndex = h.serviceIndex
                        h.handlePacketOuter(pkt)
                    }
                }
            } else if (devId == this.selfDevice.deviceId && pkt.isCommand) {
                const h = this.servers[pkt.serviceIndex]
                if (h && h.running) {
                    // log(`handle pkt at ${h.name} cmd=${pkt.service_command}`)
                    h.handlePacketOuter(pkt)
                }
            } else {
                if (pkt.isCommand) return // it's a command, and it's not for us

                let dev = this.devices.find(d => d.deviceId == devId)

                if (pkt.serviceIndex == JD_SERVICE_INDEX_CTRL) {
                    if (pkt.serviceCommand == SystemCmd.Announce) {
                        const pktRestartCounter = pkt.data[0] & 0xf
                        if (dev && dev.restartCounter > pktRestartCounter) {
                            // if the reset counter went down, it means the device reseted;
                            // treat it as new device
                            log(
                                `device ${dev.shortId} resetted (${dev.restartCounter} > ${pktRestartCounter})`
                            )
                            this.devices.removeElement(dev)
                            dev._destroy()
                            dev = null
                            this.emit(RESTART)
                        }

                        let matches = false
                        if (!dev) {
                            dev = new Device(pkt.deviceIdentifier, pkt.data)
                            this.emit(DEVICE_CONNECT, dev)
                        } else {
                            matches = serviceMatches(dev, pkt.data)
                            dev.services = pkt.data
                        }

                        if (
                            dev !== this.selfDevice &&
                            this.selfDevice.isBrain &&
                            dev.isBrain &&
                            // old behavior, last one wins
                            // dev.restartCounter < this.restartCounter
                            // new behavior: simulator always goes to proxy mode
                            isSimulator()
                        ) {
                            // the device restarted earlier than us
                            log(`device ${dev.shortId} new proxy`)
                            resetToProxy()
                        }

                        if (!matches) this.reattach(dev)
                    }
                    if (dev) dev.processPacket(pkt)
                    return
                } else if (pkt.serviceIndex == JD_SERVICE_INDEX_CRC_ACK) {
                    _gotAck(pkt)
                }

                if (!dev)
                    // we can't know the serviceClass,
                    // no announcement seen yet for this device
                    return
                dev.processPacket(pkt)
            }
        }

        private _refreshing = false
        private startRefresh() {
            if (this._refreshing) return

            this._refreshing = true
            control.runInBackground(() => this.refreshLoop())
        }

        private refreshLoop() {
            try {
                while (this.hasListener(jacdac.REFRESH)) {
                    this.emit(jacdac.REFRESH)
                    pause(50)
                }
            } finally {
                this._refreshing = false
            }
        }

        subscribeRefresh(handler: () => void) {
            const unsub = this.subscribe(jacdac.REFRESH, handler)
            this.startRefresh()
            return unsub
        }
    }

    /**
     * The Jacdac bus singleton.
     */
    export const bus: Bus = new Bus()

    // common logging level for jacdac services
    export let logPriority = ConsolePriority.Debug

    export function panic(message: string) {
        console.error(message)
        throw message
    }

    function log(msg: string) {
        console.add(logPriority, "jd: " + msg)
    }

    export interface ServerSimpleConstant {
        code: number
        packFormat: string
        value: PackSimpleDataType
    }

    export interface ServerOptions {
        instanceName?: string
        variant?: number
        statusCode?: jacdac.SystemStatusCodes
        valuePackFormat?: string
        value?: number
        intensityPackFormat?: string
        intensity?: number
        calibrate?: () => void
        constants?: ServerSimpleConstant[]
    }

    //% fixedInstances
    export class Server extends EventSource {
        readonly instanceName: string
        private readonly calibrate: () => void
        private readonly valuePackFormat: string
        private readonly intensityPackFormat: string
        private readonly constants?: ServerSimpleConstant[]

        protected supressLog: boolean
        running: boolean
        serviceIndex: number
        protected stateUpdated: boolean
        private _statusCode = SystemStatusCodes.Ready
        private _statusVendorCode = 0
        private _value?: number
        private _intensity?: number
        private variant?: number

        constructor(
            public readonly serviceClass: number,
            options?: ServerOptions
        ) {
            super()

            if (options) {
                this.instanceName = options.instanceName
                this.variant = options.variant
                if (options.statusCode)
                    this._statusCode = options.statusCode & 0xffff
                this.intensityPackFormat = options.intensityPackFormat
                this.valuePackFormat = options.valuePackFormat
                this._intensity = this.intensityPackFormat
                    ? options.intensity || 0
                    : undefined
                this._value = this.valuePackFormat
                    ? options.value || 0
                    : undefined
                this.calibrate = options.calibrate
                this.constants = options.constants
            }
        }

        get statusCode() {
            return this._statusCode
        }

        get statusVendorCode() {
            return this._statusVendorCode
        }

        /**
         * Boolean intensity register is false
         */
        get disabled() {
            return this.intensityPackFormat && !this._intensity
        }

        /**
         * Indicates that the status code is ready and optional enable register is true
         */
        get ready() {
            return (
                this.running &&
                !this.disabled &&
                this.statusCode == SystemStatusCodes.Ready
            )
        }

        get intensity() {
            return this._intensity
        }

        set intensity(value: number) {
            if (!this.intensityPackFormat) panic("invalid intensity register")
            if (this._intensity !== value) {
                this._intensity = value
                this.emit(CHANGE)
            }
        }

        get value() {
            return this._value
        }

        set value(value: number) {
            if (!this.valuePackFormat) panic("invalid value register")
            if (this._value !== value) {
                this._value = value
                this.emit(CHANGE)
            }
        }

        setStatusCode(code: number) {
            const cc = code & 0xffff
            if (cc !== this._statusCode) {
                this._statusCode = cc
                this.sendChangeEvent()
            }
        }

        setStatusVendorCode(vendorCode: number) {
            const cc = vendorCode & 0xffff
            if (cc !== this._statusVendorCode) {
                this._statusVendorCode = cc
                this.sendChangeEvent()
            }
        }

        handlePacketOuter(pkt: JDPacket) {
            // generic registers
            const cmd = pkt.serviceCommand
            switch (cmd) {
                case SystemReg.StatusCode | SystemCmd.GetRegister:
                    this.handleStatusCode(pkt)
                    return
                case SystemReg.InstanceName | SystemCmd.GetRegister:
                    this.handleInstanceName(pkt)
                    return
                case SystemReg.Variant | SystemCmd.GetRegister:
                    this.handleVariant(pkt)
                    return
                case SystemReg.Value | SystemCmd.GetRegister:
                case SystemReg.Value | SystemCmd.SetRegister:
                    if (!this.valuePackFormat) break
                    this.handleValue(pkt)
                    return
                case SystemReg.Intensity | SystemCmd.GetRegister:
                case SystemReg.Intensity | SystemCmd.SetRegister:
                    if (!this.intensityPackFormat) break
                    this.handleIntensity(pkt)
                    return
                case SystemCmd.Calibrate:
                    this.handleCalibrateCommand(pkt)
                    return
            }

            // service specific constants
            if (this.constants) {
                const isGet = pkt.isRegGet
                if (isGet) {
                    const regCode = pkt.regCode
                    const constant = this.constants.filter(
                        cst => cst.code === regCode
                    )[0]
                    if (constant) {
                        this.handleRegValue(
                            pkt,
                            regCode,
                            constant.packFormat,
                            constant.value
                        )
                        return
                    }
                }
            }

            // specialized
            this.stateUpdated = false
            this.handlePacket(pkt)
        }

        handlePacket(pkt: JDPacket) {}

        isConnected() {
            return this.running
        }

        protected sendReport(pkt: JDPacket) {
            if (this.serviceIndex == null) return
            pkt.serviceIndex = this.serviceIndex
            pkt._sendReport(bus.selfDevice)
        }

        sendEvent(eventCode: number, data?: Buffer) {
            if (this.serviceIndex == null) return
            const pkt = JDPacket.from(
                bus.mkEventCmd(eventCode),
                data || Buffer.create(0)
            )
            this.sendReport(pkt)
            const now = control.millis()
            delayedSend(pkt, now + 20)
            delayedSend(pkt, now + 100)
        }

        sendChangeEvent(): void {
            this.sendEvent(SystemEvent.Change)
            this.emit(CHANGE)
        }

        private handleStatusCode(pkt: JDPacket) {
            this.handleRegFormat(
                pkt,
                SystemReg.StatusCode,
                SystemRegPack.StatusCode,
                [this._statusCode, this._statusVendorCode]
            )
        }

        private handleInstanceName(pkt: JDPacket) {
            if (this.instanceName)
                this.handleRegValue(
                    pkt,
                    SystemReg.InstanceName,
                    SystemRegPack.InstanceName,
                    this.instanceName
                )
            else pkt.possiblyNotImplemented()
        }

        private handleVariant(pkt: JDPacket) {
            if (this.variant != undefined)
                this.handleRegValue(pkt, SystemReg.Variant, "u8", this.variant)
            else pkt.possiblyNotImplemented()
        }

        private handleValue(pkt: jacdac.JDPacket) {
            const v = this.handleRegValue(
                pkt,
                SystemReg.Value,
                this.valuePackFormat,
                this._value
            )
            this.value = v
        }

        private handleIntensity(pkt: JDPacket) {
            const v = this.handleRegValue(
                pkt,
                SystemReg.Intensity,
                this.intensityPackFormat,
                this._intensity
            )
            this.intensity = v
        }

        // override
        protected handleCalibrateCommand(pkt: JDPacket) {
            if (this.statusCode === jacdac.SystemStatusCodes.Calibrating) return

            if (this.calibrate) {
                this.setStatusCode(jacdac.SystemStatusCodes.Calibrating)
                control.runInBackground(() => this.doCalibrate())
            } else pkt.possiblyNotImplemented()
        }

        private doCalibrate() {
            try {
                this.calibrate()
                this.setStatusCode(jacdac.SystemStatusCodes.Ready)
            } catch (e) {
                this.setStatusCode(jacdac.SystemStatusCodes.CalibrationNeeded)
            }
        }

        protected handleRegFormat<T extends any[]>(
            pkt: JDPacket,
            register: number,
            fmt: string,
            current: T
        ): T {
            const getset = pkt.serviceCommand >> 12
            if (getset == 0 || getset > 2) return current
            const reg = pkt.serviceCommand & 0xfff
            if (reg != register) return current
            pkt.markHandled()
            if (getset == 1) {
                this.sendReport(
                    JDPacket.jdpacked(pkt.serviceCommand, fmt, current)
                )
            } else {
                if (register >> 8 == 0x1) return current // read-only
                const v = pkt.jdunpack<T>(fmt)
                if (!jdpackEqual<T>(fmt, v, current)) {
                    this.stateUpdated = true
                    current = v
                }
            }
            return current
        }

        // only use for numbers
        protected handleRegValue<T>(
            pkt: JDPacket,
            register: number,
            fmt: string,
            current: T
        ): T {
            const getset = pkt.serviceCommand >> 12
            if (getset == 0 || getset > 2) return current
            const reg = pkt.serviceCommand & 0xfff
            if (reg != register) return current
            pkt.markHandled()
            // make sure there's no null/undefined
            if (getset == 1) {
                if (current != undefined && current != null)
                    this.sendReport(
                        JDPacket.jdpacked(pkt.serviceCommand, fmt, [current])
                    )
            } else {
                if (register >> 8 == 0x1) return current // read-only
                const v = pkt.jdunpack(fmt)
                if (v[0] !== current) {
                    this.stateUpdated = true
                    current = v[0]
                }
            }
            return current
        }

        toString(): string {
            return `server:${
                this.instanceName || jacdac.hexNum(this.serviceClass)
            }.${this.serviceIndex}`
        }

        protected handleRegBool(
            pkt: JDPacket,
            register: number,
            current: boolean
        ): boolean {
            const res = this.handleRegValue(
                pkt,
                register,
                "u8",
                current ? 1 : 0
            )
            return !!res
        }

        protected handleRegInt32(
            pkt: JDPacket,
            register: number,
            current: number
        ): number {
            const res = this.handleRegValue(pkt, register, "i32", current >> 0)
            return res
        }

        protected handleRegUInt32(
            pkt: JDPacket,
            register: number,
            current: number
        ): number {
            const res = this.handleRegValue(pkt, register, "u32", current >>> 0)
            return res
        }

        protected handleRegBuffer(
            pkt: JDPacket,
            register: number,
            current: Buffer
        ): Buffer {
            const getset = pkt.serviceCommand >> 12
            if (getset == 0 || getset > 2) return current
            const reg = pkt.serviceCommand & 0xfff
            if (reg != register) return current

            pkt.markHandled()
            if (getset == 1) {
                this.sendReport(JDPacket.from(pkt.serviceCommand, current))
            } else {
                if (register >> 8 == 0x1) return current // read-only
                let data = pkt.data
                const diff = current.length - data.length
                if (diff == 0) {
                    //
                } else if (diff < 0) data = data.slice(0, current.length)
                else data = data.concat(Buffer.create(diff))

                if (!data.equals(current)) {
                    current.write(0, data)
                    this.stateUpdated = true
                }
            }
            return current
        }

        /**
         * Registers and starts the driver
         */
        start() {
            if (this.running) return
            this.running = true
            jacdac.start()
            jacdac.bus.addServer(this)
            this.log("start")
        }

        /**
         * Unregister and stops the service
         */
        stop() {
            if (!this.running) return
            this.running = false
            this.log("stop")
        }

        protected log(text: string) {
            // check if logging is needed
            if (this.supressLog) return
            if (jacdac.logPriority < console.minPriority) return

            // log things up!
            const dev = bus.selfDevice.toString()
            console.add(
                logPriority,
                `${dev}${
                    this.instanceName
                        ? `.${this.instanceName}`
                        : `[${this.serviceIndex}]`
                }>${text}`
            )
        }
    }

    class ClientPacketQueue {
        private pkts: Buffer[] = []

        constructor(public readonly parent: Client) {}

        private updateQueue(pkt: JDPacket) {
            const cmd = pkt.serviceCommand
            for (let i = 0; i < this.pkts.length; ++i) {
                if (this.pkts[i].getNumber(NumberFormat.UInt16LE, 2) == cmd) {
                    this.pkts[i] = pkt.withFrameStripped()
                    return
                }
            }
            this.pkts.push(pkt.withFrameStripped())
        }

        clear() {
            this.pkts = []
        }

        send(pkt: JDPacket) {
            if (pkt.isRegSet || this.parent.serviceIndex == null)
                this.updateQueue(pkt)
            this.parent.sendCommand(pkt)
        }

        resend() {
            const sn = this.parent.serviceIndex
            if (sn == null || this.pkts.length == 0) return
            let hasNonSet = false
            for (const p of this.pkts) {
                if (p[3] >> 4 != CMD_SET_REG >> 12) hasNonSet = true
                this.parent.sendCommand(JDPacket.fromFrameless(p))
            }
            // after re-sending only leave set_reg packets
            if (hasNonSet)
                this.pkts = this.pkts.filter(
                    p => p[3] >> 4 == CMD_SET_REG >> 12
                )
        }
    }

    interface SMap<T> {
        [index: string]: T
    }

    export enum RegisterClientFlags {
        None = 0x0,
        Optional = 0x01,
        Const = 0x02,
    }

    export class RegisterClient<
        TValues extends PackDataType[]
    > extends EventSource {
        private _data: Buffer
        private _localTime: number
        public readonly flags: RegisterClientFlags

        constructor(
            public readonly service: Client,
            public readonly code: number,
            public readonly packFormat: string,
            flags?: RegisterClientFlags,
            defaultValue?: TValues
        ) {
            super()
            this.flags = flags || RegisterClientFlags.None
            this._data = defaultValue
                ? jdpack(this.packFormat, defaultValue)
                : undefined
            this._localTime = control.millis()
        }

        reset() {
            this._data = undefined
            this._localTime = control.millis()
        }

        get data() {
            return this._data ? this._data : control.createBuffer(0)
        }

        hasValues(): boolean {
            return !!this._data
        }

        get isConst(): boolean {
            return !!(this.flags & RegisterClientFlags.Const)
        }

        get isOptional(): boolean {
            return !!(this.flags & RegisterClientFlags.Optional)
        }

        /**
         * Queues a query to refresh the register
         */
        query() {
            const constHasValues = this.isConst && this.hasValues()
            const device = this.service.device
            // need to be connected, don't re-request consts
            if (device && !constHasValues) {
                device.query(
                    this.code,
                    this.isConst
                        ? null
                        : this.isOptional
                        ? REGISTER_OPTIONAL_REFRESH_RATE
                        : REGISTER_REFRESH_RATE,
                    this.service.serviceIndex
                )
            }
        }

        pauseUntilValues(timeOut?: number) {
            const manualQuery = this.code !== SystemReg.Reading
            if (manualQuery) this.query()
            if (!this.hasValues()) {
                pauseUntil(() => {
                    const values = this.hasValues()
                    if (values) return true
                    if (manualQuery) this.query()
                    return false
                }, timeOut || REGISTER_READ_TIMEOUT)
            }
            return this.values
        }

        get values(): TValues {
            this.service.start()
            return jdunpack(this._data, this.packFormat) as TValues
        }

        set values(values: TValues) {
            this.service.start()
            const d = jdpack(this.packFormat, values)
            const changed = !!d != !!this._data || !d || !d.equals(this._data)
            if (changed) {
                this._data = d
                // send set request to the service
                this.service.setRegBuffer(this.code, this._data)
                this.emit(CHANGE)
            }
        }

        sendSet() {
            if (this._data) this.service.setRegBuffer(this.code, this._data)
        }

        get lastGetTime() {
            return this._localTime
        }

        handlePacket(packet: JDPacket): void {
            if (packet.isRegGet && this.code == packet.regCode) {
                const d = packet.data
                const changed =
                    !!d != !!this._data || !d || !d.equals(this._data)
                this._data = d
                this._localTime = control.millis()
                this.emit(REPORT_RECEIVE, this)
                if (changed) {
                    this.emit(REPORT_UPDATE, this)
                    this.emit(CHANGE)
                }
            }
        }
    }

    export class ClientRoleQuery {
        constructor(public readonly role: string, query?: string) {
            if (query)
                for (const kv of query.split("&")) {
                    const i = kv.indexOf("=")
                    if (i < 0) continue
                    const key = kv.slice(0, i)
                    const value = kv.slice(i + 1)
                    switch (key) {
                        case "dev":
                            this.device = value
                            break
                        case "srvi":
                            this.serviceIndex = parseInt(value)
                            break
                        case "srvo":
                            this.serviceOffset = parseInt(value)
                            break
                    }
                }
        }
        // ?dev=...
        readonly device: string
        // ?srvi=...
        readonly serviceIndex: number
        // ?srvo=...
        readonly serviceOffset: number
    }

    export enum ClientConnectionState {
        //% block="connected"
        Connected = 0x0101,
        //% block="disconnected"
        Disconnected = 0x0102,
    }

    // All register event value in the clients
    // are shifted by this value
    const CLIENT_EVENT_VALUE_SHIFT = 0xf000
    function unregisteredNoop() {}

    //% fixedInstances
    export class Client extends EventSource {
        _device: Device
        protected readonly eventSource: number
        broadcast: boolean // when true, this.device is never set
        serviceIndex: number
        protected supressLog: boolean
        started: boolean
        protected advertisementData: Buffer
        protected systemActive = false
        private _registeredEvents: number[]

        protected readonly config: ClientPacketQueue
        private readonly registers: RegisterClient<PackDataType[]>[] = []
        readonly _role: string

        constructor(public readonly serviceClass: number, role: string) {
            super()
            if (!role) panic("no role")

            this.eventSource = control.allocateEventSource()
            this.config = new ClientPacketQueue(this)
            this._role = role
        }

        get role() {
            return this._role
        }

        get roleName() {
            const i = this._role.indexOf("?")
            if (i > -1) return this._role.substr(0, i)
            else return this._role
        }

        get roleQuery(): ClientRoleQuery {
            const i = this._role.indexOf("?")
            if (i < 0) return new ClientRoleQuery(this._role)
            const query = this._role.substr(i + 1)
            const r = new ClientRoleQuery(this._role.substr(0, i), query)
            return r
        }

        get device() {
            return this._device
        }

        set device(device: Device) {
            if (this._device !== device) {
                this._device = device
                this.registers.forEach(reg => reg.reset())
            }
        }

        protected addRegister<TValues extends PackDataType[]>(
            code: number,
            packFormat: string,
            flags?: RegisterClientFlags,
            defaultValues?: TValues
        ): RegisterClient<TValues> {
            let reg = this.registers.find(reg => reg.code === code)
            if (!reg) {
                reg = new RegisterClient<TValues>(
                    this,
                    code,
                    packFormat,
                    flags,
                    defaultValues
                )
                this.registers.push(reg)
            }
            return reg as RegisterClient<TValues>
        }

        register(code: number) {
            return this.registers.find(reg => reg.code === code)
        }

        broadcastDevices() {
            return bus.devices.filter(d => d.clients.indexOf(this) >= 0)
        }

        /**
         * Indicates if the client is bound to a server
         */
        //% blockId=jd_client_is_connected block="%client connected"
        //% group="Roles" weight=50 blockGap=8
        //% blockNamespace="modules"
        isConnected() {
            this.start()
            return this.broadcast || !!this.device
        }

        /**
         * Raised when a server is connected or disconnected
         */
        //% blockId=jd_client_on_connection_changed block="on %client $state"
        //% group="Roles" weight=49 blockGap=8
        //% blockNamespace="modules"
        onConnectionChanged(state: ClientConnectionState, handler: () => void) {
            if (
                state != ClientConnectionState.Connected &&
                state != ClientConnectionState.Disconnected
            )
                return

            this.registerEvent(state, handler)
            const connected = this.isConnected()
            if (
                (state == ClientConnectionState.Connected) == connected ||
                (state == ClientConnectionState.Disconnected) == !connected
            )
                this.raiseEvent(state)
        }

        handlePacketOuter(pkt: JDPacket) {
            if (jacdac.bus.proxyMode) return

            if (pkt.serviceCommand == SystemCmd.Announce)
                this.advertisementData = pkt.data

            if (pkt.isEvent) {
                const code = pkt.eventCode
                if (code == SystemEvent.Active) this.systemActive = true
                else if (code == SystemEvent.Inactive) this.systemActive = false
                else if (code == SystemEvent.Change)
                    // refresh all non-const registers
                    this.registers.forEach(r => r.reset())
                this.emit(EVENT, pkt)
                this.raiseEvent(code)
            } else
                for (const register of this.registers)
                    register.handlePacket(pkt)
            this.handlePacket(pkt)
        }

        handlePacket(pkt: JDPacket) {}

        _attach(dev: Device, serviceClass: number, serviceNum: number) {
            if (this.device) panic("invalid attach")
            if (!this.broadcast) {
                if (
                    !dev.matchesRoleAt(this.roleQuery, serviceClass, serviceNum)
                )
                    return false // don't attach
                this.device = dev
                this.serviceIndex = serviceNum
                bus.attachClient(this)
            }
            log(`role: + ${this.role} -> ${dev.toString()}:${serviceNum}`)
            dev.clients.push(this)
            this.handleConnected()
            return true
        }

        private handleConnected() {
            this.config.resend()
            this.emit(CONNECT)
        }

        _detach() {
            log(`roles: - ${this.roleName}`)
            this.serviceIndex = null
            if (!this.broadcast) {
                if (!this.device) panic("invalid detach")
                this.device = null
                bus.detachClient(this)
            }
            this.emit(DISCONNECT)
        }

        sendCommand(pkt: JDPacket) {
            this.start()
            if (this.serviceIndex == null) return
            pkt.serviceIndex = this.serviceIndex
            pkt._sendCmd(this.device)
        }

        sendCommandWithAck(pkt: JDPacket) {
            this.start()
            if (this.serviceIndex == null) return
            pkt.serviceIndex = this.serviceIndex
            if (!pkt._sendWithAck(this.device.deviceId)) panic("no ack")
        }

        // this will be re-sent on (re)attach
        setReg(reg: number, format: string, values: PackDataType[]) {
            this.start()
            const payload = JDPacket.jdpacked(CMD_SET_REG | reg, format, values)
            this.config.send(payload)
        }

        setRegBuffer(reg: number, value: Buffer) {
            this.start()
            this.config.send(JDPacket.from(CMD_SET_REG | reg, value))
        }

        protected raiseEvent(value: number) {
            control.raiseEvent(
                this.eventSource,
                CLIENT_EVENT_VALUE_SHIFT + value
            )
        }

        protected registerEvent(value: number, handler: () => void) {
            this.start()
            // keep track of handlers to unregister handlers on destroy
            if (!this._registeredEvents) this._registeredEvents = []
            if (this._registeredEvents.indexOf(value) < 0)
                this._registeredEvents.push(value)
            control.onEvent(
                this.eventSource,
                CLIENT_EVENT_VALUE_SHIFT + value,
                handler
            )
        }

        protected log(text: string) {
            if (this.supressLog || logPriority < console.minPriority) return
            const dev = bus.selfDevice.toString()
            const other = this.device ? this.device.toString() : "<unbound>"
            console.add(
                logPriority,
                `${dev}/${other}:${this.serviceClass}>${this.roleName}>${text}`
            )
        }

        start() {
            if (this.started) return
            this.started = true
            jacdac.start()
            jacdac.bus.startClient(this)
        }

        destroy() {
            if (this.device) this.device.clients.removeElement(this)
            this.serviceIndex = null
            this.device = null
            // register noop in place of existing handlers
            // to unpin handlers and allow GC; this is not perfect
            // but full removal of handlers requires deeper changes in CODAL
            if (this._registeredEvents) {
                for (const value of this._registeredEvents) {
                    control.onEvent(
                        this.eventSource,
                        CLIENT_EVENT_VALUE_SHIFT + value,
                        unregisteredNoop
                    )
                }
                this._registeredEvents = undefined
            }
            jacdac.bus.destroyClient(this)
        }

        announceCallback() {}
    }

    // 2 letter + 2 digit ID; 1.8%/0.3%/0.07%/0.015% collision probability among 50/20/10/5 devices
    export function shortDeviceId(devid: string) {
        const h = Buffer.fromHex(devid).hash(30)
        return (
            String.fromCharCode(0x41 + (h % 26)) +
            String.fromCharCode(0x41 + (Math.idiv(h, 26) % 26)) +
            String.fromCharCode(0x30 + (Math.idiv(h, 26 * 26) % 10)) +
            String.fromCharCode(0x30 + (Math.idiv(h, 26 * 26 * 10) % 10))
        )
    }

    class RegQuery {
        lastQuery = 0
        lastReport = 0
        value: Buffer
        notImplemented: boolean
        constructor(public reg: number, public serviceIdx: number) {}
    }

    export class Device extends EventSource {
        lastSeen: number
        clients: Client[] = []
        private _eventCounter: number
        private _shortId: string
        private queries: RegQuery[]
        _score: number

        // services can never be null
        constructor(public deviceId: string, public services: Buffer) {
            super()
            bus.devices.push(this)
        }

        get isBrain() {
            return this.hasService(SRV_UNIQUE_BRAIN)
        }

        get announceflags(): ControlAnnounceFlags {
            return this.services.getNumber(NumberFormat.UInt16LE, 0)
        }

        get restartCounter() {
            return (
                this.announceflags & ControlAnnounceFlags.RestartCounterSteady
            )
        }

        get packetCount() {
            return this.services[2]
        }

        get isConnected() {
            return this.clients != null
        }

        get isClient() {
            return !!(this.announceflags & ControlAnnounceFlags.IsClient)
        }

        get shortId() {
            // TODO measure if caching is worth it
            if (!this._shortId) this._shortId = shortDeviceId(this.deviceId)
            return this._shortId
        }

        toString() {
            return this.shortId
        }

        matchesRoleAt(
            query: ClientRoleQuery,
            serviceClass: number,
            serviceIdx: number
        ) {
            const role = query.role
            if (!role) return true

            // legacy binding
            if (role == this.deviceId) return true
            if (role == this.deviceId + ":" + serviceIdx) {
                log(`role: match ${role} (precise:)`)
                return true
            }
            if (role.indexOf(":") >= 0) return false

            // query based binding
            // match device id query, dev=self query + device/service query
            // precise device id match
            if (
                // precise device id match
                query.device == this.deviceId ||
                // short id match
                query.device == this.shortId ||
                // self device match
                (query.device == "self" &&
                    this.deviceId == jacdac.bus.selfDevice.deviceId)
            ) {
                if (
                    // precise service index match
                    // precise service index
                    query.serviceIndex != undefined &&
                    query.serviceIndex == serviceIdx
                ) {
                    log(`role: match ${role} (dev+srvi)`)
                    return true
                }
                // precise service offset match
                if (
                    query.serviceOffset != undefined &&
                    query.serviceOffset ==
                        this.serviceOffsetAt(serviceClass, serviceIdx)
                ) {
                    log(`role: match ${role} (dev+srvo)`)
                    return true
                }
                // pick first match
                if (
                    query.serviceIndex != undefined &&
                    query.serviceOffset != undefined
                ) {
                    log(`role: match ${role} (dev+!srv)`)
                    return true
                }
            }

            const mrole = jacdac._rolemgr.getRole(this.deviceId, serviceIdx)
            return mrole == role
        }

        private lookupQuery(reg: number, serv = 0) {
            if (!this.queries) this.queries = []
            return this.queries.find(q => q.reg == reg && q.serviceIdx == serv)
        }

        get serviceClassLength() {
            return this.services.length >> 2
        }

        public serviceIndexAtOffset(
            serviceClass: number,
            serviceOffset: number
        ) {
            let offset = 0
            const n = this.serviceClassLength
            for (let i = 0; i < n; ++i) {
                if (this.serviceClassAt(i) === serviceClass) {
                    if (offset === serviceOffset) return i
                    offset++
                }
            }
            return -1
        }

        private serviceOffsetAt(
            serviceClass: number,
            serviceIndex: number
        ): number {
            let o = -1
            const n = this.serviceClassLength
            for (let i = 0; i < n; ++i) {
                if (this.serviceClassAt(i) == serviceClass) {
                    o++
                    if (serviceIndex == i) return o
                }
            }
            return -1
        }

        serviceClassAt(serviceIndex: number) {
            return serviceIndex == 0
                ? 0
                : this.services.getNumber(
                      NumberFormat.UInt32LE,
                      serviceIndex << 2
                  )
        }

        /**
         * @param refreshRate null for const, otherwise ms
         */
        query(reg: number, refreshRate: number, servIdx = 0) {
            let q = this.lookupQuery(reg, servIdx)
            if (!q) this.queries.push((q = new RegQuery(reg, servIdx)))

            if (q.notImplemented) return undefined

            const now = control.millis()
            if (
                // not queried before
                !q.lastQuery ||
                // no data yet and last query was a while ago
                (q.value === undefined && now - q.lastQuery > 500) ||
                // regular refresh, for non-const registers
                (refreshRate != null && now - q.lastQuery > refreshRate)
            ) {
                q.lastQuery = now
                const pkt = JDPacket.onlyHeader(CMD_GET_REG | reg)
                pkt.serviceIndex = servIdx
                pkt._sendCmd(this)
            }
            return q.value
        }

        get uptime(): number {
            // create query
            this.query(ControlReg.Uptime, 60000)
            const q = this.lookupQuery(ControlReg.Uptime)
            if (q.value) {
                const up = q.value.getNumber(NumberFormat.UInt32LE, 0)
                const offset = (control.millis() - q.lastReport) * 1000
                return up + offset
            }
            return undefined
        }

        get mcuTemperature(): number {
            return uintOfBuffer(this.query(ControlReg.McuTemperature, 5000))
        }

        get firmwareVersion(): string {
            const b = this.query(ControlReg.FirmwareVersion, null)
            if (b) return b.toString()
            else return ""
        }

        processPacket(pkt: JDPacket) {
            this.lastSeen = control.millis()
            this.emit(PACKET_RECEIVE, pkt)

            if (
                pkt.serviceCommand == BaseCmd.CommandNotImplemented &&
                this.queries
            ) {
                const cmd = pkt.getNumber(NumberFormat.UInt16LE, 0)
                if (cmd >> 12 == CMD_GET_REG >> 12) {
                    const q = this.lookupQuery(
                        cmd & CMD_REG_MASK,
                        pkt.serviceIndex
                    )
                    if (q) q.notImplemented = true
                }
            }

            const serviceIndex = pkt.serviceIndex
            if (pkt.isRegGet && this.queries) {
                const q = this.lookupQuery(pkt.regCode, serviceIndex)
                if (q) {
                    q.value = pkt.data
                    q.lastReport = control.millis()
                }
            }

            const serviceClass = this.serviceClassAt(serviceIndex)
            if (!serviceClass || serviceClass == 0xffffffff) {
                return
            }

            if (pkt.isEvent) {
                let ec = this._eventCounter
                if (ec === undefined) ec = pkt.eventCounter - 1
                ec++
                // how many packets ahead and behind current are we?
                const ahead = (pkt.eventCounter - ec) & CMD_EVENT_COUNTER_MASK
                const behind = (ec - pkt.eventCounter) & CMD_EVENT_COUNTER_MASK
                // ahead == behind == 0 is the usual case, otherwise
                // behind < 60 means this is an old event (or retransmission of something we already processed)
                // ahead < 5 means we missed at most 5 events, so we ignore this one and rely on retransmission
                // of the missed events, and then eventually the current event
                if (ahead > 0 && (behind < 60 || ahead < 5)) return
                // we got our event
                this.emit(EVENT, pkt)
                bus.emit(EVENT, pkt)
                this._eventCounter = pkt.eventCounter
            }

            if (!this.clients) return // some sort of race

            const client = this.clients.find(c =>
                c.broadcast
                    ? c.serviceClass == serviceClass
                    : c.serviceIndex == serviceIndex
            )
            if (client) {
                // log(`handle pkt at ${client.role} rep=${pkt.serviceCommand}`)
                client.handlePacketOuter(pkt)
            }
        }

        hasService(serviceClass: number) {
            const n = this.serviceClassLength
            for (let i = 0; i < n; ++i)
                if (this.serviceClassAt(i) === serviceClass) return true
            return false
        }

        clientAtServiceIndex(serviceIndex: number) {
            for (const c of this.clients) {
                if (c.device == this && c.serviceIndex == serviceIndex) return c
            }
            return null
        }

        sendCtrlCommand(cmd: number, payload: Buffer = null) {
            const pkt = !payload
                ? JDPacket.onlyHeader(cmd)
                : JDPacket.from(cmd, payload)
            pkt.serviceIndex = JD_SERVICE_INDEX_CTRL
            pkt._sendCmd(this)
        }

        _destroy() {
            log("destroy " + this.shortId)
            for (const c of this.clients) c._detach()
            this.clients = null
            this.emit(DEVICE_DISCONNECT)
            bus.emit(DEVICE_DISCONNECT, this)
        }
    }

    function doNothing() {}

    class ProxyServer extends Server {
        constructor() {
            super(SRV_PROXY)
        }
    }

    class BrainServer extends Server {
        constructor() {
            super(SRV_UNIQUE_BRAIN)
        }
    }

    export class ControlServer extends Server {
        constructor() {
            super(jacdac.SRV_CONTROL)
        }

        sendUptime() {
            const buf = Buffer.create(4)
            buf.setNumber(NumberFormat.UInt32LE, 0, control.micros())
            this.sendReport(JDPacket.from(CMD_GET_REG | ControlReg.Uptime, buf))
        }

        private handleFloodPing(pkt: JDPacket) {
            let [numResponses, counter, size] =
                pkt.jdunpack<[number, number, number]>("u32 u32 u8")
            const payload = Buffer.create(4 + size)
            for (let i = 0; i < size; ++i) payload[4 + i] = i
            const queuePing = () => {
                if (numResponses <= 0) {
                    control.internalOnEvent(
                        jacdac.__physId(),
                        EVT_TX_EMPTY,
                        doNothing
                    )
                } else {
                    payload.setNumber(NumberFormat.UInt32LE, 0, counter)
                    this.sendReport(
                        JDPacket.from(ControlCmd.FloodPing, payload)
                    )
                    numResponses--
                    counter++
                }
            }
            control.internalOnEvent(jacdac.__physId(), EVT_TX_EMPTY, queuePing)
            queuePing()
        }

        handlePacketOuter(pkt: JDPacket) {
            if (pkt.isRegGet) {
                switch (pkt.regCode) {
                    case ControlReg.ProductIdentifier: {
                        if (productIdentifier) {
                            this.sendReport(
                                JDPacket.from(
                                    pkt.serviceCommand,
                                    jdpack(
                                        jacdac.ControlRegPack.ProductIdentifier,
                                        [jacdac.productIdentifier]
                                    )
                                )
                            )
                            pkt.markHandled()
                        }
                        break
                    }
                    case ControlReg.Uptime: {
                        this.sendUptime()
                        pkt.markHandled()
                        break
                    }
                    case ControlReg.FirmwareVersion:
                        if (jacdac.firmwareVersion) {
                            this.sendReport(
                                JDPacket.from(
                                    pkt.serviceCommand,
                                    jdpack(
                                        jacdac.ControlRegPack.FirmwareVersion,
                                        [jacdac.firmwareVersion]
                                    )
                                )
                            )
                            pkt.markHandled()
                        }
                        break
                    case ControlReg.DeviceDescription: {
                        this.sendReport(
                            JDPacket.from(
                                pkt.serviceCommand,
                                jdpack(
                                    jacdac.ControlRegPack.DeviceDescription,
                                    [
                                        jacdac.deviceDescription ||
                                            control.programName(),
                                    ]
                                )
                            )
                        )
                        pkt.markHandled()
                        break
                    }
                    default:
                        pkt.possiblyNotImplemented()
                        break
                }
            } else {
                switch (pkt.serviceCommand) {
                    case SystemCmd.Announce:
                        bus.queueAnnounce()
                        pkt.markHandled()
                        break
                    case ControlCmd.Identify:
                        this.log("identify")
                        bus.emit(IDENTIFY)
                        bus.emit(STATUS_EVENT, StatusEvent.Identify)
                        pkt.markHandled()
                        break
                    case ControlCmd.Reset:
                        this.log("reset requested")
                        control.reset()
                        break
                    case ControlCmd.FloodPing:
                        this.log("flood")
                        this.handleFloodPing(pkt)
                        pkt.markHandled()
                        break
                    case ControlCmd.Proxy:
                        if (!jacdac.bus.proxyMode) resetToProxy()
                        pkt.markHandled()
                        break
                    default:
                        pkt.possiblyNotImplemented()
                        break
                }
            }
        }
    }

    function serviceMatches(dev: Device, serv: Buffer) {
        const ds = dev.services
        if (!ds || ds.length != serv.length) return false
        for (let i = 4; i < serv.length; ++i) if (ds[i] != serv[i]) return false
        return true
    }

    const EVT_DATA_READY = 1
    const EVT_QUEUE_ANNOUNCE = 100
    const EVT_TX_EMPTY = 101

    const CFG_PIN_JDPWR_OVERLOAD_LED = 1103
    const CFG_PIN_JDPWR_ENABLE = 1104
    const CFG_PIN_JDPWR_FAULT = 1105

    const SRV_UNIQUE_BRAIN = 0x103c4ee5

    function setPinByCfg(cfg: number, val: boolean) {
        const pin = pins.pinByCfg(cfg)
        if (!pin) return
        if (control.getConfigValue(cfg, 0) & DAL.CFG_PIN_CONFIG_ACTIVE_LO)
            val = !val
        pin.digitalWrite(val)
    }

    function enablePower(enabled = true) {
        // EN active-lo, AP2552A, AP22652A, TPS2552-1
        // EN active-hi, AP2553A, AP22653A, TPS2553-1
        setPinByCfg(CFG_PIN_JDPWR_ENABLE, enabled)
    }

    function enablePowerFaultPin() {
        const faultpin = pins.pinByCfg(CFG_PIN_JDPWR_FAULT)
        if (faultpin) {
            log(`enabling power fault pin`)
            // FAULT is always assumed to be active-low; no external pull-up is needed
            // (and you should never pull it up to +5V!)
            faultpin.setPull(PinPullMode.PullUp)
            faultpin.digitalRead()
            jacdac.bus.on(SELF_ANNOUNCE, () => {
                if (faultpin.digitalRead() == false) {
                    control.runInParallel(() => {
                        control.dmesg("jacdac power overload; restarting power")
                        enablePower(false)
                        setPinByCfg(CFG_PIN_JDPWR_OVERLOAD_LED, true)
                        pause(200) // wait some time for the LED to be noticed; also there's some de-glitch time on EN
                        setPinByCfg(CFG_PIN_JDPWR_OVERLOAD_LED, false)
                        enablePower(true)
                    })
                }
            })
        }
    }

    function enableIdentityLED() {
        if (pins.pinByCfg(DAL.CFG_PIN_LED)) {
            log(`enabling identity LED`)
            bus.on(IDENTIFY, () =>
                control.runInBackground(function () {
                    for (let i = 0; i < 7; ++i) {
                        setPinByCfg(DAL.CFG_PIN_LED, true)
                        pause(50)
                        setPinByCfg(DAL.CFG_PIN_LED, false)
                        pause(150)
                    }
                })
            )
        }
    }

    export function isSimulator() {
        const sim = control.deviceDalVersion() == "sim"
        return sim
    }

    function proxyLoop() {
        jacdac.bus.on(PACKET_PROCESS, () => {
            jacdac.bus.emit(STATUS_EVENT, StatusEvent.ProxyPacketReceived)
        })

        // start animation
        jacdac.bus.emit(STATUS_EVENT, StatusEvent.ProxyStarted)

        let statusPhase = 0
        const sim = isSimulator()
        // don't allow main to run until next reset
        while (true) {
            statusPhase++

            let phase = statusPhase
            let r = sim ? 0xf000 : 0x1600
            let g = sim ? 0xf000 : 0x0400
            let b = 0

            phase = Math.abs((phase & 31) - 16)
            if (phase > 15) phase = 15
            r = (r * phase) >> 4
            g = (g * phase) >> 4
            b = (b * phase) >> 4

            setLed(r, g, b)

            pause(100)
        }
    }

    /*
    Usage: in your library top-level code add:
    if (jacdac.checkProxy()) {
        // do special proxy stuff
        jacdac.proxyFinalize()
    }
    */

    export function checkProxy() {
        settings.writeString(JACDAC_PROXY_SETTING_LATE, "1")
        return jacdac.bus.proxyMode
    }

    export function proxyFinalize() {
        if (!jacdac.bus.proxyMode) panic("invalid proxy finalize")
        control.dmesg("jacdac: dongle finalize")
        proxyLoop()
    }

    export const JACDAC_PROXY_SETTING = "__jacdac_proxy"
    export const JACDAC_PROXY_SETTING_LATE = "__jacdac_proxy_late"
    function startProxy() {
        const isLate = settings.exists(JACDAC_PROXY_SETTING_LATE)
        if (isLate) settings.remove(JACDAC_PROXY_SETTING_LATE)

        // check if a proxy restart was requested
        if (!settings.exists(JACDAC_PROXY_SETTING)) return

        control.dmesg(`jacdac: start dongle (${isLate ? "late" : "early"})`)
        // clear proxy flag
        settings.remove(JACDAC_PROXY_SETTING)

        start({
            disableLogger: false,
            disableRoleManager: true,
            noWait: true,
            proxyMode: true,
        })

        if (!isLate) proxyLoop()
    }

    function resetToProxy() {
        control.dmesg("jacdac: reset in dongle")
        settings.writeNumber(JACDAC_PROXY_SETTING, 1)
        control.reset()
    }

    function consumePackets() {
        let buf: Buffer
        while (null != (buf = jacdac.__physGetPacket())) {
            const pkt = JDPacket.fromBinary(buf)
            pkt.timestamp = jacdac.__physGetTimestamp()
            jacdac.bus.processPacket(pkt)
        }
    }

    /**
     * Starts the Jacdac service
     */
    export function start(options?: {
        disableLogger?: boolean
        disableRoleManager?: boolean
        noWait?: boolean
        disableBrain?: boolean
        proxyMode?: boolean
    }): void {
        if (jacdac.bus.running) return // already started

        if (!productIdentifier) {
            const id = control.getConfigValue(DAL.CFG_BOOTLOADER_BOARD_ID, 0)
            if (id) productIdentifier = (id & 0x0fffffff) | 0x30000000
        }

        // make sure we prevent re-entering this function (potentially even log() can call us)
        bus.start()

        log("jacdac starting")
        options = options || {}
        if (options.disableBrain === undefined)
            options.disableBrain = !!options.disableRoleManager

        enablePower(true)
        enablePowerFaultPin()
        enableIdentityLED()

        if (!options.disableBrain) new BrainServer().start()
        if (options.proxyMode) {
            new ProxyServer().start()
            jacdac.bus.proxyMode = true
        }

        if (!options.disableLogger) {
            console.addListener(function (pri, msg) {
                if (msg[0] != ":") jacdac.loggerServer.add(pri as number, msg)
            })
            jacdac.loggerServer.start()
        }
        if (!options.disableRoleManager) {
            roleManagerServer.start()
        }

        //jacdac.__physStart();
        control.internalOnEvent(
            jacdac.__physId(),
            EVT_DATA_READY,
            consumePackets
        )
        control.internalOnEvent(jacdac.__physId(), EVT_QUEUE_ANNOUNCE, () =>
            jacdac.bus.queueAnnounce()
        )

        // and we're done
        log("started")

        if (!options.noWait && roleManagerServer) {
            log("waiting for devices to enumerate...")
            pause(1000)
            if (roleManagerServer.running) roleManagerServer.bindRoles()
        }
    }

    export enum LedChannel {
        Red = 0,
        Green = 1,
        Blue = 2,
    }

    export function setLedChannel(ch: LedChannel, val: number) {
        _setLedChannel(ch, val)
    }

    export function setLed(r: number, g: number, b: number) {
        _setLedChannel(0, r)
        _setLedChannel(1, g)
        _setLedChannel(2, b)
    }

    /**
     * Starts device as a server
     */
    export function startServer(options?: { logger?: boolean }) {
        options = options || {}
        start({
            disableLogger: !options.logger,
            disableRoleManager: true,
            noWait: true,
        })

        let lastClient = control.millis()
        bus.on(PACKET_PROCESS, (pkt: JDPacket) => {
            if (pkt.serviceCommand == ControlCmd.Services && pkt.isReport) {
                if (
                    pkt.data.getNumber(NumberFormat.UInt16LE, 0) &
                    ControlAnnounceFlags.IsClient
                ) {
                    lastClient = control.millis()
                    setLedChannel(LedChannel.Green, 0xffff)
                    control.waitMicros(50)
                    setLedChannel(LedChannel.Green, 0x0000)
                }
            }
        })

        let disconnectCnt = 0
        let diconnected = false
        bus.on(SELF_ANNOUNCE, () => {
            disconnectCnt++
            if (control.millis() - lastClient > 1500) {
                setLedChannel(
                    LedChannel.Red,
                    (disconnectCnt & 2) == 0 ? 0x0000 : 0xffff
                )
                diconnected = true
            } else {
                if (diconnected) {
                    setLedChannel(LedChannel.Red, 0x0000)
                    diconnected = false
                }
            }
        })
    }

    export interface SelfServersOptions {
        /**
         * Force starting servers in simulation mode
         */
        simulation?: boolean
    }

    /**
     * Starts a set of servers running on the self device
     * @param servers
     */
    export function startSelfServers(
        createServers: () => Server[],
        options?: SelfServersOptions
    ) {
        control.dmesg(`jacdac: register self servers`)
        const simulation = options && !!options.simulation
        if (simulation || !jacdac.isSimulator()) {
            control.dmesg(`jacdac: start self servers`)
            const servers = createServers()
            for (const server of servers) server.start()
        }
        if (jacdac.checkProxy()) jacdac.proxyFinalize()
    }

    // make sure physical is started deterministically
    // on micro:bit it allocates a buffer that should stay in the same place in memory
    jacdac.__physStart()

    setLed(0, 0, 0)

    // platform setup
    if (onPlatformStart) onPlatformStart()

    // check for proxy mode
    startProxy()

    // start after main
    control.runInParallel(() => start())
}
