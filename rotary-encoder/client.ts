namespace modules {
    //% fixedInstances
    //% blockGap=8
    export class RotaryEncoderClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.constants.SRV_ROTARY_ENCODER, role, "i32");
        }

        scale = 1
        private _min: number
        private _max: number
        private _offset: number

        /**
         * Always clamp the encoder position to given range.
         */
        setRange(min: number, max: number) {
            this._min = min
            this._max = max
            this._offset = 0
        }

        /**
         * Gets the position of the rotary encoder
         */
        //% blockId=jacdacrotaryencoderposition block="%rotaryEncoder position"
        //% group="Rotary Encoder"
        get position(): number {
            const [value = 0] = this._reading.values;
            const curr = value * this.scale
            if (this._offset != null) {
                const p = curr + this._offset
                if (p < this._min)
                    this._offset = this._min - curr
                else if (p > this._max)
                    this._offset = this._max - curr
                return curr + this._offset
            } else {
                return curr
            }
        }
    }

    /**
     * Default rotary encoder
     */
    //% fixedInstance whenUsed
    export const rotaryEncoder = new RotaryEncoderClient("rotary_encoder");
}