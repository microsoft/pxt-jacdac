machine.addClientFactory(jacdac.SRV_LIGHT_LEVEL, devid => {
    const client = new modules.LightLevelClient(devid)
    client.onLightLevelChangedBy(20, () => {
        machine.plot(client.lightLevel(), 100)
    })
})
