namespace jacdac {
    export interface SensorServerOptions extends ServerOptions {
        streamingInterval?: number
    }

    /**
     * JacDac service running on sensor and streaming data out
     */
    export class SensorServer extends Server {
        public streamingInterval: number // millis
        public streamingSamples: number

        constructor(
            name: string,
            serviceClass: number,
            options?: SensorServerOptions
        ) {
            super(name, serviceClass, options)
            options = options || {}

            this.streamingSamples = 0
            this.streamingInterval = options.streamingInterval || 100
        }

        public handlePacket(packet: JDPacket) {
            this.stateUpdated = false
            this.streamingInterval = this.handleRegUInt32(
                packet,
                jacdac.SystemReg.StreamingInterval,
                this.streamingInterval
            )
            const samples = this.handleRegValue(
                packet,
                jacdac.SystemReg.StreamingSamples,
                "u8",
                this.streamingSamples
            )
            this.setStreaming(samples)

            switch (packet.serviceCommand) {
                case jacdac.SystemCmd.Calibrate:
                    this.handleCalibrateCommand(packet)
                    break
                default:
                    // let the user deal with it
                    this.handleCustomCommand(packet)
                    break
            }
        }

        // override
        protected serializeState(): Buffer {
            return undefined
        }

        // override
        protected handleCalibrateCommand(pkt: JDPacket) {
            pkt.possiblyNotImplemented()
        }

        protected handleCustomCommand(pkt: JDPacket) {
            pkt.possiblyNotImplemented()
        }

        protected raiseServerEvent(value: number) {
            this.sendEvent(value)
        }

        public setStreaming(samples: number) {
            if (samples) this.startStreaming(samples)
            else this.stopStreaming()
        }

        private startStreaming(samples: number) {
            if (this.streamingSamples) {
                // already running
                this.streamingSamples = samples
                return
            }

            this.log(`start`)
            this.streamingSamples = samples
            control.runInParallel(() => {
                while (
                    this.streamingSamples !== undefined &&
                    this.streamingSamples > 0
                ) {
                    // run callback
                    const state = this.serializeState()
                    if (state) {
                        // did the state change?
                        if (this.isConnected()) {
                            // send state and record time
                            this.sendReport(
                                JDPacket.from(
                                    CMD_GET_REG | jacdac.SystemReg.Reading,
                                    state
                                )
                            )
                        }
                    }
                    // check streaming interval value or cancelled
                    if (
                        this.streamingInterval < 0 ||
                        this.streamingSamples === undefined
                    )
                        break
                    // waiting for a bit
                    pause(this.streamingInterval)
                    // decrement counter
                    if (this.streamingSamples !== undefined)
                        this.streamingSamples--
                }
                this.streamingSamples = 0
                this.log(`stopped`)
            })
        }

        private stopStreaming() {
            if (this.streamingSamples > 0) {
                this.log(`stopping`)
                this.streamingSamples = undefined
                pauseUntil(() => this.streamingSamples === 0)
            }
        }
    }

    export interface SimpleSensorServerOptions extends SensorServerOptions {
        minReading?: number
        maxReading?: number
        readingError?: () => number
    }

    class SimpleSensorServer extends SensorServer {
        readonly packFormat: string
        readonly stateReader: () => number
        private minReading?: number
        private maxReading?: number
        private readingError?: () => number

        constructor(
            name: string,
            serviceClass: number,
            packFormat: string,
            stateReader: () => number,
            options?: SimpleSensorServerOptions
        ) {
            super(name, serviceClass, options)

            this.packFormat = packFormat
            this.stateReader = stateReader
            this.minReading = options ? options.minReading : undefined
            this.maxReading = options ? options.maxReading : undefined
            this.readingError = options ? options.readingError : undefined
        }

        public handlePacket(pkt: jacdac.JDPacket) {
            super.handlePacket(pkt)
            if (this.minReading !== undefined)
                this.handleRegValue(
                    pkt,
                    jacdac.SystemReg.MinReading,
                    this.packFormat,
                    this.minReading
                )
            if (this.maxReading !== undefined)
                this.handleRegValue(
                    pkt,
                    jacdac.SystemReg.MaxReading,
                    this.packFormat,
                    this.maxReading
                )
            if (this.readingError !== undefined)
                this.handleRegValue(
                    pkt,
                    jacdac.SystemReg.MaxReading,
                    this.packFormat,
                    this.readingError()
                )
        }

        serializeState() {
            const v = this.stateReader()
            return jacdac.jdpack(this.packFormat, [v])
        }
    }

    export function createSimpleSensorServer(
        name: string,
        serviceClass: number,
        packFormat: string,
        stateReader: () => number,
        options?: SimpleSensorServerOptions
    ): SensorServer {
        return new SimpleSensorServer(
            name,
            serviceClass,
            packFormat,
            stateReader,
            options
        )
    }
}
