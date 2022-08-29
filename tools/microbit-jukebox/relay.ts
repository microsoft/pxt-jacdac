machine.addClientFactory(jacdac.SRV_RELAY, (devid, srvid) => {
    const client = new modules.RelayClient(`${devid}:${srvid}`)
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
