let devCount = 0
jacdac.bus.subscribe(
    jacdac.DEVICE_CONNECT,
    (d: jacdac.Device) => {
        // don't play on self announce (this doesn't work)
        if (d === jacdac.bus.selfDevice) return
        devCount++
        if (devCount) {
            updateDisplay = true
            displayNumber = devCount
            playSound = true
        }
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
                checkForKnownService(d, id, i >> 2)
            }
        }
    }
)

// special handling for actuators (multi-command) and sensors (streaming)
let knownActuators = [jacdac.SRV_SERVO, jacdac.SRV_LED_PIXEL ]
let knownSensors = [ jacdac.SRV_POTENTIOMETER, jacdac.SRV_ROTARY_ENCODER, 
    jacdac.SRV_ACCELEROMETER, jacdac.SRV_THERMOMETER ]

let serviceKeys: number[] = []
interface ServiceDeviceMap {
    [index: number]: string[]
}
let service2dev: ServiceDeviceMap = {}

function checkForKnownService(dev: jacdac.Device, serviceClass: number, serviceIndex: number) {
    if (knownActuators.indexOf(serviceClass) >= 0 || knownSensors.indexOf(serviceClass) >= 0) {
        // add device to map
        if (!service2dev[serviceClass]) {
            service2dev[serviceClass] = []
            serviceKeys.push(serviceClass)
        }
        service2dev[serviceClass].push(dev.deviceId)
        if (knownActuators.indexOf(serviceClass) >= 0)
            configureActuator(dev, serviceClass)
        else if (knownSensors.indexOf(serviceClass) >= 0)
            configureSensor(dev, serviceClass, serviceIndex)
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

interface SensorMap {
    [index: string]: number
}
let sensorMap: SensorMap = {}

function configureSensor(dev: jacdac.Device, serviceClass: number, serviceIndex: number) {
    sensorMap[dev.deviceId + ":" + serviceIndex.toString()] = 0
}

// we just poll using multi-command
forever(() => {
    knownSensors.forEach(getReadingRegister)
    basic.pause(100)
})

function getReadingRegister(sc: number) {
    const pkt = jacdac.JDPacket.onlyHeader(
        jacdac.CMD_GET_REG | jacdac.SystemReg.Reading
    )
    pkt.sendAsMultiCommand(sc)
}

// anytime we get a packet from some device, do something
jacdac.bus.subscribe(
    jacdac.PACKET_PROCESS,
    (pkt: jacdac.JDPacket) => {
        const services = dev2Services[pkt.deviceIdentifier]
        if (services) {
            if (pkt.serviceIndex > 0) {
                const serviceClass = services[pkt.serviceIndex - 1]
                if (pkt.isEvent) {
                    processEvent(serviceClass, pkt.eventCode)
                } else if (pkt.isReport && pkt.isRegGet && pkt.regCode === jacdac.SystemReg.Reading) {
                    processSensorGetReading(serviceClass, pkt)
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
    } if (serviceClass === jacdac.SRV_ACCELEROMETER) {
        if (eventCode === jacdac.AccelerometerEvent.Shake) {
            basic.showIcon(IconNames.Happy, 0)
        }
    }
}

let updateDisplay = false
let displayNumber = 0
forever(() => {
    if (updateDisplay) {
        basic.showNumber(displayNumber)
        updateDisplay = false
    }
})

let playSound = false
forever(() => {
    if (playSound) {
        soundExpression.happy.playUntilDone()
        playSound = false
    }
})

function processSensorGetReading(serviceClass: number, pkt: jacdac.JDPacket) {
    if (knownSensors.indexOf(serviceClass) == -1)
        return
    const lookup = pkt.deviceIdentifier + ":" + pkt.serviceIndex.toString()
    console.log("get reading " + lookup)
    if (serviceClass === jacdac.SRV_ROTARY_ENCODER) {
        const position = pkt.jdunpack<number[]>("u32")[0]
        if (position !== sensorMap[lookup]) {
            sensorMap[lookup] = position
            led.plotBarGraph(position % 12, 12)
        }
    } else if (serviceClass === jacdac.SRV_POTENTIOMETER) {
        const position = Math.round(pkt.jdunpack<number[]>("u0.16")[0] * 100)
        if (position !== sensorMap[lookup]) {
            sensorMap[lookup] = position
            led.plotBarGraph(position, 100)
        }
    } else if (serviceClass === jacdac.SRV_THERMOMETER) {
        const temp = Math.round(pkt.jdunpack<number[]>("i22.10")[0] )
        if (temp !== sensorMap[lookup]) {
            sensorMap[lookup] = temp
            displayNumber = temp
            updateDisplay = true
        }
    }
}

// whenever a device leaves the bus, forget about its services
jacdac.bus.subscribe(
    jacdac.DEVICE_DISCONNECT,
    (d: jacdac.Device) => {
        devCount--
        updateDisplay = true
        displayNumber = devCount
        playSound = true
        dev2Services[d.deviceId].forEach(sc => {
             if (service2dev[sc]) {
                service2dev[sc].removeElement(d.deviceId)
                if (service2dev[sc].length === 0) {
                    delete service2dev[sc]
                    serviceKeys.removeElement(sc)
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
    serviceKeys.forEach((sc: number) => {
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