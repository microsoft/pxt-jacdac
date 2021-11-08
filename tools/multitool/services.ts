const servNames = hex`
0904141f616363656c65726f6d65746572006ea0ea1d61726361646547616d65706164000636c61f
617263616465536f756e6400fcee6214617a757265496f744875624865616c7468006c9e731c6261
72636f646552656164657200ea7c111e6261726f6d6574657200cf86c91a626974526164696f0048
99fa1f626f6f746c6f6164657200ccb7bf13627261696c6c65446973706c61790063a27314627574
746f6e00d7b1571b62757a7a657200c9ad652863617061636974697665427574746f6e006ac5371f
63686172616374657253637265656e001df81f12636f64616c4d6573736167654275730067d53016
636f6c6f7200bfb9b715636f6d706173730000000000636f6e74726f6c004526b01f64696d6d6572
008a6b1a1464697374616e636500058ccf11646d78004b150d11646f744d617472697800c69d9c16
65434f3200c6c6471f666c657800f2061b1e6779726f73636f706500c46d6c166865617274526174
6500b558571e68696441646170746572006a5bb0186869644b6579626f617264001cdc8518686964
4d6f75736500b810c81668756d696469747900f2ca6e1e696c6c756d696e616e636500e536fa1669
6e646578656453637265656e00eb89151e696e6672617374727563747572650056748f106a6f7973
7469636b00f848301e6c656400e0006f126c6564506978656c004c05ab1c6c6967687442756c6200
1c9adc176c696768744c6576656c00ca1fdc126c6f6767657200889002136d61676e65746f6d6574
657200c82d06136d61747269784b65797061640086ac3d116d6963726f70686f6e6500d78c841a6d
6964694f757470757400789a0f146d6f64656c52756e6e65720049a779116d6f74696f6e00d84c00
176d6f746f72002b5ed5186d756c7469746f756368004647271f706f74656e74696f6d6574657200
5ac9a41f706f77657200c34017287072657373757265427574746f6e006a46c71670726f746f5465
7374004999f11670726f787900b64ebb1070756c73654f78696d6574657200954c73137261696e47
6175676500281a8b1a7265616c54696d65436c6f636b00b24c6c127265666c65637465644c696768
740056e63f1872656c617900a2f08917726e6700667e4b1e726f6c654d616e6167657200c929fa10
726f74617279456e636f646572006bd0f419726f76657200c5e1901d73656e736f72416767726567
61746f72000391fc12736572766f004adc071173657474696e677300f7586119736576656e536567
6d656e74446973706c617900b3a34a1d736f696c4d6f69737475726500ca231717736f6c656e6f69
64005d1aad14736f756e644c6576656c0038d30314736f756e64506c61796572001ebc7a15736f75
6e64537065637472756d0095d9041273706565636853796e746865736973000294d21a7377697463
68000bb7431b7463700061c03a14746865726d6f636f75706c6500c7ba2114746865726d6f6d6574
6572009b8dc315747261666669634c696768740097b5a51274766f6300e54e3c10756e6971756542
7261696e00900d6e1f7576496e646578001f849421766572696669656454656c656d6574727900a2
c43f18766962726174696f6e4d6f746f7200ed627b1477617465724c6576656c0040504d1f776569
6768745363616c6500fae1aa1877696669002be96b1877696e64446972656374696f6e00bf1b591b
77696e64537065656400
`

function servName(id: number) {
    let ptr = 0
    while (ptr < servNames.length) {
        let eptr = ptr + 4
        while (servNames[eptr]) eptr++
        if (servNames.getNumber(NumberFormat.UInt32LE, ptr) == id) {
            return servNames.slice(ptr + 4, eptr - ptr - 4).toString()
        }
        ptr = eptr + 1
    }
    return hexNum(id)
}

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
            ? modules.servo1.setEnabled(false)
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
        modules.rotaryEncoder1.setStreaming(num & 1 ? true : false)
    ),
    new ServiceDesc(jacdac.SRV_BUZZER, "buz", num =>
        modules.buzzer1.playMelody(music.jumpDown, 20)
    ),
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

function sensorView(d: jacdac.Device, s: ServiceDesc) {
    const client = new RawSensorClient(d.deviceId, s.classNum)
    const reading = menu.item("Reading: ", () => {})
    client.setStreaming(true)
    client.onStateChanged(() => {
        reading.name = "Reading: " + client.reading
    })

    menu.show({
        title: "Device: " + d.shortId + " / " + s.name,
        update: opts => {
            opts.elements = [reading]
            if (!d.isConnected) menu.exit(opts)
        },
    })

    client.destroy()
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
        if (!s) s = new ServiceDesc(id, "Service: " + servName(id), () => {})
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

    menu.show({
        title: "Device: " + d.shortId,
        footer: "A = select, -> = test service",
        update: opts => {
            opts.elements = []
            //opts.elements.push(menu.item(d..classDescription, noop))
            opts.elements.push(menu.item(d.firmwareVersion, noop))
            opts.elements.push(
                menu.item("Temp: " + (d.mcuTemperature || "?") + "C", noop)
            )
            opts.elements.push(
                menu.item(
                    "Uptime: " + Math.round((d.uptime || 0) / 1000000) + "s",
                    noop
                )
            )
            opts.elements.push(menu.item("Identify", () => identify(d)))
            opts.elements.push(
                menu.item(`Ping test: ${noopRecv}/${noopSent}`, noopTest)
            )
            opts.elements.push(menu.item("---", noop))
            opts.elements = opts.elements.concat(
                services.map(s =>
                    menu.item(
                        s.name,
                        () => {
                            sensorView(d, s)
                        },
                        opts => {
                            if (s.testFn) {
                                s.testFn(++num)
                                opts.title =
                                    "Device: " + d.shortId + " T:" + num
                            }
                        }
                    )
                )
            )

            if (!d.isConnected) menu.exit(opts)
        },
    })
}
