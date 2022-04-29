namespace jacdac {
    export enum LedPixelLayout {
        RgbGrb = 1,
        Rgbw = 2,
        RgbRgb = 3,
    }

    export interface LedServerOptions extends jacdac.ServerOptions {
        /**
         * For matrix variant, number of columns
         */
        numColumns?: number
        /**
         * Initial maximum available power
         */
        maxPower?: number
        ledsPerPixel?: number
    }

    export class LedServer extends jacdac.Server {
        pixels: Buffer
        pixelLayout: LedPixelLayout
        rendered: Buffer
        numPixels: number
        numColumns: number
        ledsPerPixel: number
        brightness: number
        actualBrightness: number
        maxPower: number
        sendPixels: (pixels: Buffer, brightness: number) => void

        constructor(
            numPixels: number,
            pixelLayout: LedPixelLayout,
            sendPixels: (pixels: Buffer, brightness: number) => void,
            options?: LedServerOptions
        ) {
            super(jacdac.SRV_LED, options)

            this.numPixels = numPixels
            this.pixelLayout = pixelLayout
            this.sendPixels = sendPixels
            this.brightness = 0.2
            this.actualBrightness = this.brightness
            this.maxPower = options ? options.maxPower || 50 : 50
            this.numColumns = options ? options.numColumns : undefined
            this.ledsPerPixel = options ? options.ledsPerPixel : undefined

            this.pixels = control.createBuffer(this.numPixels * 3)
            this.rendered = control.createBuffer(this.numPixels * this.stride)
        }

        get stride() {
            return this.pixelLayout == LedPixelLayout.Rgbw ? 4 : 3
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.handleRegValue(
                pkt,
                jacdac.LedReg.NumPixels,
                jacdac.LedRegPack.NumPixels,
                this.numPixels
            )
            if (this.numColumns)
                this.handleRegValue(
                    pkt,
                    jacdac.LedReg.NumColumns,
                    jacdac.LedRegPack.NumColumns,
                    this.numColumns
                )
            if (this.ledsPerPixel)
                this.handleRegValue(
                    pkt,
                    jacdac.LedReg.LedsPerPixel,
                    jacdac.LedRegPack.LedsPerPixel,
                    this.ledsPerPixel
                )
            this.maxPower = this.handleRegValue(
                pkt,
                jacdac.LedReg.MaxPower,
                jacdac.LedRegPack.MaxPower,
                this.maxPower
            )
            this.brightness = this.handleRegValue(
                pkt,
                jacdac.LedReg.Brightness,
                jacdac.LedRegPack.Brightness,
                this.brightness
            )
            this.actualBrightness = this.brightness
            this.actualBrightness = this.handleRegValue(
                pkt,
                jacdac.LedReg.ActualBrightness,
                jacdac.LedRegPack.ActualBrightness,
                this.actualBrightness
            )
            this.handleRegBuffer(pkt, jacdac.LedReg.Pixels, this.pixels)
            this.show()
        }

        show() {
            if (!this.stateUpdated) return

            // render with brightness
            const b = Math.round(this.actualBrightness * 0xff) | 0

            // compute final color and reorder channels
            switch (this.pixelLayout) {
                case LedPixelLayout.RgbRgb: {
                    this.rendered.write(0, this.pixels)
                    break
                }
                case LedPixelLayout.RgbGrb: {
                    for (let k = 0; k < this.numPixels; k++) {
                        const i = k * 3
                        // red <- green
                        this.rendered[i] = this.pixels[i + 1]
                        // green <- red
                        this.rendered[i + 1] = this.pixels[i]
                        // blue <- blue
                        this.rendered[i + 2] = this.pixels[i + 2]
                    }
                    break
                }
                case LedPixelLayout.Rgbw: {
                    for (let k = 0; k < this.numPixels; k++) {
                        const pi = k * 3
                        const ri = k * 4
                        for (let j = 0; j < 3; j++) {
                            this.rendered[ri + j] = this.pixels[pi + j]
                        }
                        this.rendered[ri + 3] = b
                    }
                    break
                }
            }

            this.sendPixels(this.rendered, b)
            this.stateUpdated = false
        }
    }
}
