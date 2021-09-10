function identify(d: jacdac.Device) {
    if (!d) return
    if (d == jacdac.bus.selfDevice) {
        control.runInParallel(() => {
            jacdac.bus.emit(jacdac.IDENTIFY)
            jacdac.bus.emit(jacdac.STATUS_EVENT, jacdac.StatusEvent.Identify)
        })
    } else {
        d.sendCtrlCommand(jacdac.ControlCmd.Identify)
    }
}

function describe(dev: jacdac.Device) {
    let name = ""
    if (dev == jacdac.bus.selfDevice) name = "<self>"
    return `${dev.shortId} ${name}`
}


function resetAll() {
    jacdac.JDPacket.onlyHeader(jacdac.ControlCmd.Reset).sendAsMultiCommand(
        jacdac.SRV_CONTROL
    )
}

// basic idea: we listen for packets from services
// associated with Jacdac modules from the kit
// and do something special on the micro:bit 
// - button: LED display
// - device connect/disconnect (sounds)

modules.button1.onDown(() => {
    basic.showIcon(IconNames.Heart)
})

modules.button1.onUp(() => {
    basic.clearScreen()
})

modules.rotaryEncoder1.setStreaming(true)
modules.rotaryEncoder1.onPositionChangedBy(1, () => {
    led.plotBarGraph(
        modules.rotaryEncoder1.position() % 12, 12  )
})

modules.potentiometer1.onPositionChangedBy(0.1, () => {
    led.plotBarGraph(
        modules.potentiometer1.position(), 1.0)
})



jacdac.bus.subscribe(
    jacdac.DEVICE_CONNECT,
    (dev: jacdac.Device) => {
        // don't play on self announce
        soundExpression.happy.playUntilDone()
    }
)

jacdac.bus.subscribe(
    jacdac.DEVICE_ANNOUNCE,
    (dev: jacdac.Device) => {
        // get the services if not present

    }
)

// TODO: not on bus
jacdac.bus.subscribe(
    jacdac.DEVICE_DISCONNECT,
    (dev: jacdac.Device) => {
        soundExpression.sad.playUntilDone()
    }
)

jacdac.start({ disableRoleManager: true })