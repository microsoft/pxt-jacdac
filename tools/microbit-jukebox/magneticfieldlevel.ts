machine.addClientFactory(jacdac.SRV_MAGNETIC_FIELD_LEVEL, devid => {
    const client = new modules.MagneticFieldLevelClient(devid)
    client.onStrengthChangedBy(25, () => {
        const value = Math.abs(client.strength())
        machine.plot(value, 100)
    })
})
