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
        //% group="Total Volatile organic compound" blockSetVariable=myModule
        //% blockCombine block="TVOC" callInDebugger
        get tVOC(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const tvoc = new TvocClient("tvoc");
}