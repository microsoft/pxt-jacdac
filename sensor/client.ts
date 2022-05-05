namespace jacdac {
    //% fixedInstances
    //% weight=1
    export class SensorClient extends Client {
        protected readonly _reading: RegisterClient<PackSimpleDataType[]>
        private readonly _streamingSamples: RegisterClient<number[]>
        private readonly _streamingInterval: RegisterClient<number[]>
        private samples = 0
        private samplesExpiration = 0
        private lastSample = 0
        public isStreaming = false

        constructor(deviceClass: number, role: string, stateFormat: string, streamingInterval = 100) {
            super(deviceClass, role)
            this._reading = this.addRegister(
                jacdac.SystemReg.Reading,
                stateFormat
            )
            this._streamingSamples = this.addRegister(
                jacdac.SystemReg.StreamingSamples,
                jacdac.SystemRegPack.StreamingSamples,
                RegisterClientFlags.None,
                [0]
            )
            this._streamingInterval = this.addRegister(
                jacdac.SystemReg.StreamingInterval,
                jacdac.SystemRegPack.StreamingInterval,
                RegisterClientFlags.Optional,
                [streamingInterval]
            )
            this._reading.on(REPORT_RECEIVE, () => {
                this.samples--
                this.lastSample = control.millis()
            })
            this._streamingSamples.on(REPORT_UPDATE, () => this.updateSamples())
        }

        private updateSamples() {
            this.samples = this._streamingSamples.values[0] || 0
        }

        private checkSamples() {
            if (!this.isStreaming) return

            const now = control.millis()
            const interval = Math.max(20, this._streamingInterval.values[0] || 100)
            if (this.samples < 0x20 // ran out of samples
                || now - this.lastSample > (interval * 2) // missed two beats, not running?
                || now > this.samplesExpiration) { // haven't seen any messages in a while
                this._streamingSamples.values = [0xff]
                this.samples = 0xff
                this.samplesExpiration = now + interval * (0xff >> 1)
                this.lastSample = now
                this._streamingSamples.sendSet()
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
                this.setReg(
                    jacdac.SystemReg.StreamingInterval,
                    jacdac.SystemRegPack.StreamingInterval,
                    [interval_ms]
                )
        }

        public onStateChanged(handler: () => void) {
            this._reading.on(REPORT_UPDATE, handler)
            this.setStreaming(true)
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
                const [current] = this._reading.values as any[] as [number]
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
