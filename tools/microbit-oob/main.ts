jacdac.productIdentifier = 0x34f4c157
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
            d =>
                d !== jacdac.bus.selfDevice && !d.hasService(SRV_INFRASTRUCTURE)
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

let onlyLedDisplay: modules.LedDisplayClient[] = []

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
const knownActuators = [jacdac.SRV_SERVO, jacdac.SRV_LED_STRIP, jacdac.SRV_LED, jacdac.SRV_LED_DISPLAY]
const knownSensors = [
    jacdac.SRV_POTENTIOMETER,
    jacdac.SRV_ROTARY_ENCODER,
    jacdac.SRV_ACCELEROMETER,
    jacdac.SRV_TEMPERATURE,
    jacdac.SRV_LIGHT_LEVEL,
    jacdac.SRV_GAMEPAD,
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
            configureActuator(dev, serviceClass, serviceIndex)
        else if (knownSensors.indexOf(serviceClass) >= 0)
            configureSensor(dev, serviceClass, serviceIndex)
    }
}

// led pixel functions

function runProgram(prog: Buffer) {
    const pkt = jacdac.JDPacket.from(jacdac.LedStripCmd.Run, prog)
    pkt.sendAsMultiCommand(jacdac.SRV_LED_STRIP)
}

function runEncoded(prog: string, args?: number[]) {
    const encoded = jacdac.lightEncode(prog, args)
    runProgram(encoded)
}

function setPixel(index: number, rgb: number) {
    runEncoded("setone % # wait 1", [index, rgb])
}

function rotatePixel(clicks: number) {
    if (clicks > 0) {
        runEncoded("rotback #", [clicks])
        rotateDisplayPixel(clicks)
    } else {
        runEncoded("rotfwd #", [-clicks])
        rotateDisplayPixel(-clicks)
    }
}

function rotateDisplayPixel(clicks: number) {
    onlyLedDisplay.forEach(d => {
        d.rotate(clicks)
        d.show()
    })
}

function setPixelBrightness(ratio: number) {
    const pkt = jacdac.JDPacket.jdpacked(
        jacdac.CMD_SET_REG | jacdac.LedStripReg.Brightness,
        "u0.8",
        [ratio]
    )
    pkt.sendAsMultiCommand(jacdac.SRV_LED_STRIP)
    const pkt2 = jacdac.JDPacket.jdpacked(
        jacdac.CMD_SET_REG | jacdac.LedDisplayReg.Brightness,
        "u0.8",
        [ratio]
    )
    pkt2.sendAsMultiCommand(jacdac.SRV_LED_DISPLAY)
}

function configureActuator(dev: jacdac.Device, serviceClass: number, serviceIndex: number) {
    if (serviceClass === jacdac.SRV_SERVO) {
        // nothing to do here
    } else if (serviceClass === jacdac.SRV_LED_STRIP) {
        const pkt = jacdac.JDPacket.jdpacked(
            jacdac.CMD_SET_REG | jacdac.LedStripReg.Brightness,
            "u0.8",
            [0.1]
        )
        pkt.sendAsMultiCommand(jacdac.SRV_LED_STRIP)
        setPixel(0, 0xff0000)
    } else if (serviceClass === jacdac.SRV_LED_DISPLAY) {
        const ledDisplay = new modules.LedDisplayClient(dev.deviceId)
        ledDisplay.start()
        jacdac.bus.reattach(dev)
        onlyLedDisplay.push(ledDisplay);
        ledDisplay.setPixelColor(1, 0x00FF00)
        ledDisplay.show()
        // ledDisplay.setAll(0xFF0000)
    } else if (serviceClass === jacdac.SRV_LED) {
        // nothing to do here
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

// refill streaming samples register on each self-announce
let samplesCount = 0
jacdac.bus.subscribe(jacdac.SELF_ANNOUNCE, () => {
    if (!(samplesCount++ % 3))
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

let nextTone: number
function tonePlayer() {
    control.inBackground(() => {
        while (true) {
            if (nextTone) {
                const t = nextTone
                nextTone = 0
                music.playTone(t, music.beat(BeatFraction.Half))
            }
            basic.pause(5)
        }
    })
}
tonePlayer()

function scheduleTone(f: number) {
    nextTone = f
    music.stopAllSounds()
}

function processEvent(serviceClass: number, pkt: jacdac.JDPacket) {
    if (serviceClass === jacdac.SRV_BUTTON) {
        const index = getIndexFromButton(pkt)
        const whichNote = buttonNotes[index]
        led.stopAnimation()
        if (pkt.eventCode === jacdac.ButtonEvent.Down) {
            basic.showIcon(buttonPressIcons[index], 0)
            scheduleTone(whichNote)
            mouseClick(
                jacdac.HidMouseButton.Left,
                jacdac.HidMouseButtonEvent.Down
            )
        } else if (pkt.eventCode === jacdac.ButtonEvent.Up) {
            basic.clearScreen()
            mouseClick(
                jacdac.HidMouseButton.Left,
                jacdac.HidMouseButtonEvent.Up
            )
        } else if (pkt.eventCode === jacdac.ButtonEvent.Hold) {
            game.addScore(1)
        }
    } else if (serviceClass === jacdac.SRV_ACCELEROMETER) {
        basic.showIcon(
            IconNames.Heart + pkt.eventCode - jacdac.AccelerometerEvent.TiltUp,
            0
        )
    }
}

function processSensorGetReading(serviceClass: number, pkt: jacdac.JDPacket) {
    if (knownSensors.indexOf(serviceClass) == -1) return
    const lookup = pkt.deviceIdentifier + ":" + pkt.serviceIndex.toString()
    //console.log("get reading " + lookup)
    if (serviceClass === jacdac.SRV_ROTARY_ENCODER) {
        const position = pkt.jdunpack<number[]>("u32")[0]
        if (position !== sensorMap[lookup]) {
            const diff = position - (sensorMap[lookup] || 0)
            sensorMap[lookup] = position
            led.plotBarGraph(position % 20, 19)
            rotatePixel(diff)
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
            setPixelBrightness(position / 200) // don't go above 50%
        }
    } else if (serviceClass === jacdac.SRV_TEMPERATURE) {
        const temp = Math.round(pkt.jdunpack<number[]>("i22.10")[0])
        if (temp !== sensorMap[lookup]) {
            sensorMap[lookup] = temp
            control.inBackground(() => {
                led.stopAnimation()
                if (temp < 0 || temp > 99) basic.showNumber(temp)
                else whaleysans.showNumber(temp)
            })
        }
    } else if (serviceClass === jacdac.SRV_GAMEPAD) {
        const [buttons, x, y] = pkt.jdunpack<number[]>("i32 i1.15 i1.15")
        plot(x * 100, y * 100)
        const maxSpeed = 20
        if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1)
            mouseMove(x * maxSpeed, y * maxSpeed)
    }
}

function plot(x: number, y: number) {
    basic.clearScreen()
    let dispX = 2
    let dispY = 2
    //console.log(`${x} ${y}`);
    if (x < -30) dispX--
    if (x < -60) dispX--
    if (x > 30) dispX++
    if (x > 60) dispX++
    if (y < -30) dispY--
    if (y < -60) dispY--
    if (y > 30) dispY++
    if (y > 60) dispY++
    led.plot(dispX, dispY)
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
    })
    const ld = onlyLedDisplay.find(c => c.role === d.deviceId)
    if (ld) {
        onlyLedDisplay.removeElement(ld)
    }
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
        } else if (sc === jacdac.SRV_LED_STRIP) {
            animateLEDs(b)
        } else if (sc === jacdac.SRV_LED) {
            animateLED(b)
        }
    })
    animateDisplayLEDs(b)
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

function mouseMove(x: number, y: number) {
    const pkt = jacdac.JDPacket.jdpacked(
        jacdac.HidMouseCmd.Move,
        "i16 i16 u16",
        [x | 0, y | 0, 0]
    )
    pkt.sendAsMultiCommand(jacdac.SRV_HID_MOUSE)
}

function mouseClick(
    buttons: jacdac.HidMouseButton,
    event: jacdac.HidMouseButtonEvent
) {
    const pkt = jacdac.JDPacket.jdpacked(
        jacdac.HidMouseCmd.SetButton,
        "u16 u8",
        [buttons, event]
    )
    pkt.sendAsMultiCommand(jacdac.SRV_HID_MOUSE)
}

function animateLEDs(b: Button) {
    if (b === Button.A) {
        runEncoded("rotfwd 1")            
    } else if (b === Button.B) {
        runEncoded("rotback 1")
    } else {
        runEncoded("setall #000000 #ff0000 #00ff00 #0000ff")
    }
}

const pattern = [0x000000, 0xff0000, 0x00ff00, 0x0000ff]

function animateDisplayLEDs(b: Button) {
    if (b === Button.A) {        
        onlyLedDisplay.forEach(d => {
            d.rotate(1)
            d.show()
        })
    } else if (b === Button.B) {
        onlyLedDisplay.forEach(d => {
            d.rotate(-1)
            d.show()
        })
    } else {
        onlyLedDisplay.forEach(d => {
            const numPixels = d.numPixels()
            let j = 0
            for (let i = 0; i < numPixels; i++) {
                d.setPixelColor(i, pattern[j])
                j++
                if (j === pattern.length)
                    j = 0
            }
            d.show()
        })
    }
}

function sendColor(color: number) {
    const pkt = jacdac.JDPacket.jdpacked(jacdac.LedCmd.Animate, "u8 u8 u8 u8", [
        color >> 16,
        (color & 0x00ff00) >> 8,
        color,
        50,
    ])
    pkt.sendAsMultiCommand(jacdac.SRV_LED)
}

function animateLED(b: Button) {
    const color =
        b === Button.A ? 0xff0000 : b === Button.B ? 0x00ff00 : 0x0000ff
    sendColor(color)
    pause(500)
    sendColor(0)
}

jacdac.firmwareVersion = jacdac.VERSION
jacdac.start();
basic.showIcon(IconNames.Happy)

