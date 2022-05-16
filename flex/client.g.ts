namespace modules {
    /**
     * A bending or deflection sensor.
     **/
    //% fixedInstances blockGap=8
    export class FlexClient extends jacdac.SimpleSensorClient {
        private readonly _length: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(jacdac.SRV_FLEX, role, jacdac.FlexRegPack.Bending)

            this._length = this.addRegister<[number]>(
                jacdac.FlexReg.Length,
                jacdac.FlexRegPack.Length,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * A measure of the bending.
         */
        //% callInDebugger
        //% group="Sensor"
        //% block="%flex bending (\\%)"
        //% blockId=jacdac_flex_bending___get
        //% weight=100
        bending(): number {
            return this.reading() * 100
        }

        /**
         * Length of the flex sensor
         */
        //% callInDebugger
        //% group="Sensor"
        //% weight=99
        length(): number {
            this.start()
            const values = this._length.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the bending changes by the given threshold value.
         */
        //% group="Sensor"
        //% blockId=jacdac_flex_on_bending_change
        //% block="on %flex bending changed by %threshold"
        //% weight=98
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onBendingChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="flex1"
    export const flex1 = new FlexClient("flex1")
}
