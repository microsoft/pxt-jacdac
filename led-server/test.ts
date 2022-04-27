function start() {
    const server = new jacdac.LedServer(
        jacdac.LedVariant.Ring,
        24,
        jacdac.LedPixelLayout.RgbGrb,
        pixels => {
            console.log(pixels.toHex())
        }
    )
    server.start()
}
start()
