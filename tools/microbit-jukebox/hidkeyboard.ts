machine.addClientFactory(jacdac.SRV_HID_KEYBOARD, (devid, srvid) => {
    const client = new modules.HidKeyboardClient(`${devid}:${srvid}`)
    machine.microbit.onControlEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK,
        () => {
            client.key(jacdac.HidKeyboardAction.Press, 0, jacdac.HidKeyboardKey.LeftArrow)
        }
    )
    machine.microbit.onControlEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_B,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK,
        () => {
            client.key(jacdac.HidKeyboardAction.Press, 0, jacdac.HidKeyboardKey.RightArrow)
        }
    )
    machine.microbit.onControlEvent(
        client,
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK,
        () => {
            client.key(jacdac.HidKeyboardAction.Press, 0, jacdac.HidKeyboardKey.Space)
        }
    )
    return client
})
