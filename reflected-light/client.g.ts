namespace modules {
    /**
     * A sensor that detects light and dark surfaces, commonly used for line following robots.
     **/
    //% fixedInstances blockGap=8
    export class ReflectedLightClient extends jacdac.SimpleSensorClient {
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.ReflectedLightVariant]
        >

        constructor(role: string) {
            super(
                jacdac.SRV_REFLECTED_LIGHT,
                role,
                jacdac.ReflectedLightRegPack.Brightness
            )

            this._variant = this.addRegister<[jacdac.ReflectedLightVariant]>(
                jacdac.ReflectedLightReg.Variant,
                jacdac.ReflectedLightRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Reports the reflected brightness. It may be a digital value or, for some sensor, analog value.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%reflectedlight brightness (\\%)"
        //% blockId=jacdac_reflectedlight_brightness___get
        //% weight=100
        brightness(): number {
            return this.reading() * 100
        }

        /**
         * Type of physical sensor used
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        variant(): jacdac.ReflectedLightVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the brightness changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_reflectedlight_on_brightness_change
        //% block="on %reflectedlight brightness changed by %threshold (\\%)"
        //% weight=98
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onBrightnessChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="reflected light1"
    export const reflectedLight1 = new ReflectedLightClient("reflected Light1")
}
