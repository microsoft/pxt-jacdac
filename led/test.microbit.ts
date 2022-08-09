/*forever(() => {
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
*/

input.onButtonPressed(Button.A, function () {
    led.toggle(0, 0)
    modules.led1.setBrightness(27)
    modules.led1.setAll(0xff0000)
})
input.onButtonPressed(Button.B, function () {
    led.toggle(1, 0)
    modules.led1.setAll(0x0000ff)
})
basic.showIcon(IconNames.Heart)
