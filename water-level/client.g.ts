namespace modules {
    /**
     * A sensor that measures liquid/water level.
     **/
    //% fixedInstances blockGap=8
    export class WaterLevelClient extends jacdac.SimpleSensorClient {
        private readonly _levelError: jacdac.RegisterClient<[number]>
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.WaterLevelVariant]
        >

        constructor(role: string) {
            super(jacdac.SRV_WATER_LEVEL, role, jacdac.WaterLevelRegPack.Level)

            this._levelError = this.addRegister<[number]>(
                jacdac.WaterLevelReg.LevelError,
                jacdac.WaterLevelRegPack.LevelError,
                jacdac.RegisterClientFlags.Optional
            )
            this._variant = this.addRegister<[jacdac.WaterLevelVariant]>(
                jacdac.WaterLevelReg.Variant,
                jacdac.WaterLevelRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * The reported water level.
         */
        //% callInDebugger
        //% group="Water level"
        //% block="%waterlevel level"
        //% blockId=jacdac_waterlevel_level___get
        //% weight=100
        level(): number {
            return this.reading() * 100
        }

        /**
         * The error rage on the current reading
         */
        //% callInDebugger
        //% group="Water level"
        //% weight=99
        levelError(): number {
            this.start()
            const values = this._levelError.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * The type of physical sensor.
         */
        //% callInDebugger
        //% group="Water level"
        //% weight=98
        variant(): jacdac.WaterLevelVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the level changes by the given threshold value.
         */
        //% group="Water level"
        //% blockId=jacdac_waterlevel_on_level_change
        //% block="on %waterlevel level changed by %threshold"
        //% weight=97
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onLevelChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="water level1"
    export const waterLevel1 = new WaterLevelClient("water Level1")
}
