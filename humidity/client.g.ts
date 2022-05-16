namespace modules {
    /**
     * A sensor measuring humidity of outside environment.
     **/
    //% fixedInstances blockGap=8
    export class HumidityClient extends jacdac.SimpleSensorClient {
        private readonly _humidityError: jacdac.RegisterClient<[number]>
        private readonly _minHumidity: jacdac.RegisterClient<[number]>
        private readonly _maxHumidity: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(jacdac.SRV_HUMIDITY, role, jacdac.HumidityRegPack.Humidity)

            this._humidityError = this.addRegister<[number]>(
                jacdac.HumidityReg.HumidityError,
                jacdac.HumidityRegPack.HumidityError,
                jacdac.RegisterClientFlags.Optional
            )
            this._minHumidity = this.addRegister<[number]>(
                jacdac.HumidityReg.MinHumidity,
                jacdac.HumidityRegPack.MinHumidity,
                jacdac.RegisterClientFlags.Const
            )
            this._maxHumidity = this.addRegister<[number]>(
                jacdac.HumidityReg.MaxHumidity,
                jacdac.HumidityRegPack.MaxHumidity,
                jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * The relative humidity in percentage of full water saturation.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%humidity humidity (%RH)"
        //% blockId=jacdac_humidity_humidity___get
        //% weight=100
        humidity(): number {
            return this.reading()
        }

        /**
         * The real humidity is between `humidity - humidity_error` and `humidity + humidity_error`.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        humidityError(): number {
            this.start()
            const values = this._humidityError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Lowest humidity that can be reported.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        minHumidity(): number {
            this.start()
            const values = this._minHumidity.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Highest humidity that can be reported.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=97
        maxHumidity(): number {
            this.start()
            const values = this._maxHumidity.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the humidity changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_humidity_on_humidity_change
        //% block="on %humidity humidity changed by %threshold"
        //% weight=96
        //% threshold.min=0
        //% threshold.defl=1
        onHumidityChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="humidity1"
    export const humidity1 = new HumidityClient("humidity1")
}
