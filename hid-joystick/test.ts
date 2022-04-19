forever(() => {
    modules.hidJoystick1.setButtons([1])
    pause(500)
    modules.hidJoystick1.setButtons([0])
    pause(500)
})
