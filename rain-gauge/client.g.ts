namespace modules {
    /**
     * Measures the amount of liquid precipitation over an area in a predefined period of time.
     **/
    //% fixedInstances blockGap=8
    export class RainGaugeClient extends jacdac.SimpleSensorClient {
        private readonly _precipitationPrecision: jacdac.RegisterClient<
            [number]
        >

        constructor(role: string) {
            super(
                jacdac.SRV_RAIN_GAUGE,
                role,
                jacdac.RainGaugeRegPack.Precipitation
            )

            this._precipitationPrecision = this.addRegister<[number]>(
                jacdac.RainGaugeReg.PrecipitationPrecision,
                jacdac.RainGaugeRegPack.PrecipitationPrecision,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Total precipitation recorded so far.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%raingauge precipitation (mm)"
        //% blockId=jacdac_raingauge_precipitation___get
        //% weight=100
        precipitation(): number {
            return this.reading()
        }

        /**
         * Typically the amount of rain needed for tipping the bucket.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        precipitationPrecision(): number {
            this.start()
            const values =
                this._precipitationPrecision.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the precipitation changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_raingauge_on_precipitation_change
        //% block="on %raingauge precipitation changed by %threshold (mm)"
        //% weight=98
        //% threshold.min=0
        //% threshold.defl=1
        onPrecipitationChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="rain gauge1"
    export const rainGauge1 = new RainGaugeClient("rain Gauge1")
}
