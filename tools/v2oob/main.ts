music.setVolume(50)

jacdac.bus.subscribe(
    jacdac.DEVICE_CONNECT,
    (d: jacdac.Device) => {
        // don't play on self announce (this doesn't work)
        if (d === jacdac.bus.selfDevice) return
        soundExpression.happy.playUntilDone()
    }
)

// map device id to the service classes supported by the device
interface ServicesMap {
    [index: string]: number[]
}
let dev2Services: ServicesMap = {}

// whenever a device announces itself,
// cache its services, if not already done
jacdac.bus.subscribe(
    jacdac.DEVICE_ANNOUNCE,
    (d: jacdac.Device) => {
        if (d === jacdac.bus.selfDevice) return
        if (!dev2Services[d.deviceId]) {
            dev2Services[d.deviceId] = []
            for (let i = 4; i < d.services.length; i += 4) {
                const id = d.services.getNumber(NumberFormat.UInt32LE, i)
                dev2Services[d.deviceId].push(id)
                checkForActuator(d, id)
                checkForSensor(d, id)
            }
        }
    }
)

// special handling for actuators (multi-command) and sensors (streaming)
let knownActuators = [jacdac.SRV_SERVO, jacdac.SRV_LED_PIXEL ]
let knownSensors = [ jacdac.SRV_POTENTIOMETER, jacdac.SRV_ACCELEROMETER, jacdac.SRV_ROTARY_ENCODER ]

let actuatorKeys: number[] = []
interface ActuatorsMap {
    [index: number]: string[]
}
let actuatorServices: ActuatorsMap = {}

function checkForActuator(dev: jacdac.Device, serviceClass: number) {
    if (knownActuators.indexOf(serviceClass) >= 0) {
        // add device to map
        if (!actuatorServices[serviceClass]) {
            actuatorServices[serviceClass] = []
            actuatorKeys.push(serviceClass)
        }
        actuatorServices[serviceClass].push(dev.deviceId)
        configureActuator(dev, serviceClass)
    }
}

let ledPixelClients: modules.LedPixelClient[] = []

function configureActuator(dev: jacdac.Device, serviceClass: number) {
    if (serviceClass === jacdac.SRV_SERVO) {
        // TODO: turn it on
    } else if (serviceClass === jacdac.SRV_LED_PIXEL) {
        const client = new modules.LedPixelClient(dev.deviceId)
        client.setBrightness(10)
        client.configure(8, jacdac.LedPixelLightType.WS2812B_GRB)
        client._attach(dev, jacdac.SRV_LED_PIXEL)
        ledPixelClients.push(client)
    }
}

function checkForSensor(dev: jacdac.Device, serviceClass: number) {
    if (knownSensors[serviceClass]) {
        // set up streaming
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

// whenever we get an event for a particular service class
// do something on the micro:bit

function processEvent(serviceClass: number, eventCode: number) {
    if (serviceClass === jacdac.SRV_BUTTON) {
        if (eventCode === jacdac.ButtonEvent.Down) {
            basic.showIcon(IconNames.SmallHeart, 0)
        } else if (eventCode === jacdac.ButtonEvent.Up) {
            basic.clearScreen()
        } else if (eventCode === jacdac.ButtonEvent.Hold) {
            basic.showIcon(IconNames.Heart, 0)
        }
    }
}

function processSensorGet(serviceClass: number, readReg: number) {
    if (serviceClass === jacdac.SRV_ROTARY_ENCODER) {

    } else if (serviceClass === jacdac.SRV_POTENTIOMETER) {

    } else if (serviceClass === jacdac.SRV_ACCELEROMETER) {

    }
}

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
            const client = ledPixelClients.find(cl => cl.device === d)
            if (client)
                ledPixelClients.removeElement(client)
        })
        delete dev2Services[d.deviceId]
    }
)

// micro:bit actions translate to actuator actions

input.onButtonPressed(Button.A, function() {
    actuate(Button.A)
})

input.onButtonPressed(Button.B, function () {
    actuate(Button.B)
})

input.onButtonPressed(Button.AB, function () {
    actuate(Button.AB)
})

function actuate(b: Button) {
    // for each (actuator) serviceClass that is active,
    // perform and appropriate action on all instances of that 
    // serviceClass, using multi-command
    actuatorKeys.forEach((sc: number) => {
        if (sc === jacdac.SRV_SERVO) {
            setServoAngle(b)
        } else if (sc === jacdac.SRV_LED_PIXEL) {
            ledPixelClients.forEach(client => {
                animateLEDs(client, b)
            })
        }
    })
}

function setServoAngle(b: Button) {
    const angle = b === Button.A ? -90 : b === Button.B ? 90 : 0
    const pkt = jacdac.JDPacket.jdpacked(
        jacdac.CMD_SET_REG | jacdac.ServoReg.Angle
        , "i16.16", [angle])
    pkt.sendAsMultiCommand(jacdac.SRV_SERVO)
}

function animateLEDs(client: modules.LedPixelClient, b: Button) {
    if (b === Button.A) {
        client.showAnimation(modules.ledPixelAnimations.sparkle, 2000)
    } else if (b === Button.B) {
        client.showAnimation(modules.ledPixelAnimations.firefly, 2000)
    } else {
        client.runEncoded("setall #000000")
    }
}

jacdac.start({ disableRoleManager: true })