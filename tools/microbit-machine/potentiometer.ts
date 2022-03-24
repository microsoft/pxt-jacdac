machine.addClientFactory(jacdac.SRV_POTENTIOMETER, devid => {
    const client = new modules.PotentiometerClient(devid)
    client.onReadingChangedBy(0.1, () => {
        const current = client.position()
        led.plotBarGraph(current, 100)
    })
})
