namespace modules {
    /**
     * A controller for 1 or more monochrome or RGB LEDs connected in parallel.
     **/
    //% fixedInstances blockGap=8
    export class LedClient extends jacdac.Client {

            private readonly _brightness : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_LED, role);

            this._brightness = this.addRegister<[number]>(jacdac.LedReg.Brightness, "u0.16");            
        }
    

        /**
        * Set the luminosity of the strip. The value is used to scale `value` in `steps` register.
        * At `0` the power to the strip is completely shut down.
        */
        //% group="LED" blockSetVariable=myModule
        //% blockCombine block="brightness" callInDebugger
        get brightness(): number {
            const values = this._brightness.values() as any[];
            return values[0];
        }
        /**
        * Set the luminosity of the strip. The value is used to scale `value` in `steps` register.
        * At `0` the power to the strip is completely shut down.
        */
        //% group="LED" blockSetVariable=myModule
        //% blockCombine block="brightness" callInDebugger
        set brightness(value: number) {
            const values = this._brightness.values() as any[];
            values[0] = value;
            this._brightness.setValues(values as [number]);
        } 

    }
    //% fixedInstance whenUsed
    export const led = new LedClient("led");
}