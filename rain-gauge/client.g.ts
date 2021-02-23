namespace modules {
    /**
     * Measures the amount of liquid precipitation over an area in a predefined period of time.
     **/
    //% fixedInstances blockGap=8
    export class RainGaugeClient extends jacdac.SensorClient<[number]> {

            private readonly _precipitationPrecision : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_RAIN_GAUGE, role, "u16.16");

            this._precipitationPrecision = this.addRegister<[number]>(jacdac.RainGaugeReg.PrecipitationPrecision, "u16.16");            
        }
    

        /**
        * Total precipitation recorded so far.
        */
        //% callInDebugger
        //% group="Environment"
        //% block="%raingauge precipitation"
        //% blockId=jacdac_raingauge_precipitation___get
        precipitation(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Typically the amount of rain needed for tipping the bucket.
        */
        //% callInDebugger
        //% group="Environment"
        precipitationPrecision(): number {
            this.start();            
            const values = this._precipitationPrecision.pauseUntilValues() as any[];
            return values[0];
        }
 

    }
    //% fixedInstance whenUsed
    export const rainGauge = new RainGaugeClient("rain Gauge");
}