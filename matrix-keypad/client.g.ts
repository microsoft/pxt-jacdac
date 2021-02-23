namespace modules {
    /**
     * A matrix of buttons connected as a keypad
     **/
    //% fixedInstances blockGap=8
    export class MatrixKeypadClient extends jacdac.SensorClient<[number[]]> {

            private readonly _rows : jacdac.RegisterClient<[number]>;
            private readonly _columns : jacdac.RegisterClient<[number]>;
            private readonly _labels : jacdac.RegisterClient<[string[]]>;
            private readonly _variant : jacdac.RegisterClient<[jacdac.MatrixKeypadVariant]>;            

            constructor(role: string) {
            super(jacdac.SRV_MATRIX_KEYPAD, role, "r: u8");

            this._rows = this.addRegister<[number]>(jacdac.MatrixKeypadReg.Rows, "u8");
            this._columns = this.addRegister<[number]>(jacdac.MatrixKeypadReg.Columns, "u8");
            this._labels = this.addRegister<[string[]]>(jacdac.MatrixKeypadReg.Labels, "r: z");
            this._variant = this.addRegister<[jacdac.MatrixKeypadVariant]>(jacdac.MatrixKeypadReg.Variant, "u8");            
        }
    

        /**
        * The coordinate of the button currently pressed. Keys are zero-indexed from left to right, top to bottom:
        * ``row = index / columns``, ``column = index % columns``.
        */
        //% callInDebugger
        //% group="Button"
        //% block="%matrixkeypad index"
        //% blockId=jacdac_matrixkeypad_pressed_index_get
        index(): number[] {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Number of rows in the matrix
        */
        //% callInDebugger
        //% group="Button"
        rows(): number {
            this.start();            
            const values = this._rows.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Number of columns in the matrix
        */
        //% callInDebugger
        //% group="Button"
        columns(): number {
            this.start();            
            const values = this._columns.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The characters printed on the keys if any, in indexing sequence.
        */
        //% callInDebugger
        //% group="Button"
        label(): string[] {
            this.start();            
            const values = this._labels.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The type of physical keypad. If the variant is ``ElastomerLEDPixel``
        * and the next service on the device is a ``LEDPixel`` service, it is considered
        * as the service controlling the LED pixel on the keypad.
        */
        //% callInDebugger
        //% group="Button"
        variant(): jacdac.MatrixKeypadVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

        /**
         * Emitted when a key, at the given index, goes from inactive (`pressed == 0`) to active.
         */
        //% blockId=jacdac_on_matrixkeypad_down
        //% block="down" blockSetVariable=myModule
        //% group="Button"
        onDown(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.Down, handler);
        }
        /**
         * Emitted when a key, at the given index, goes from active (`pressed == 1`) to inactive.
         */
        //% blockId=jacdac_on_matrixkeypad_up
        //% block="up" blockSetVariable=myModule
        //% group="Button"
        onUp(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.Up, handler);
        }
        /**
         * Emitted together with `up` when the press time was not longer than 500ms.
         */
        //% blockId=jacdac_on_matrixkeypad_click
        //% block="click" blockSetVariable=myModule
        //% group="Button"
        onClick(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.Click, handler);
        }
        /**
         * Emitted together with `up` when the press time was more than 500ms.
         */
        //% blockId=jacdac_on_matrixkeypad_long_click
        //% block="long click" blockSetVariable=myModule
        //% group="Button"
        onLongClick(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.LongClick, handler);
        }
    }
    //% fixedInstance whenUsed
    export const matrixKeypad = new MatrixKeypadClient("matrix Keypad");
}