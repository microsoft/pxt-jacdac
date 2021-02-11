namespace modules {
    /**
     * Measures the amount of liquid precipitation over an area in a predefined period of time.
     **/
    //% fixedInstances blockGap=8
    export class RainGaugeClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_RAIN_GAUGE, role, "u16.16");
        }
    
        /**
        * Total precipitation recorded so far.
        */
        //% blockId=jacdacraingauge_101_0
        //% group="Rain gauge" blockSetVariable=myModule
        //% blockCombine block="precipitation" callInDebugger
        get precipitation(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const rainGauge = new RainGaugeClient("rain Gauge");
}