namespace modules {
    /**
     * A service that reports a current measurement.
     **/
    //% fixedInstances blockGap=8
    export class DcCurrentMeasurementClient extends jacdac.SimpleSensorClient {
        private readonly _measurementName: jacdac.RegisterClient<[string]>
        private readonly _measurementError: jacdac.RegisterClient<[number]>
        private readonly _minMeasurement: jacdac.RegisterClient<[number]>
        private readonly _maxMeasurement: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(
                jacdac.SRV_DC_CURRENT_MEASUREMENT,
                role,
                jacdac.DcCurrentMeasurementRegPack.Measurement
            )

            this._measurementName = this.addRegister<[string]>(
                jacdac.DcCurrentMeasurementReg.MeasurementName,
                jacdac.DcCurrentMeasurementRegPack.MeasurementName,
                jacdac.RegisterClientFlags.Const
            )
            this._measurementError = this.addRegister<[number]>(
                jacdac.DcCurrentMeasurementReg.MeasurementError,
                jacdac.DcCurrentMeasurementRegPack.MeasurementError,
                jacdac.RegisterClientFlags.Optional
            )
            this._minMeasurement = this.addRegister<[number]>(
                jacdac.DcCurrentMeasurementReg.MinMeasurement,
                jacdac.DcCurrentMeasurementRegPack.MinMeasurement,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._maxMeasurement = this.addRegister<[number]>(
                jacdac.DcCurrentMeasurementReg.MaxMeasurement,
                jacdac.DcCurrentMeasurementRegPack.MaxMeasurement,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * A string containing the net name that is being measured e.g. `POWER_DUT` or a reference e.g. `DIFF_DEV1_DEV2`. These constants can be used to identify a measurement from client code.
         */
        //% callInDebugger
        //% group="DC Current Measurement"
        //% weight=100
        measurementName(): string {
            this.start()
            const values = this._measurementName.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The current measurement.
         */
        //% callInDebugger
        //% group="DC Current Measurement"
        //% block="%dccurrentmeasurement measurement (A)"
        //% blockId=jacdac_dccurrentmeasurement_measurement___get
        //% weight=99
        measurement(): number {
            return this.reading()
        }

        /**
         * Absolute error on the reading value.
         */
        //% callInDebugger
        //% group="DC Current Measurement"
        //% weight=98
        measurementError(): number {
            this.start()
            const values = this._measurementError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Minimum measurable current
         */
        //% callInDebugger
        //% group="DC Current Measurement"
        //% weight=97
        minMeasurement(): number {
            this.start()
            const values = this._minMeasurement.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Maximum measurable current
         */
        //% callInDebugger
        //% group="DC Current Measurement"
        //% weight=96
        maxMeasurement(): number {
            this.start()
            const values = this._maxMeasurement.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the measurement changes by the given threshold value.
         */
        //% group="DC Current Measurement"
        //% blockId=jacdac_dccurrentmeasurement_on_measurement_change
        //% block="on %dccurrentmeasurement measurement changed by %threshold (A)"
        //% weight=95
        //% threshold.min=0
        //% threshold.defl=1
        onMeasurementChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="dc current measurement1"
    export const dcCurrentMeasurement1 = new DcCurrentMeasurementClient(
        "dc Current Measurement1"
    )
}
