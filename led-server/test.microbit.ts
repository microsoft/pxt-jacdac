const N = 25
function start() {
    jacdac.startSelfServers(() => {
        pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
        const server = new jacdac.LedServer(
            N,
            jacdac.LedPixelLayout.RgbGrb,
            (pixels, brightness) => {
                led.toggle(0, 0)
                light.sendWS2812BufferWithBrightness(
                    pixels,
                    DigitalPin.P2,
                    brightness
                )
            },
            {
                variant: jacdac.LedVariant.Matrix,
                numColumns: 5,
            }
        )
        console.log("start servers")
        return [server]
    })
}
start()

let ki = 0
forever(() => {
    console.debug(`k` + ki)
    led.toggle(Math.idiv(ki, 5) % 5, ki % 5)
    const b = Math.abs(input.acceleration(Dimension.X)) / 10
    modules.led1.setBrightness(b)
    modules.led1.setPixelColor(ki++ % N, ki % 3 ? 0xff0000 : 0x0000ff)
    modules.led1.show()
    pause(20)
})
