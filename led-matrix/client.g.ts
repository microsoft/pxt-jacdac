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
        //% group="LED Matrix" blockSetVariable=myModule
        //% blockCombine block="brightness" callInDebugger
        get brightness(): number {
            this._brightness.pauseUntilValues();
            const values = this._brightness.values as any[];
            return values[0];
        }
        /**
        * Reads the general brightness of the LEDs. ``0`` when the screen is off.
        */
        //% group="LED Matrix" blockSetVariable=myModule
        //% blockCombine block="brightness" callInDebugger
        set brightness(value: number) {
            const values = this._brightness.values as any[];
            values[0] = value;
            this._brightness.values = values as [number];
        }
        /**
        * The state of the screen where pixel on/off state is 
        * stored as a bit, column by column. The column should be byte aligned.
        */
        //% group="LED Matrix" blockSetVariable=myModule
        //% blockCombine block="leds" callInDebugger
        get leds(): Buffer {
            this._leds.pauseUntilValues();
            const values = this._leds.values as any[];
            return values[0];
        }
        /**
        * The state of the screen where pixel on/off state is 
        * stored as a bit, column by column. The column should be byte aligned.
        */
        //% group="LED Matrix" blockSetVariable=myModule
        //% blockCombine block="leds" callInDebugger
        set leds(value: Buffer) {
            const values = this._leds.values as any[];
            values[0] = value;
            this._leds.values = values as [Buffer];
        } 

    }
    //% fixedInstance whenUsed
    export const ledMatrix = new LedMatrixClient("led Matrix");
}