    /*
Auto-assignment

Run every second, if there are pending clients and there have been new announce.
First run, after a second since seeing first announce packet.

Make sure to add register to rolemgr to disable this.
*/


namespace jacdac._rolemgr {
    const roleSettingPrefix = "#jdr:"

    function clearAllNames() {
        settings.list(roleSettingPrefix).forEach(settings.remove)
    }

    export function getRole(devid: string, servIdx: number) {
        return settings.readString(roleSettingPrefix + devid + ":" + servIdx)
    }

    export function setRole(devid: string, servIdx: number, role: string) {
        const key = roleSettingPrefix + devid + ":" + servIdx
        if (role)
            settings.writeString(key, role)
        else
            settings.remove(key)
        Device.clearNameCache()
    }

    class RoleBinding {
        serviceClass: number
        boundToDev: Device
        boundToServiceIdx: number

        constructor(
            public role: string
        ) { }

        host() {
            const slashIdx = this.role.indexOf("/")
            if (slashIdx < 0) return this.role
            else return this.role.slice(0, slashIdx - 1)
        }

        select(dev: Device, serviceIdx: number) {
            if (dev == this.boundToDev && serviceIdx == this.boundToServiceIdx)
                return
            if (this.boundToDev)
                setRole(this.boundToDev.deviceId, this.boundToServiceIdx, null)

            setRole(dev.deviceId, serviceIdx, this.role)
            this.boundToDev = dev
            this.boundToServiceIdx = serviceIdx
        }
    }

    class HostBindings {
        bindings: RoleBinding[] = []
        constructor(
            public host: string
        ) { }

        get fullyBound() {
            return this.bindings.every(b => b.boundToDev != null)
        }

        // candidate devices are ordered by [numBound, numPossible, device_id]
        // where numBound is number of clients already bound to this device
        // and numPossible is number of clients that can possibly be additionally bound
        scoreFor(dev: Device, select = false) {
            let numBound = 0
            let numPossible = 0
            const missing: RoleBinding[] = []
            for (const b of this.bindings) {
                if (b.boundToDev) {
                    if (b.boundToDev == dev)
                        numBound++
                } else {
                    missing.push(b)
                }
            }

            const sbuf = dev.services
            for (let idx = 4; idx < sbuf.length; idx += 4) {
                const serviceIndex = idx >> 2
                // if service is already bound to some client, move on
                if (dev.clientAtServiceIndex(serviceIndex) != null)
                    continue

                const serviceClass = sbuf.getNumber(NumberFormat.UInt32LE, idx)
                for (let i = 0; i < missing.length; ++i) {
                    if (missing[i].serviceClass == serviceClass) {
                        // we've got a match!
                        numPossible++ // this can be assigned
                        // in fact, assign if requested
                        if (select) {
                            control.dmesg("autobind: " + missing[i].role + " -> " + dev.shortId + ":" + serviceIndex)
                            missing[i].select(dev, serviceIndex)
                        }
                        // this one is no longer missing
                        missing.splice(i, 1)
                        // move on to the next service in announce
                        break
                    }
                }
            }

            // if nothing can be assigned, the score is zero
            if (numPossible == 0)
                return 0

            // otherwise the score is [numBound, numPossible], lexicographic
            // numPossible can't be larger than ~64, leave it a few more bits
            return (numBound << 8) | numPossible
        }
    }

    function maxIn<T>(arr: T[], cmp: (a: T, b: T) => number) {
        let maxElt = arr[0]
        for (let i = 1; i < arr.length; ++i) {
            if (cmp(maxElt, arr[i]) < 0)
                maxElt = arr[i]
        }
        return maxElt
    }

    export function autoBind() {
        if (_devices.length == 0 || _unattachedClients.length == 0)
            return

        const bindings: RoleBinding[] = []

        for (const cl of _allClients) {
            if (!cl.broadcast && cl.requiredDeviceName) {
                const b = new RoleBinding(cl.requiredDeviceName)
                if (cl.device) {
                    b.boundToDev = cl.device
                    b.boundToServiceIdx = cl.serviceIndex
                }
                bindings.push(b)
            }
        }

        let hosts: HostBindings[] = []

        // Group all clients by host
        for (const b of bindings) {
            const hn = b.host()
            let h = hosts.find(h => h.host == hn)
            if (!h) {
                h = new HostBindings(hn)
                hosts.push(h)
            }
            h.bindings.push(b)
        }

        // exclude hosts that have already everything bound
        hosts = hosts.filter(h => !h.fullyBound)

        while (hosts.length > 0) {
            // Get host with maximum number of clients (resolve ties by name)
            // This gives priority to assignment of "more complicated" hosts, which are generally more difficult to assign
            const h = maxIn(hosts, (a, b) => a.bindings.length - b.bindings.length || a.host.compare(b.host))

            // now find device with highest score (see comment on scoreFor())
            let maxScore = h.scoreFor(_devices[0])
            let maxIdx = 0
            for (let i = 1; i < _devices.length; ++i) {
                const score = h.scoreFor(_devices[i])
                if (score == 0) continue
                if (score > maxScore || (score == maxScore && _devices[i].deviceId.compare(_devices[maxIdx].deviceId) < 0)) {
                    maxScore = score
                    maxIdx = i
                }
            }

            if (maxScore == 0) {
                // nothing can be assigned, on any device
                hosts.removeElement(h)
                continue
            }

            // assign services in order of names - this way foo/servo1 will be assigned before foo/servo2
            // in list of advertised services
            h.bindings.sort((a, b) => a.role.compare(b.role))

            // "recompute" score, assigning names in process
            const dev = _devices[maxIdx]
            h.scoreFor(dev, true)

            // if everything bound on this host, remove it from further consideration
            if (h.fullyBound)
                hosts.removeElement(h)
            else {
                // otherwise, remove bindings on the current device, to update sort order
                // it's unclear we need this
                h.bindings = h.bindings.filter(b => b.boundToDev != dev)
            }
        }
    }

    export class RoleManagerHost extends Host {
        constructor() {
            super("rolemgr", SRV_ROLE_MANAGER)
        }

        public handlePacket(packet: JDPacket) {
            switch (packet.serviceCommand) {
                case RoleManagerCmd.GetRole:
                    if (packet.data.length == 9) {
                        let name = getRole(packet.data.slice(0, 8).toHex(), packet.data[8]) || ""
                        this.sendReport(JDPacket.from(RoleManagerCmd.GetRole, packet.data.concat(Buffer.fromUTF8(name))))
                    }
                    break
                case RoleManagerCmd.SetRole:
                    if (packet.data.length >= 9) {
                        setRole(packet.data.slice(0, 8).toHex(), packet.data[8], packet.data.slice(9).toString())
                        this.sendChangeEvent();
                    }
                    break
                case RoleManagerCmd.ListStoredRoles:
                    OutPipe.respondForEach(packet, settings.list(roleSettingPrefix), k => {
                        const name = settings.readString(k)
                        const len = roleSettingPrefix.length
                        return jdpack("b[8] u8 s", [
                            Buffer.fromHex(k.slice(len, len + 16)),
                            parseInt(k.slice(len + 16)),
                            name
                        ])
                    })
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
                const servidx = c.device ? c.serviceIndex : 0
                return jdpack("b[8] u32 u8 s", [devid, c.serviceClass, servidx, c.requiredDeviceName || ""])
            }
        }
    }
}

namespace jacdac {

    //% fixedInstance whenUsed block="role manager"
    export const roleManagerHost = new _rolemgr.RoleManagerHost()

    /*

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

        setName(sd: ServiceDescriptor, name: string) {
            this.sendCommandWithAck(JDPacket.from(RoleManagerCmd.SetRole,
                Buffer.fromHex(dev.deviceId).concat(Buffer.fromUTF8(name))))
        }

        handlePacket(pkt: JDPacket) {
        }
    }
    */
}