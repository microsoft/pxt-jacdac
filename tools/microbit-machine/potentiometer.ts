machine.addClientFactory(jacdac.SRV_POTENTIOMETER, (devid, si) => {
    const client = new modules.PotentiometerClient(devid)
    client.onReadingChangedBy(1, () => {
        const current = client.position()
        led.plotBarGraph(current, 100)
    })
})
