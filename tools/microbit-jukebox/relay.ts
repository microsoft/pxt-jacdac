machine.addClientFactory(jacdac.SRV_RELAY, devid => {
    const client = new modules.RelayClient(devid)
    machine.microbit.onClient(client, machine.EVENT_AB, () => {
        const active = !client.active()
        client.setActive(active)
        control.runInBackground(() => {
            music.stopAllSounds()
            led.stopAnimation()
            if (active) basic.showIcon(IconNames.Yes, 0)
            else basic.showIcon(IconNames.No, 0)
        })
    })
    return client
})
