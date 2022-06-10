machine.addClientFactory(jacdac.SRV_BUZZER, devid => {
    const client = new modules.BuzzerClient(devid)
    machine.microbit.onClient(client, machine.EVENT_TONE, () => {
        const tone = machine.microbit.tone
        client.playTone(tone, 100)
    })
    return client
})
