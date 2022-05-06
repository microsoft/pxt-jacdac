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

        constructor(serviceClass: number, options?: SensorServerOptions) {
            super(serviceClass, options)

            this.streamingSamples = 0
            this.streamingInterval =
                (options ? options.streamingInterval : undefined) || 100
        }

        public handlePacket(packet: JDPacket) {
            this.stateUpdated = false
            this.streamingInterval = this.handleRegValue(
                packet,
                jacdac.SystemReg.StreamingInterval,
                jacdac.SystemRegPack.StreamingInterval,
                this.streamingInterval
            )
            const samples = this.handleRegValue(
                packet,
                jacdac.SystemReg.StreamingSamples,
                jacdac.SystemRegPack.StreamingSamples,
                this.streamingSamples
            )
            this.setStreaming(samples)

            // register get, on a sensor
            if (packet.isRegGet && packet.regCode == jacdac.SystemReg.Reading) {
                const state = this.readState()
                if (state)
                    this.sendReport(
                        JDPacket.from(
                            CMD_GET_REG | jacdac.SystemReg.Reading,
                            state
                        )
                    )
                packet.markHandled()
            } else this.handleCustomCommand(packet)
        }

        private readState(): Buffer {
            return this.ready ? this.serializeState() : undefined
        }

        // override
        protected serializeState(): Buffer {
            return undefined
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
                    this.streamingSamples > 0 &&
                    this.running
                ) {
                    // run callback
                    const state = this.readState()
                    if (state) {
                        // send state and record time
                        this.sendReport(
                            JDPacket.from(
                                CMD_GET_REG | jacdac.SystemReg.Reading,
                                state
                            )
                        )
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

    export class SimpleSensorServer extends SensorServer {
        readonly packFormat: string
        readonly stateReader: () => number
        private minReading?: number
        private maxReading?: number
        private readingError?: () => number

        constructor(
            serviceClass: number,
            packFormat: string,
            stateReader: () => number,
            options?: SimpleSensorServerOptions
        ) {
            super(serviceClass, options)

            this.packFormat = packFormat
            this.stateReader = stateReader
            this.minReading = options ? options.minReading : undefined
            this.maxReading = options ? options.maxReading : undefined
            this.readingError = options ? options.readingError : undefined
        }

        public handlePacket(pkt: jacdac.JDPacket) {
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
                    jacdac.SystemReg.ReadingError,
                    this.packFormat,
                    this.readingError()
                )
            super.handlePacket(pkt)
        }

        serializeState() {
            const v = this.stateReader()
            if (v === undefined) return undefined
            return jacdac.jdpack(this.packFormat, [v])
        }
    }

    export function createSimpleSensorServer(
        serviceClass: number,
        packFormat: string,
        stateReader: () => number,
        options?: SimpleSensorServerOptions
    ): SensorServer {
        return new SimpleSensorServer(
            serviceClass,
            packFormat,
            stateReader,
            options
        )
    }

    export interface MultiSensorServerOptions extends SensorServerOptions {
        readingError?: () => number
        readingErrorPack?: string
    }

    export class MultiSensorServer extends SensorServer {
        readonly packFormat: string
        readonly stateReader: () => number[]
        private readingError: () => number
        private readingErrorPack: string

        constructor(
            serviceClass: number,
            packFormat: string,
            stateReader: () => number[],
            options?: MultiSensorServerOptions
        ) {
            super(serviceClass, options)

            this.packFormat = packFormat
            this.stateReader = stateReader
            this.readingError = options ? options.readingError : undefined
            this.readingErrorPack = options
                ? options.readingErrorPack
                : undefined
        }

        public handlePacket(pkt: jacdac.JDPacket) {
            if (this.readingError !== undefined)
                this.handleRegValue(
                    pkt,
                    jacdac.SystemReg.MaxReading,
                    this.readingErrorPack,
                    this.readingError()
                )
            super.handlePacket(pkt)
        }

        serializeState() {
            const v = this.stateReader()
            if (!v || !v.length || v.every(v => isNaN(v))) return undefined
            return jacdac.jdpack(this.packFormat, v)
        }
    }

    export function createMultiSensorServer(
        serviceClass: number,
        packFormat: string,
        stateReader: () => number[],
        options?: MultiSensorServerOptions
    ): SensorServer {
        return new MultiSensorServer(
            serviceClass,
            packFormat,
            stateReader,
            options
        )
    }
}
