namespace modules {
    /**
     * A service that reports a voltage measurement.
     **/
    //% fixedInstances blockGap=8
    export class VoltageMeasurementClient extends jacdac.SimpleSensorClient {

        private readonly _measurementType : jacdac.RegisterClient<[jacdac.VoltageMeasurementVoltageMeasurementType]>;
        private readonly _measurementName : jacdac.RegisterClient<[string]>;            

        constructor(role: string) {
            super(jacdac.SRV_VOLTAGE_MEASUREMENT, role, "f64");

            this._measurementType = this.addRegister<[jacdac.VoltageMeasurementVoltageMeasurementType]>(jacdac.VoltageMeasurementReg.MeasurementType, "u8");
            this._measurementName = this.addRegister<[string]>(jacdac.VoltageMeasurementReg.MeasurementName, "s");            
        }
    

        /**
        * The type of measurement that is taking place. Absolute results are measured with respect to ground, whereas differential results are measured against another signal that is not ground.
        */
        //% callInDebugger
        //% group="Voltage Measurement"
        //% weight=100
        measurementType(): jacdac.VoltageMeasurementVoltageMeasurementType {
            this.start();            
            const values = this._measurementType.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * A string containing the net name that is being measured e.g. `POWER_DUT` or a reference e.g. `DIFF_DEV1_DEV2`. These constants can be used to identify a measurement from client code.
        */
        //% callInDebugger
        //% group="Voltage Measurement"
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
        //% group="Voltage Measurement"
        //% block="%voltagemeasurement measurement"
        //% blockId=jacdac_voltagemeasurement_measurement___get
        //% weight=98
        measurement(): number {
            return this.reading();
        
        }

        /**
         * Run code when the measurement changes by the given threshold value.
        */
        //% group="Voltage Measurement"
        //% blockId=jacdac_voltagemeasurement_on_measurement_change
        //% block="on %voltagemeasurement measurement changed by %threshold"
        //% weight=97
        //% threshold.min=0
        //% threshold.defl=1
        onMeasurementChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler);
        }

    
    }
    //% fixedInstance whenUsed block="voltage measurement1"
    export const voltageMeasurement1 = new VoltageMeasurementClient("voltage Measurement1");
}