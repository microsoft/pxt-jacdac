namespace jacdac {
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

    export class RoleManagerHost extends Host {
        constructor() {
            super("rolemgr", SRV_ROLE_MANAGER)
        }

        public handlePacket(packet: JDPacket) {
            switch (packet.service_command) {
                case RoleManagerCmd.GetRole:
                    if (packet.data.length == 8) {
                        let name = settings.readBuffer(devNameSettingPrefix + packet.data.toHex())
                        if (!name) name = Buffer.create(0)
                        this.sendReport(JDPacket.from(RoleManagerCmd.GetRole, packet.data.concat(name)))
                    }
                    break
                case RoleManagerCmd.SetRole:
                    if (packet.data.length >= 8) {
                        setDevName(packet.data.slice(0, 8).toHex(), packet.data.slice(8).toString())
                        this.sendChangeEvent();
                    }
                    break
                case RoleManagerCmd.ListStoredRoles:
                    OutPipe.respondForEach(packet, settings.list(devNameSettingPrefix), k =>
                        Buffer.fromHex(k.slice(devNameSettingPrefix.length))
                            .concat(settings.readBuffer(k)))
                    break
                case RoleManagerCmd.ListRequiredRoles:
                    const namedClients = _allClients.filter(c => !!c.requiredDeviceName)
                    OutPipe.respondForEach(packet, namedClients, packName)
                    break
                case RoleManagerCmd.ClearAllRoles:
                    clearAllNames()
                    this.sendChangeEvent();
                    break
            }

            function packName(c: Client) {
                const devid = c.device ? Buffer.fromHex(c.device.deviceId) : Buffer.create(8)
                return jdpack("b[8] u32 s", [devid, c.serviceClass, c.requiredDeviceName])
            }
        }
    }

    //% fixedInstance whenUsed
    export const roleManagerHost = new RoleManagerHost()

    export class RemoteRequestedDevice {
        services: number[] = [];
        boundTo: Device;
        candidates: Device[] = [];

        constructor(
            public parent: RoleManagerClient,
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

    function addRequested(devs: RemoteRequestedDevice[], name: string, service_class: number, 
        parent: RoleManagerClient) {
        let r = devs.find(d => d.name == name)
        if (!r)
            devs.push(r = new RemoteRequestedDevice(parent, name))
        r.services.push(service_class)
        return r
    }


    export class RoleManagerClient extends Client {
        public remoteRequestedDevices: RemoteRequestedDevice[] = []

        constructor(requiredDevice: string = null) {
            super("rolemgrc", SRV_ROLE_MANAGER, requiredDevice)

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
            this.sendCommand(inp.openCommand(RoleManagerCmd.ListRequiredRoles))

            const localDevs = devices()
            const devs: RemoteRequestedDevice[] = []

            inp.readList(buf => {
                const [devidbuf, service_class, name] = jdunpack<[Buffer, number, string]>(buf, "b[8] u32 s")
                const devid = devidbuf.toHex();
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
            this.sendCommandWithAck(JDPacket.onlyHeader(RoleManagerCmd.ClearAllRoles))
        }

        setName(dev: Device, name: string) {
            this.sendCommandWithAck(JDPacket.from(RoleManagerCmd.SetRole,
                Buffer.fromHex(dev.deviceId).concat(Buffer.fromUTF8(name))))
        }

        handlePacket(pkt: JDPacket) {
        }
    }
}