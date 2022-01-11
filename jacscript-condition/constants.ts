namespace jacdac {
    // Service Jacscript Condition constants
    export const SRV_JACSCRIPT_CONDITION = 0x1196796d
    export const enum JacscriptConditionCmd {
        /**
         * No args. Triggers a `signalled` event.
         */
        Signal = 0x80,
    }

    export const enum JacscriptConditionEvent {
        /**
         * Triggered by `signal` command.
         */
        //% block="signalled"
        Signalled = 0x3,
    }

}
