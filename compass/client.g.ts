namespace modules {
    /**
     * A sensor that measures the heading.
     **/
    //% fixedInstances blockGap=8
    export class CompassClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_COMPASS, role, "u16.16");
        }
    
        /**
        * The heading with respect to the magnetic north.
        */
        //% blockId=jacdaccompass_101_0
        //% group="heading"
        //% blockCombine block="heading" callInDebugger
        get heading(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const compass = new CompassClient("compass");
}