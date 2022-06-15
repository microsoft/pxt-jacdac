namespace modules {
    /**
     * Detects the amount of light falling onto a given surface area.
     *
     * Note that this is different from _luminance_, the amount of light that passes through, emits from, or reflects off an object.
     **/
    //% fixedInstances blockGap=8
    export class IlluminanceClient extends jacdac.SimpleSensorClient {
        private readonly _illuminanceError: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(
                jacdac.SRV_ILLUMINANCE,
                role,
                jacdac.IlluminanceRegPack.Illuminance
            )

            this._illuminanceError = this.addRegister<[number]>(
                jacdac.IlluminanceReg.IlluminanceError,
                jacdac.IlluminanceRegPack.IlluminanceError,
                jacdac.RegisterClientFlags.Optional
            )
        }

        /**
         * The amount of illuminance, as lumens per square metre.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%illuminance illuminance (lux)"
        //% blockId=jacdac_illuminance_illuminance___get
        //% weight=100
        illuminance(): number {
            return this.reading()
        }

        /**
         * Error on the reported sensor value.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        illuminanceError(): number {
            this.start()
            const values = this._illuminanceError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the illuminance changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_illuminance_on_illuminance_change
        //% block="on %illuminance illuminance changed by %threshold (lux)"
        //% weight=98
        //% threshold.min=0
        //% threshold.max=100000
        //% threshold.defl=1
        onIlluminanceChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="illuminance1"
    export const illuminance1 = new IlluminanceClient("illuminance1")
}
