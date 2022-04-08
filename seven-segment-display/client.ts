namespace modules {
    /**
     * A 7-segment numeric display, with one or more digits.
     **/
    //% fixedInstances blockGap=8
    export class SevenSegmentDisplayClient extends jacdac.Client {
        private readonly _digits: jacdac.RegisterClient<[Buffer]>
        private readonly _brightness: jacdac.RegisterClient<[number]>
        private readonly _doubleDots: jacdac.RegisterClient<[boolean]>
        private readonly _digitCount: jacdac.RegisterClient<[number]>
        private readonly _decimalPoint: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(jacdac.SRV_SEVEN_SEGMENT_DISPLAY, role)

            this._digits = this.addRegister<[Buffer]>(
                jacdac.SevenSegmentDisplayReg.Digits,
                "b"
            )
            this._brightness = this.addRegister<[number]>(
                jacdac.SevenSegmentDisplayReg.Brightness,
                "u0.16"
            )
            this._doubleDots = this.addRegister<[boolean]>(
                jacdac.SevenSegmentDisplayReg.DoubleDots,
                "u8"
            )
            this._digitCount = this.addRegister<[number]>(
                jacdac.SevenSegmentDisplayReg.DigitCount,
                "u8"
            )
            this._decimalPoint = this.addRegister<[boolean]>(
                jacdac.SevenSegmentDisplayReg.DecimalPoint,
                "u8"
            )
        }

        /**
         * Each byte encodes the display status of a digit using,
         * where bit 0 encodes segment `A`, bit 1 encodes segments `B`, ..., bit 6 encodes segments `G`, and bit 7 encodes the decimal point (if present).
         * If incoming `digits` data is smaller than `digit_count`, the remaining digits will be cleared.
         * Thus, sending an empty `digits` payload clears the screen.
         *
         * ```text
         *  - A -
         *  F   B
         *  |   |
         *  - G -
         *  |   |   -
         *  E   C  |DP|
         *  - D -   -
         * ```
         */
        //% callInDebugger
        //% group="Display"
        //% weight=100
        digits(): Buffer {
            this.start()
            const values = this._digits.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Each byte encodes the display status of a digit using,
         * where bit 0 encodes segment `A`, bit 1 encodes segments `B`, ..., bit 6 encodes segments `G`, and bit 7 encodes the decimal point (if present).
         * If incoming `digits` data is smaller than `digit_count`, the remaining digits will be cleared.
         * Thus, sending an empty `digits` payload clears the screen.
         *
         * ```text
         *  - A -
         *  G   B
         *  |   |
         *  - F -
         *  |   |   -
         *  E   C  |DP|
         *  - D -   -
         * ```
         */
        //% group="Display"
        //% weight=99
        setDigits(value: Buffer) {
            this.start()
            const values = this._digits.values as any[]
            values[0] = value
            this._digits.values = values as [Buffer]
        }

        /**
         * Controls the brightness of the LEDs. `0` means off.
         */
        //% callInDebugger
        //% group="Display"
        //% block="%sevensegmentdisplay brightness"
        //% blockId=jacdac_sevensegmentdisplay_brightness___get
        //% weight=98
        brightness(): number {
            this.start()
            const values = this._brightness.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * Controls the brightness of the LEDs. `0` means off.
         */
        //% group="Display"
        //% blockId=jacdac_sevensegmentdisplay_brightness___set
        //% block="set %sevensegmentdisplay brightness to %value"
        //% weight=97
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setBrightness(value: number) {
            this.start()
            const values = this._brightness.values as any[]
            values[0] = value / 100
            this._brightness.values = values as [number]
        }

        /**
         * Turn on or off the column LEDs (separating minutes from hours, etc.) in of the segment.
         * If the column LEDs is not supported, the value remains false.
         */
        //% callInDebugger
        //% group="Display"
        //% weight=96
        doubleDots(): boolean {
            this.start()
            const values = this._doubleDots.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Turn on or off the column LEDs (separating minutes from hours, etc.) in of the segment.
         * If the column LEDs is not supported, the value remains false.
         */
        //% group="Display"
        //% weight=95
        setDoubleDots(value: boolean) {
            this.start()
            const values = this._doubleDots.values as any[]
            values[0] = value ? 1 : 0
            this._doubleDots.values = values as [boolean]
        }

        /**
         * The number of digits available on the display.
         */
        //% callInDebugger
        //% group="Display"
        //% weight=94
        digitCount(): number {
            this.start()
            const values = this._digitCount.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * True if decimal points are available (on all digits).
         */
        //% callInDebugger
        //% group="Display"
        //% weight=93
        decimalPoint(): boolean {
            this.start()
            const values = this._decimalPoint.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Shows the number on the screen using the decimal dot if available.
         */
        //% group="Display"
        //% blockId=jacdac_sevensegmentdisplay_set_number_cmd
        //% block="%sevensegmentdisplay set number $value"
        //% weight=92
        setNumber(value: number): void {
            this.start()
            const ns = isNaN(value) ? "" : value.toString()
            const length = this.digitCount()
            if (isNaN(length)) return // unknown size

            const digits = control.createBuffer(length)
            const n = Math.min(length, ns.length)
            /*
             * ```text
             *  - A -
             *  F   B
             *  |   |
             *  - G -
             *  |   |   -
             *  E   C  |DP|
             *  - D -   -
             * ```
             */
            const digitBits = [
                0b00111111, // 0
                0b00000110, // 1
                0b01011011, // 2
                0b01001111, // 3
                0b01100110, // 4
                0b01101101, // 5
                0b01111101, // 6
                0b00000111, // 7
                0b01111111, // 8
                0b01101111, // 9
            ]

            let k = digits.length - 1
            for (let i = n - 1; i >= 0; --i) {
                let c = ns.charCodeAt(i)
                let value = 0
                // dot
                if (c == 46) {
                    i--
                    if (i > -1) c = ns.charCodeAt(i)
                    value |= 0b10000000
                }
                // 0-9
                if (c >= 48 && c < 48 + digitBits.length)
                    value |= digitBits[c - 48]
                // -
                else if (c == 45) value |= 0b01000000
                // e, E
                else if (c == 69 || c == 101) value |= 0b01001111
                digits.setUint8(k--, value)
            }

            this.setDigits(digits)
        }
    }

    //% fixedInstance whenUsed weight=1 block="seven segment display1"
    export const sevenSegmentDisplay1 = new SevenSegmentDisplayClient(
        "seven Segment Display1"
    )
}
