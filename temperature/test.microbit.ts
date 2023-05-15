forever(() => {
    const h = modules.temperature1.temperature()
    basic.showString(h + "")
    pause(1000)
})
