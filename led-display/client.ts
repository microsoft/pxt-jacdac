namespace modules {
    //% fixedInstances
    //% blockGap=8
    export class LedDisplayClient extends jacdac.Client {
        private _dirty = false
        private _localPixels: Buffer
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
        private _autoShow = true
        private _autoShowUnsub: () => void
        private _lastShow = 0

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

            // maximum size (may be reduced on call to show)
            this._localPixels = Buffer.create(
                jacdac.CONST_LED_DISPLAY_MAX_PIXELS_LENGTH * 3
            )
        }

        /**
         * Turn on/off the ability to automatically show changes. If false, the user must call 'show'.
         * @param value
         */
        setAutoShow(value: boolean) {
            this._autoShow = !!value
            if (this._autoShow) this.show()
            else this.stopAutoShow()
        }

        private startAutoShow() {
            if (this._autoShowUnsub) return
            this._autoShowUnsub = jacdac.bus.subscribeRefresh(() =>
                this.refresh()
            )
            this.on(jacdac.DISCONNECT, () => this.stopAutoShow())
            this.show()
        }
        private stopAutoShow() {
            const unsub = this._autoShowUnsub
            this._autoShowUnsub = undefined
            if (unsub) unsub()
        }
        private setDirty() {
            if (!this._dirty) {
                this._dirty = true
                if (!this._autoShowUnsub) this.startAutoShow()
            }
        }
        private refresh() {
            if (this._dirty) {
                this.show()
            }
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
         * Sets the local pixel color buffer, where every pixel color is encoded as a 24 bit RGB color.
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=98
        setPixels(pixels: Buffer) {
            if (!pixels) return
            this._localPixels = pixels
            this.setDirty()
        }

        /**
         * Sends the local pixel buffer to device immediately, instead of waiting for the rendering loop
         */
        //% callInDebugger
        //% group="LED Display"
        //% weight=98
        show() {
            this.start()
            const numPixels = this.numPixels()
            if (numPixels > 0 && numPixels * 3 !== this._localPixels.length) {
                // create a new buffer of the correct length and copy over
                const newBuf = Buffer.create(numPixels * 3)
                newBuf.write(0, this._localPixels)
                this._localPixels = newBuf
            }
            this._pixels.values = [this._localPixels] as [Buffer]
            this._dirty = false
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
         * You need to call ``show`` to make the changes visible.
         * @param rgb RGB color of the LED
         */
        //% blockId="jacdac_leddisplay_set_pixel_color" block="set %display color at %index pixels to %rgb=colorNumberPicker"
        //% weight=81 blockGap=8
        //% group="LED Display"
        setPixelColor(index: number, rgb: number) {
            index = index | 0
            const pixels = this._localPixels
            if (!pixels) return
            if (index >= 0 && (index + 1) * 3 <= pixels.length) {
                const r = (rgb >> 16) & 0xff
                const g = (rgb >> 8) & 0xff
                const b = rgb & 0xff
                const k = index * 3
                if (
                    pixels[k] != r ||
                    pixels[k + 1] != g ||
                    pixels[k + 2] != b
                ) {
                    pixels[k] = r
                    pixels[k + 1] = g
                    pixels[k + 2] = b
                    this.setDirty()
                }
            }
        }

        /**
         * Set all of the pixels on the strip to one RGB color.
         * You need to call ``show`` to make the changes visible.
         * @param rgb RGB color of the LED
         */
        //% blockId="jacdac_leddisplay_set_strip_color" block="set %display all pixels to %rgb=colorNumberPicker"
        //% weight=80 blockGap=8
        //% group="LED Display"
        setAll(rgb: number) {
            const pixels = this._localPixels
            if (!pixels) return
            const r = (rgb >> 16) & 0xff
            const g = (rgb >> 8) & 0xff
            const b = (rgb >> 0) & 0xff
            let dirty = this._dirty
            for (let i = 0; i + 2 < pixels.length; i += 3) {
                dirty =
                    dirty ||
                    pixels[i] != r ||
                    pixels[i + 1] != g ||
                    pixels[i + 2] != b
                pixels[i] = r
                pixels[i + 1] = g
                pixels[i + 2] = b
            }
            if (dirty) this.setDirty()
        }

        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="jacdac_leddisplay_shift" block="shift %display pixels by %offset" blockGap=8
        //% weight=40
        //% group="LED Display"
        shift(offset = 1): void {
            offset = offset >> 0
            if (!offset) return
            const stride = 3
            const pixels = this._localPixels
            if (!pixels) return
            pixels.shift(-offset * stride)
            this.setDirty()
        }

        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="jacdac_leddisplay_rotate" block="rotate %display pixels by %offset" blockGap=8
        //% weight=39
        //% parts="neopixel"
        rotate(offset = 1): void {
            offset = offset >> 0
            if (!offset) return
            const stride = 3
            const pixels = this._localPixels
            if (!pixels) return
            pixels.rotate(-offset * stride)
            this.setDirty()
        }
    }

    //% fixedInstance whenUsed
    export const ledDisplay1 = new LedDisplayClient("ledDisplay 1")
}
