namespace control {
    /**
     * Used internally
     */
    //% flags.defl=0 shim=control::onEvent
    export declare function internalOnEvent(src: number, value: number, handler: () => void, flags?: number): void;
}

namespace pins {
    export function pinByCfg(key: number): DigitalInOutPin {
        return null
    }
}
