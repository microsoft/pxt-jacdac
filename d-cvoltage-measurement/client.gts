namespace modules {
    /**
     * A service that reports a voltage measurement.
     **/
    //% fixedInstances blockGap=8
    export class DCVoltageMeasurementClient extends jacdac.SimpleSensorClient {

        private readonly _measurementType : jacdac.RegisterClient<[jacdac.DCVoltageMeasurementVoltageMeasurementType]>;
        private readonly _measurementName : jacdac.RegisterClient<[string]>;            

        constructor(role: string) {
            super(jacdac.SRV_D_CVOLTAGE_MEASUREMENT, role, "f64");

            this._measurementType = this.addRegister<[jacdac.DCVoltageMeasurementVoltageMeasurementType]>(jacdac.DCVoltageMeasurementReg.MeasurementType, "u8");
            this._measurementName = this.addRegister<[string]>(jacdac.DCVoltageMeasurementReg.MeasurementName, "s");            
        }
    

        /**
        * The type of measurement that is taking place. Absolute results are measured with respect to ground, whereas differential results are measured against another signal that is not ground.
        */
        //% callInDebugger
        //% group="DC Voltage Measurement"
        //% weight=100
        measurementType(): jacdac.DCVoltageMeasurementVoltageMeasurementType {
            this.start();            
            const values = this._measurementType.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A string containing the net name that is being measured e.g. `POWER_DUT` or a reference e.g. `DIFF_DEV1_DEV2`. These constants can be used to identify a measurement from client code.
        */
        //% callInDebugger
        //% group="DC Voltage Measurement"
        //% weight=99
        measurementName(): string {
            this.start();            
            const values = this._measurementName.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The voltage measurement.
        */
        //% callInDebugger
        //% group="DC Voltage Measurement"
        //% block="%dcvoltagemeasurement measurement"
        //% blockId=jacdac_dcvoltagemeasurement_measurement___get
        //% weight=98
        measurement(): number {
            return this.reading();
        
        }

        /**
         * Run code when the measurement changes by the given threshold value.
        */
        //% group="DC Voltage Measurement"
        //% blockId=jacdac_dcvoltagemeasurement_on_measurement_change
        //% block="on %dcvoltagemeasurement measurement changed by %threshold"
        //% weight=97
        //% threshold.min=0
        //% threshold.defl=1
        onMeasurementChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler);
        }

    
    }
    //% fixedInstance whenUsed block="d cvoltage measurement1"
    export const dCVoltageMeasurement1 = new DCVoltageMeasurementClient("d CVoltage Measurement1");
}