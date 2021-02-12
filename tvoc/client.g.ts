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
        //% blockId=jacdac_tvoc_TVOC___get
        //% group="Environment"
        //% block="%tvoc TVOC" callInDebugger
        tVOC(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const tvoc = new TvocClient("tvoc");
}