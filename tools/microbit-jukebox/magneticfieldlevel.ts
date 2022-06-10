machine.addClientFactory(jacdac.SRV_MAGNETIC_FIELD_LEVEL, (devid, srvid, options) => {
    const client = new modules.MagneticFieldLevelClient(devid)
    client.onStrengthChangedBy(5, () => {
        const value = client.strength()
        machine.plot(value, 100, options)
    })
    return client
})
