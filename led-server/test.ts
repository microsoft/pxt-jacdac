function start() {
    const server = new servers.LedServer(24, jacdac.LedVariant.Ring, pixels => {})
    server.start()
}
start()