machine.addClientFactory(jacdac.SRV_VIBRATION_MOTOR, (devid, srvid) => {
    const client = new modules.VibrationMotorClient(`${devid}:${srvid}`)
    machine.microbit.onClient(client, machine.EVENT_TONE, () => {
        const tone = machine.microbit.tone
        client.vibrate(tone, 100)
    })
    return client
})
