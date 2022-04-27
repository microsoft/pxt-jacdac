namespace servers {
    export class LedServer extends jacdac.Server {
        pixels: Buffer
        rendered: Buffer
        numPixels: number
        brightness: number
        actualBrightness: number
        maxPower: number
        sendPixels: (pixels: Buffer) => void

        constructor(
            numPixels: number,
            variant: jacdac.LedVariant,
            sendPixels: (pixels: Buffer) => void
        ) {
            super(jacdac.SRV_LED, { variant: variant })

            this.numPixels = numPixels
            this.sendPixels = sendPixels
            this.brightness = 0.2
            this.actualBrightness = this.brightness

            this.pixels = control.createBuffer(this.numPixels * 3)
            this.rendered = control.createBuffer(this.numPixels * 3)
            this.maxPower = 50
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.handleRegFormat(
                pkt,
                jacdac.LedReg.NumPixels,
                jacdac.LedRegPack.NumPixels,
                [this.numPixels]
            )
            this.maxPower = this.handleRegUInt32(
                pkt,
                jacdac.LedReg.MaxPower,
                this.maxPower
            )
            this.brightness = this.handleRegFormat(
                pkt,
                jacdac.LedReg.Brightness,
                jacdac.LedRegPack.Brightness,
                [this.brightness]
            )[0]
            this.actualBrightness = this.brightness
            this.actualBrightness = this.handleRegFormat(
                pkt,
                jacdac.LedReg.ActualBrightness,
                jacdac.LedRegPack.ActualBrightness,
                [this.actualBrightness]
            )[0]
            this.handleRegBuffer(pkt, jacdac.LedReg.Pixels, this.pixels)
            this.show()
        }

        show() {
            if (this.stateUpdated) {
                // render with brightness
                const b = Math.round(this.actualBrightness * 0xff) | 0
                const n = this.rendered.length
                for (let i = 0; i < n; ++i) {
                    this.rendered[i] = Math.idiv(
                        Math.imul(this.pixels[i], b),
                        0xff
                    )
                }
                this.sendPixels(this.rendered)
                this.stateUpdated = false
            }
        }
    }
}
