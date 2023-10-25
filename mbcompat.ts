namespace control {
    /**
     * Used internally
     */
    //% flags.defl=0 shim=control::onEvent
    export declare function internalOnEvent(
        src: number,
        value: number,
        handler: () => void,
        flags?: number
    ): void

    export function getConfigValue(key: number, defl: number): number {
        return defl
    }

    export function deviceDalVersion() {
        return control.ramSize() > 1024 * 1024 ? "sim" : "2.0"
    }
}

namespace pins {
    export function pinByCfg(key: number): DigitalInOutPin {
        return null
    }
}

let identifyAnimationRunning = false
function identifyAnimation() {
    if (identifyAnimationRunning) return

    identifyAnimationRunning = true
    const sc = led.screenshot()
    control.runInParallel(() => {
        led.stopAnimation()
        basic.showAnimation(
            `00000 00000 00000  00000 00000  00000
        ####0 00000 ####0  00000 ####0  00000 
        ####0 00000 ####0  00000 ####0  00000 
        ###00 00000 ###00  00000 ###00  00000 
        00000 00000 00000  00000 00000  00000`,
            250
        )
        sc.plotFrame(0)
        identifyAnimationRunning = false
    })
}
function proxyAnimation() {
    control.runInParallel(() => {
        led.stopAnimation()
        // random matrix like animation
        led.setDisplayMode(DisplayMode.Greyscale)
        basic.clearScreen()
        let x: number = 0
        while (true) {
            x = (x + 1) % 4
            let y: number = Math.randomRange(1, 3)
            while (x === 3 && y === 3) {
                y = Math.randomRange(1, 2)
            }
            for (let i = 0; i < 4; ++i)
                for (let j = 0; j < 5; ++j) {
                    if (i == x && j == y) led.plotBrightness(i, j, 255)
                    else
                        led.plotBrightness(
                            i,
                            j,
                            Math.max(0, led.pointBrightness(i, j) - 8)
                        )
                }
            pause(128)
        }
    })
}

let proxyMode = false
function handleStatusEvent(event: jacdac.StatusEvent) {
    switch (event) {
        case jacdac.StatusEvent.ProxyStarted:
            control.dmesg("jacdac: dongle started")
            proxyMode = true
            proxyAnimation()
            break
        case jacdac.StatusEvent.ProxyPacketReceived:
            //led.toggle(4, 4)
            break
        case jacdac.StatusEvent.Identify:
            if (!proxyMode) identifyAnimation()
            break
    }
}

/**
 * Initialize Jacdac for micro:bit V2
 */
//% parts=v2
function initPlatform() {
    // don't use any jacdac static - it isn't initialized here yet in sim (pxt bug)
    jacdac.onPlatformStart = function () {
        jacdac.productIdentifier = jacdac.TARGET_PRODUCT_ID
        jacdac.bus.on(jacdac.STATUS_EVENT, handleStatusEvent)
        if (settings.exists(jacdac.JACDAC_PROXY_SETTING)) {
            const reset = () => control.reset()
            input.onButtonPressed(Button.A, reset)
            input.onButtonPressed(Button.B, reset)
        }
    }
}
initPlatform()
