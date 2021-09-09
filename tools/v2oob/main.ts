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
// TODO: using function syntax here causes crash at runtime; https://github.com/microsoft/pxt/issues/8172

// instead of clients, listen for devices, keep a list
// just bare packets

modules.button1.onDown(() => {
    basic.showIcon(IconNames.Heart)
})

modules.button1.onUp(() => {
    basic.clearScreen()
})

jacdac.start({ disableRoleManager: true })