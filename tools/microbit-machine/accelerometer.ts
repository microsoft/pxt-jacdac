machine.addClientFactory(jacdac.SRV_ACCELEROMETER, devid => {
    const client = new modules.AccelerometerClient(devid)

    client.onFaceDown(() => basic.showIcon(IconNames.SadFace,0))
    client.onFaceUp(() => basic.showIcon(IconNames.HappyFace,0))
})
