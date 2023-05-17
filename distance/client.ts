namespace modules {
    /**
     * A sensor that determines the distance of an object without any physical contact involved.
     **/
    //% fixedInstances blockGap=8
    export class DistanceClient extends jacdac.SimpleSensorClient {
        private readonly _distanceError: jacdac.RegisterClient<[number]>
        private readonly _minRange: jacdac.RegisterClient<[number]>
        private readonly _maxRange: jacdac.RegisterClient<[number]>
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.DistanceVariant]
        >

        constructor(role: string) {
            super(jacdac.SRV_DISTANCE, role, jacdac.DistanceRegPack.Distance)
            this.readingDigitsPrecision = 2
            this.readingTimeout = 2000
            this._distanceError = this.addRegister<[number]>(
                jacdac.DistanceReg.DistanceError,
                jacdac.DistanceRegPack.DistanceError,
                jacdac.RegisterClientFlags.Optional
            )
            this._minRange = this.addRegister<[number]>(
                jacdac.DistanceReg.MinRange,
                jacdac.DistanceRegPack.MinRange,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._maxRange = this.addRegister<[number]>(
                jacdac.DistanceReg.MaxRange,
                jacdac.DistanceRegPack.MaxRange,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._variant = this.addRegister<[jacdac.DistanceVariant]>(
                jacdac.DistanceReg.Variant,
                jacdac.DistanceRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Current distance from the object
         */
        //% callInDebugger
        //% group="Distance"
        //% block="%distance distance (m)"
        //% blockId=jacdac_distance_distance___get
        //% weight=100
        distance(): number {
            return this.reading()
        }

        /**
         * Absolute error on the reading value.
         */
        //% callInDebugger
        //% group="Distance"
        //% weight=99
        distanceError(): number {
            this.start()
            const values = this._distanceError.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Minimum measurable distance
         */
        //% callInDebugger
        //% group="Distance"
        //% weight=98
        minRange(): number {
            this.start()
            const values = this._minRange.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Maximum measurable distance
         */
        //% callInDebugger
        //% group="Distance"
        //% weight=97
        maxRange(): number {
            this.start()
            const values = this._maxRange.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Determines the type of sensor used.
         */
        //% callInDebugger
        //% group="Distance"
        //% weight=96
        variant(): jacdac.DistanceVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Run code when the distance changes by the given threshold value.
         */
        //% group="Distance"
        //% blockId=jacdac_distance_on_distance_change
        //% block="on %distance distance changed by %threshold (m)"
        //% weight=95
        //% threshold.min=0
        //% threshold.max=4
        //% threshold.defl=1
        onDistanceChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="distance1"
    export const distance1 = new DistanceClient("distance1")
}
