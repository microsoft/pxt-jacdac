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
        //% blockId=jacdacmatrixkeypad_101_0
        //% group="index" blockSetVariable=myModule
        //% blockCombine block="index" callInDebugger
        get index(): number[] {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const matrixKeypad = new MatrixKeypadClient("matrix Keypad");
}