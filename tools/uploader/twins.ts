namespace jacdac.twins {
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

    let twins: Twin[]

    class Twin {
        id: string
        constructor(public device: jacdac.Device) {
            this.device.on(jacdac.DEVICE_DISCONNECT, () => {
                twins.removeElement(this)
            })
            this.id = this.device.shortId + "_" + this.device.deviceId
            twins.push(this)
        }

        computeTwin() {
            const d = this.device
            const twin: Json = {}
            for (let servIdx = 0; servIdx < d.serviceClassLength; ++servIdx) {
                const cl = d.serviceClassAt(servIdx)
                const spec = getServiceTwinSpec(cl)
                if (!spec) continue
                let key = spec.name
                if (twin[key]) {
                    let i = 2
                    while (twin[key + "_" + i]) i++
                    key += "_" + i
                }
                const registers: any = {}
                twin[key] = {
                    registers,
                }
                for (const r of spec.registers) {
                    const buf = d.query(
                        r.code,
                        r.flags & ServiceTwinRegisterFlag.Const ? null : 1000,
                        servIdx
                    )
                    if (buf) {
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
            }
            return twin
        }
    }

    function rescanDevices() {
        for (const d of jacdac.bus.devices) {
            if (!twins.some(t => t.device == d)) new Twin(d)
        }
        for (const t of twins) {
            t.computeTwin()
        }
        pause(200)
        const fullTwin: Json = {}
        for (const t of twins) {
            fullTwin[t.id] = t.computeTwin()
        }
        console.log(JSON.stringify(fullTwin))
    }

    type Json = any

    export function init() {
        if (twins) return
        twins = []
        /*
        azureiot.connect()
        const currTwin = azureiot.getTwin()["reported"]
        azureiot.onTwinUpdate((twin, patch) => {
        })
        */
        jacdac.bus.on(jacdac.DEVICE_CONNECT, rescanDevices)
        rescanDevices()
    }
}
