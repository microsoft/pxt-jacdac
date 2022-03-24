jacdac.productIdentifier = 0x3dbc99b9
music.setVolume(100)
music.setTempo(180)
jacdac.firmwareVersion = jacdac.VERSION

// tone player
namespace machine {
    let nextTone: number
    function startTonePlayer() {
        music.stopAllSounds()
        control.inBackground(() => {
            while (nextTone) {
                const t = nextTone
                nextTone = 0
                music.playTone(t, music.beat(BeatFraction.Half))
                basic.pause(20)
            }
        })
    }
    export function scheduleTone(f: number) {
        nextTone = f
        startTonePlayer()
    }

    export function sonify(value: number, max: number) {
        const fmin = 200
        const fmax = 10000
        const f = Math.map(Math.abs(value), 0, max, fmin, fmax)
        scheduleTone(f)
    }

    export function plot(value: number, max: number) {
        led.plotBarGraph(value, max)
        machine.sonify(value, max)
    }
}

// number display
namespace machine {
    class NumberToShow {
        constructor(public icon: IconNames, public x: number) {}
    }
    const numbersToShow: NumberToShow[] = []

    function flushNumbers() {
        control.inBackground(() => {
            while (numbersToShow.length > 0) {
                const n = numbersToShow.pop()
                const icon = n.icon
                const x = n.x
                led.stopAnimation()
                basic.showIcon(icon, 700)
                if (x < 0 || x > 99) basic.showNumber(x)
                else {
                    whaleysans.showNumber(x)
                    basic.pause(700)
                }
            }
        })
    }

    export function showNumber(icon: IconNames, x: number) {
        if (numbersToShow.length == 0) flushNumbers()
        if (!numbersToShow.find(n => n.icon === icon))
            numbersToShow.push(new NumberToShow(icon, x))
    }
}

// device presence
namespace machine {
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
                d => !ignoreDevice(d)
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
    jacdac.bus.on(jacdac.DEVICE_ANNOUNCE, schedulePlayDeviceCount)
    jacdac.bus.on(jacdac.DEVICE_DISCONNECT, schedulePlayDeviceCount)
}

// factory registration
namespace machine {
    export function ignoreDevice(d: jacdac.Device) {
        return (
            d === jacdac.bus.selfDevice ||
            d.hasService(jacdac.SRV_INFRASTRUCTURE) ||
            d.hasService(jacdac.SRV_PROXY)
        )
    }

    class ClientFactory {
        constructor(
            public serviceClass: number,
            public handler: (devid: string, serviceIndex: number) => void
        ) {}
    }
    const factories: ClientFactory[] = []

    export function addClientFactory(
        serviceClass: number,
        handler: (devid: string, serviceIndex: number) => void
    ) {
        console.log(`modules: register ${serviceClass}`)
        factories.push(new ClientFactory(serviceClass, handler))

        // run factories for all devices
        const devices = jacdac.bus.devices
        if (devices) devices.forEach(startClients)
    }

    function startClient(d: jacdac.Device, serviceIndex: number) {
        const serviceClass = d.serviceClassAt(serviceIndex)
        const factory = factories.find(f => f.serviceClass === serviceClass)
        if (factory) return factory.handler(d.deviceId, serviceIndex)
        return null
    }

    function startClients(d: jacdac.Device) {
        if (machine.ignoreDevice(d)) return
        // whenever a device announces itself,
        // cache its services, if not already done
        // spin up clients
        if (!d.clients.length)
            for (let i = 1; i < d.serviceClassLength; i++) startClient(d, i)
    }

    function start() {
        jacdac.bus.on(jacdac.DEVICE_ANNOUNCE, startClients)
        basic.showIcon(IconNames.Happy)
    }

    start()
}
