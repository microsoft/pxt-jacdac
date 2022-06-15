namespace modules {
    /**
     * A soil moisture sensor.
     **/
    //% fixedInstances blockGap=8
    export class SoilMoistureClient extends jacdac.SimpleSensorClient {
        private readonly _moistureError: jacdac.RegisterClient<[number]>
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.SoilMoistureVariant]
        >

        constructor(role: string) {
            super(
                jacdac.SRV_SOIL_MOISTURE,
                role,
                jacdac.SoilMoistureRegPack.Moisture
            )

            this._moistureError = this.addRegister<[number]>(
                jacdac.SoilMoistureReg.MoistureError,
                jacdac.SoilMoistureRegPack.MoistureError,
                jacdac.RegisterClientFlags.Optional
            )
            this._variant = this.addRegister<[jacdac.SoilMoistureVariant]>(
                jacdac.SoilMoistureReg.Variant,
                jacdac.SoilMoistureRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Indicates the wetness of the soil, from `dry` to `wet`.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%soilmoisture moisture (\\%)"
        //% blockId=jacdac_soilmoisture_moisture___get
        //% weight=100
        moisture(): number {
            return this.reading() * 100
        }

        /**
         * The error on the moisture reading.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        moistureError(): number {
            this.start()
            const values = this._moistureError.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * Describe the type of physical sensor.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        variant(): jacdac.SoilMoistureVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the moisture changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_soilmoisture_on_moisture_change
        //% block="on %soilmoisture moisture changed by %threshold (\\%)"
        //% weight=97
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onMoistureChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="soil moisture1"
    export const soilMoisture1 = new SoilMoistureClient("soil Moisture1")
}
