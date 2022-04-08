namespace modules {
    /**
     * A service that reports a current measurement.
     **/
    //% fixedInstances blockGap=8
    export class DcCurrentMeasurementClient extends jacdac.SimpleSensorClient {

        private readonly _measurementName : jacdac.RegisterClient<[string]>;            

        constructor(role: string) {
            super(jacdac.SRV_DC_CURRENT_MEASUREMENT, role, "f64");

            this._measurementName = this.addRegister<[string]>(jacdac.DcCurrentMeasurementReg.MeasurementName, "s");            
        }
    

        /**
        * A string containing the net name that is being measured e.g. `POWER_DUT` or a reference e.g. `DIFF_DEV1_DEV2`. These constants can be used to identify a measurement from client code.
        */
        //% callInDebugger
        //% group="DC Current Measurement"
        //% weight=100
        measurementName(): string {
            this.start();            
            const values = this._measurementName.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The current measurement.
        */
        //% callInDebugger
        //% group="DC Current Measurement"
        //% block="%dccurrentmeasurement measurement"
        //% blockId=jacdac_dccurrentmeasurement_measurement___get
        //% weight=99
        measurement(): number {
            return this.reading();
        
        }

        /**
         * Run code when the measurement changes by the given threshold value.
        */
        //% group="DC Current Measurement"
        //% blockId=jacdac_dccurrentmeasurement_on_measurement_change
        //% block="on %dccurrentmeasurement measurement changed by %threshold"
        //% weight=98
        //% threshold.min=0
        //% threshold.defl=1
        onMeasurementChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler);
        }

    
    }
    //% fixedInstance whenUsed weight=1 block="dc current measurement1"
    export const dcCurrentMeasurement1 = new DcCurrentMeasurementClient("dc Current Measurement1");
}