namespace jacdac {

    export const SRV_DEVICE_NAME_SERVICE = 0x119c3ad1
    export enum DNSCmd {
        /** Argument: device_id uint64_t. Get the name corresponding to given device identifer. Returns empty string if unset. */
        GetName = 0x80,

        /** Set name. Can set to empty to remove name binding. */
        SetName = 0x81,

        /** No args. Remove all name bindings. */
        ClearAllNames = 0x84,

        /** Argument: stored_names pipe (bytes). Return all names stored internally. */
        ListStoredNames = 0x82,

        /** Argument: required_names pipe (bytes). List all names required by the current program. `device_id` is `0` if name is unbound. */
        ListRequiredNames = 0x83,
    }

    export function autoBind() {
        function log(msg: string) {
            control.dmesg("autobind: " + msg)
        }

        function pending() {
            return _allClients.filter(c => !!c.requiredDeviceName && !c.isConnected())
        }

        pauseUntil(() => pending().length == 0, 1000)

        const plen = pending().length
        log(`pending: ${plen}`)
        if (plen == 0) return

        pause(1000) // wait for everyone to enumerate

        const requested: RemoteRequestedDevice[] = []

        for (const client of _allClients) {
            if (client.requiredDeviceName) {
                const r = addRequested(requested, client.requiredDeviceName, client.serviceClass, null)
                r.boundTo = client.device
            }
        }

        if (!requested.length)
            return

        function nameFree(d: Device) {
            return !d.name || requested.every(r => r.boundTo != d)
        }

        requested.sort((a, b) => a.name.compare(b.name))

        let numSel = 0
        recomputeCandidates(requested)
        for (const r of requested) {
            if (r.boundTo)
                continue
            const cand = r.candidates.filter(nameFree)
            log(`name: ${r.name}, ${cand.length} candidate(s)`)
            if (cand.length > 0) {
                // take ones without existing names first
                cand.sort((a, b) => (a.name || "").compare(b.name || "") || a.deviceId.compare(b.deviceId))
                log(`setting to ${cand[0].toString()}`)
                r.select(cand[0])
                numSel++
            }
        }
    }

    export function clearAllNames() {
        settings.list(devNameSettingPrefix).forEach(settings.remove)
    }

    function setDevName(id: string, name: string) {
        const devid = devNameSettingPrefix + id
        if (name.length == 0)
            settings.remove(devid)
        else
            settings.writeString(devid, name)
        Device.clearNameCache()
    }

    export class DeviceNameService extends Host {
        constructor() {
            super("dns", jd_class.DEVICE_NAME_SERVICE)
        }

        public handlePacket(packet: JDPacket) {
            switch (packet.service_command) {
                case DNSCmd.GetName:
                    if (packet.data.length == 8) {
                        let name = settings.readBuffer(devNameSettingPrefix + packet.data.toHex())
                        if (!name) name = Buffer.create(0)
                        this.sendReport(JDPacket.from(DNSCmd.GetName, packet.data.concat(name)))
                    }
                    break
                case DNSCmd.SetName:
                    if (packet.data.length >= 8)
                        setDevName(packet.data.slice(0, 8).toHex(), packet.data.slice(8).toString())
                    break
                case DNSCmd.ListStoredNames:
                    OutPipe.respondForEach(packet, settings.list(devNameSettingPrefix), k =>
                        settings.readBuffer(k).concat(Buffer.fromHex(k.slice(devNameSettingPrefix.length))))
                    break
                case DNSCmd.ListRequiredNames:
                    const attachedClients = _allClients.filter(c => !!c.requiredDeviceName)
                    OutPipe.respondForEach(packet, attachedClients, packName)
                    break
                case DNSCmd.ClearAllNames:
                    clearAllNames()
                    break
            }

            function packName(c: Client) {
                const devid = c.device ? Buffer.fromHex(c.device.deviceId) : Buffer.create(8)
                const name = Buffer.fromUTF8(c.requiredDeviceName)
                const devdesc = Buffer.pack("I", [c.serviceClass])
                return devid.concat(devdesc).concat(name)
            }
        }
    }

    //% fixedInstance whenUsed block="device name service"
    export const deviceNameService = new DeviceNameService()

    export class RemoteRequestedDevice {
        services: number[] = [];
        boundTo: Device;
        candidates: Device[] = [];

        constructor(
            public parent: DeviceNameClient,
            public name: string
        ) { }

        isCandidate(ldev: Device) {
            return this.services.every(s => ldev.hasService(s))
        }

        select(dev: Device) {
            if (dev == this.boundTo)
                return
            if (this.parent == null) {
                setDevName(dev.deviceId, this.name)
            } else {
                if (this.boundTo)
                    this.parent.setName(this.boundTo, "")
                this.parent.setName(dev, this.name)
            }
            this.boundTo = dev
        }
    }

    function recomputeCandidates(remotes: RemoteRequestedDevice[]) {
        const localDevs = devices()
        for (let dev of remotes)
            dev.candidates = localDevs.filter(ldev => dev.isCandidate(ldev))
    }

    function addRequested(devs: RemoteRequestedDevice[], name: string, service_class: number, parent: DeviceNameClient) {
        let r = devs.find(d => d.name == name)
        if (!r)
            devs.push(r = new RemoteRequestedDevice(parent, name))
        r.services.push(service_class)
        return r
    }


    export class DeviceNameClient extends Client {
        public remoteRequestedDevices: RemoteRequestedDevice[] = []

        constructor(requiredDevice: string = null) {
            super("dnsc", jd_class.DEVICE_NAME_SERVICE, requiredDevice)

            onNewDevice(() => {
                recomputeCandidates(this.remoteRequestedDevices)
            })

            onAnnounce(() => {
                if (this.isConnected())
                    control.runInParallel(() => this.scanCore())
            })
        }

        private scanCore() {
            const inp = new InPipe()
            this.sendCommand(inp.openCommand(DNSCmd.ListRequiredNames))

            const localDevs = devices()
            const devs: RemoteRequestedDevice[] = []

            inp.readList(buf => {
                const devid = buf.slice(0, 8).toHex()
                const [service_class] = buf.unpack("I", 8)
                const name = buf.slice(12).toString()
                const r = addRequested(devs, name, service_class, this)
                const dev = localDevs.find(d => d.deviceId == devid)
                if (dev)
                    r.boundTo = dev
            })

            devs.sort((a, b) => a.name.compare(b.name))

            this.remoteRequestedDevices = devs
            recomputeCandidates(this.remoteRequestedDevices)
        }

        scan() {
            pauseUntil(() => this.isConnected())
            this.scanCore()
        }

        clearNames() {
            this.sendCommandWithAck(JDPacket.onlyHeader(DNSCmd.ClearAllNames))
        }

        setName(dev: Device, name: string) {
            this.sendCommandWithAck(JDPacket.from(DNSCmd.SetName,
                Buffer.fromHex(dev.deviceId).concat(Buffer.fromUTF8(name))))
        }

        handlePacket(pkt: JDPacket) {
        }
    }
}