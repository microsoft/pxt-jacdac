namespace modules {
    function getBit(data: Buffer, bitindex: number) {
        // find bit to flip
        const byte = data[bitindex >> 3]
        const bit = bitindex % 8
        const on = 1 === ((byte >> bit) & 1)
        return on
    }

    function setBit(data: Buffer, bitindex: number, on: boolean) {
        // find bit to flip
        let byte = data[bitindex >> 3]
        const bit = bitindex % 8
        // flip bit
        if (on) {
            byte |= 1 << bit
        } else {
            byte &= ~(1 << bit)
        }
        // save
        data[bitindex >> 3] = byte
    }

    /**
     * A rectangular dot matrix display, made of monochrome LEDs or braille pins.
     **/
    //% fixedInstances blockGap=8
    export class DotMatrixClient extends jacdac.Client {
        private readonly _dots: jacdac.RegisterClient<[Buffer]>
        private readonly _brightness: jacdac.RegisterClient<[number]>
        private readonly _rows: jacdac.RegisterClient<[number]>
        private readonly _columns: jacdac.RegisterClient<[number]>
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.DotMatrixVariant]
        >

        constructor(role: string) {
            super(jacdac.SRV_DOT_MATRIX, role)

            this._dots = this.addRegister<[Buffer]>(
                jacdac.DotMatrixReg.Dots,
                "b"
            )
            this._brightness = this.addRegister<[number]>(
                jacdac.DotMatrixReg.Brightness,
                "u0.8"
            )
            this._rows = this.addRegister<[number]>(
                jacdac.DotMatrixReg.Rows,
                "u16"
            )
            this._columns = this.addRegister<[number]>(
                jacdac.DotMatrixReg.Columns,
                "u16"
            )
            this._variant = this.addRegister<[jacdac.DotMatrixVariant]>(
                jacdac.DotMatrixReg.Variant,
                "u8"
            )
        }

        /**
         * Sets a dot entry to a particular value
        //% group="Display"
        //% block="set %dotmatrix dot at x %x y %y to %on=toggleOnOff"
        //% blockId=jacdac_dotmatrix_setdot
        //% weight=99
        */
        setDot(x: number, y: number, on: boolean) {
            const data = this.dotsBuffer()
            const columns = this.columns()
            const rows = this.rows()
            const row = y | 0
            const col = x | 0
            if (
                !data ||
                isNaN(columns) ||
                isNaN(rows) ||
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= columns
            )
                return

            const columnspadded = columns + (8 - (columns % 8))
            const bitindex = row * columnspadded + col
            setBit(data, bitindex, !on)
            this.setDotsBuffer(data)
        }

        /**
         * Toggle a dot
        //% group="Display"
        //% block="toggle %dotmatrix dot at x $x y $y"
        //% blockId=jacdac_dotmatrix_toggle
        //% weight=99
        */
        toggleDot(x: number, y: number) {
            const data = this.dotsBuffer()
            const columns = this.columns()
            const rows = this.rows()
            const row = y | 0
            const col = x | 0
            if (
                !data ||
                isNaN(columns) ||
                isNaN(rows) ||
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= columns
            )
                return

            const columnspadded = columns + (8 - (columns % 8))
            const bitindex = row * columnspadded + col
            const on = getBit(data, bitindex)
            setBit(data, bitindex, !on)
            this.setDotsBuffer(data)
        }

        /**
         * Clear all dots
        //% group="Display"
        //% block="clear %dotmatrix dots"
        //% blockId=jacdac_dotmatrix_clear
        //% weight=98
        */
        clearDots() {
            const data = this.dotsBuffer()
            if (data) for (let i = 0; i < data.length; ++i) data[i] = 0
            this.setDotsBuffer(data)
        }

        private dotsBuffer(): Buffer {
            this.start()
            const values = this._dots.pauseUntilValues() as any[]
            return values[0]
        }

        private setDotsBuffer(value: Buffer) {
            this.start()
            const values = this._dots.values as any[]
            values[0] = value
            this._dots.values = values as [Buffer]
        }

        /**
         * Reads the general brightness of the display, brightness for LEDs. `0` when the screen is off.
         */
        //% callInDebugger
        //% group="Display"
        //% block="%dotmatrix brightness"
        //% blockId=jacdac_dotmatrix_brightness___get
        //% weight=98
        brightness(): number {
            this.start()
            const values = this._brightness.pauseUntilValues() as any[]
            return values[0] * 100
        }

        /**
         * Reads the general brightness of the display, brightness for LEDs. `0` when the screen is off.
         */
        //% group="Display"
        //% blockId=jacdac_dotmatrix_brightness___set
        //% block="set %dotmatrix brightness to %value"
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
         * Number of rows on the screen
         */
        //% callInDebugger
        //% group="Display"
        //% weight=94
        //% blockId=jacdac_dotmatrix_rows_get
        //% block="%dotmatrix rows"
        rows(): number {
            this.start()
            const values = this._rows.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Number of columns on the screen
         */
        //% callInDebugger
        //% group="Display"
        //% weight=93
        //% blockId=jacdac_dotmatrix_columns_get
        //% block="%dotmatrix columns"
        columns(): number {
            this.start()
            const values = this._columns.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Describes the type of matrix used.
         */
        //% callInDebugger
        //% group="Display"
        //% weight=94
        variant(): jacdac.DotMatrixVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }
    }
    //% fixedInstance whenUsed weight=1 block="dot matrix 1"
    export const dotMatrix1 = new DotMatrixClient("dot Matrix1")
}
