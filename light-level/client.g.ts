namespace modules {
    /**
     * A sensor that measures luminosity level.
     **/
    //% fixedInstances blockGap=8
    export class LightLevelClient extends jacdac.SimpleSensorClient {
        private readonly _lightLevelError: jacdac.RegisterClient<[number]>
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.LightLevelVariant]
        >

        constructor(role: string) {
            super(
                jacdac.SRV_LIGHT_LEVEL,
                role,
                jacdac.LightLevelRegPack.LightLevel
            )

            this._lightLevelError = this.addRegister<[number]>(
                jacdac.LightLevelReg.LightLevelError,
                jacdac.LightLevelRegPack.LightLevelError,
                jacdac.RegisterClientFlags.Optional
            )
            this._variant = this.addRegister<[jacdac.LightLevelVariant]>(
                jacdac.LightLevelReg.Variant,
                jacdac.LightLevelRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Detect light level
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%lightlevel light level (\\%)"
        //% blockId=jacdac_lightlevel_light_level___get
        //% weight=100
        lightLevel(): number {
            return this.reading() * 100
        }

        /**
         * Absolute estimated error of the reading value
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        lightLevelError(): number {
            this.start()
            const values = this._lightLevelError.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * The type of physical sensor.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        variant(): jacdac.LightLevelVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the light level changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_lightlevel_on_light_level_change
        //% block="on %lightlevel light level changed by %threshold (\\%)"
        //% weight=97
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onLightLevelChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="light level1"
    export const lightLevel1 = new LightLevelClient("light Level1")

    //% fixedInstance whenUsed weight=2 block="light level2"
    export const lightLevel2 = new LightLevelClient("light Level2")
}
