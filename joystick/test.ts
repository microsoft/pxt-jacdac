// basic.showIcon(IconNames.Heart)
modules.joystick1.onButtonsChanged(() => {
    // led.toggle(4, 4)
    const btn = modules.joystick1.buttons()
    // for (let i = 0; i < 8; ++i) {
    //     const on = (btn & (1 << i)) == 1 << i
    //     if (on) led.plot((i / 5) | 0, i % 5)
    //     else led.unplot((i / 5) | 0, i % 5)
    // }
    console.log(btn)
    console.log(
        "A down: " + modules.joystick1.isButtonDown(jacdac.JoystickButtons.A)
    )
})
