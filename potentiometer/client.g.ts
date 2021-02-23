namespace modules {
    /**
     * A slider or rotary potentiometer.
     **/
    //% fixedInstances blockGap=8
    export class PotentiometerClient extends jacdac.SensorClient<[number]> {

            private readonly _variant : jacdac.RegisterClient<[jacdac.PotentiometerVariant]>;            

            constructor(role: string) {
            super(jacdac.SRV_POTENTIOMETER, role, "u0.16");

            this._variant = this.addRegister<[jacdac.PotentiometerVariant]>(jacdac.PotentiometerReg.Variant, "u8");            
        }
    

        /**
        * The relative position of the slider between `0` and `1`.
        */
        //% callInDebugger
        //% group="Slider"
        //% block="%potentiometer position"
        //% blockId=jacdac_potentiometer_position___get
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
        variant(): jacdac.PotentiometerVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    }
    //% fixedInstance whenUsed
    export const potentiometer = new PotentiometerClient("potentiometer");
}