const pattern = [0x000000, 0xff0000, 0x00ff00, 0x0000ff]

machine.addClientFactory(jacdac.SRV_LED, (devid, srvid) => {
    const client = new modules.LedClient(`${devid}:${srvid}`)

    machine.microbit.onClient(client, machine.EVENT_A, () => {
        client.rotate(1)
    })

    machine.microbit.onClient(client, machine.EVENT_B, () => {
        client.rotate(-1)
    })

    machine.microbit.onClient(client, machine.VALUE_CHANGE, (value: number) => {
        client.setBrightness(value)
    })

    machine.microbit.onClient(client, machine.EVENT_AB, () => {
        const numPixels = client.numPixels()
        let j = 0
        for (let i = 0; i < numPixels; i++) {
            client.setPixelColor(i, pattern[j])
            j++
            if (j === pattern.length) j = 0
        }
    })

    const n = Math.min(client.numPixels() >> 1, 3)
    for (let i = 0; i < n; i++) client.setPixelColor(i, 0x000f00)
    return client
})
