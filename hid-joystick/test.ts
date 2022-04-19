let k = 1
forever(() => {
    const bn = modules.hidJoystick1.buttonCount()
    for (let i = 0; i < bn; ++i) {
        modules.hidJoystick1.setButton(i, k % bn == i)
    }
    pause(500)
    k++
})
