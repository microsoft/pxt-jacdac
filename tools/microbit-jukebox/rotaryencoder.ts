machine.addClientFactory(jacdac.SRV_ROTARY_ENCODER, (devid, srvid, options) => {
    const clicks = 12
    const client = new modules.RotaryEncoderClient(`${devid}:${srvid}`)
    let currentPosition = 0
    client.onPositionChanged(delta => {
        machine.microbit.emit(delta > 0 ? machine.EVENT_A : machine.EVENT_B)
        currentPosition += delta
        machine.plot(currentPosition % clicks, clicks, options)
    })
    return client
})
