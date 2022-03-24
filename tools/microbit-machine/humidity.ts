machine.addClientFactory(jacdac.SRV_HUMIDITY, devid => {
    const client = new modules.HumidityClient(devid)
    client.onHumidityChangedBy(5, () => {
        const reading = client.humidity()
        machine.showNumber(IconNames.Umbrella, reading)
    })
})
