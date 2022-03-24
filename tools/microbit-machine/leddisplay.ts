const pattern = [0x000000, 0xff0000, 0x00ff00, 0x0000ff]

machine.addClientFactory(jacdac.SRV_LED_DISPLAY, devid => {
    const client = new modules.LedDisplayClient(devid)
    machine.microbit.onEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
        () => {
            client.rotate(1)
            client.show()
        }
    )
    machine.microbit.onEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_B,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
        () => {
            client.rotate(-1)
            client.show()
        }
    )
    machine.microbit.onEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
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




