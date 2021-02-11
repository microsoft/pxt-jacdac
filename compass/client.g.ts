namespace modules {
    //% fixedInstances
    export class CompassClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_COMPASS, role, "u16.16");
        }
    
        /**
        * The heading with respect to the magnetic north.
        */
        //% blockId=jacdaccompass101 block="%sensor heading"
        //% group="heading"
        get heading(): number {
            // heading
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const compass = new CompassClient("compass");
}