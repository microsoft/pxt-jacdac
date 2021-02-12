namespace modules {
    /**
     * A sensor that measures liquid/water level.
     **/
    //% fixedInstances blockGap=8
    export class WaterLevelClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_WATER_LEVEL, role, "u0.16");
            
        }
    

        /**
        * The reported water level.
        */
        //% blockId=jacdac_waterlevel_level___get
        //% group="Water level"
        //% block="%waterlevel level" callInDebugger
        level(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const waterLevel = new WaterLevelClient("water Level");
}