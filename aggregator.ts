namespace jacdac {
    function numberFmt(stype: SensorAggregatorSampleType) {
        switch (stype) {
            case SensorAggregatorSampleType.U8: return NumberFormat.UInt8LE
            case SensorAggregatorSampleType.I8: return NumberFormat.Int8LE
            case SensorAggregatorSampleType.U16: return NumberFormat.UInt16LE
            case SensorAggregatorSampleType.I16: return NumberFormat.Int16LE
            case SensorAggregatorSampleType.U32: return NumberFormat.UInt32LE
            case SensorAggregatorSampleType.I32: return NumberFormat.Int32LE
        }
    }

    const inputsSettingsKey = "#jd-agg-inputs"

    class Collector extends Client {
        private requiredServiceNum: number
        lastSample: Buffer
        private parent: SensorAggregatorHost
        private numElts: number
        private sampleType: SensorAggregatorSampleType
        private sampleMult: number

        handlePacket(packet: JDPacket) {
            if (packet.service_command == (CMD_GET_REG | REG_READING)) {
                this.parent._newData(packet.timestamp, false)
                const arr = packet.data.toArray(numberFmt(this.sampleType))
                for (let i = 0; i < arr.length; ++i)
                    this.lastSample.setNumber(NumberFormat.Float32LE, i << 2, arr[i] * this.sampleMult)
                this.parent._newData(packet.timestamp, true)
            }
        }

        _attach(dev: Device, serviceNum: number) {
            if (this.requiredServiceNum && serviceNum != this.requiredServiceNum)
                return false
            return super._attach(dev, serviceNum)
        }

        announceCallback() {
            this.setRegInt(REG_STREAMING_SAMPLES, 255)
        }

        constructor(parent: SensorAggregatorHost, config: Buffer) {
            const [serviceClass, serviceNum, sampleSize, sampleType, sampleShift] = config.unpack("IBBBb", 8)
            const devId = config.getNumber(NumberFormat.Int32LE, 0) == 0 ? null : config.slice(0, 8).toHex()
            super("aggcoll", serviceClass, devId)
            this.requiredServiceNum = serviceNum
            this.sampleType = sampleType

            this.sampleMult = 1
            let sh = sampleShift
            while (sh > 0) {
                this.sampleMult /= 2
                sh--
            }
            while (sh < 0) {
                this.sampleMult *= 2
                sh++
            }

            this.numElts = Math.idiv(sampleSize, Buffer.sizeOfNumberFormat(numberFmt(this.sampleType)))
            this.lastSample = Buffer.create(this.numElts * 4)

            this.parent = parent
        }
    }

    export class SensorAggregatorHost extends Host {
        private collectors: Collector[]
        private lastSample: number
        private samplingInterval: number
        private _samplesInWindow = 1
        sampleSize: number
        private streamSamples: number
        samplesBuffer: Buffer
        numSamples: number

        newDataCallback: () => void

        constructor() {
            super("agg", SRV_SENSOR_AGGREGATOR);
        }

        get samplesInWindow() {
            return this._samplesInWindow
        }

        set samplesInWindow(v: number) {
            if (!v || v <= 1) v = 1
            this._samplesInWindow = v
            this.syncWindow()
        }

        get inputSettings() {
            return settings.readBuffer(inputsSettingsKey)
        }

        private syncWindow() {
            if (this.sampleSize)
                this.samplesBuffer = Buffer.create(this.samplesInWindow * this.sampleSize)
            else
                this.samplesBuffer = Buffer.create(this.samplesInWindow)
        }

        private pushData() {
            this.samplesBuffer.shift(this.sampleSize)
            let off = this.samplesBuffer.length - this.sampleSize
            for (const coll of this.collectors) {
                this.samplesBuffer.write(off, coll.lastSample)
                off += coll.lastSample.length
            }
            this.numSamples++
            if (this.streamSamples > 0) {
                this.streamSamples--
                this.sendLastSample()
            }
        }

        _newData(timestamp: number, isPost: boolean) {
            if (!this.lastSample)
                this.lastSample = timestamp
            const d = timestamp - this.lastSample
            let numSamples = Math.idiv(d + (d >> 1), this.samplingInterval)
            if (!numSamples)
                return
            if (isPost) {
                this.lastSample = timestamp
                this.pushData()
                if (this.newDataCallback)
                    this.newDataCallback()
            } else {
                numSamples--
                if (numSamples > 5) numSamples = 5
                while (numSamples-- > 0)
                    this.pushData()
            }
        }

        start() {
            super.start()
            this.configureInputs()
        }

        private configureInputs() {
            const config = this.inputSettings
            if (!config)
                return
            /*
            rw inputs @ 0x80 {
                sampling_interval: u16 ms
                samples_in_window: u16
                reserved: u32
            repeats:
                device_id: u64
                service_class: u32
                service_num: u8
                sample_size: u8 bytes
                sample_type: SampleType
                sample_shift: i8
            }
            */

            [this.samplingInterval] = config.unpack("H")
            const entrySize = 16
            let off = 8
            for (const coll of this.collectors || [])
                coll.destroy()
            this.collectors = []
            let frameSz = 0
            while (off < config.length) {
                const coll = new Collector(this, config.slice(off, entrySize))
                coll.setRegInt(REG_STREAMING_INTERVAL, this.samplingInterval)
                coll.setRegInt(REG_STREAMING_SAMPLES, 255)
                this.collectors.push(coll)
                frameSz += coll.lastSample.length
                off += entrySize
            }
            this.sampleSize = frameSz
            this.numSamples = 0
            this.syncWindow()
        }

        private sendLastSample() {
            const buf = this.samplesBuffer.slice(this.samplesBuffer.length - this.sampleSize, this.sampleSize)
            this.sendReport(JDPacket.from(SensorAggregatorReg.CurrentSample | CMD_GET_REG, buf))
        }

        handlePacket(packet: JDPacket) {
            this.handleRegInt(packet, SensorAggregatorReg.NumSamples, this.numSamples)
            this.handleRegInt(packet, SensorAggregatorReg.SampleSize, this.sampleSize)
            this.streamSamples = this.handleRegInt(packet, SensorAggregatorReg.StreamSamples, this.streamSamples)
            this.streamSamples = this.handleRegInt(packet, REG_STREAMING_SAMPLES, this.streamSamples)

            switch (packet.service_command) {
                case SensorAggregatorReg.Inputs | CMD_GET_REG:
                    this.sendReport(JDPacket.from(packet.service_command, this.inputSettings))
                    break
                case SensorAggregatorReg.Inputs | CMD_SET_REG:
                    if (this.inputSettings && packet.data.equals(this.inputSettings))
                        return // already done
                    settings.writeBuffer(inputsSettingsKey, packet.data)
                    this.configureInputs()
                    break
                case SensorAggregatorReg.CurrentSample | CMD_GET_REG:
                    this.sendLastSample()
                    break;
            }
        }
    }

    //% whenUsed
    export const sensorAggregatorHost = new SensorAggregatorHost()
}