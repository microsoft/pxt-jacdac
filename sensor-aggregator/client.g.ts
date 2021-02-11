namespace modules {
    /**
     * Aggregate data from multiple sensors into a single stream
     * (often used as input to machine learning models on the same device, see model runner service).
     **/
    //% fixedInstances blockGap=8
    export class SensorAggregatorClient extends jacdac.SensorClient<[Buffer]> {
        constructor(role: string) {
            super(jacdac.SRV_SENSOR_AGGREGATOR, role, "b");
        }
    
        /**
        * Last collected sample.
        */
        //% blockId=jacdacsensoraggregator_101_0
        //% group="current_sample" blockSetVariable=myModule
        //% blockCombine block="current_sample" callInDebugger
        get currentSample(): Buffer {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const sensorAggregator = new SensorAggregatorClient("sensor Aggregator");
}