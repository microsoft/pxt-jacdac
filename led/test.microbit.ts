forever(() => {
    led.toggle(0, 0)
    if (input.buttonIsPressed(Button.A)) {
        modules.led1.setAll(0xff0f00)
        pause(500)
        modules.led1.setAll(0x00000f)
        pause(500)
    } else {
        modules.led1.plotBarGraph(input.acceleration(Dimension.X))
    }
})
