namespace modules {
    /**
     * A rectangular dot matrix display, made of monochrome LEDs or braille pins.
     **/
    //% fixedInstances blockGap=8
    export class DotMatrixClient extends jacdac.Client {

        private readonly _dots : jacdac.RegisterClient<[Buffer]>;
        private readonly _brightness : jacdac.RegisterClient<[number]>;
        private readonly _rows : jacdac.RegisterClient<[number]>;
        private readonly _columns : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.DotMatrixVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_DOT_MATRIX, role);

            this._dots = this.addRegister<[Buffer]>(jacdac.DotMatrixReg.Dots, "b");
            this._brightness = this.addRegister<[number]>(jacdac.DotMatrixReg.Brightness, "u0.8");
            this._rows = this.addRegister<[number]>(jacdac.DotMatrixReg.Rows, "u16");
            this._columns = this.addRegister<[number]>(jacdac.DotMatrixReg.Columns, "u16");
            this._variant = this.addRegister<[jacdac.DotMatrixVariant]>(jacdac.DotMatrixReg.Variant, "u8");            
        }
    

        /**
        * The state of the screen where dot on/off state is
        * stored as a bit, column by column. The column should be byte aligned.
        */
        //% callInDebugger
        //% group="Display"
        //% block="%dotmatrix dots"
        //% blockId=jacdac_dotmatrix_dots___get
        //% weight=100
        dots(): Buffer {
            this.start();            
            const values = this._dots.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The state of the screen where dot on/off state is
        * stored as a bit, column by column. The column should be byte aligned.
        */
        //% group="Display"
        //% blockId=jacdac_dotmatrix_dots___set
        //% block="set %dotmatrix dots to %value"
        //% weight=99
        setDots(value: Buffer) {
            this.start();
            const values = this._dots.values as any[];
            values[0] = value;
            this._dots.values = values as [Buffer];
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
            this.start();            
            const values = this._brightness.pauseUntilValues() as any[];
            return values[0] * 100;
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
            this.start();
            const values = this._brightness.values as any[];
            values[0] = value / 100;
            this._brightness.values = values as [number];
        }

        /**
        * Number of rows on the screen
        */
        //% callInDebugger
        //% group="Display"
        //% weight=96
        rows(): number {
            this.start();            
            const values = this._rows.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Number of columns on the screen
        */
        //% callInDebugger
        //% group="Display"
        //% weight=95
        columns(): number {
            this.start();            
            const values = this._columns.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Describes the type of matrix used.
        */
        //% callInDebugger
        //% group="Display"
        //% weight=94
        variant(): jacdac.DotMatrixVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

    
    }
    //% fixedInstance whenUsed block="dot matrix 1"
    export const dotMatrix1 = new DotMatrixClient("dot Matrix1");
}