namespace modules {
    /**
     * Detects the amount of light falling onto a given surface area.
     * 
     * Note that this is different from *luminance*, the amount of light that passes through, emits from, or reflects off an object.
     **/
    //% fixedInstances blockGap=8
    export class IlluminanceClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_ILLUMINANCE, role, "u22.10");
        }
    
        /**
        * The amount of illuminance, as lumens per square metre.
        */
        //% blockId=jacdacilluminance_101_0
        //% group="light"
        //% blockCombine block="light" callInDebugger
        get light(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const illuminance = new IlluminanceClient("illuminance");
}