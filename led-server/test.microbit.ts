function start() {
    pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
    const server = new jacdac.LedServer(
        jacdac.LedVariant.Ring,
        24,
        jacdac.LedPixelLayout.RgbGrb,
        (pixels, brightness) => {
            led.toggle(0,0)
            light.sendWS2812BufferWithBrightness(
                pixels,
                DigitalPin.P2,
                brightness
            )
        }
    )
    server.start()
}
start()

let ki = 0
forever(() => {
    const led = modules.led1
    const b = Math.abs(input.acceleration(Dimension.X)) / 10
    led.setBrightness(b)
    led.setPixelColor(ki++ % 24, (ki % 3) ? 0xff0000 : 0x0000ff)
    led.show()
    pause(20)
})