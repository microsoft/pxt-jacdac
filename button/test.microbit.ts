enum Mode {
    Events,
    Pressed,
    Pressure,
}

let mode = Mode.Events

input.onButtonPressed(Button.A, () => {
    mode = Mode.Pressed
})

input.onButtonPressed(Button.B, () => {
    mode = Mode.Pressure
})

input.onButtonPressed(Button.AB, () => {
    mode = Mode.Events
})

let holdCount = 0
modules.button1.onDown(() => {
    if (mode !== Mode.Events) return
    holdCount = 0
    basic.showString("D")
})
modules.button1.onHold(() => {
    if (mode !== Mode.Events) return
    holdCount++
    basic.showNumber(holdCount)
})
modules.button1.onUp(() => {
    if (mode !== Mode.Events) return
    basic.showString("U")
})

basic.forever(() => {
    if (mode === Mode.Pressed) {
        if (modules.button1.pressed()) basic.showString("D")
        else basic.showString("U")
    } else if (mode === Mode.Pressure) {
        if (modules.button1.pressure() >= 70) basic.showString("D")
        else if (modules.button1.pressure() === 0) basic.showString("U")
        else basic.showString("x")
    }
})
