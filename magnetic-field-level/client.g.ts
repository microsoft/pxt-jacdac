namespace modules {
    /**
     * A sensor that measures strength and polarity of magnetic field.
     **/
    //% fixedInstances blockGap=8
    export class MagneticFieldLevelClient extends jacdac.SimpleSensorClient {
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.MagneticFieldLevelVariant]
        >

        constructor(role: string) {
            super(
                jacdac.SRV_MAGNETIC_FIELD_LEVEL,
                role,
                jacdac.MagneticFieldLevelRegPack.Strength
            )

            this._variant = this.addRegister<
                [jacdac.MagneticFieldLevelVariant]
            >(
                jacdac.MagneticFieldLevelReg.Variant,
                jacdac.MagneticFieldLevelRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Indicates the strength of magnetic field between -1 and 1.
         * When no magnet is present the value should be around 0.
         * For analog sensors,
         * when the north pole of the magnet is on top of the module
         * and closer than south pole, then the value should be positive.
         * For digital sensors,
         * the value should either `0` or `1`, regardless of polarity.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%magneticfieldlevel strength (\\%)"
        //% blockId=jacdac_magneticfieldlevel_strength___get
        //% weight=100
        strength(): number {
            return this.reading() * 100
        }

        /**
         * Determines if the magnetic field is present.
         * If the event `active` is observed, `detected` is true; if `inactive` is observed, `detected` is false.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        detected(): boolean {
            // TODO: implement client register
            throw "client register not implement"
        }

        /**
         * Determines which magnetic poles the sensor can detected,
         * and whether or not it can measure their strength or just presence.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        variant(): jacdac.MagneticFieldLevelVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the strength changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_magneticfieldlevel_on_strength_change
        //% block="on %magneticfieldlevel strength changed by %threshold (\\%)"
        //% weight=97
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onStrengthChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler)
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Environment"
        //% blockId=jacdac_on_magneticfieldlevel_event
        //% block="on %magneticfieldlevel %event"
        //% weight=96
        onEvent(ev: jacdac.MagneticFieldLevelEvent, handler: () => void): void {
            this.registerEvent(ev, handler)
        }

        /**
         * Emitted when strong-enough magnetic field is detected.
         */
        //% group="Environment"
        //% weight=95
        onActive(handler: () => void): void {
            this.registerEvent(jacdac.MagneticFieldLevelEvent.Active, handler)
        }
        /**
         * Emitted when strong-enough magnetic field is no longer detected.
         */
        //% group="Environment"
        //% weight=94
        onInactive(handler: () => void): void {
            this.registerEvent(jacdac.MagneticFieldLevelEvent.Inactive, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="magnetic field level1"
    export const magneticFieldLevel1 = new MagneticFieldLevelClient(
        "magnetic Field Level1"
    )
}
