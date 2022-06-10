jacdac.productIdentifier = 0x3dbc99b9
music.setVolume(100)
music.setTempo(180)
jacdac.firmwareVersion = jacdac.VERSION

// microbit wrapper
namespace machine {
    export const EVENT_A = "event_a"
    export const EVENT_B = "event_b"
    export const EVENT_AB = "event_ab"
    export const EVENT_TONE = "event_tone"
    export const POT_CHANGE = "pot_change"

    class MicrobitMachine extends jacdac.EventSource {
        tone: number

        constructor() {
            super()
            control.onEvent(
                EventBusSource.MICROBIT_ID_BUTTON_A,
                EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
                () => this.emit(EVENT_A)
            )
            control.onEvent(
                EventBusSource.MICROBIT_ID_BUTTON_B,
                EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
                () => this.emit(EVENT_B)
            )
            control.onEvent(
                EventBusSource.MICROBIT_ID_BUTTON_AB,
                EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
                () => this.emit(EVENT_AB)
            )
        }

        /**
         * Registers a handler that will be unsubscribed when the client disconnects
         */
        onClient(
            client: jacdac.Client,
            eventName: string,
            handler: (arg?: any) => void
        ) {
            const unsub = this.subscribe(eventName, handler)
            client.on(jacdac.DISCONNECT, unsub)
        }

        /**
         * Registers a control event handler that will be unsubscribed when the client disconnects
         */
        onControlEvent(
            client: jacdac.Client,
            src: number,
            value: number,
            handler: () => void
        ) {
            const key = `${src}:${value}`
            if (this.listenerCount(key) == 0) {
                control.onEvent(src, value, () => this.emit(key))
            }
            this.onClient(client, key, handler)
        }

        /**
         * Schedules a tone to be played
         * @param tone
         */
        playTone(tone: number) {
            this.tone = tone
            if (tone) this.emit(EVENT_TONE)
        }
    }
    export const microbit = new MicrobitMachine()
}

// tone player
namespace machine {
    let nextTone: number
    let nextToneOptions: SonifyOptions

    function startTonePlayer() {
        music.stopAllSounds()
        control.runInBackground(() => {
            while (nextTone && nextToneOptions) {
                const t = nextTone
                const options = nextToneOptions

                nextTone = 0
                nextToneOptions = undefined

                machine.microbit.playTone(Math.abs(t))

                // 2.0 sound effects
                const duration = music.beat(BeatFraction.Half)
                const startf = t >= 0 ? t : 0
                const endf = t < 0 ? -t : 0
                const effect = music.createSoundEffect(
                    options.waveShape,
                    startf,
                    endf,
                    options.startVolume,
                    255 - options.startVolume,
                    duration,
                    options.effect,
                    options.interpolation
                )
                music.playSoundEffect(effect, SoundExpressionPlayMode.UntilDone)

                basic.pause(20)
            }
        })
    }
    export function scheduleTone(f: number, options: SonifyOptions) {
        nextTone = f
        nextToneOptions = options
        startTonePlayer()
    }

    export class SonifyOptions {
        constructor(
            public waveShape: WaveShape,
            public effect: SoundExpressionEffect,
            public interpolation: InterpolationCurve,
            public startVolume: number
        ) {}
    }

    function sonify(value: number, max: number, options: SonifyOptions) {
        const fmin = 200
        const fmax = 10000
        const f = Math.map(Math.abs(value), 0, max, fmin, fmax)
        scheduleTone(Math.sign(value) * f, options)
    }

    export function plot(value: number, max: number, options: SonifyOptions) {
        led.plotBarGraph(value, max)
        sonify(value, max, options)
    }
}

// number display
namespace machine {
    class NumberToShow {
        constructor(public icon: IconNames, public x: number) {}
    }
    const numbersToShow: NumberToShow[] = []

    function flushNumbers() {
        control.runInBackground(() => {
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
        control.runInBackground(() => {
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
            d.hasService(jacdac.SRV_PROXY) ||
            // this device was previously connected
            // and clients are already instantiated for it
            jacdac.bus.unattachedClients.some(
                client => client.roleName === d.deviceId
            )
        )
    }

    class ClientFactory {
        constructor(
            public serviceClass: number,
            public handler: (
                devid: string,
                serviceIndex: number,
                sonifyOptions: SonifyOptions
            ) => jacdac.Client
        ) {}
    }
    const factories: ClientFactory[] = []

    export function addClientFactory(
        serviceClass: number,
        handler: (
            devid: string,
            serviceIndex: number,
            sonifyOptions: SonifyOptions
        ) => jacdac.Client
    ) {
        console.log(`modules: register ${serviceClass}`)
        factories.push(new ClientFactory(serviceClass, handler))

        // run factories for all devices
        const devices = jacdac.bus.devices
        if (devices) devices.forEach(startClients)
    }

    function startClient(
        d: jacdac.Device,
        serviceIndex: number
    ): jacdac.Client {
        const serviceClass = d.serviceClassAt(serviceIndex)
        const factory = factories.find(f => f.serviceClass === serviceClass)
        if (factory) {
            // waveshape: 0..4
            // effect: 0..3
            // interpoliation: 0..2
            const sonifyOptions = new SonifyOptions(
                <WaveShape>Math.randomRange(0, 4),
                <SoundExpressionEffect>Math.randomRange(0, 3),
                <InterpolationCurve>Math.randomRange(0, 1),
                Math.randomRange(0, 255)
            )
            return factory.handler(d.deviceId, serviceIndex, sonifyOptions)
        }
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

    function destroyClients(d: jacdac.Device) {
        const clients = jacdac.bus.unattachedClients.slice(0)
        const devid = d.deviceId
        clients
            .filter(client => client.roleName === devid)
            .forEach(client => client.destroy())
    }

    function start() {
        jacdac.bus.on(jacdac.DEVICE_ANNOUNCE, startClients)
        jacdac.bus.on(jacdac.DEVICE_DISCONNECT, destroyClients)
        basic.showIcon(IconNames.Happy)
    }

    start()
}
