enum Mode {
    Stream,
    Events
}

let mode = Mode.Stream

input.onButtonPressed(Button.A, () => {
    mode = Mode.Events
})

input.onButtonPressed(Button.B, () => {
    mode = Mode.Stream
})

input.onButtonPressed(Button.AB, () => {

})

basic.forever(function () {
    if (mode !== Mode.Stream) return
    const x = modules.accelerometer1.x() * 100
    const y = modules.accelerometer1.y() * 100
    basic.clearScreen()
    plot(x, y)
    basic.pause(100)
})

function plot (x: number, y: number) {
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
    basic.showArrow(ArrowNames.North)
})

modules.accelerometer1.onTiltDown(() => {
    if (mode !== Mode.Events) return
    basic.showArrow(ArrowNames.South)
})

modules.accelerometer1.onTiltLeft(() => {
    if (mode !== Mode.Events) return
    basic.showArrow(ArrowNames.West)
})

modules.accelerometer1.onTiltRight(() => {
    if (mode !== Mode.Events) return
    basic.showArrow(ArrowNames.East)
})

modules.accelerometer1.onFreefall(function () {
    if (mode !== Mode.Events) return
    control.runInBackground(() => {
        soundExpression.giggle.playUntilDone()
    })
})

modules.accelerometer1.onShake(function () {
    if (mode !== Mode.Events) return
    basic.showIcon(IconNames.Confused)
})

modules.accelerometer1.onFaceDown(function () {
    if (mode !== Mode.Events) return
    basic.showIcon(IconNames.Sad)
})

modules.accelerometer1.onFaceUp(function () {
    if (mode !== Mode.Events) return
    basic.showIcon(IconNames.Happy)
})

enum ForceState {
    None,
    Window,
    Ignore
}

let forceState = ForceState.None

function forceTransition() {
    if (forceState === ForceState.Window) {
        forceState = ForceState.Ignore
        control.runInBackground(() => {
            basic.pause(2000)
            forceTransition();
        })
    } else {
        forceState = ForceState.None
    }
}

function forceEntry() {
    if (forceState === ForceState.None) {
        forceState = ForceState.Window
        control.runInBackground(() => {
            basic.pause(200)
            forceTransition();
        })
    }
}

modules.accelerometer1.onForce2g(function () {
    if (mode !== Mode.Events && forceState !== ForceState.Ignore) return
    forceEntry()
    basic.showNumber(2)
})

modules.accelerometer1.onForce6g(function () {
    if (mode !== Mode.Events && forceState !== ForceState.Ignore) return
    forceEntry()
    basic.showNumber(6)
})

modules.accelerometer1.onForce8g(function () {
    if (mode !== Mode.Events && forceState !== ForceState.Ignore) return
    forceEntry()
    basic.showNumber(8)
})

modules.accelerometer1.onForce3g(function () {
    if (mode !== Mode.Events && forceState !== ForceState.Ignore) return
    forceEntry()
    basic.showNumber(3)
})
