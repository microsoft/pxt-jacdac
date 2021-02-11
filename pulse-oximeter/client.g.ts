namespace modules {
    //% fixedInstances
    export class PulseOximeterClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_PULSE_OXIMETER, role, "u8.8");
        }
    
        /**
        * The estimated oxygen level in blood.
        */
        //% blockId=jacdacpulseoximeter101 block="%sensor oxygen"
        //% group="oxygen"
        get oxygen(): number {
            // oxygen
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const pulseOximeter = new PulseOximeterClient("pulse Oximeter");
}