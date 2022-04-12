namespace jacdac {
    export interface SensorServerOptions extends ServerOptions {
        streamingInterval?: number
        calibrate?: () => void
    }

    /**
     * JacDac service running on sensor and streaming data out
     */
    export class SensorServer extends Server {
        public streamingInterval: number // millis
        public streamingSamples: number
        readonly calibrate: () => void

        constructor(serviceClass: number, options?: SensorServerOptions) {
            super(serviceClass, options)
            options = options || {}

            this.streamingSamples = 0
            this.streamingInterval = options.streamingInterval || 100
            this.calibrate = options.calibrate
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
                jacdac.SystemRegPack.StreamingSamples,
                this.streamingSamples
            )
            this.setStreaming(samples)

            // register get, on a sensor
            if (packet.isRegGet && packet.regCode == jacdac.SystemReg.Reading) {
                const state = this.serializeState()
                this.sendReport(
                    JDPacket.from(CMD_GET_REG | jacdac.SystemReg.Reading, state)
                )
                packet.markHandled()
            } else {
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
        }

        // override
        protected serializeState(): Buffer {
            return undefined
        }

        // override
        protected handleCalibrateCommand(pkt: JDPacket) {
            if (this.statusCode === jacdac.SystemStatusCodes.Calibrating) return

            if (this.calibrate) {
                this.setStatusCode(jacdac.SystemStatusCodes.Calibrating)
                control.runInBackground(() => this.doCalibrate())
            } else pkt.possiblyNotImplemented()
        }

        private doCalibrate() {
            try {
                this.calibrate()
                this.setStatusCode(jacdac.SystemStatusCodes.Ready)
            } catch (e) {
                this.setStatusCode(jacdac.SystemStatusCodes.CalibrationNeeded)
            }
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
                    jacdac.SystemReg.MaxReading,
                    this.packFormat,
                    this.readingError()
                )
            super.handlePacket(pkt)
        }

        serializeState() {
            const v = this.stateReader()
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
