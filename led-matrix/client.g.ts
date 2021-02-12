namespace modules {
    /**
     * A rectangular monochrome LED matrix controller.
     **/
    //% fixedInstances blockGap=8
    export class LedMatrixClient extends jacdac.Client {

            private readonly _brightness : jacdac.RegisterClient<[number]>;
            private readonly _leds : jacdac.RegisterClient<[Buffer]>;            

            constructor(role: string) {
            super(jacdac.SRV_LED_MATRIX, role);

            this._brightness = this.addRegister<[number]>(jacdac.LedMatrixReg.Brightness, "u0.8");
            this._leds = this.addRegister<[Buffer]>(jacdac.LedMatrixReg.Leds, "b");            
        }
    

        /**
        * Reads the general brightness of the LEDs. ``0`` when the screen is off.
        */
        //% blockId=jacdac_ledmatrix_brightness___get
        //% group="LED Matrix"
        //% block="%ledmatrix brightness" callInDebugger
        brightness(): number {            
            const values = this._brightness.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Reads the general brightness of the LEDs. ``0`` when the screen is off.
        */
        //% blockId=jacdac_ledmatrix_brightness___set
        //% group="LED Matrix" value.min=0 value.max=1
        //% block="set %ledmatrix brightness to %value"
        setBrightness(value: number) {
            this.start();
            const values = this._brightness.values as any[];
            values[0] = value;
            this._brightness.values = values as [number];
        }
        /**
        * The state of the screen where pixel on/off state is 
        * stored as a bit, column by column. The column should be byte aligned.
        */
        //% blockId=jacdac_ledmatrix_leds___get
        //% group="LED Matrix"
        //% block="%ledmatrix leds" callInDebugger
        leds(): Buffer {            
            const values = this._leds.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * The state of the screen where pixel on/off state is 
        * stored as a bit, column by column. The column should be byte aligned.
        */
        //% blockId=jacdac_ledmatrix_leds___set
        //% group="LED Matrix"
        //% block="set %ledmatrix leds to %value"
        setLeds(value: Buffer) {
            this.start();
            const values = this._leds.values as any[];
            values[0] = value;
            this._leds.values = values as [Buffer];
        } 

    }
    //% fixedInstance whenUsed
    export const ledMatrix = new LedMatrixClient("led Matrix");
}