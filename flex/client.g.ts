namespace modules {
    /**
     * A bending or deflection sensor.
     **/
    //% fixedInstances blockGap=8
    export class FlexClient extends jacdac.SimpleSensorClient {

        private readonly _variant : jacdac.RegisterClient<[jacdac.FlexVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_FLEX, role, "u0.16");

            this._variant = this.addRegister<[jacdac.FlexVariant]>(jacdac.FlexReg.Variant, "u8");            
        }
    

        /**
        * The relative position of the slider.
        */
        //% callInDebugger
        //% group="Slider"
        //% block="%flex bending"
        //% blockId=jacdac_flex_bending___get
        //% weight=100
        bending(): number {
            return this.reading() * 100;
        
        }

        /**
        * Specifies the physical layout of the flex sensor.
        */
        //% callInDebugger
        //% group="Slider"
        //% weight=99
        variant(): jacdac.FlexVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Run code when the bending changes by the given threshold value.
        */
        //% group="Slider"
        //% blockId=jacdac_flex_on_bending_change
        //% block="on %flex bending changed by %threshold"
        //% weight=98
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onBendingChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler);
        }

    
    }
    //% fixedInstance whenUsed block="flex 1"
    export const flex1 = new FlexClient("flex1");
}