namespace modules {
    //% fixedInstances
    //% blockGap=8
    export class LedDisplayClient extends jacdac.Client {
        private _localPixels: Buffer = new Buffer[64 * 3]                 // maximum size (may be reduced on call to show)
        private readonly _pixels: jacdac.RegisterClient<[Buffer]>
        private readonly _brightness: jacdac.RegisterClient<[number]>
        private readonly _actualBrightness: jacdac.RegisterClient<[number]>
        private readonly _lightType: jacdac.RegisterClient<
            [jacdac.LedDisplayLightType]
        >
        private readonly _numPixels: jacdac.RegisterClient<[number]>
        private readonly _numColumns: jacdac.RegisterClient<[number]>
        private readonly _maxPower: jacdac.RegisterClient<[number]>
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.LedDisplayVariant]
        >

        constructor(role: string) {
            super(jacdac.SRV_LED_DISPLAY, role)

            this._pixels = this.addRegister<[Buffer]>(
                jacdac.LedDisplayReg.Pixels,
                "b"
            )
            this._brightness = this.addRegister<[number]>(
                jacdac.LedDisplayReg.Brightness,
                "u0.8"
            )
            this._actualBrightness = this.addRegister<[number]>(
                jacdac.LedDisplayReg.ActualBrightness,
                "u0.8"
            )
            this._lightType = this.addRegister<[jacdac.LedDisplayLightType]>(
                jacdac.LedDisplayReg.LightType,
                "u8"
            )
            this._numPixels = this.addRegister<[number]>(
                jacdac.LedDisplayReg.NumPixels,
                "u16"
            )
            this._numColumns = this.addRegister<[number]>(
                jacdac.LedDisplayReg.NumColumns,
                "u16"
            )
            this._maxPower = this.addRegister<[number]>(
                jacdac.LedDisplayReg.MaxPower,
                "u16"
            )
        }

        /**
         * Set the luminosity of the strip.
         * At `0` the power to the strip is completely shut down.
         */
        //% callInDebugger
        //% group="LED Display"
        //% block="%leddisplay brightness"
        //% blockId=jacdac_leddisplay_brightness___get
        //% weight=100
        brightness(): number {
            this.start()
            const values = this._brightness.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * Set the luminosity of the strip.
         * At `0` the power to the strip is completely shut down.
         */
        //% group="LED Display"
        //% blockId=jacdac_leddisplay_brightness___set
        //% block="set %leddisplay brightness to %value"
        //% weight=99
        //% value.min=0
        //% value.max=100
        //% value.defl=0.05
        setBrightness(value: number) {
            this.start()
            const values = this._brightness.values as any[]
            values[0] = value / 100
            this._brightness.values = values as [number]
        }

        /**
         * This is the luminosity actually applied to the strip.
         * May be lower than `brightness` if power-limited by the `max_power` register.
         * It will rise slowly (few seconds) back to `brightness` is limits are no longer required.
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=98
        actualBrightness(): number {
            this.start()
            const values = this._actualBrightness.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * Gets the pixel color buffer, where every pixel color is encoded as a 24 bit RGB color.
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=98
        pixels(): Buffer {
            this.start()
            const values = this._pixels.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Sets the pixel color buffer, where every pixel color is encoded as a 24 bit RGB color.
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=98
        setPixels(pixels: Buffer) {
            if (!pixels) return;
            this._localPixels = pixels;
        }

        show() {
            this.start()
            const numPixels = this.numPixels()
            if (numPixels > 0 && numPixels * 3 !== this._localPixels.length) {
                // create a new buffer of the correct length and copy over
                const newBuf = new Buffer[numPixels * 3]
                newBuf.write(0, this._localPixels)
                this._localPixels = newBuf
            }
            this._pixels.values = [this._localPixels] as [Buffer];
        }

        /**
         * Specifies the type of light strip connected to controller.
         * Controllers which are sold with lights should default to the correct type
         * and could not allow change.
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=97
        lightType(): jacdac.LedDisplayLightType {
            this.start()
            const values = this._lightType.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Specifies the number of pixels in the strip.
         * Controllers which are sold with lights should default to the correct length
         * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=95
        //% blockId=jacdac_leddisplay_numpixels___get
        //% block="%leddisplay number of pixels"
        numPixels(): number {
            this.start()
            const values = this._numPixels.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * If the LED pixel strip is a matrix, specifies the number of columns. Otherwise, a square shape is assumed. Controllers which are sold with lights should default to the correct length
         * and could not allow change. Increasing length at runtime leads to ineffective use of memory and may lead to controller reboot.
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=93
        numColumns(): number {
            this.start()
            const values = this._numColumns.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Limit the power drawn by the light-strip (and controller).
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=91
        maxPower(): number {
            this.start()
            const values = this._maxPower.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Limit the power drawn by the light-strip (and controller).
         */
        //% group="LED Display"
        //% weight=90
        //% value.defl=200
        setMaxPower(value: number) {
            this.start()
            const values = this._maxPower.values as any[]
            values[0] = value
            this._maxPower.values = values as [number]
        }

        /**
         * Specifies the shape of the light strip.
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=86
        variant(): jacdac.LedDisplayVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Set a single of the pixels on the strip to one RGB color.
         * @param rgb RGB color of the LED
         */
        //% blockId="jacdac_leddisplay_set_pixel_color" block="set %display color at %index pixels to %rgb=colorNumberPicker"
        //% weight=81 blockGap=8
        //% group="LED Display"
        setPixelColor(index: number, rgb: number) {
            index = index | 0
            const pixels = this._localPixels;
            if (!pixels) return
            if (index >= 0 && (index + 1) * 3 <= pixels.length) {
                pixels[index * 3] = (rgb >> 16) & 0xff
                pixels[index * 3 + 1] = (rgb >> 8) & 0xff
                pixels[index * 3 + 2] = rgb & 0xff
            }
        }

        /**
         * Set all of the pixels on the strip to one RGB color.
         * @param rgb RGB color of the LED
         */
        //% blockId="jacdac_leddisplay_set_strip_color" block="set %display all pixels to %rgb=colorNumberPicker"
        //% weight=80 blockGap=8
        //% group="LED Display"
        setAll(rgb: number) {
            const pixels = this._localPixels;
            if (!pixels) return
            const r = (rgb >> 16) & 0xff
            const g = (rgb >> 8) & 0xff
            const b = (rgb >> 0) & 0xff
            for(let i = 0; i + 2 < pixels.length; i += 3) {
                pixels[i] = r
                pixels[i + 1] = g
                pixels[i + 2] = b
            }
        }

        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="jacdac_leddisplay_shift" block="shift %display pixels by %offset" blockGap=8
        //% weight=40
        //% group="LED Display"
        shift(offset: number = 1): void {
            offset = offset >> 0;
            const stride = 3;
            const pixels = this._localPixels;
            if (!pixels) return
            pixels.shift(-offset * stride)
        }

        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="jacdac_leddisplay_rotate" block="rotate %display pixels by %offset" blockGap=8
        //% weight=39
        //% parts="neopixel"
        rotate(offset: number = 1): void {
            offset = offset >> 0;
            const stride = 3;
            const pixels = this._localPixels
            if (!pixels) return
            pixels.rotate(-offset * stride)
        }
    }

    //% fixedInstance whenUsed
    export const ledDisplay1 = new LedDisplayClient("ledDisplay 1")
}
