namespace jacdac {
    // Service: PWM Light
    export const SRV_PWM_LIGHT = 0x1fb57453
    export const enum PwmLightReg {
        /**
         * Read-write ratio uint16_t. Set the luminosity of the strip. The value is used to scale `start_intensity` in `steps` register.
         * At `0` the power to the strip is completely shut down.
         *
         * ```
         * const [brightness] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        Brightness = 0x1,

        /**
         * Read-write mA uint16_t. Limit the power drawn by the light-strip (and controller).
         *
         * ```
         * const [maxPower] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        MaxPower = 0x7,

        /**
         * Constant uint8_t. Maximum number of steps allowed in animation definition. This determines the size of the `steps` register.
         *
         * ```
         * const [maxSteps] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        MaxSteps = 0x180,

        /**
         * The steps of current animation. Setting this also sets `current_iteration` to `0`.
         * Step with `duration == 0` is treated as an end marker.
         *
         * ```
         * const [rest] = jdunpack<[([number, number])[]]>(buf, "r: u16 u16")
         * const [startIntensity, duration] = rest[0]
         * ```
         */
        Steps = 0x82,

        /**
         * Read-write uint16_t. Currently excecuting iteration of animation. Can be set to `0` to restart current animation.
         * If `current_iteration > max_iterations`, then no animation is currently running.
         *
         * ```
         * const [currentIteration] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        CurrentIteration = 0x80,

        /**
         * Read-write uint16_t. The animation will be repeated `max_iterations + 1` times.
         *
         * ```
         * const [maxIterations] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        MaxIterations = 0x81,
    }

}
