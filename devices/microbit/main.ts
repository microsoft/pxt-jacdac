namespace servers {
    /**
     * Start all or some micro: bit servers
     */
    //% blockId=jacdac_microbit_start_all
    //% block="start all jacdac servers"
    export function startAll() {
        start()
    }

    /**
     * Start all or some micro:bit servers
     * @param options
     */
    export function start(options?: {
        buttonA?: boolean
        buttonB?: boolean
        buttonAB?: boolean
        buttonLogo?: boolean
        touchP0?: boolean
        touchP1?: boolean
        touchP2?: boolean
        screen?: boolean
        soundLevel?: boolean
        lightLevel?: boolean
        temperature?: boolean
        accelerometer?: boolean
        buzzer?: boolean
        soundPlayer?: boolean
        radio?: boolean
    }) {
        jacdac.startServer()
        if (!jacdac.isSimulator()) {
            if (!options || options.buttonA) servers.buttonA.start()
            if (!options || options.buttonB) servers.buttonB.start()
            if (!options || options.buttonAB) servers.buttonAB.start()
            if (!options || options.buttonLogo) servers.buttonLogo.start()
            if (!options || options.touchP0) servers.touchP0.start()
            if (!options || options.touchP1) servers.touchP1.start()
            if (!options || options.touchP2) servers.touchP2.start()
            if (!options || options.screen) servers.screenServer.start()
            if (!options || options.soundLevel) servers.soundLevelServer.start()
            if (!options || options.lightLevel) servers.lightLevelServer.start()
            if (!options || options.temperature)
                servers.temperatureServer.start()
            if (!options || options.accelerometer)
                servers.accelerometerServer.start()
            if (!options || options.buzzer) servers.buzzerServer.start()
            if (!options || options.soundPlayer)
                servers.soundPlayerServer.start()
            // calibration "kills" jacdac
            // microbit.compassServer.start()
            if (!options || options.radio) servers.radioServer.start()
        }

        if (jacdac.checkProxy()) jacdac.proxyFinalize()
        else {
            control.runInBackground(function () {
                pause(100)
                basic.showIcon(IconNames.Happy)
            })
        }
    }
}
