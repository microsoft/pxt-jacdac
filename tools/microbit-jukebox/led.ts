const pattern = [0x000000, 0xff0000, 0x00ff00, 0x0000ff]

machine.addClientFactory(jacdac.SRV_LED, devid => {
    const client = new modules.LedClient(devid)

    machine.microbit.onClient(client, machine.EVENT_A, () => {
        client.rotate(1)
    })

    machine.microbit.onClient(client, machine.EVENT_B, () => {
        client.rotate(-1)
    })

    machine.microbit.onClient(client, machine.POT_CHANGE, (pos: number) => {
        client.setBrightness(pos)
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
    client.setPixelColor(1, 0x00ff00)
    return client
})
