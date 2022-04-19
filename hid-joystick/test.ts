let k = 1
forever(() => {
    led.toggle(k % 5, Math.idiv(k, 5) % 5)
    const bn = modules.hidJoystick1.buttonCount()
    for (let i = 0; i < bn; ++i) {
        modules.hidJoystick1.setButton(i, (k % bn == i))
    }
    pause(500)
    k++
})
