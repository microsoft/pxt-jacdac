forever(() => {
    pause(1000)
    modules.hidKeyboard1.key(
        jacdac.HidKeyboardAction.Press,
        jacdac.HidKeyboardModifiers.LeftAlt,
        jacdac.HidKeyboardKey.Tab
    )
    pause(5000)
    modules.hidKeyboard1.type("hello world")
    pause(2000)
})
