machine.addClientFactory(jacdac.SRV_DISTANCE, (devid, srvid, options) => {
    const client = new modules.DistanceClient(devid)
    client.onDistanceChangedBy(0.05, () => {
        const value = client.distance()
        machine.plot(value, 1, options)
    })
    return client
})
