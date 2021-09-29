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


// basic.showIcon(
//    IconNames.Heart + pkt.eventCode - jacdac.AccelerometerEvent.TiltUp,
//    0
//)