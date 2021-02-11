namespace modules {
    //% fixedInstances
    export class AnalogButtonClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_ANALOG_BUTTON, role, "u0.16");
        }
    
        /**
        * Indicates the current pressure (``force``) on the button.
        */
        //% blockId=jacdacanalogbutton101 block="%sensor pressure"
        //% group="pressure"
        get pressure(): number {
            // pressure
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const analogButton = new AnalogButtonClient("analog Button");
}