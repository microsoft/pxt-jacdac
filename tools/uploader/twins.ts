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

    class ReadingCollector {
        enabled: boolean
        readings: number[] = []
        timestamps: number[] = []

        constructor(public parent: Twin, public serviceIdx: number, private fmt: string) {
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

        process(pkt: JDPacket) {
            if (
                this.enabled &&
                pkt.isRegGet &&
                pkt.regCode == SystemReg.Reading
            ) {
                const v = jdunpack(pkt.data, this.fmt)[0]
                this.readings.push(v)
                this.timestamps.push(control.millis())
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

    let twins: Twin[]
    let exclusions: string[]

    const streamingIntervalSpec: ServiceTwinRegisterSpec = {
        name: "streaming_interval",
        code: SystemReg.StreamingInterval,
        flags: 0,
        packf: "u32"
    }

    class Twin {
        id: string
        collectors: ReadingCollector[] = []
        constructor(public device: jacdac.Device) {
            this.device.on(jacdac.DEVICE_DISCONNECT, () => {
                twins.removeElement(this)
            })
            this.id = this.device.shortId + "_" + this.device.deviceId
            twins.push(this)
            this.device.on(jacdac.PACKET_RECEIVE, (pkt: JDPacket) => {
                const coll = this.collectors[pkt.serviceIndex]
                if (coll) coll.process(pkt)
            })

            const d = this.device
            for (let servIdx = 0; servIdx < d.serviceClassLength; ++servIdx) {
                const cl = d.serviceClassAt(servIdx)
                const spec = getServiceTwinSpec(cl)
                if (!spec) continue
                const rd = spec.registers.find(r => r.code == SystemReg.Reading)
                if (rd)
                    this.collectors[servIdx] = new ReadingCollector(this, servIdx, rd.packf)
            }
        }

        computeTwin(forReal = true) {
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
                const coll = this.collectors[servIdx]
                if (coll) {
                    registers["streaming"] = coll.enabled
                    spec.registers.push(streamingIntervalSpec)
                }
                for (const r of spec.registers) {
                    if (exclusions.indexOf(spec.name + "." + r.name) >= 0)
                        continue
                    if (r.code == SystemReg.Reading) continue

                    const buf = d.query(
                        r.code,
                        r.flags & ServiceTwinRegisterFlag.Const ? null : 500,
                        servIdx
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
            }
            return forReal ? twin : undefined
        }
    }

    let currTwin: Json

    function rescanDevices() {
        for (const d of jacdac.bus.devices) {
            if (!twins.some(t => t.device == d)) new Twin(d)
        }
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
        } else {
            const patch = azureiot.computePatch(currTwin, fullTwin)
            if (Object.keys(patch).length > 0)
                console.log(JSON.stringify(patch, null, 1))
            currTwin = fullTwin
        }
    }

    type Json = any

    export function init() {
        if (twins) return
        twins = []

        exclusions = []
        exclusions.push("control.uptime")
        exclusions.push("control.mcu_temperature")

        /*
        azureiot.connect()
        const currTwin = azureiot.getTwin()["reported"]
        console.log(JSON.stringify( currTwin) )
        azureiot.onTwinUpdate((twin, patch) => {
        })
        */

        setInterval(rescanDevices, 1000)
    }
}
