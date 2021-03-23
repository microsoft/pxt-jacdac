namespace control {
    /**
     * Used internally
     */
    //% flags.defl=0 shim=control::onEvent
    export declare function internalOnEvent(src: number, value: number, handler: () => void, flags?: number): void;

    export function getConfigValue(key: number, defl: number): number {
        return defl
    }
}

namespace pins {
    export function pinByCfg(key: number): DigitalInOutPin {
        return null
    }
}

jacdac.onStatusEvent = function (event) {
    switch(event) {
        case jacdac.StatusEvent.ProxyStarted:
            basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            . . # . #
            `)
            break;
        case jacdac.StatusEvent.ProxyPacketReceived:
            led.toggle(2, 4);
            break;
    }
}