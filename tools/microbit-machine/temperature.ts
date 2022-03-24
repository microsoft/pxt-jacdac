machine.addClientFactory(jacdac.SRV_TEMPERATURE, devid => {
    const client = new modules.TemperatureClient(devid)
    client.onTemperatureChangedBy(1, () => {
        const value = client.temperature()
        machine.showNumber(IconNames.House, value)
    })
})
