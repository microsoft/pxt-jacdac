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

let proxyMode = false
let animationRunning = false
function identifyAnimation() {
    if (animationRunning || proxyMode) return

    animationRunning = true
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
        animationRunning = false
    })
}
function proxyAnimation() {
    if (animationRunning || !proxyMode) return

    animationRunning = true
    control.runInParallel(() => {
        basic.showString("JACDAC MODE PRESS A TO RESET")
        animationRunning = false
    })
}

function handleStatusEvent(event: jacdac.StatusEvent) {
    switch (event) {
        case jacdac.StatusEvent.ProxyStarted:
            proxyMode = true
            proxyAnimation()
            break
        case jacdac.StatusEvent.ProxyPacketReceived:
            proxyAnimation()
            break
        case jacdac.StatusEvent.Identify:
            identifyAnimation()
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
        jacdac.productIdentifier = 0x32f6253d
        jacdac.bus.on(jacdac.STATUS_EVENT, handleStatusEvent)
        if (settings.exists(jacdac.JACDAC_PROXY_SETTING)) {
            const reset = () => control.reset()
            input.onButtonPressed(Button.A, reset)
            input.onButtonPressed(Button.B, reset)
        }
    }
}
initPlatform()
