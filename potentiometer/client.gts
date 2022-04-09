namespace modules {
    /**
     * A slider or rotary potentiometer.
     **/
    //% fixedInstances blockGap=8
    export class PotentiometerClient extends jacdac.SimpleSensorClient {

        private readonly _variant : jacdac.RegisterClient<[jacdac.PotentiometerVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_POTENTIOMETER, role, jacdac.PotentiometerRegPack.Position)

            this._variant = this.addRegister<[jacdac.PotentiometerVariant]>(jacdac.PotentiometerReg.Variant, jacdac.PotentiometerRegPack.Variant)            
        }
    

        /**
        * The relative position of the slider.
        */
        //% callInDebugger
        //% group="Slider"
        //% block="%potentiometer position"
        //% blockId=jacdac_potentiometer_position___get
        //% weight=100
        position(): number {
            return this.reading() * 100;
        
        }

        /**
        * Specifies the physical layout of the potentiometer.
        */
        //% callInDebugger
        //% group="Slider"
        //% weight=99
        variant(): jacdac.PotentiometerVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Run code when the position changes by the given threshold value.
        */
        //% group="Slider"
        //% blockId=jacdac_potentiometer_on_position_change
        //% block="on %potentiometer position changed by %threshold"
        //% weight=98
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onPositionChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler);
        }

    
    }
    //% fixedInstance whenUsed weight=1 block="potentiometer1"
    export const potentiometer1 = new PotentiometerClient("potentiometer1");
}