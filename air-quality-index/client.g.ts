namespace modules {
    /**
     * The Air Quality Index is a measure of how clean or polluted air is. From min, good quality, to high, low quality.
     * The range of AQI may vary between countries (https://en.wikipedia.org/wiki/Air_quality_index).
     **/
    //% fixedInstances blockGap=8
    export class AirQualityIndexClient extends jacdac.SimpleSensorClient {
        private readonly _aqiIndexError: jacdac.RegisterClient<[number]>
        private readonly _minAqiIndex: jacdac.RegisterClient<[number]>
        private readonly _maxAqiIndex: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(
                jacdac.SRV_AIR_QUALITY_INDEX,
                role,
                jacdac.AirQualityIndexRegPack.AqiIndex
            )

            this._aqiIndexError = this.addRegister<[number]>(
                jacdac.AirQualityIndexReg.AqiIndexError,
                jacdac.AirQualityIndexRegPack.AqiIndexError,
                jacdac.RegisterClientFlags.Optional
            )
            this._minAqiIndex = this.addRegister<[number]>(
                jacdac.AirQualityIndexReg.MinAqiIndex,
                jacdac.AirQualityIndexRegPack.MinAqiIndex,
                jacdac.RegisterClientFlags.Const
            )
            this._maxAqiIndex = this.addRegister<[number]>(
                jacdac.AirQualityIndexReg.MaxAqiIndex,
                jacdac.AirQualityIndexRegPack.MaxAqiIndex,
                jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Air quality index, typically refreshed every second.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%airqualityindex aqi index (AQI)"
        //% blockId=jacdac_airqualityindex_aqi_index___get
        //% weight=100
        aqiIndex(): number {
            return this.reading()
        }

        /**
         * Error on the AQI measure.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        aqiIndexError(): number {
            this.start()
            const values = this._aqiIndexError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Minimum AQI reading, representing a good air quality. Typically 0.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        minAqiIndex(): number {
            this.start()
            const values = this._minAqiIndex.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Maximum AQI reading, representing a very poor air quality.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=97
        maxAqiIndex(): number {
            this.start()
            const values = this._maxAqiIndex.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the aqi index changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_airqualityindex_on_aqi_index_change
        //% block="on %airqualityindex aqi index changed by %threshold"
        //% weight=96
        //% threshold.min=0
        //% threshold.max=500
        //% threshold.defl=1
        onAqiIndexChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="air quality index1"
    export const airQualityIndex1 = new AirQualityIndexClient(
        "air Quality Index1"
    )
}
