namespace modules {
    /**
     * Measures equivalent Total Volatile Organic Compound levels.
     **/
    //% fixedInstances blockGap=8
    export class TvocClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_TVOC, role, "u22.10");
        }
    
        /**
        * Total volatile organic compound readings in parts per billion.
        */
        //% blockId=jacdactvoc_101_0
        //% group="Total Volatile organic compound" blockSetVariable=myModule
        //% blockCombine block="TVOC" callInDebugger
        get tVOC(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const tvoc = new TvocClient("tvoc");
}