namespace modules {
    /**
     * A matrix of buttons connected as a keypad
     **/
    //% fixedInstances blockGap=8
    export class MatrixKeypadClient extends jacdac.SensorClient<[number[]]> {
            

            constructor(role: string) {
            super(jacdac.SRV_MATRIX_KEYPAD, role, "r: u8");
            
        }
    

        /**
        * The coordinate of the button currently pressed. Keys are zero-indexed from left to right, top to bottom:
        * ``row = index / columns``, ``column = index % columns``.
        */
        //% blockId=jacdac_matrixkeypad_pressed_index_get
        //% group="Matrix Keypad"
        //% block="%matrixkeypad index" callInDebugger
        index(): number[] {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

        /**
         * Emitted when a key, at the given index, goes from inactive (`pressed == 0`) to active.
         */
        //% blockId=jacdac_on_matrixkeypad_down
        //% block="down" blockSetVariable=myModule
        //% group="Matrix Keypad"
        onDown(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.Down, handler);
        }
        /**
         * Emitted when a key, at the given index, goes from active (`pressed == 1`) to inactive.
         */
        //% blockId=jacdac_on_matrixkeypad_up
        //% block="up" blockSetVariable=myModule
        //% group="Matrix Keypad"
        onUp(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.Up, handler);
        }
        /**
         * Emitted together with `up` when the press time was not longer than 500ms.
         */
        //% blockId=jacdac_on_matrixkeypad_click
        //% block="click" blockSetVariable=myModule
        //% group="Matrix Keypad"
        onClick(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.Click, handler);
        }
        /**
         * Emitted together with `up` when the press time was more than 500ms.
         */
        //% blockId=jacdac_on_matrixkeypad_long_click
        //% block="long click" blockSetVariable=myModule
        //% group="Matrix Keypad"
        onLongClick(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.LongClick, handler);
        }
    }
    //% fixedInstance whenUsed
    export const matrixKeypad = new MatrixKeypadClient("matrix Keypad");
}