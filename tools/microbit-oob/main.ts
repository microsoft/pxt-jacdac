music.setVolume(100)
music.setTempo(180)

const SRV_INFRASTRUCTURE = 0x1e1589eb

let lastDeviceCount = 0
let playDeviceCountScheduled = false
function schedulePlayDeviceCount() {
    if (playDeviceCountScheduled) return
    playDeviceCountScheduled = true
    control.inBackground(() => {
        // debouncing
        pause(200)
        playDeviceCountScheduled = false
        // query current device count
        const devCount = jacdac.bus.devices.filter(
            d => d !== jacdac.bus.selfDevice && !d.hasService(SRV_INFRASTRUCTURE)
        ).length
        // nothing to do
        const change = devCount - lastDeviceCount
        if (change) {
            lastDeviceCount = devCount
            music.stopAllSounds()
            led.stopAnimation()
            if (change > 0) soundExpression.happy.play()
            else soundExpression.sad.play()
            basic.showNumber(devCount)
        }
    })
}

// map device id to the service classes supported by the device
interface ServicesMap {
    [index: string]: number[]
}
let dev2Services: ServicesMap = {}

jacdac.bus.subscribe(jacdac.DEVICE_ANNOUNCE, (d: jacdac.Device) => {
    if (d === jacdac.bus.selfDevice) return
    // whenever a device announces itself,
    // cache its services, if not already done
    if (!dev2Services[d.deviceId]) {
        dev2Services[d.deviceId] = []
        for (let i = 1; i < d.serviceClassLength; i++) {
            const id = d.serviceClassAt(i)
            dev2Services[d.deviceId].push(id)
            checkForKnownService(d, id, i)
        }
    }
    // play sound
    const devCount = jacdac.bus.devices.filter(
        d => d !== jacdac.bus.selfDevice
    ).length
    if (devCount) schedulePlayDeviceCount()
})

// special handling for actuators (multi-command) and sensors (streaming)
const knownActuators = [jacdac.SRV_SERVO, jacdac.SRV_LED_PIXEL]
const knownSensors = [
    jacdac.SRV_POTENTIOMETER,
    jacdac.SRV_ROTARY_ENCODER,
    jacdac.SRV_ACCELEROMETER,
    jacdac.SRV_THERMOMETER,
    jacdac.SRV_LIGHT_LEVEL,
    jacdac.SRV_JOYSTICK
]

let serviceKeys: number[] = []
interface ServiceDeviceMap {
    [index: number]: string[]
}
let service2dev: ServiceDeviceMap = {}

function checkForKnownService(
    dev: jacdac.Device,
    serviceClass: number,
    serviceIndex: number
) {
    if (
        knownActuators.indexOf(serviceClass) >= 0 ||
        knownSensors.indexOf(serviceClass) >= 0
    ) {
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

function configureSensor(
    dev: jacdac.Device,
    serviceClass: number,
    serviceIndex: number
) {
    sensorMap[dev.deviceId + ":" + serviceIndex.toString()] = 0
}

// refil streaming samples register on each self-announce
jacdac.bus.subscribe(jacdac.SELF_ANNOUNCE, () => {
    knownSensors.forEach(sc => {
        const pkt = jacdac.JDPacket.jdpacked(
            jacdac.CMD_SET_REG | jacdac.SystemReg.StreamingSamples,
            "u8",
            [0xff]
        )
        pkt.sendAsMultiCommand(sc)
    })
})

// anytime we get a packet from some device, do something
jacdac.bus.subscribe(jacdac.PACKET_PROCESS, (pkt: jacdac.JDPacket) => {
    const services = dev2Services[pkt.deviceIdentifier]
    if (services) {
        if (pkt.serviceIndex > 0) {
            const serviceClass = services[pkt.serviceIndex - 1]
            if (pkt.isEvent) {
                processEvent(serviceClass, pkt)
            } else if (
                pkt.isReport &&
                pkt.isRegGet &&
                pkt.regCode === jacdac.SystemReg.Reading
            ) {
                processSensorGetReading(serviceClass, pkt)
            }
        }
    }
})

// whenever we get an event for a particular service class
// do something on the micro:bit

const buttonPressIcons = [
    IconNames.SmallHeart,
    IconNames.Happy,
    IconNames.SmallDiamond,
    IconNames.EigthNote,
    IconNames.SmallSquare,
    IconNames.Pitchfork,
    IconNames.Silly,
    IconNames.Tortoise,
]
const buttonHoldIcons = [
    IconNames.Heart,
    IconNames.Asleep,
    IconNames.Diamond,
    IconNames.QuarterNote,
    IconNames.Square,
    IconNames.Target,
    IconNames.Surprised,
    IconNames.Butterfly,
]
const buttonNotes = [
    Note.C,
    Note.D,
    Note.E,
    Note.F,
    Note.G,
    Note.A,
    Note.B,
    Note.C5,
]

let nextIcon = 0
interface IconMap {
    [index: string]: number
}
let iconMap: IconMap = {}

function getIndexFromButton(pkt: jacdac.JDPacket) {
    if (iconMap[pkt.deviceIdentifier] === undefined) {
        iconMap[pkt.deviceIdentifier] = nextIcon
        if (nextIcon === buttonPressIcons.length - 1) nextIcon = 0
        else nextIcon++
    }
    return iconMap[pkt.deviceIdentifier]
}

function processEvent(serviceClass: number, pkt: jacdac.JDPacket) {
    if (serviceClass === jacdac.SRV_BUTTON) {
        const index = getIndexFromButton(pkt)
        const whichNote = buttonNotes[index]
        led.stopAnimation()
        if (pkt.eventCode === jacdac.ButtonEvent.Down) {
            basic.showIcon(buttonPressIcons[index], 0)
            // play sound async, interupt any other sound
            control.inBackground(() => {
                music.stopAllSounds()
                music.playTone(whichNote, music.beat())
            })
        } else if (pkt.eventCode === jacdac.ButtonEvent.Up) {
            basic.clearScreen()
        } else if (pkt.eventCode === jacdac.ButtonEvent.Hold) {
            basic.showIcon(buttonHoldIcons[index], 0)
            control.inBackground(() => {
                music.stopAllSounds()
                music.playTone(whichNote, music.beat())
            })
        }
    } else if (serviceClass === jacdac.SRV_ACCELEROMETER) {
        basic.showIcon(
            IconNames.Heart + pkt.eventCode - jacdac.AccelerometerEvent.TiltUp,
            0
        )
    } else if (serviceClass === jacdac.SRV_JOYSTICK &&
        pkt.eventCode === jacdac.JoystickEvent.ButtonsChanged) {
        const which = pkt.jdunpack<jacdac.JoystickButtons[]>("u32")[0]
        switch(which) {
            case jacdac.JoystickButtons.Left: basic.showArrow(ArrowNames.West, 0); break
            case jacdac.JoystickButtons.Right:  basic.showArrow(ArrowNames.East, 0); break
            case jacdac.JoystickButtons.Up: basic.showArrow(ArrowNames.North, 0); break
            case jacdac.JoystickButtons.Down:  basic.showArrow(ArrowNames.South, 0); break
        }
    }
}

function processSensorGetReading(serviceClass: number, pkt: jacdac.JDPacket) {
    if (knownSensors.indexOf(serviceClass) == -1) return
    const lookup = pkt.deviceIdentifier + ":" + pkt.serviceIndex.toString()
    //console.log("get reading " + lookup)
    if (serviceClass === jacdac.SRV_ROTARY_ENCODER) {
        const position = pkt.jdunpack<number[]>("u32")[0]
        if (position !== sensorMap[lookup]) {
            sensorMap[lookup] = position
            led.plotBarGraph(position % 13, 12)
        }
    } else if (
        serviceClass === jacdac.SRV_POTENTIOMETER ||
        serviceClass === jacdac.SRV_LIGHT_LEVEL ||
        serviceClass === jacdac.SRV_FLEX
    ) {
        const position = Math.round(pkt.jdunpack<number[]>("u0.16")[0] * 100)
        if (position !== sensorMap[lookup]) {
            sensorMap[lookup] = position
            led.plotBarGraph(position, 100)
        }
    } else if (serviceClass === jacdac.SRV_THERMOMETER) {
        const temp = Math.round(pkt.jdunpack<number[]>("i22.10")[0])
        if (temp !== sensorMap[lookup]) {
            sensorMap[lookup] = temp
            control.inBackground(() => {
                led.stopAnimation()
                if (temp < 0 || temp > 99) basic.showNumber(temp)
                else whaleysans.showNumber(temp)
            })
        }
    }
}

// whenever a device leaves the bus, forget about its services
jacdac.bus.subscribe(jacdac.DEVICE_DISCONNECT, (d: jacdac.Device) => {
    schedulePlayDeviceCount()
    dev2Services[d.deviceId].forEach(sc => {
        if (service2dev[sc]) {
            service2dev[sc].removeElement(d.deviceId)
            if (service2dev[sc].length === 0) {
                delete service2dev[sc]
                serviceKeys.removeElement(sc)
            }
        }
        const client = ledPixelClients.find(cl => cl.device === d)
        if (client) ledPixelClients.removeElement(client)
    })
    delete dev2Services[d.deviceId]
})

// micro:bit actions translate to actuator actions

input.onButtonPressed(Button.A, function () {
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
        jacdac.CMD_SET_REG | jacdac.ServoReg.Angle,
        "i16.16",
        [angle]
    )
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

// leave role manager on so that modules don't blink
jacdac.start({ disableRoleManager: false })

basic.showIcon(IconNames.Happy)
