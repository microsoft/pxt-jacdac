namespace modules {
    /**
     * A slider or rotary potentiometer.
     **/
    //% fixedInstances blockGap=8
    export class PotentiometerClient extends jacdac.SensorClient<[number]> {

        private readonly _variant : jacdac.RegisterClient<[jacdac.constants.PotentiometerVariant]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_POTENTIOMETER, role, "u0.16");

            this._variant = this.addRegister<[jacdac.constants.PotentiometerVariant]>(jacdac.constants.PotentiometerReg.Variant, "u8");            
        }
    

        /**
        * The relative position of the slider between `0` and `1`.
        */
        //% callInDebugger
        //% group="Slider"
        //% block="%potentiometer position"
        //% blockId=jacdac_potentiometer_position___get
        //% weight=100
        position(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the physical layout of the potentiometer.
        */
        //% callInDebugger
        //% group="Slider"
        //% weight=99
        variant(): jacdac.constants.PotentiometerVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const potentiometer = new PotentiometerClient("potentiometer");
}