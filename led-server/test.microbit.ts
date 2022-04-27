function start() {
    pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
    const server = new jacdac.LedServer(
        jacdac.LedVariant.Ring,
        24,
        jacdac.LedPixelLayout.RgbGrb,
        pixels => {
            console.log(pixels.toHex())
            ws2812b.sendBuffer(pixels, DigitalPin.P2)
        }
    )
    server.start()
}
start()
