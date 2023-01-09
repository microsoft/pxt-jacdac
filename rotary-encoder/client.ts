namespace modules {
    /**
     * An incremental rotary encoder - converts angular motion of a shaft to digital signal.
     **/
    //% fixedInstances blockGap=8
    export class RotaryEncoderClient extends jacdac.SimpleSensorClient {
        private readonly _clicksPerTurn: jacdac.RegisterClient<[number]>
        private readonly _clicker: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(
                jacdac.SRV_ROTARY_ENCODER,
                role,
                jacdac.RotaryEncoderRegPack.Position
            )

            this._clicksPerTurn = this.addRegister<[number]>(
                jacdac.RotaryEncoderReg.ClicksPerTurn,
                jacdac.RotaryEncoderRegPack.ClicksPerTurn,
                jacdac.RegisterClientFlags.Const
            )
            this._clicker = this.addRegister<[boolean]>(
                jacdac.RotaryEncoderReg.Clicker,
                jacdac.RotaryEncoderRegPack.Clicker,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Upon device reset starts at `0` (regardless of the shaft position).
         * Increases by `1` for a clockwise "click", by `-1` for counter-clockwise.
         */
        //% callInDebugger
        //% group="Rotary Encoder"
        //% block="%rotaryencoder position (#)"
        //% blockId=jacdac_rotaryencoder_position___get
        //% weight=100
        position(): number {
            return this.reading()
        }

        /**
         * This specifies by how much `position` changes when the crank does 360 degree turn. Typically 12 or 24.
         */
        //% callInDebugger
        //% group="Rotary Encoder"
        //% weight=99
        clicksPerTurn(): number {
            this.start()
            const values = this._clicksPerTurn.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * The encoder is combined with a clicker. If this is the case, the clicker button service
         * should follow this service in the service list of the device.
         */
        //% callInDebugger
        //% group="Slider"
        //% weight=98
        clicker(): boolean {
            this.start()
            const values = this._clicker.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Run code when the position changes.
         * @param handler handler that runs when position changed, receives the value difference
         */
        //% group="Rotary Encoder"
        //% blockId=jacdac_rotaryencoder_on_position_change
        //% block="on %rotaryencoder position changed"
        //% draggableParameters=reporter
        //% weight=98
        onPositionChanged(handler: (delta: number) => void): void {
            this.onReadingChangedBy(1, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="rotary encoder1"
    export const rotaryEncoder1 = new RotaryEncoderClient("rotary Encoder1")
}
