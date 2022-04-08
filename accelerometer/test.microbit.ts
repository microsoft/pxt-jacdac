enum Mode {
    Stream,
    Events,
}

let mode = Mode.Stream

input.onButtonPressed(Button.A, () => {
    mode = Mode.Events
})

input.onButtonPressed(Button.B, () => {
    mode = Mode.Stream
})

input.onButtonPressed(Button.AB, () => {})

basic.forever(function () {
    if (mode !== Mode.Stream) return
    const x = modules.accelerometer1.x() * 100
    const y = modules.accelerometer1.y() * 100
    basic.clearScreen()
    plot(x, y)
    basic.pause(100)
})

function plot(x: number, y: number) {
    let dispX = 2
    let dispY = 2
    if (Math.abs(x) > 30) {
        dispX += Math.sign(x)
    }
    if (Math.abs(x) > 60) {
        dispX += Math.sign(x)
    }
    if (Math.abs(y) > 30) {
        dispY += Math.sign(y)
    }
    if (Math.abs(y) > 60) {
        dispY += Math.sign(y)
    }
    led.plot(dispX, dispY)
}

modules.accelerometer1.onTiltUp(() => {
    if (mode !== Mode.Events) return
    basic.showArrow(ArrowNames.North, 0)
})

modules.accelerometer1.onTiltDown(() => {
    if (mode !== Mode.Events) return
    basic.showArrow(ArrowNames.South, 0)
})

modules.accelerometer1.onTiltLeft(() => {
    if (mode !== Mode.Events) return
    basic.showArrow(ArrowNames.West, 0)
})

modules.accelerometer1.onTiltRight(() => {
    if (mode !== Mode.Events) return
    basic.showArrow(ArrowNames.East, 0)
})

modules.accelerometer1.onFreefall(function () {
    if (mode !== Mode.Events) return
    control.runInBackground(() => {
        soundExpression.giggle.playUntilDone()
    })
})

modules.accelerometer1.onShake(function () {
    if (mode !== Mode.Events) return
    basic.showIcon(IconNames.Confused, 0)
})

modules.accelerometer1.onFaceDown(function () {
    if (mode !== Mode.Events) return
    basic.showIcon(IconNames.Sad, 0)
})

modules.accelerometer1.onFaceUp(function () {
    if (mode !== Mode.Events) return
    basic.showIcon(IconNames.Happy, 0)
})

let lastForce = 0

function forceOK(newForce: number) {
    if (mode !== Mode.Events || newForce <= lastForce) return false
    if (lastForce === 0) {
        control.runInBackground(() => {
            basic.pause(1000)
            lastForce = 0
        })
    }
    lastForce = newForce
    return true
}

modules.accelerometer1.onForce2g(function () {
    if (forceOK(2)) basic.showNumber(2, 0)
})

modules.accelerometer1.onForce6g(function () {
    if (forceOK(6)) basic.showNumber(6, 0)
})

modules.accelerometer1.onForce8g(function () {
    if (forceOK(8)) basic.showNumber(8, 0)
})

modules.accelerometer1.onForce3g(function () {
    if (forceOK(3)) basic.showNumber(3, 0)
})
