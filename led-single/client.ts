namespace modules {
    /**
     * A controller for 1 or more monochrome or RGB LEDs connected in parallel.
     **/
    //% fixedInstances blockGap=8
    export class LedSingleClient extends jacdac.Client {
        private readonly _color: jacdac.RegisterClient<[number, number, number]>
        private readonly _maxPower: jacdac.RegisterClient<[number]>
        private readonly _ledCount: jacdac.RegisterClient<[number]>
        private readonly _waveLength: jacdac.RegisterClient<[number]>
        private readonly _luminousIntensity: jacdac.RegisterClient<[number]>
        private readonly _variant: jacdac.RegisterClient<[jacdac.LedSingleVariant]>

        constructor(role: string) {
            super(jacdac.SRV_LED_SINGLE, role)

            this._color = this.addRegister<[number, number, number]>(
                jacdac.LedSingleReg.Color,
                jacdac.LedSingleRegPack.Color
            )
            this._maxPower = this.addRegister<[number]>(
                jacdac.LedSingleReg.MaxPower,
                jacdac.LedSingleRegPack.MaxPower
            )
            this._ledCount = this.addRegister<[number]>(
                jacdac.LedSingleReg.LedCount,
                jacdac.LedSingleRegPack.LedCount,
                jacdac.RegisterClientFlags.Const
            )
            this._waveLength = this.addRegister<[number]>(
                jacdac.LedSingleReg.WaveLength,
                jacdac.LedSingleRegPack.WaveLength,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._luminousIntensity = this.addRegister<[number]>(
                jacdac.LedSingleReg.LuminousIntensity,
                jacdac.LedSingleRegPack.LuminousIntensity,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._variant = this.addRegister<[jacdac.LedSingleVariant]>(
                jacdac.LedSingleReg.Variant,
                jacdac.LedSingleRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * The current LED color as an 24bit RGB color
         */
        //% callInDebugger
        //% group="Light"
        //% weight=100
        //% blockCombine block="color" blockSetVariable="led1"
        get color(): number {
            this.start()
            const values = this._color.pauseUntilValues() as any[]
            return values.length === 3
                ? ((values[0] & 0xff) << 16) |
                      ((values[1] & 0xff) << 8) |
                      (values[2] & 0xff)
                : 0
        }

        /**
         * The current red channel of LED color.
         */
        //% callInDebugger
        //% group="Light"
        //% weight=100
        //% blockCombine block="red" blockSetVariable="led1"
        get red(): number {
            this.start()
            const values = this._color.pauseUntilValues() as any[]
            return values[0] | 0
        }

        /**
         * The current green channel of LED color.
         */
        //% callInDebugger
        //% group="Light"
        //% weight=99
        //% blockCombine block="green" blockSetVariable="led1"
        get green(): number {
            this.start()
            const values = this._color.pauseUntilValues() as any[]
            return values[1] | 0
        }

        /**
         * The current blue channel of LED color.
         */
        //% callInDebugger
        //% group="Light"
        //% weight=98
        //% blockCombine block="blue" blockSetVariable="led1"
        get blue(): number {
            this.start()
            const values = this._color.pauseUntilValues() as any[]
            return values[2] | 0
        }

        /**
         * Limit the power drawn by the light-strip (and controller).
         */
        //% callInDebugger
        //% group="Light"
        //% weight=97
        maxPower(): number {
            this.start()
            const values = this._maxPower.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Limit the power drawn by the light-strip (and controller).
         */
        //% group="Light"
        //% weight=96
        //% value.defl=100
        setMaxPower(value: number) {
            this.start()
            const values = this._maxPower.values as any[]
            values[0] = value
            this._maxPower.values = values as [number]
        }

        /**
         * If known, specifies the number of LEDs in parallel on this device.
         */
        //% callInDebugger
        //% group="Light"
        //% weight=95
        ledCount(): number {
            this.start()
            const values = this._ledCount.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * If monochrome LED, specifies the wave length of the LED.
         */
        //% callInDebugger
        //% group="Light"
        //% weight=94
        waveLength(): number {
            this.start()
            const values = this._waveLength.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The luminous intensity of the LED, at full value, in micro candella.
         */
        //% callInDebugger
        //% group="Light"
        //% weight=93
        luminousIntensity(): number {
            this.start()
            const values = this._luminousIntensity.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The physical type of LED.
         */
        //% callInDebugger
        //% group="Light"
        //% weight=92
        variant(): jacdac.LedSingleVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Animates the LED to the given color. Leave speed to 0 to make the change instanuous.
         */
        //% group="Light"
        //% blockId=jacdac_led_animate_cmd
        //% block="animate %led to %color at speed %speed"
        //% weight=91
        //% color.shadow="colorNumberPicker"
        //% speed.min=0
        //% speed.max=100
        animate(color: number, speed: number): void {
            this.start()
            const r = (color >> 16) & 0xff
            const g = (color >> 8) & 0xff
            const b = color & 0xff
            const s =
                speed <= 0 ? 0 : speed >= 100 ? 0 : ((speed / 100) * 0xff) | 0
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.LedSingleCmd.Animate,
                    jacdac.LedSingleCmdPack.Animate,
                    [r, g, b, s]
                )
            )
        }
    }
    //% fixedInstance whenUsed weight=1 block="led1"
    export const ledSingle1 = new LedSingleClient("led single1")
}
