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
        //% blockId=jacdac_led_brightness___get
        //% group="Light"
        //% block="%led brightness" callInDebugger
        brightness(): number {            
            const values = this._brightness.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Set the luminosity of the strip. The value is used to scale `value` in `steps` register.
        * At `0` the power to the strip is completely shut down.
        */
        //% blockId=jacdac_led_brightness___set
        //% group="Light" value.min=0 value.max=1
        //% block="set %led brightness to %value"
        setBrightness(value: number) {
            this.start();
            const values = this._brightness.values as any[];
            values[0] = value;
            this._brightness.values = values as [number];
        } 

    }
    //% fixedInstance whenUsed
    export const led = new LedClient("led");
}