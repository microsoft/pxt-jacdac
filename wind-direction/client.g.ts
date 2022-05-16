namespace modules {
    /**
     * A sensor that measures wind direction.
     **/
    //% fixedInstances blockGap=8
    export class WindDirectionClient extends jacdac.SimpleSensorClient {
        private readonly _windDirectionError: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(
                jacdac.SRV_WIND_DIRECTION,
                role,
                jacdac.WindDirectionRegPack.WindDirection
            )

            this._windDirectionError = this.addRegister<[number]>(
                jacdac.WindDirectionReg.WindDirectionError,
                jacdac.WindDirectionRegPack.WindDirectionError,
                jacdac.RegisterClientFlags.Optional
            )
        }

        /**
         * The direction of the wind.
         */
        //% callInDebugger
        //% group="Environment"
        //% block="%winddirection wind direction (°)"
        //% blockId=jacdac_winddirection_wind_direction___get
        //% weight=100
        windDirection(): number {
            return this.reading()
        }

        /**
         * Error on the wind direction reading
         */
        //% callInDebugger
        //% group="Environment"
        //% weight=99
        windDirectionError(): number {
            this.start()
            const values = this._windDirectionError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the wind direction changes by the given threshold value.
         */
        //% group="Environment"
        //% blockId=jacdac_winddirection_on_wind_direction_change
        //% block="on %winddirection wind direction changed by %threshold"
        //% weight=98
        //% threshold.min=0
        //% threshold.max=359
        //% threshold.defl=1
        onWindDirectionChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="wind direction1"
    export const windDirection1 = new WindDirectionClient("wind Direction1")
}
