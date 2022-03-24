machine.addClientFactory(jacdac.SRV_ROTARY_ENCODER, devid => {
    const client = new modules.RotaryEncoderClient(devid)
    client.onPositionChangedBy(() => {
        let clicks = client.clicksPerTurn()
        clicks = clicks ? clicks : 24
        const current = client.position() % clicks
        machine.plot(current, clicks)
    })
})
