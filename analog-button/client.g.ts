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
        //% blockId=jacdac_analogbutton_pressure___get
        //% group="Analog Button"
        //% block="%analogbutton pressure" callInDebugger
        pressure(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

        /**
         * Emitted when button goes from inactive (pressure less than threshold) to active.
         */
        //% blockId=jacdac_on_analogbutton_active
        //% block="active" blockSetVariable=myModule
        //% group="Analog Button"
        onActive(handler: () => void) {
            this.registerEvent(jacdac.AnalogButtonEvent.Active, handler);
        }
        /**
         * Emitted when button goes from active (pressure higher than threshold) to inactive.
         */
        //% blockId=jacdac_on_analogbutton_inactive
        //% block="inactive" blockSetVariable=myModule
        //% group="Analog Button"
        onInactive(handler: () => void) {
            this.registerEvent(jacdac.AnalogButtonEvent.Inactive, handler);
        }
    }
    //% fixedInstance whenUsed
    export const analogButton = new AnalogButtonClient("analog Button");
}