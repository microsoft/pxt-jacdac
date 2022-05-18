namespace modules {
    /**
     * A thermometer measuring outside or inside environment.
     **/
    //% fixedInstances blockGap=8
    export class TemperatureClient extends jacdac.SimpleSensorClient {
        private readonly _minTemperature: jacdac.RegisterClient<[number]>
        private readonly _maxTemperature: jacdac.RegisterClient<[number]>
        private readonly _temperatureError: jacdac.RegisterClient<[number]>
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.TemperatureVariant]
        >

        constructor(role: string) {
            super(
                jacdac.SRV_TEMPERATURE,
                role,
                jacdac.TemperatureRegPack.Temperature
            )

            this._minTemperature = this.addRegister<[number]>(
                jacdac.TemperatureReg.MinTemperature,
                jacdac.TemperatureRegPack.MinTemperature,
                jacdac.RegisterClientFlags.Const
            )
            this._maxTemperature = this.addRegister<[number]>(
                jacdac.TemperatureReg.MaxTemperature,
                jacdac.TemperatureRegPack.MaxTemperature,
                jacdac.RegisterClientFlags.Const
            )
            this._temperatureError = this.addRegister<[number]>(
                jacdac.TemperatureReg.TemperatureError,
                jacdac.TemperatureRegPack.TemperatureError,
                jacdac.RegisterClientFlags.Optional
            )
            this._variant = this.addRegister<[jacdac.TemperatureVariant]>(
                jacdac.TemperatureReg.Variant,
                jacdac.TemperatureRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * The temperature.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%temperature temperature (°C)"
        //% blockId=jacdac_temperature_temperature___get
        //% weight=100
        temperature(): number {
            return this.reading()
        }

        /**
         * Lowest temperature that can be reported.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        minTemperature(): number {
            this.start()
            const values = this._minTemperature.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Highest temperature that can be reported.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        maxTemperature(): number {
            this.start()
            const values = this._maxTemperature.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The real temperature is between `temperature - temperature_error` and `temperature + temperature_error`.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=97
        temperatureError(): number {
            this.start()
            const values = this._temperatureError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Specifies the type of thermometer.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=96
        variant(): jacdac.TemperatureVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the temperature changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_temperature_on_temperature_change
        //% block="on %temperature temperature changed by %threshold (°C)"
        //% weight=95
        //% threshold.min=0
        //% threshold.defl=1
        onTemperatureChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="temperature1"
    export const temperature1 = new TemperatureClient("temperature1")
}
