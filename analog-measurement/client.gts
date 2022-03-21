namespace modules {
    /**
     * A service that reports the output of an analog to digital converter (ADC).
     **/
    //% fixedInstances blockGap=8
    export class AnalogMeasurementClient extends jacdac.SimpleSensorClient {

        private readonly _measurementType : jacdac.RegisterClient<[jacdac.AnalogMeasurementADCMeasurementType]>;
        private readonly _measurementName : jacdac.RegisterClient<[string]>;            

        constructor(role: string) {
            super(jacdac.SRV_ANALOG_MEASUREMENT, role, "f64");

            this._measurementType = this.addRegister<[jacdac.AnalogMeasurementADCMeasurementType]>(jacdac.AnalogMeasurementReg.MeasurementType, "u8");
            this._measurementName = this.addRegister<[string]>(jacdac.AnalogMeasurementReg.MeasurementName, "s");            
        }
    

        /**
        * The type of measurement that is taking place. Absolute results are measured with respect to ground, whereas differential results are measured against another signal that is not ground.
        */
        //% callInDebugger
        //% group="Analog Measurement"
        //% weight=100
        measurementType(): jacdac.AnalogMeasurementADCMeasurementType {
            this.start();            
            const values = this._measurementType.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A string containing the net name that is being measured e.g. `POWER_DUT` or a reference e.g. `DIFF_DEV1_DEV2`. These constants can be used to identify a measurement from client code.
        */
        //% callInDebugger
        //% group="Analog Measurement"
        //% weight=99
        measurementName(): string {
            this.start();            
            const values = this._measurementName.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The result of the ADC measurement.
        */
        //% callInDebugger
        //% group="Analog Measurement"
        //% block="%analogmeasurement measurement"
        //% blockId=jacdac_analogmeasurement_measurement___get
        //% weight=98
        measurement(): number {
            return this.reading();
        
        }

        /**
         * Run code when the measurement changes by the given threshold value.
        */
        //% group="Analog Measurement"
        //% blockId=jacdac_analogmeasurement_on_measurement_change
        //% block="on %analogmeasurement measurement changed by %threshold"
        //% weight=97
        //% threshold.min=0
        //% threshold.defl=1
        onMeasurementChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler);
        }

    
    }
    //% fixedInstance whenUsed block="analog measurement1"
    export const analogMeasurement1 = new AnalogMeasurementClient("analog Measurement1");
}