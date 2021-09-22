forever(() => {
    pause(1000)
    modules.hidKeyboard1.key(
        jacdac.HidKeyboardModifiers.LeftAlt,
        jacdac.HidKeyboardKey.Tab,
        jacdac.HidKeyboardAction.Press
    )
    pause(5000)
})

