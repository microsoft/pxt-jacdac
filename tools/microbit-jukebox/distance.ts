machine.addClientFactory(jacdac.SRV_DISTANCE, (devid, srvid, options) => {
    const client = new modules.DistanceClient(devid)
    client.onDistanceChangedBy(0.01, () => {
        const mx = 0.3
        const value = Math.clamp(0, mx, client.distance())
        machine.plot(value, mx, options)
    })
    return client
})
