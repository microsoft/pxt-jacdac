namespace modules {
    /**
     * A sensor measuring water acidity, commonly called pH.
     **/
    //% fixedInstances blockGap=8
    export class AcidityClient extends jacdac.SimpleSensorClient {
        private readonly _acidityError: jacdac.RegisterClient<[number]>
        private readonly _minAcidity: jacdac.RegisterClient<[number]>
        private readonly _maxHumidity: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(jacdac.SRV_ACIDITY, role, jacdac.AcidityRegPack.Acidity)

            this._acidityError = this.addRegister<[number]>(
                jacdac.AcidityReg.AcidityError,
                jacdac.AcidityRegPack.AcidityError
            )
            this._minAcidity = this.addRegister<[number]>(
                jacdac.AcidityReg.MinAcidity,
                jacdac.AcidityRegPack.MinAcidity
            )
            this._maxHumidity = this.addRegister<[number]>(
                jacdac.AcidityReg.MaxHumidity,
                jacdac.AcidityRegPack.MaxHumidity
            )
        }

        /**
         * The acidity, pH, of water.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%acidity acidity"
        //% blockId=jacdac_acidity_acidity___get
        //% weight=100
        acidity(): number {
            return this.reading()
        }

        /**
         * Error on the acidity reading.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        acidityError(): number {
            this.start()
            const values = this._acidityError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Lowest acidity that can be reported.
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=98
        minAcidity(): number {
            this.start()
            const values = this._minAcidity.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Highest acidity that can be reported.
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
         * Run code when the acidity changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_acidity_on_acidity_change
        //% block="on %acidity acidity changed by %threshold"
        //% weight=96
        //% threshold.min=0
        //% threshold.max=10.5
        //% threshold.defl=1
        onAcidityChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="acidity1"
    export const acidity1 = new AcidityClient("acidity1")
}
