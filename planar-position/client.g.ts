namespace modules {
    /**
     * A sensor that repors 2D position, typically an optical mouse tracking sensor.
     *
     * The sensor starts at an arbitrary origin (0,0) and reports the distance from that origin.
     *
     * The `streaming_interval` is respected when the position is changing. When the position is not changing, the streaming interval may be throttled to `500ms`.
     **/
    //% fixedInstances blockGap=8
    export class PlanarPositionClient extends jacdac.SensorClient {
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.PlanarPositionVariant]
        >

        constructor(role: string) {
            super(
                jacdac.SRV_PLANAR_POSITION,
                role,
                jacdac.PlanarPositionRegPack.Position
            )

            this._variant = this.addRegister<[jacdac.PlanarPositionVariant]>(
                jacdac.PlanarPositionReg.Variant,
                jacdac.PlanarPositionRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * The current position of the sensor.
         */
        //% callInDebugger
        //% group="Movement"
        //% block="%planarposition x (mm)"
        //% blockId=jacdac_planarposition_position_x_get
        //% weight=100
        x(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The current position of the sensor.
         */
        //% callInDebugger
        //% group="Movement"
        //% block="%planarposition y (mm)"
        //% blockId=jacdac_planarposition_position_y_get
        //% weight=99
        y(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[1]
        }

        /**
         * Specifies the type of physical sensor.
         */
        //% callInDebugger
        //% group="Movement"
        //% weight=98
        variant(): jacdac.PlanarPositionVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }
    }

    //% fixedInstance whenUsed weight=1 block="planar position1"
    export const planarPosition1 = new PlanarPositionClient("planar Position1")
}
