machine.addClientFactory(jacdac.SRV_ROTARY_ENCODER, devid => {
    const client = new modules.RotaryEncoderClient(devid)
    client.onPositionChangedBy(5, () => {
        const current = client.position()
        led.plotBarGraph(current, 100)
    })
})
