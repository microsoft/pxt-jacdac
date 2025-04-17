namespace jacdac {
    // Service DeviceScript Condition constants
    export const SRV_DEVICE_SCRIPT_CONDITION = 0x1196796d
    export const enum DeviceScriptConditionCmd {
        /**
         * No args. Triggers a `signalled` event.
         */
        Signal = 0x80,
    }

    export const enum DeviceScriptConditionEvent {
        /**
         * Triggered by `signal` command.
         */
        //% block="signalled"
        Signalled = 0x3,
    }

}
