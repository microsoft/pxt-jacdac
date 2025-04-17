namespace jacdac {
    // Service GPIO constants
    export const SRV_GPIO = 0x10d85a69

    export const enum GPIOMode { // uint8_t
        //% block="off"
        Off = 0x0,
        //% block="off pull up"
        OffPullUp = 0x10,
        //% block="off pull down"
        OffPullDown = 0x20,
        //% block="input"
        Input = 0x1,
        //% block="input pull up"
        InputPullUp = 0x11,
        //% block="input pull down"
        InputPullDown = 0x21,
        //% block="output"
        Output = 0x2,
        //% block="output high"
        OutputHigh = 0x12,
        //% block="output low"
        OutputLow = 0x22,
        //% block="analog in"
        AnalogIn = 0x3,
        //% block="alternative"
        Alternative = 0x4,
        //% block="base mode mask"
        BaseModeMask = 0xf,
    }


    export const enum GPIOCapabilities { // uint16_t
        //% block="pull up"
        PullUp = 0x1,
        //% block="pull down"
        PullDown = 0x2,
        //% block="input"
        Input = 0x4,
        //% block="output"
        Output = 0x8,
        //% block="analog"
        Analog = 0x10,
    }

    export const enum GPIOReg {
        /**
         * Read-only digital_values bytes. For every pin set to `Input*` the corresponding **bit** in `digital_values` will be `1` if and only if
         * the pin is high.
         * For other pins, the bit is `0`.
         * This is normally streamed at low-ish speed, but it's also automatically reported whenever
         * a digital input pin changes value (throttled to ~100Hz).
         * The analog values can be read with the `ADC` service.
         *
         * ```
         * const [digitalValues] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        State = 0x101,

        /**
         * Read-only # uint8_t. Number of pins that can be operated through this service.
         *
         * ```
         * const [numPins] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        NumPins = 0x180,
    }

    export namespace GPIORegPack {
        /**
         * Pack format for 'state' data.
         */
        export const State = "b"

        /**
         * Pack format for 'num_pins' data.
         */
        export const NumPins = "u8"
    }

    export const enum GPIOCmd {
        /**
         * Configure (including setting the value) zero or more pins.
         * `Alternative` settings means the pin is controlled by other service (SPI, I2C, UART, PWM, etc.).
         *
         * ```
         * const [rest] = jdunpack<[([number, jacdac.GPIOMode])[]]>(buf, "r: u8 u8")
         * const [pin, mode] = rest[0]
         * ```
         */
        Configure = 0x80,

        /**
         * Argument: pin uint8_t. Report capabilities and name of a pin.
         *
         * ```
         * const [pin] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        PinInfo = 0x81,

        /**
         * report PinInfo
         * ```
         * const [pin, hwPin, capabilities, mode, label] = jdunpack<[number, number, jacdac.GPIOCapabilities, jacdac.GPIOMode, string]>(buf, "u8 u8 u16 u8 s")
         * ```
         */

        /**
         * Argument: label string (bytes). This responds with `pin_info` report.
         *
         * ```
         * const [label] = jdunpack<[string]>(buf, "s")
         * ```
         */
        PinByLabel = 0x83,

        /**
         * report PinByLabel
         * ```
         * const [pin, hwPin, capabilities, mode, label] = jdunpack<[number, number, jacdac.GPIOCapabilities, jacdac.GPIOMode, string]>(buf, "u8 u8 u16 u8 s")
         * ```
         */

        /**
         * Argument: hw_pin uint8_t. This responds with `pin_info` report.
         *
         * ```
         * const [hwPin] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        PinByHwPin = 0x84,

        /**
         * report PinByHwPin
         * ```
         * const [pin, hwPin, capabilities, mode, label] = jdunpack<[number, number, jacdac.GPIOCapabilities, jacdac.GPIOMode, string]>(buf, "u8 u8 u16 u8 s")
         * ```
         */
    }

    export namespace GPIOCmdPack {
        /**
         * Pack format for 'configure' data.
         */
        export const Configure = "r: u8 u8"

        /**
         * Pack format for 'pin_info' data.
         */
        export const PinInfo = "u8"

        /**
         * Pack format for 'pin_info' data.
         */
        export const PinInfoReport = "u8 u8 u16 u8 s"

        /**
         * Pack format for 'pin_by_label' data.
         */
        export const PinByLabel = "s"

        /**
         * Pack format for 'pin_by_label' data.
         */
        export const PinByLabelReport = "u8 u8 u16 u8 s"

        /**
         * Pack format for 'pin_by_hw_pin' data.
         */
        export const PinByHwPin = "u8"

        /**
         * Pack format for 'pin_by_hw_pin' data.
         */
        export const PinByHwPinReport = "u8 u8 u16 u8 s"
    }

}
