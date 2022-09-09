machine.addClientFactory(jacdac.SRV_ACCELEROMETER, (devid, srvi) => {
    const client = new modules.AccelerometerClient(`${devid}:${srvi}`)
    client.onFaceDown(() => basic.showIcon(IconNames.Sad,0))
    client.onFaceUp(() => basic.showIcon(IconNames.Happy,0))
    client.onTiltLeft(() => basic.showArrow(ArrowNames.West))
    client.onTiltRight(() => basic.showArrow(ArrowNames.East))
    client.onTiltUp(() => basic.showArrow(ArrowNames.North))
    client.onTiltDown(() => basic.showArrow(ArrowNames.South))
    return client
})
