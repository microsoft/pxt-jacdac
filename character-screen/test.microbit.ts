basic.showIcon(IconNames.Happy)
input.onButtonPressed(Button.A, () => {
    led.toggle(0, 0)
    modules.characterScreen1.setMessage("hello")
})
input.onButtonPressed(Button.B, () => {
    led.toggle(1, 0)
    modules.characterScreen1.setLine(0, "l0")
    modules.characterScreen1.setLine(1, "l1")
})
input.onButtonPressed(Button.AB, () => {
    modules.characterScreen1.clear()
})
