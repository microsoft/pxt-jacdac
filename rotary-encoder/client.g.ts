namespace modules {
    /**
     * An incremental rotary encoder - converts angular motion of a shaft to digital signal.
     **/
    //% fixedInstances blockGap=8
    export class RotaryEncoderClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_ROTARY_ENCODER, role, "i32");
        }
    
        /**
        * Upon device reset starts at `0` (regardless of the shaft position).
        * Increases by `1` for a clockwise "click", by `-1` for counter-clockwise.
        */
        //% blockId=jacdacrotaryencoder_101_0
        //% group="position"
        //% blockCombine block="position" callInDebugger
        get position(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const rotaryEncoder = new RotaryEncoderClient("rotary Encoder");
}