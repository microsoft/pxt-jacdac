machine.addClientFactory(jacdac.SRV_RELAY, devid => {
    const client = new modules.RelayClient(devid)
    machine.microbit.onControlEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
        () => {
            const active = !client.active()
            soundExpression.giggle.play()
            control.inBackground(() => {
                music.stopAllSounds()
                led.stopAnimation()
                if (active) basic.showIcon(IconNames.Yes, 0)
                else basic.showIcon(IconNames.No, 0)
                if (active) soundExpression.hello.play()
                else soundExpression.sad.play()
            })
        }
    )
})