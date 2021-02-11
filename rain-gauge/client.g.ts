namespace modules {
    //% fixedInstances
    export class RainGaugeClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_RAIN_GAUGE, role, "u16.16");
        }
    
        /**
        * Total precipitation recorded so far.
        */
        //% blockId=jacdacraingauge101 block="%sensor precipitation"
        //% group="precipitation"
        get precipitation(): number {
            // precipitation
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const rainGauge = new RainGaugeClient("rain Gauge");
}