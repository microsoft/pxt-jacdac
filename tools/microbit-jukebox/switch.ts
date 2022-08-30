machine.addClientFactory(jacdac.SRV_SWITCH, (devid, srvid) => {
    const client = new modules.SwitchClient(`${devid}:${srvid}`)
    client.onOff(() => {
        basic.showIcon(IconNames.No, 0)
    })
    client.onOff(() => {
        basic.showIcon(IconNames.Yes, 0)
    })
    return client
})
