namespace jacdac {
    //% fixedInstances
    //% weight=1
    export class SensorClient extends Client {
        protected readonly _reading: RegisterClient<PackSimpleDataType[]>
        private readonly _streamingSamples: RegisterClient<number[]>
        private samples = 0
        public isStreaming = false

        constructor(deviceClass: number, role: string, stateFormat: string) {
            super(deviceClass, role)
            this._reading = this.addRegister(
                jacdac.SystemReg.Reading,
                stateFormat
            )
            this._streamingSamples = this.addRegister(
                jacdac.SystemReg.StreamingSamples,
                "u8"
            )
            this._reading.on(REPORT_RECEIVE, () => this.samples--)
            this._streamingSamples.on(REPORT_UPDATE, () => this.updateSamples())
        }

        private updateSamples() {
            this.samples = this._streamingSamples.values[0] || 0
        }

        private checkSamples() {
            if (this.isStreaming && this.samples < 0x20) {
                this._streamingSamples.values = [0xff]
                this.samples = 0xff
            }
        }

        announceCallback() {
            this.checkSamples()
        }

        /**
         * Enables or disable streaming the sensor internal state
         * @param on streaming enabled
         */
        public setStreaming(on: boolean, interval_ms?: number) {
            this.start()
            const wasStreaming = this.isStreaming
            this.isStreaming = on
            if (on && !wasStreaming) this.checkSamples()
            if (interval_ms != undefined)
                this.setReg(jacdac.SystemReg.StreamingInterval, "u32", [
                    interval_ms,
                ])
        }

        public onStateChanged(handler: () => void) {
            this._reading.on(REPORT_UPDATE, handler)
            this.setStreaming(true)
        }
    }

    export class BufferedSensorClient extends SensorClient {
        protected _samples: any[]
        protected _numSamples: number
        protected _interval: number
        protected _lastTimestamp: number

        constructor(deviceClass: number, role: string, stateFormat: string) {
            super(deviceClass, role, stateFormat)
        }

        enableBuffer(numSamples: number, interval: number) {
            this._numSamples = numSamples
            this._samples = []
            this._interval = interval
            this.setStreaming(true, interval)
        }

        getSamples() {
            if (!this._samples || this._samples.length < this._numSamples)
                return null
            return this._samples.slice(-this._numSamples)
        }

        handlePacket(packet: JDPacket) {
            if (
                this._samples &&
                packet.serviceCommand ==
                    (CMD_GET_REG | jacdac.SystemReg.Reading)
            ) {
                const v = jdunpack(
                    packet.data,
                    this._reading.packFormat
                ) as any[]
                if (v != null) {
                    let num = 1
                    if (this._lastTimestamp != undefined) {
                        const d = packet.timestamp - this._lastTimestamp
                        num = Math.idiv(
                            d + (this._interval >> 1),
                            this._interval
                        )
                        num = Math.clamp(1, 5, num)
                    }
                    this._lastTimestamp = packet.timestamp
                    while (num--) this._samples.push(v)
                    const del = this._samples.length - this._numSamples
                    if (del > 5) this._samples.splice(0, del)
                }
            }
            super.handlePacket(packet)
        }
    }

    //% fixedInstances
    export class SimpleSensorClient extends SensorClient {
        constructor(deviceClass: number, role: string, stateFormat: string) {
            super(deviceClass, role, stateFormat)
        }

        reading(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[0]
        }

        onReadingChangedBy(threshold: number, handler: () => void) {
            if (!handler || threshold < 0) return

            let last: number = this.reading()
            // tracks that the handler is running
            let running = false
            this.onStateChanged(() => {
                // remember that a change hapenned while running the handler
                if (running) {
                    return
                }
                const [current] = (this._reading.values as any[]) as [number]
                if (current == null) return // ignore missing data

                if (last == null || Math.abs(last - current) >= threshold) {
                    last = current
                    running = true
                    control.runInBackground(() => {
                        try {
                            handler()
                        } finally {
                            running = false
                        }
                    })
                }
            })
        }
    }
}
