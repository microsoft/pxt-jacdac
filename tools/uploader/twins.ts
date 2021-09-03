namespace jacdac.twins {
    const MAX_READINGS_PER_PACKET = 100 // TODO
    const READINGS_SEND_INTERVAL = 5000

    let twins: DeviceTwin[]
    let exclusions: string[]
    let currTwin: Json
    let pendingReadings = 0
    let lastReadingsSent: number

    const streamingIntervalSpec: ServiceTwinRegisterSpec = {
        name: "streaming_interval",
        code: SystemReg.StreamingInterval,
        flags: 0,
        packf: "u32",
    }

    const enum ServiceTwinRegisterFlag {
        Const = 0x0001,
        Volatile = 0x0002,
    }

    interface ServiceTwinRegisterSpec {
        code: number // code <= 255 => ro, otherwise rw
        name: string
        flags: ServiceTwinRegisterFlag
        packf: string
        fields?: string[]
    }

    interface ServiceTwinSpec {
        serviceClass: number
        name: string
        registers: ServiceTwinRegisterSpec[]
    }

    class ServiceTwin {
        id: string
        enabled: boolean
        readings: number[] = []
        timestamps: number[] = []

        constructor(
            public parent: DeviceTwin,
            public serviceIdx: number,
            public spec: ServiceTwinSpec
        ) {
            this.id = spec.name
            if (this.spec.registers.some(r => r.code == SystemReg.Reading)) {
                this.spec.registers.push(streamingIntervalSpec)
                this.enabled = false
            }
        }

        extract(now: number) {
            if (this.readings.length == 0) return null
            const readings = this.readings
            const timedelta = this.timestamps
            this.readings = []
            this.timestamps = []
            for (let i = 0; i < timedelta.length; ++i) timedelta[i] -= now
            return {
                readings: readings,
                timedelta: timedelta,
            }
        }

        tick() {
            if (this.enabled) {
                const payload = JDPacket.jdpacked(
                    CMD_SET_REG | SystemReg.StreamingSamples,
                    "u8",
                    [254]
                )
                payload._sendCmd(this.parent.device)
            }
        }

        applyTwinUpdate(upd: Json) {
            console.log("applying update: " + JSON.stringify(upd))
            const regs = upd["registers"]
            if (regs["streaming"] !== undefined)
                this.enabled = !!regs["streaming"]
            for (const k of Object.keys(regs)) {
                const rspec = this.spec.registers.find(r => r.name == k)
                const v = regs[k]
                if (rspec && typeof v == "number" && rspec.code < 0x100) {
                    console.log(`set ${this.id}.${rspec.name} to ${v}`)
                    const payload = JDPacket.jdpacked(
                        CMD_SET_REG | rspec.code,
                        rspec.packf,
                        [v]
                    )
                    payload.serviceIndex = this.serviceIdx
                    payload._sendCmd(this.parent.device)
                }
            }
        }

        computeTwin(forReal: boolean) {
            const registers: any = {}
            const res = {
                registers,
            }
            if (forReal && this.enabled !== undefined) {
                registers["streaming"] = this.enabled
            }
            const d = this.parent.device
            for (const r of this.spec.registers) {
                if (exclusions.indexOf(this.spec.name + "." + r.name) >= 0)
                    continue
                if (r.code == SystemReg.Reading) continue

                const buf = d.query(
                    r.code,
                    r.flags & ServiceTwinRegisterFlag.Const ? null : 500,
                    this.serviceIdx
                )
                if (forReal && buf) {
                    const vals = jdunpack(buf, r.packf)
                    let rv: any
                    if (r.fields) {
                        rv = {}
                        let i = 0
                        for (const f of r.fields) {
                            rv[f] = vals[i++]
                        }
                    } else {
                        rv = vals[0]
                    }
                    registers[r.name] = rv
                }
            }

            return res
        }

        process(pkt: JDPacket) {
            if (
                this.enabled &&
                pkt.isRegGet &&
                pkt.regCode == SystemReg.Reading
            ) {
                const rspec = this.spec.registers.find(
                    r => r.code == SystemReg.Reading
                )
                const v = jdunpack(pkt.data, rspec.packf)[0]
                this.readings.push(v)
                this.timestamps.push(control.millis())
                pendingReadings++
            }
        }
    }

    function toHexNum(n: number) {
        if (n == 0) return "0"
        const buf = control.createBuffer(4)
        buf.setNumber(NumberFormat.UInt32BE, 0, n)
        return buf.toHex()
    }

    function getServiceTwinSpec(serviceClass: number): ServiceTwinSpec {
        const key = "st-" + serviceClass
        const cached = settings.readString(key)
        if (cached) return JSON.parse(cached)

        let json = net.getJSON(
            `https://microsoft.github.io/jacdac-docs/services/twin/x${toHexNum(
                serviceClass
            )}.json`
        )
        if (!json) {
            console.log("failed to get serv: " + serviceClass)
            json = null
        }
        settings.writeString(key, JSON.stringify(json))
        return json
    }

    class DeviceTwin {
        id: string
        services: ServiceTwin[] = []
        constructor(public device: jacdac.Device) {
            this.device.on(jacdac.DEVICE_DISCONNECT, () => {
                twins.removeElement(this)
            })
            this.id = this.device.shortId + "_" + this.device.deviceId
            twins.push(this)
            this.device.on(jacdac.PACKET_RECEIVE, (pkt: JDPacket) => {
                const srv = this.services[pkt.serviceIndex]
                if (srv) srv.process(pkt)
            })

            const d = this.device
            for (let servIdx = 0; servIdx < d.serviceClassLength; ++servIdx) {
                const cl = d.serviceClassAt(servIdx)
                const spec = getServiceTwinSpec(cl)
                if (!spec) continue

                const newServ = new ServiceTwin(this, servIdx, spec)
                if (this.services.find(s => s.id == newServ.id)) {
                    let i = 2
                    while (
                        this.services.find(s => s.id == newServ.id + "_" + i)
                    )
                        i++
                    newServ.id += "_" + i
                }

                this.services[servIdx] = newServ
            }
        }

        applyTwinUpdate(upd: Json) {
            for (const s of this.services)
                if (s && upd[s.id]) s.applyTwinUpdate(upd[s.id])
        }

        tick() {
            for (const serv of this.services) {
                if (serv) serv.tick()
            }
        }

        computeReadings(now: number, target: Json) {
            const rd: Json = {}
            for (const serv of this.services) {
                if (serv) {
                    const ex = serv.extract(now)
                    if (ex) rd[serv.id] = ex
                }
            }
            if (Object.keys(rd).length > 0) {
                target[this.id] = rd
            }
        }

        computeTwin(forReal = true) {
            const twin: Json = {}
            for (const serv of this.services) {
                if (serv) {
                    const res = serv.computeTwin(forReal)
                    if (forReal) twin[serv.id] = res
                }
            }
            return forReal ? twin : undefined
        }
    }

    function rescanDevices() {
        for (const d of jacdac.bus.devices) {
            if (!twins.some(t => t.device == d)) new DeviceTwin(d)
        }
        for (const t of twins) t.tick()
        for (let i = 0; i < 2; ++i) {
            for (const t of twins) {
                t.computeTwin(false)
            }
            pause(100)
        }
        const fullTwin: Json = {}
        for (const t of twins) {
            fullTwin[t.id] = t.computeTwin()
        }
        if (!currTwin) {
            console.log(JSON.stringify(fullTwin, null, 1))
            currTwin = fullTwin
            const cloudTwin = azureiot.getTwin()
            const patch = azureiot.computePatch(cloudTwin["reported"], currTwin)
            azureiot.patchTwin(patch)
            connectTwinUpdate()
        } else {
            const patch = azureiot.computePatch(currTwin, fullTwin)
            if (Object.keys(patch).length > 0) {
                console.log(JSON.stringify(patch, null, 1))
                azureiot.patchTwin(patch)
            }
            currTwin = fullTwin
        }

        if (
            pendingReadings > MAX_READINGS_PER_PACKET ||
            (pendingReadings > 0 &&
                control.millis() - lastReadingsSent > READINGS_SEND_INTERVAL)
        ) {
            lastReadingsSent = control.millis()
            pendingReadings = 0
            const readings = {}
            for (const t of twins) {
                t.computeReadings(lastReadingsSent, readings)
            }
            if (Object.keys(readings).length > 0) {
                console.log(JSON.stringify(readings, null, 1))
                azureiot.publishMessageJSON({
                    readings: readings,
                    deviceTime: lastReadingsSent
                })
            }
        }
    }

    function applyTwinUpdate(upd: Json) {
        for (const t of twins) {
            if (upd[t.id]) t.applyTwinUpdate(upd[t.id])
        }
    }

    type Json = any

    function connectTwinUpdate() {
        // TODO apply twin updates when new device is connected
        control.runInBackground(() => {
            pause(100)
            azureiot.onTwinUpdate((twin, patch) => {
                console.log(`apply: ${JSON.stringify(patch, null, 1)}`)
                applyTwinUpdate(patch)
            })
        })
    }

    export function init() {
        if (twins) return
        twins = []

        exclusions = []
        exclusions.push("control.uptime")
        exclusions.push("control.mcu_temperature")

        lastReadingsSent = control.millis()

        azureiot.connect()

        setInterval(rescanDevices, 1000)
    }
}
