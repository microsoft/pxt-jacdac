basic.showIcon(IconNames.Happy)
input.onButtonPressed(Button.A, () => {
    modules.servo1.run(100)
})
input.onButtonPressed(Button.B, () => {
    modules.servo2.run(50)
})
