machine.addClientFactory(jacdac.SRV_TEMPERATURE, (devid, srvid) => {
    const client = new modules.TemperatureClient(`${devid}:${srvid}`)
    client.onTemperatureChangedBy(1, () => {
        const value = client.temperature()
        machine.showNumber(IconNames.House, value)
    })
    return client
})
