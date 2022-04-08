basic.showIcon(IconNames.Happy)
input.onButtonPressed(Button.A, () => {
    basic.showString("A")
})
input.onButtonPressed(Button.B, () => {
    basic.showString("B")
})
control.onEvent(14000, 1, () => {
    console.log("ping")
})
