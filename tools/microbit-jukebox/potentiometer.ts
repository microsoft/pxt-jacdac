machine.addClientFactory(jacdac.SRV_POTENTIOMETER, devid => {
    const client = new modules.PotentiometerClient(devid)
    client.onPositionChangedBy(5, () => {
        const current = client.position()
        machine.plot(current, 100)
    })
})
