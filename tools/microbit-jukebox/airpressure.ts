machine.addClientFactory(jacdac.SRV_AIR_PRESSURE, devid => {
    const client = new modules.AirPressureClient(devid)
    client.onPressureChangedBy(5, () => {
        const reading = client.pressure()
        machine.showNumber(IconNames.Chessboard, reading)
    })
    return client
})
