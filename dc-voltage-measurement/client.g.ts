namespace modules {
    /**
     * A service that reports a voltage measurement.
     **/
    //% fixedInstances blockGap=8
    export class DcVoltageMeasurementClient extends jacdac.SimpleSensorClient {
        private readonly _measurementType: jacdac.RegisterClient<
            [jacdac.DcVoltageMeasurementVoltageMeasurementType]
        >
        private readonly _measurementName: jacdac.RegisterClient<[string]>

        constructor(role: string) {
            super(
                jacdac.SRV_DC_VOLTAGE_MEASUREMENT,
                role,
                jacdac.DcVoltageMeasurementRegPack.Measurement
            )

            this._measurementType = this.addRegister<
                [jacdac.DcVoltageMeasurementVoltageMeasurementType]
            >(
                jacdac.DcVoltageMeasurementReg.MeasurementType,
                jacdac.DcVoltageMeasurementRegPack.MeasurementType
            )
            this._measurementName = this.addRegister<[string]>(
                jacdac.DcVoltageMeasurementReg.MeasurementName,
                jacdac.DcVoltageMeasurementRegPack.MeasurementName
            )
        }

        /**
         * The type of measurement that is taking place. Absolute results are measured with respect to ground, whereas differential results are measured against another signal that is not ground.
         */
        //% callInDebugger
        //% group="DC Voltage Measurement"
        //% weight=100
        measurementType(): jacdac.DcVoltageMeasurementVoltageMeasurementType {
            this.start()
            const values = this._measurementType.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * A string containing the net name that is being measured e.g. `POWER_DUT` or a reference e.g. `DIFF_DEV1_DEV2`. These constants can be used to identify a measurement from client code.
         */
        //% callInDebugger
        //% group="DC Voltage Measurement"
        //% weight=99
        measurementName(): string {
            this.start()
            const values = this._measurementName.pauseUntilValues() as any[]
            return values[0]
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
            return this.reading()
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
            this.onReadingChangedBy(threshold, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="dc voltage measurement1"
    export const dcVoltageMeasurement1 = new DcVoltageMeasurementClient(
        "dc Voltage Measurement1"
    )
}
