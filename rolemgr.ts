namespace jacdac {
    const roleSettingPrefix = "#jdr:"

    export class ServiceDescriptor {
        constructor(
            public device: Device,
            public serviceNumber: number
        ) { }

        serialize() {
            return jdpack("b[8] u8", [Buffer.fromHex(this.device.deviceId), this.serviceNumber])
        }
    }

    export class RoleBinding {
        serviceClass: number
        boundTo: ServiceDescriptor
        candidates: ServiceDescriptor[]

        constructor(
            public parent: RoleManagerClient,
            public role: string
        ) { }


        host() {
            const slashIdx = this.role.indexOf("/")
            if (slashIdx < 0) return this.role
            else return this.role.slice(0, slashIdx - 1)
        }

        isCandidate(ldev: Device) {
            return this.serviceClasses.every(s => ldev.hasService(s))
        }

        select(dev: ServiceDescriptor) {
            if (dev == this.boundTo)
                return
            if (this.parent == null) {
                setDevName(dev.deviceId, this.role)
            } else {
                if (this.boundTo)
                    this.parent.setName(this.boundTo, "")
                this.parent.setName(dev, this.role)
            }
            this.boundTo = dev
        }
    }

    class HostBindings {
        bindings: RoleBinding[] = []
        constructor(
            public host: string
        ) { }

        isCandidate(dev: Device) {
            // multi-set inclusion test; assumes this.bindings is sorted by serviceClass
            let prevServ = 0
            let prevIdx = 4
            const sbuf = dev.services
            for (const binding of this.bindings) {
                // new service? go back to the beginning
                if (prevServ != binding.serviceClass)
                    prevIdx = 4
                prevServ = binding.serviceClass
                while (prevIdx < sbuf.length) {
                    if (sbuf.getNumber(NumberFormat.UInt32LE, prevIdx) == prevServ)
                        break
                    prevIdx += 4
                }
                if (prevIdx >= sbuf.length)
                    return false
                prevIdx += 4
            }
            return true
        }
    }

    function recomputeCandidates(bindings: RoleBinding[]) {
        const hosts: HostBindings[] = []

        for (const b of bindings) {
            const hn = b.host()
            let h = hosts.find(h => h.host == hn)
            if (!h) {
                h = new HostBindings(hn)
                hosts.push(h)
            }
            h.bindings.push(b)
        }

        for (const h of hosts) {
            h.bindings.sort((a, b) => a.serviceClass - b.serviceClass)
            const candidateDevices = _devices.filter(d => h.isCandidate(d))
            for (const binding of h.bindings) {
                binding.candidates = []
                for (const dev of candidateDevices) {
                    const sbuf = dev.services
                    for (let i = 4; i <= sbuf.length; i += 4) {
                        if (sbuf.getNumber(NumberFormat.UInt32LE, i) == binding.serviceClass)
                            binding.candidates.push(new ServiceDescriptor(dev, i >> 2))
                    }
                }
            }
        }
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

        const requested: RoleBinding[] = []

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

        requested.sort((a, b) => a.role.compare(b.role))

        let numSel = 0
        recomputeCandidates(requested)
        for (const r of requested) {
            if (r.boundTo)
                continue
            const cand = r.candidates.filter(nameFree)
            log(`role: ${r.role}, ${cand.length} candidate(s)`)
            if (cand.length > 0) {
                // take ones without existing names first
                cand.sort((a, b) => (a.name || "").compare(b.name || "") || a.deviceId.compare(b.deviceId))
                log(`setting to ${cand[0].toString()}`)
                r.select(cand[0])
                numSel++
            }
        }
    }

    function clearAllNames() {
        settings.list(roleSettingPrefix).forEach(settings.remove)
    }

    function setDevName(name: string, desc: ServiceDescriptor) {
        const key = roleSettingPrefix + name
        if (!desc)
            settings.remove(key)
        else
            settings.writeBuffer(key, desc.serialize())
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
                        let name = settings.readBuffer(roleSettingPrefix + packet.data.toHex())
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
                    OutPipe.respondForEach(packet, settings.list(roleSettingPrefix), k =>
                        Buffer.fromHex(k.slice(roleSettingPrefix.length))
                            .concat(settings.readBuffer(k)))
                    break
                case RoleManagerCmd.ListRequiredRoles:
                    OutPipe.respondForEach(packet, _allClients, packName)
                    break
                case RoleManagerCmd.ClearAllRoles:
                    clearAllNames()
                    this.sendChangeEvent();
                    break
            }

            function packName(c: Client) {
                const devid = c.device ? Buffer.fromHex(c.device.deviceId) : Buffer.create(8)
                return jdpack("b[8] u32 s", [devid, c.serviceClass, c.requiredDeviceName || ""])
            }
        }
    }

    //% fixedInstance whenUsed block="role manager"
    export const roleManagerHost = new RoleManagerHost()

    function addRequested(devs: RoleBinding[], name: string, service_class: number,
        parent: RoleManagerClient) {
        let r = devs.find(d => d.role == name)
        if (!r)
            devs.push(r = new RoleBinding(parent, name))
        r.serviceClasses.push(service_class)
        return r
    }


    export class RoleManagerClient extends Client {
        public remoteRequestedDevices: RoleBinding[] = []

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
            const devs: RoleBinding[] = []

            inp.readList(buf => {
                const [devidbuf, service_class, name] = jdunpack<[Buffer, number, string]>(buf, "b[8] u32 s")
                if (!name)
                    return
                const devid = devidbuf.toHex();
                const r = addRequested(devs, name, service_class, this)
                const dev = localDevs.find(d => d.deviceId == devid)
                if (dev)
                    r.boundTo = dev
            })

            devs.sort((a, b) => a.role.compare(b.role))

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