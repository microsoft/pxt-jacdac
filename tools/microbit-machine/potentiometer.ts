machine.addClientFactory(jacdac.SRV_POTENTIOMETER, devid => {
    const client = new modules.PotentiometerClient(devid)
    client.onReadingChangedBy(0.05, () => {
        const current = client.position()
        machine.plot(current, 100)
    })
})
