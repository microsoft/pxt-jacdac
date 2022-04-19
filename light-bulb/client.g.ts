namespace modules {
    /**
     * A light bulb controller.
     **/
    //% fixedInstances blockGap=8
    export class LightBulbClient extends jacdac.Client {
        private readonly _brightness: jacdac.RegisterClient<[number]>
        private readonly _dimmable: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(jacdac.SRV_LIGHT_BULB, role)

            this._brightness = this.addRegister<[number]>(
                jacdac.LightBulbReg.Brightness,
                jacdac.LightBulbRegPack.Brightness
            )
            this._dimmable = this.addRegister<[boolean]>(
                jacdac.LightBulbReg.Dimmable,
                jacdac.LightBulbRegPack.Dimmable,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
         */
        //% callInDebugger
        //% group="Light"
        //% block="%lightbulb brightness"
        //% blockId=jacdac_lightbulb_brightness___get
        //% weight=100
        brightness(): number {
            this.start()
            const values = this._brightness.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
         */
        //% group="Light"
        //% blockId=jacdac_lightbulb_brightness___set
        //% block="set %lightbulb brightness to %value"
        //% weight=99
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setBrightness(value: number) {
            this.start()
            const values = this._brightness.values as any[]
            values[0] = value / 100
            this._brightness.values = values as [number]
        }

        /**
         * Indicates if the light supports dimming.
         */
        //% callInDebugger
        //% group="Light"
        //% weight=98
        dimmable(): boolean {
            this.start()
            const values = this._dimmable.pauseUntilValues() as any[]
            return !!values[0]
        }
    }
    //% fixedInstance whenUsed weight=1 block="light bulb1"
    export const lightBulb1 = new LightBulbClient("light Bulb1")
}
