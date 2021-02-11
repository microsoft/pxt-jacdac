namespace modules {
    //% fixedInstances
    export class SensorAggregatorClient extends jacdac.SensorClient<[Buffer]> {
        constructor(role: string) {
            super(jacdac.SRV_SENSOR_AGGREGATOR, role, "b");
        }
    
        /**
        * Last collected sample.
        */
        //% blockId=jacdacsensoraggregator101 block="%sensor current sample"
        //% group="currentSample"
        get currentSample(): Buffer {
            // currentSample
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const sensorAggregator = new SensorAggregatorClient("sensor Aggregator");
}