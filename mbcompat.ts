namespace control {
    /**
     * Used internally
     */
    //% flags.defl=0 shim=control::onEvent
    export declare function internalOnEvent(src: number, value: number, handler: () => void, flags?: number): void;

    export function runInBackground(a: () => void) {
        control.runInParallel(a);
        pauseUntil
    }

    /**
     * Derive a unique, consistent 64-bit serial number of this device from internal data.
     */
    //% shim=jacdac::deviceLongSerialNumber
    export declare function deviceLongSerialNumber(): Buffer;
}

namespace pins {
    export function pinByCfg(key: number): DigitalInOutPin {
        return null
    }
}
