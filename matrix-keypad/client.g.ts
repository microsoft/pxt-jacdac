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
        //% group="Matrix Keypad" blockSetVariable=myModule
        //% blockCombine block="index" callInDebugger
        get index(): number[] {
            const values = this.values() as any[];
            return values[0];
        } 

        /**
         * Emitted when a key, at the given index, goes from inactive (`pressed == 0`) to active.
         */
        //% block="down" blockSetVariable=myModule
        //% group="Matrix Keypad" blockCombine
        onDown(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.Down, handler);
        }
        /**
         * Emitted when a key, at the given index, goes from active (`pressed == 1`) to inactive.
         */
        //% block="up" blockSetVariable=myModule
        //% group="Matrix Keypad" blockCombine
        onUp(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.Up, handler);
        }
        /**
         * Emitted together with `up` when the press time was not longer than 500ms.
         */
        //% block="click" blockSetVariable=myModule
        //% group="Matrix Keypad" blockCombine
        onClick(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.Click, handler);
        }
        /**
         * Emitted together with `up` when the press time was more than 500ms.
         */
        //% block="long click" blockSetVariable=myModule
        //% group="Matrix Keypad" blockCombine
        onLongClick(handler: () => void) {
            this.registerEvent(jacdac.MatrixKeypadEvent.LongClick, handler);
        }
    }
    //% fixedInstance whenUsed
    export const matrixKeypad = new MatrixKeypadClient("matrix Keypad");
}