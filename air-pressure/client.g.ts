namespace modules {
    /**
     * A sensor measuring air pressure of outside environment.
     **/
    //% fixedInstances blockGap=8
    export class AirPressureClient extends jacdac.SimpleSensorClient {
        private readonly _pressureError: jacdac.RegisterClient<[number]>
        private readonly _minPressure: jacdac.RegisterClient<[number]>
        private readonly _maxPressure: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(
                jacdac.SRV_AIR_PRESSURE,
                role,
                jacdac.AirPressureRegPack.Pressure
            )

            this._pressureError = this.addRegister<[number]>(
                jacdac.AirPressureReg.PressureError,
                jacdac.AirPressureRegPack.PressureError,
                jacdac.RegisterClientFlags.Optional
            )
            this._minPressure = this.addRegister<[number]>(
                jacdac.AirPressureReg.MinPressure,
                jacdac.AirPressureRegPack.MinPressure,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._maxPressure = this.addRegister<[number]>(
                jacdac.AirPressureReg.MaxPressure,
                jacdac.AirPressureRegPack.MaxPressure,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * The air pressure.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%airpressure pressure (hPa)"
        //% blockId=jacdac_airpressure_pressure___get
        //% weight=100
        pressure(): number {
            return this.reading()
        }

        /**
         * The real pressure is between `pressure - pressure_error` and `pressure + pressure_error`.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        pressureError(): number {
            this.start()
            const values = this._pressureError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Lowest air pressure that can be reported.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        minPressure(): number {
            this.start()
            const values = this._minPressure.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Highest air pressure that can be reported.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=97
        maxPressure(): number {
            this.start()
            const values = this._maxPressure.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the pressure changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_airpressure_on_pressure_change
        //% block="on %airpressure pressure changed by %threshold (hPa)"
        //% weight=96
        //% threshold.min=0
        //% threshold.max=1150
        //% threshold.defl=1
        onPressureChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="air pressure1"
    export const airPressure1 = new AirPressureClient("air Pressure1")
}
