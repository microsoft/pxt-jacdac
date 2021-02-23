namespace modules {
    /**
     * A weight measuring sensor.
     **/
    //% fixedInstances blockGap=8
    export class WeightScaleClient extends jacdac.SensorClient<[number]> {

            private readonly _weightError : jacdac.RegisterClient<[number]>;
            private readonly _zeroOffset : jacdac.RegisterClient<[number]>;
            private readonly _gain : jacdac.RegisterClient<[number]>;
            private readonly _maxWeight : jacdac.RegisterClient<[number]>;
            private readonly _minWeight : jacdac.RegisterClient<[number]>;
            private readonly _weightResolution : jacdac.RegisterClient<[number]>;
            private readonly _variant : jacdac.RegisterClient<[jacdac.WeightScaleVariant]>;            

            constructor(role: string) {
            super(jacdac.SRV_WEIGHT_SCALE, role, "u16.16");

            this._weightError = this.addRegister<[number]>(jacdac.WeightScaleReg.WeightError, "u16.16");
            this._zeroOffset = this.addRegister<[number]>(jacdac.WeightScaleReg.ZeroOffset, "u16.16");
            this._gain = this.addRegister<[number]>(jacdac.WeightScaleReg.Gain, "u16.16");
            this._maxWeight = this.addRegister<[number]>(jacdac.WeightScaleReg.MaxWeight, "u16.16");
            this._minWeight = this.addRegister<[number]>(jacdac.WeightScaleReg.MinWeight, "u16.16");
            this._weightResolution = this.addRegister<[number]>(jacdac.WeightScaleReg.WeightResolution, "u16.16");
            this._variant = this.addRegister<[jacdac.WeightScaleVariant]>(jacdac.WeightScaleReg.Variant, "u8");            
        }
    

        /**
        * The reported weight.
        */
        //% callInDebugger
        //% group="Weight Scale"
        //% block="%weightscale weight"
        //% blockId=jacdac_weightscale_weight___get
        weight(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The estimate error on the reported reading.
        */
        //% callInDebugger
        //% group="Weight Scale"
        weightError(): number {
            this.start();            
            const values = this._weightError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Calibrated zero offset error on the scale, i.e. the measured weight when nothing is on the scale.
        * You do not need to subtract that from the reading, it has already been done.
        */
        //% callInDebugger
        //% group="Weight Scale"
        zeroOffset(): number {
            this.start();            
            const values = this._zeroOffset.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Calibrated zero offset error on the scale, i.e. the measured weight when nothing is on the scale.
        * You do not need to subtract that from the reading, it has already been done.
        */
        //% 
        //% group="Weight Scale"
        //% block="set %weightscale zero offset to %value"
        setZeroOffset(value: number) {
            this.start();
            const values = this._zeroOffset.values as any[];
            values[0] = value;
            this._zeroOffset.values = values as [number];
        }

        /**
        * Calibrated gain on the weight scale error.
        */
        //% callInDebugger
        //% group="Weight Scale"
        gain(): number {
            this.start();            
            const values = this._gain.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Calibrated gain on the weight scale error.
        */
        //% 
        //% group="Weight Scale"
        //% block="set %weightscale gain to %value"
        setGain(value: number) {
            this.start();
            const values = this._gain.values as any[];
            values[0] = value;
            this._gain.values = values as [number];
        }

        /**
        * Maximum supported weight on the scale.
        */
        //% callInDebugger
        //% group="Weight Scale"
        maxWeight(): number {
            this.start();            
            const values = this._maxWeight.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Minimum recommend weight on the scale.
        */
        //% callInDebugger
        //% group="Weight Scale"
        minWeight(): number {
            this.start();            
            const values = this._minWeight.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Smallest, yet distinguishable change in reading.
        */
        //% callInDebugger
        //% group="Weight Scale"
        weightResolution(): number {
            this.start();            
            const values = this._weightResolution.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The type of physical scale
        */
        //% callInDebugger
        //% group="Weight Scale"
        variant(): jacdac.WeightScaleVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    }
    //% fixedInstance whenUsed
    export const weightScale = new WeightScaleClient("weight Scale");
}