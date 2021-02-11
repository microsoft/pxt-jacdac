namespace modules {
    /**
     * A sensor that measures luminosity level.
     **/
    //% fixedInstances blockGap=8
    export class LightLevelClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_LIGHT_LEVEL, role, "u0.16");
        }
    
        /**
        * Detect light level
        */
        //% blockId=jacdaclightlevel_101_0
        //% group="light_level"
        //% blockCombine block="light_level" callInDebugger
        get lightLevel(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const lightLevel = new LightLevelClient("light Level");
}