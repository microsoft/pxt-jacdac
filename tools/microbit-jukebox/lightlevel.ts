machine.addClientFactory(jacdac.SRV_LIGHT_LEVEL, (devid, srvid, options) => {
    const client = new modules.LightLevelClient(`${devid}:${srvid}`)
    client.onLightLevelChangedBy(20, () => {
        machine.plot(client.lightLevel(), 100, options)
    })
    return client
})
