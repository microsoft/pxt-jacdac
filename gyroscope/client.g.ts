namespace modules {
    /**
     * A 3-axis gyroscope.
     **/
    //% fixedInstances blockGap=8
    export class GyroscopeClient extends jacdac.SensorClient {
        private readonly _rotationRatesError: jacdac.RegisterClient<[number]>
        private readonly _maxRate: jacdac.RegisterClient<[number]>
        private readonly _maxRatesSupported: jacdac.RegisterClient<[number[]]>

        constructor(role: string) {
            super(
                jacdac.SRV_GYROSCOPE,
                role,
                jacdac.GyroscopeRegPack.RotationRates
            )

            this._rotationRatesError = this.addRegister<[number]>(
                jacdac.GyroscopeReg.RotationRatesError,
                jacdac.GyroscopeRegPack.RotationRatesError,
                jacdac.RegisterClientFlags.Optional
            )
            this._maxRate = this.addRegister<[number]>(
                jacdac.GyroscopeReg.MaxRate,
                jacdac.GyroscopeRegPack.MaxRate,
                jacdac.RegisterClientFlags.Optional
            )
            this._maxRatesSupported = this.addRegister<[number[]]>(
                jacdac.GyroscopeReg.MaxRatesSupported,
                jacdac.GyroscopeRegPack.MaxRatesSupported,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Indicates the current rates acting on gyroscope.
         */
        //% callInDebugger
        //% group="Movement"
        //% block="%gyroscope x (°/s)"
        //% blockId=jacdac_gyroscope_rotation_rates_x_get
        //% weight=100
        x(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Indicates the current rates acting on gyroscope.
         */
        //% callInDebugger
        //% group="Movement"
        //% block="%gyroscope y (°/s)"
        //% blockId=jacdac_gyroscope_rotation_rates_y_get
        //% weight=99
        y(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[1]
        }

        /**
         * Indicates the current rates acting on gyroscope.
         */
        //% callInDebugger
        //% group="Movement"
        //% block="%gyroscope z (°/s)"
        //% blockId=jacdac_gyroscope_rotation_rates_z_get
        //% weight=98
        z(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[2]
        }

        /**
         * Error on the reading value.
         */
        //% callInDebugger
        //% group="Movement"
        //% weight=97
        rotationRatesError(): number {
            this.start()
            const values = this._rotationRatesError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Configures the range of rotation rates.
         * The value will be "rounded up" to one of `max_rates_supported`.
         */
        //% callInDebugger
        //% group="Movement"
        //% weight=96
        maxRate(): number {
            this.start()
            const values = this._maxRate.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Configures the range of rotation rates.
         * The value will be "rounded up" to one of `max_rates_supported`.
         */
        //% group="Movement"
        //% weight=95
        setMaxRate(value: number) {
            this.start()
            const values = this._maxRate.values as any[]
            values[0] = value
            this._maxRate.values = values as [number]
        }

        /**
         * Lists values supported for writing `max_rate`.
         */
        //% callInDebugger
        //% group="Movement"
        //% weight=94
        maxRatesSupportedMaxRate(): number[] {
            this.start()
            const values = this._maxRatesSupported.pauseUntilValues() as any[]
            return values[0]
        }
    }

    //% fixedInstance whenUsed weight=1 block="gyroscope1"
    export const gyroscope1 = new GyroscopeClient("gyroscope1")
}
