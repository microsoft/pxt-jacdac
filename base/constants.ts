namespace jacdac {
    // Service: Base service
    export const enum BaseReg {
        /**
         * Reports the current state or error status of the device. ``code`` is a standardized value from
         * the JACDAC error codes. ``vendor_code`` is any vendor specific error code describing the device
         * state. This report is typically not queried, when a device has an error, it will typically
         * add this report in frame along with the announce packet.
         *
         * ```
         * const [code, vendorCode] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        StatusCode = 0x103,
    }

}
