
class ServiceDesc {
    constructor(
        public classNum: number,
        public name: string,
        public testFn?: (num: number) => void
    ) {}
}

const serviceDescs: ServiceDesc[] = [
    new ServiceDesc(jacdac.SRV_ACCELEROMETER, "acc", num =>
        modules.accelerometer1.setStreaming(num & 1 ? true : false)
    ),
    new ServiceDesc(jacdac.SRV_LED_PIXEL, "light", num => {
        const cl = modules.ledPixel1
        cl.setBrightness(10)
        //cl.setStrip(128, jacdac.LightType.WS2812B_SK9822)
        cl.configure(80, jacdac.LedPixelLightType.WS2812B_GRB)

        const duration = 30 * 1000
        //cl.showAnimation(new jacdac.lightanimation.ColorWipe, duration)

        switch (num % 8) {
            case 0:
                cl.runEncoded("setall #000000")
                break
            case 1:
                cl.showAnimation(modules.ledPixelAnimations.comet, duration)
                break
            case 2:
                cl.showAnimation(modules.ledPixelAnimations.firefly, duration)
                break
            case 3:
                cl.showAnimation(
                    modules.ledPixelAnimations.rainbowCycle,
                    duration
                )
                break
            case 4:
                cl.showAnimation(
                    modules.ledPixelAnimations.runningLights,
                    duration
                )
                break
            case 5:
                cl.showAnimation(modules.ledPixelAnimations.sparkle, duration)
                break
            case 6:
                cl.showAnimation(
                    modules.ledPixelAnimations.theatherChase,
                    duration
                )
                break
            case 7:
                cl.showAnimation(modules.ledPixelAnimations.colorWipe, duration)
                break
        }

        //pause(500)
        //cl.setAll(0x0)
        //jacdac.monoLightClient.setBrightness(0)
    }),
    new ServiceDesc(jacdac.SRV_SERVO, "servo", num =>
        (num & 3) == 0
            ? modules.servo1.turnOff()
            : modules.servo1.setAngle(num & 1 ? 90 : 45)
    ),
    new ServiceDesc(jacdac.SRV_MOTOR, "motor", num =>
        modules.motor1.run(((num % 11) - 5) * 20)
    ),
    new ServiceDesc(jacdac.SRV_LOGGER, "logger"),
    new ServiceDesc(jacdac.SRV_ROTARY_ENCODER, "crank", num =>
        modules.rotaryEncoder1.setStreaming(num & 1 ? true : false)
    ),
    new ServiceDesc(jacdac.SRV_BUTTON, "btn", num =>
        modules.button1.setStreaming(num & 1 ? true : false)
    )
]

class RawSensorClient extends jacdac.SensorClient {
    constructor(name: string, deviceClass: number) {
        super(deviceClass, name, "b")
    }
    get reading() {
        const vals = this._reading.values
        if (vals) {
            const buf = vals[0] as Buffer
            return jacdac.intOfBuffer(buf)
        }
        return undefined
    }
}

function hexNum(n: number) {
    const hex = "0123456789abcdef"
    let r = "0x"
    for (let i = 0; i < 8; ++i) {
        r += hex[(n >>> ((7 - i) * 4)) & 0xf]
    }
    return r
}

let testDevN = 0
let lastDev: jacdac.Device
function testDevice(d: jacdac.Device) {
    if (d == jacdac.bus.selfDevice) return
    if (d != lastDev) testDevN = 1
    else testDevN++
    lastDev = d
    for (let i = 4; i < d.services.length; i += 4) {
        const id = d.services.getNumber(NumberFormat.UInt32LE, i)
        let s = serviceDescs.find(s => s.classNum == id)
        if (s && s.testFn) {
            s.testFn(testDevN)
        }
    }
}

function deviceView(d: jacdac.Device) {
    if (d == jacdac.bus.selfDevice) return
    const services: ServiceDesc[] = []
    for (let i = 4; i < d.services.length; i += 4) {
        const id = d.services.getNumber(NumberFormat.UInt32LE, i)
        let s = serviceDescs.find(s => s.classNum == id)
        if (!s) s = new ServiceDesc(id, "Service", () => {})
        services.push(s)
    }

    let num = 0
    let noopSent = 0
    let noopRecv = 0

    function noop() {}

    // TODO: using function syntax here causes crash at runtime; https://github.com/microsoft/pxt/issues/8172
    const noopTest = () => {
        noopSent = noopRecv = 0
        const pkt = jacdac.JDPacket.from(
            jacdac.ControlCmd.Noop,
            Buffer.create(0)
        )
        const unsub = jacdac.bus.subscribe(
            jacdac.PACKET_PROCESS,
            (r: jacdac.JDPacket) => {
                if (
                    r.serviceIndex == jacdac.JD_SERVICE_INDEX_CRC_ACK &&
                    pkt.crc == r.serviceCommand &&
                    r.deviceIdentifier == d.deviceId
                )
                    noopRecv++
            }
        )
        pkt.requiresAck = true
        for (let i = 0; i < 1000; ++i) {
            noopSent++
            pkt._sendCmd(d)
            pause(3) // the real rate seems about 10ms per packet sent
        }
        unsub()
    }
}
