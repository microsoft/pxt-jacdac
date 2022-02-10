namespace servers {
    /**
     * Start all microbit servers
     */
    //% blockId=jacdac_microbit_start_all
    //% block="start all jacdac servers"
    export function startAll() {
        jacdac.startServer()
        servers.buttonA.start()
        servers.buttonB.start()
        servers.buttonAB.start()
        servers.buttonLogo.start()
        servers.touchP0.start()
        servers.touchP1.start()
        servers.touchP2.start()
        servers.screenServer.start()
        servers.soundLevelServer.start()
        servers.lightLevelServer.start()
        servers.temperatureServer.start()
        servers.accelerometerServer.start()
        servers.buzzerServer.start()
        servers.soundPlayerServer.start()
        // calibration "kills" jacdac
        // microbit.compassServer.start()
        servers.radioServer.start()

        if (jacdac.checkProxy())
            jacdac.proxyFinalize()
        else {
            control.runInBackground(function () {
                pause(100)
                basic.showIcon(IconNames.Happy)
            })
        }
    }
}
