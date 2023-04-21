namespace jacdac {
    // Service Bridge constants
    export const SRV_BRIDGE = 0x1fe5b46f
    export const enum BridgeReg {
        /**
         * Read-write bool (uint8_t). Enables or disables the bridge.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,
    }

    export namespace BridgeRegPack {
        /**
         * Pack format for 'enabled' data.
         */
        export const Enabled = "u8"
    }
}
