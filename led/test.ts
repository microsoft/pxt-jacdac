forever(() => {
    modules.led1.setAll(0xff0f0f)
    pause(500)
    modules.led1.setAll(0)
    pause(500)
})
