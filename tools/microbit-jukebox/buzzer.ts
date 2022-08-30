machine.addClientFactory(jacdac.SRV_BUZZER, (devid, srvid) => {
    const client = new modules.BuzzerClient(`${devid}:${srvid}`)
    machine.microbit.onClient(client, machine.EVENT_TONE, () => {
        const tone = machine.microbit.tone
        client.playTone(tone, 100)
    })
    return client
})
