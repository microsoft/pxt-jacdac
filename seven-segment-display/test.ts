let k = 0
input.onButtonPressed(Button.A, () => {
    k = -1
})
forever(function () {
    modules.sevenSegmentDisplay1.setNumber(k)
    basic.showNumber(k)
    k++
    if (k == 4) k += 0.5
})
