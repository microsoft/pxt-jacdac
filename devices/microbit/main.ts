namespace servers {
    /**
     * Start all or some micro:bit servers
     * @param options
     */
    export function start(options?: {
        buttonA?: boolean
        buttonB?: boolean
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
        /**
         * Starts servers even in simulation mode
         */
        forceSimulators?: boolean
        logger?: boolean
    }) {
        jacdac.startServer(options)
        options = options || {}
        if (options.forceSimulators || !jacdac.isSimulator()) {
            if (options.buttonA) servers.buttonA.start()
            if (options.buttonB) servers.buttonB.start()
            if (options.buttonLogo) servers.buttonLogo.start()
            if (options.touchP0) servers.touchP0.start()
            if (options.touchP1) servers.touchP1.start()
            if (options.touchP2) servers.touchP2.start()
            if (options.temperature) servers.temperatureServer.start()
            if (options.accelerometer) servers.accelerometerServer.start()
            if (options.soundLevel) servers.soundLevelServer.start()
            if (options.radio) servers.radioServer.start()
            if (options.screen) servers.screenServer.start()
            if (options.lightLevel) servers.lightLevelServer.start()
            if (options.soundPlayer) servers.soundPlayerServer.start()
            if (options.buzzer) servers.buzzerServer.start()
            // calibration "kills" jacdac
            // microbit.compassServer.start()
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
