jacdac.bus.subscribe(
    jacdac.DEVICE_CONNECT,
    (d: jacdac.Device) => {
        // don't play on self announce
        if (d === jacdac.bus.selfDevice) return
        soundExpression.happy.playUntilDone()
    }
)

// map device id to the service numbers supported by the device
interface ServicesMap {
    [index: string]: number[]
}
let dev2Services: ServicesMap = {}

// whenever a device joins the bus, cache its services
jacdac.bus.subscribe(
    jacdac.DEVICE_ANNOUNCE,
    (d: jacdac.Device) => {
        if (d === jacdac.bus.selfDevice) return
        if (!dev2Services[d.deviceId]) {
            dev2Services[d.deviceId] = []
            for (let i = 4; i < d.services.length; i += 4) {
                const id = d.services.getNumber(NumberFormat.UInt32LE, i)
                dev2Services[d.deviceId].push(id)
            }
        }
    }
)

// whenever we get an event for a particular service class
// do something on the micro:bit

function processEvent(serviceClass: number, eventCode: number) {
    if (serviceClass === jacdac.SRV_BUTTON) {
        if (eventCode === jacdac.ButtonEvent.Down) {
            basic.showIcon(IconNames.SmallHeart)
        } else if (eventCode === jacdac.ButtonEvent.Up) {
            basic.clearScreen()
        } else if (eventCode === jacdac.ButtonEvent.Hold) {
            basic.showIcon(IconNames.Heart)
        }
     }
}

// anytime we get a packet from some device, do something
jacdac.bus.subscribe(
    jacdac.PACKET_PROCESS,
    (r: jacdac.JDPacket) => {
        if (r.isEvent) {
            const services = dev2Services[r.deviceIdentifier]
            if (services) {
                if (r.serviceIndex-1 < services.length) {
                    const serviceClass = services[r.serviceIndex-1]
                    processEvent(serviceClass, r.eventCode)
                }
            }
        } 
    }
)

// whenever a device leaves the bus, forget about its services
jacdac.bus.subscribe(
    jacdac.DEVICE_DISCONNECT,
    (d: jacdac.Device) => {
        soundExpression.sad.playUntilDone()
        delete dev2Services[d.deviceId]
    }
)

jacdac.start({ disableRoleManager: true })