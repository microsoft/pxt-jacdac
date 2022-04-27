function start() {
    const server = new jacdac.LedServer(
        jacdac.LedVariant.Ring,
        24,
        jacdac.LedPixelLayout.RgbBrg,
        pixels => {
            console.log(pixels.toHex())
        }
    )
    server.start()
}
start()
