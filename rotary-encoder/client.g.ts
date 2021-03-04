namespace modules {
    /**
     * An incremental rotary encoder - converts angular motion of a shaft to digital signal.
     **/
    //% fixedInstances blockGap=8
    export class RotaryEncoderClient extends jacdac.SensorClient<[number]> {

        private readonly _clicksPerTurn : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_ROTARY_ENCODER, role, "i32");

            this._clicksPerTurn = this.addRegister<[number]>(jacdac.constants.RotaryEncoderReg.ClicksPerTurn, "u16");            
        }
    

        /**
        * Upon device reset starts at `0` (regardless of the shaft position).
        * Increases by `1` for a clockwise "click", by `-1` for counter-clockwise.
        */
        //% callInDebugger
        //% group="Slider"
        //% block="%rotaryencoder position"
        //% blockId=jacdac_rotaryencoder_position___get
        //% weight=100
        position(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * This specifies by how much `position` changes when the crank does 360 degree turn. Typically 12 or 24.
        */
        //% callInDebugger
        //% group="Slider"
        //% weight=99
        clicksPerTurn(): number {
            this.start();            
            const values = this._clicksPerTurn.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const rotaryEncoder = new RotaryEncoderClient("rotary Encoder");
}