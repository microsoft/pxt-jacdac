namespace modules {
    /**
     * Measures equivalent Total Volatile Organic Compound levels.
     **/
    //% fixedInstances blockGap=8
    export class TVOCClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_TVOC, role, "u22.10");
        }
    
        /**
        * Total volatile organic compound readings in parts per billion.
        */
        //% blockId=jacdactvoc_101_0
        //% group="TVOC"
        //% blockCombine block="TVOC" callInDebugger
        get tVOC(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const TVOC = new TVOCClient("TVOC");
}