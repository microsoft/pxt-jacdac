namespace modules {
    /**
     * A bending or deflection sensor.
     **/
    //% fixedInstances blockGap=8
    export class FlexClient extends jacdac.SimpleSensorClient {

        private readonly _bendingError : jacdac.RegisterClient<[number]>;
        private readonly _length : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_FLEX, role, "u0.16");

            this._bendingError = this.addRegister<[number]>(jacdac.FlexReg.BendingError, "u0.16");
            this._length = this.addRegister<[number]>(jacdac.FlexReg.Length, "u16");            
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
        * Absolute error on the reading value.
        */
        //% callInDebugger
        //% group="Slider"
        //% weight=99
        bendingError(): number {
            this.start();            
            const values = this._bendingError.pauseUntilValues() as any[];
            return values[0] * 100;
        }

        /**
        * Length of the flex sensor
        */
        //% callInDebugger
        //% group="Slider"
        //% weight=98
        length(): number {
            this.start();            
            const values = this._length.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Run code when the bending changes by the given threshold value.
        */
        //% group="Slider"
        //% blockId=jacdac_flex_on_bending_change
        //% block="on %flex bending changed by %threshold"
        //% weight=97
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onBendingChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler);
        }

    
    }
    //% fixedInstance whenUsed block="flex1"
    export const flex1 = new FlexClient("flex1");
}