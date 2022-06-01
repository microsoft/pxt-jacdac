machine.addClientFactory(jacdac.SRV_ROTARY_ENCODER, devid => {
    const client = new modules.RotaryEncoderClient(devid)
    let currentPosition = client.position()
    if (!currentPosition) currentPosition = 0
    client.onPositionChanged(() => {
        let clicks = client.clicksPerTurn()
        clicks = clicks ? clicks : 24
        const newPosition = client.position()
        machine.microbit.emit(
            currentPosition < newPosition ? machine.EVENT_A : machine.EVENT_B
        )
        currentPosition = newPosition
        machine.plot(newPosition % clicks, clicks)
    })
})
