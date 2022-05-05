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
                jacdac.SystemRegPack.StreamingSamples
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
