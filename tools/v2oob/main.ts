// TODO: if a service is a sensor service then set up streaming
music.setVolume(50)

jacdac.bus.subscribe(
    jacdac.DEVICE_CONNECT,
    (d: jacdac.Device) => {
        // don't play on self announce (this doesn't work)
        if (d === jacdac.bus.selfDevice) return
        soundExpression.happy.playUntilDone()
    }
)

// map device id to the service numbers supported by the device
interface ServicesMap {
    [index: string]: number[]
}
let dev2Services: ServicesMap = {}

interface ActuatorsMap {
    [index: number]: string[]
}

let knownActuators = [ jacdac.SRV_SERVO, jacdac.SRV_LED ]
let actuatorKeys: number[] = []
let actuatorServices: ActuatorsMap = {}
function checkForActuator(devId: string, serviceClass: number) {
    if (knownActuators.indexOf(serviceClass) >= 0) {
        // add device to map
        if (!actuatorServices[serviceClass]) {
            actuatorServices[serviceClass] = []
            actuatorKeys.push(serviceClass)
        }
        actuatorServices[serviceClass].push(devId)
    }
}

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
                checkForActuator(d.deviceId, id)
            }
        }
    }
)

// whenever we get an event for a particular service class
// do something on the micro:bit

function processEvent(serviceClass: number, eventCode: number) {
    if (serviceClass === jacdac.SRV_BUTTON) {
        if (eventCode === jacdac.ButtonEvent.Down) {
            basic.showIcon(IconNames.SmallHeart,0)
        } else if (eventCode === jacdac.ButtonEvent.Up) {
            basic.clearScreen()
        } else if (eventCode === jacdac.ButtonEvent.Hold) {
            basic.showIcon(IconNames.Heart,0)
        }
     }
}

function processSensorGet(serviceClass: number, readReg: number) {
    if (serviceClass === jacdac.SRV_ROTARY_ENCODER) {

    } else if (serviceClass === jacdac.SRV_POTENTIOMETER) {

    } else if (serviceClass === jacdac.SRV_ACCELEROMETER) {
    
    }
}

// anytime we get a packet from some device, do something
jacdac.bus.subscribe(
    jacdac.PACKET_PROCESS,
    (r: jacdac.JDPacket) => {
        const services = dev2Services[r.deviceIdentifier]
        if (services) {
            if (r.serviceIndex - 1 < services.length) {
                const serviceClass = services[r.serviceIndex - 1]
                if (r.isEvent) {
                    processEvent(serviceClass, r.eventCode)
                } else if (r.isReport && r.isRegGet) {
                    // only for sensors
                    processSensorGet(serviceClass, 0)
                }
            }
        }
    }
)

// whenever a device leaves the bus, forget about its services
jacdac.bus.subscribe(
    jacdac.DEVICE_DISCONNECT,
    (d: jacdac.Device) => {
        soundExpression.happy.playUntilDone()
        dev2Services[d.deviceId].forEach(sc => {
            if (actuatorServices[sc]) {
                actuatorServices[sc].removeElement(d.deviceId)
                if (actuatorServices[sc].length === 0) {
                    delete actuatorServices[sc]
                    actuatorKeys.removeElement(sc)
                }
            }
        })
        delete dev2Services[d.deviceId]
    }
)

// micro:bit actions translate to actuator actions

function buttonToAngle(b: Button) {
    return b === Button.A ? -90 : b === Button.B ? 90 : 0
}

function actuate(b: Button) {
    // for each serviceClass that is active
    // perform appropriate action on 
    // all instances of that serviceClass (using wildcard option
    actuatorKeys.forEach((sc:number) => {
        if (sc === jacdac.SRV_SERVO) {
            const angle = buttonToAngle(b)
            const pkt = jacdac.JDPacket.jdpacked(
                jacdac.CMD_SET_REG | jacdac.ServoReg.Angle 
                , "i16.16", [angle])
            pkt.sendAsMultiCommand(sc)
        } else {

        }
    })
}

input.onButtonPressed(Button.A, function() {
    actuate(Button.A)
})

input.onButtonPressed(Button.B, function () {
    actuate(Button.B)
})

input.onButtonPressed(Button.AB, function () {
    actuate(Button.AB)
})


jacdac.start({ disableRoleManager: true })