const pattern = [0x000000, 0xff0000, 0x00ff00, 0x0000ff]

machine.addClientFactory(jacdac.SRV_LED_DISPLAY, devid => {
    const client = new modules.LedDisplayClient(devid)

    machine.microbit.onClient(client, machine.EVENT_A, () => {
        client.rotate(1)
        client.show()
    })
    
    machine.microbit.onClient(client, machine.EVENT_B, () => {
        client.rotate(-1)
        client.show()
    })

    machine.microbit.onClient(client, machine.EVENT_AB,
        () => {
            const numPixels = client.numPixels()
            let j = 0
            for (let i = 0; i < numPixels; i++) {
                client.setPixelColor(i, pattern[j])
                j++
                if (j === pattern.length)
                    j = 0
            }
            client.show()
        }
    )
    client.setPixelColor(1, 0x00FF00)
    client.show()
})




