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

let consoleClient: jacdac.LoggerClient

function startConsole() {
    if (!consoleClient) {
        consoleClient = new jacdac.LoggerClient()
        consoleClient.minPriority = jacdac.LoggerPriority.Debug
        consoleClient.start()
    }
}


interface FnMap {
    [index: string]: () => void
}

function main() {
}

jacdac.start({ disableRoleManager: true })
control.runInBackground(main)
