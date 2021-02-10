namespace jacdac {
    // Service: Random Number Generator
    export const SRV_RNG = 0x1789f0a2

    export const enum RngVariant { // uint32_t
        Quantum = 0x1,
        ADCNoise = 0x2,
        WebCrypto = 0x3,
    }

    export const enum RngCmd {
        /**
         * Argument: length uint8_t. A command that generates a random buffer with the given length.
         * This never blocks for a long time.
         *
         * ```
         * const [length] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Random = 0x80,

        /**
         * report Random
         * ```
         * const [data] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
    }

    export const enum RngReg {
        /**
         * Constant Variant (uint32_t). The type of algorithm/technique used to generate the number.
         * `Quantum` refers to dedicated hardware device generating random noise due to quantum effects.
         * `ADCNoise` is the noise from quick readings of analog-digital converter, which reads temperature of the MCU or some floating pin.
         * `WebCrypto` refers is used in simulators, where the source of randomness comes from an advanced operating system.
         *
         * ```
         * const [variant] = jdunpack<[RngVariant]>(buf, "u32")
         * ```
         */
        Variant = 0x107,
    }

}
