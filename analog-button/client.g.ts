namespace modules {
    /**
     * A simple pressure sensitive push-button.
     **/
    //% fixedInstances blockGap=8
    export class AnalogButtonClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_ANALOG_BUTTON, role, "u0.16");
            
        }
    

        /**
        * Indicates the current pressure (``force``) on the button.
        */
        //% group="Analog Button" blockSetVariable=myModule
        //% blockCombine block="pressure" callInDebugger
        get pressure(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }     
     

        /**
         * Emitted when button goes from inactive (pressure less than threshold) to active.
         */
        //% block="active" blockSetVariable=myModule
        //% group="Analog Button" blockCombine
        onActive(handler: () => void) {
            this.registerEvent(jacdac.AnalogButtonEvent.Active, handler);
        }
        /**
         * Emitted when button goes from active (pressure higher than threshold) to inactive.
         */
        //% block="inactive" blockSetVariable=myModule
        //% group="Analog Button" blockCombine
        onInactive(handler: () => void) {
            this.registerEvent(jacdac.AnalogButtonEvent.Inactive, handler);
        }
    }
    //% fixedInstance whenUsed
    export const analogButton = new AnalogButtonClient("analog Button");
}