namespace modules {
    //% fixedInstances
    export class MatrixKeypadClient extends jacdac.SensorClient<[number[]]> {
        constructor(role: string) {
            super(jacdac.SRV_MATRIX_KEYPAD, role, "r: u8");
        }
    
        /**
        * The coordinate of the button currently pressed. Keys are zero-indexed from left to right, top to bottom:
        * ``row = index / columns``, ``column = index % columns``.
        */
        //% blockId=jacdacmatrixkeypad101 block="%sensor pressed"
        //% group="pressed"
        get pressed(): number[] {
            // index
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const matrixKeypad = new MatrixKeypadClient("matrix Keypad");
}