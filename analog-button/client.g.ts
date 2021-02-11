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
        //% blockId=jacdacanalogbutton_101_0
        //% group="pressure"
        //% blockCombine block="pressure" callInDebugger
        get pressure(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const analogButton = new AnalogButtonClient("analog Button");
}