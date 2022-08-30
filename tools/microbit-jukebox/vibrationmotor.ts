machine.addClientFactory(jacdac.SRV_VIBRATION_MOTOR, (devid, srvid) => {
    const client = new modules.VibrationMotorClient(`${devid}:${srvid}`)
    machine.microbit.onClient(client, machine.EVENT_A, () => {
        client.vibrate(200, 100)
    })
    machine.microbit.onClient(client, machine.EVENT_B, () => {
        client.vibrate(400, 60)
    })
    machine.microbit.onClient(client, machine.EVENT_TONE, () => {
        const tone = Math.abs(machine.microbit.tone)
        const d = Math.clamp(20, 100, pins.map(tone, 400, 2000, 20, 100))
        const f = Math.clamp(40, 100, pins.map(tone, 400, 2000, 40, 100))
        client.vibrate(d, f)
    })
    return client
})
