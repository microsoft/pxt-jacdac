namespace modules {
    //% fixedInstances
    export class RotaryEncoderClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_ROTARY_ENCODER, role, "i32");
        }
    
        /**
        * Upon device reset starts at `0` (regardless of the shaft position).
        * Increases by `1` for a clockwise "click", by `-1` for counter-clockwise.
        */
        //% blockId=jacdacrotaryencoder101 block="%sensor position"
        //% group="position"
        get position(): number {
            // position
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const rotaryEncoder = new RotaryEncoderClient("rotary Encoder");
}