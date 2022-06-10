machine.addClientFactory(jacdac.SRV_SWITCH, devid => {
    const client = new modules.SwitchClient(devid)
    client.onOff(() => {
        basic.showIcon(IconNames.No, 0)
    })
    client.onOff(() => {
        basic.showIcon(IconNames.Yes, 0)
    })
    return client
})
