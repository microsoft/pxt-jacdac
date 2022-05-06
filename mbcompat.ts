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
        while (true) {
            basic.showString("JACDAC DONGLE PRESS A TO RESET", 120)
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
            if (!proxyMode)
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
