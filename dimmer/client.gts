namespace modules {
    /**
     * A light or fan controller that dims the current on a line.
     **/
    //% fixedInstances blockGap=8
    export class DimmerClient extends jacdac.Client {

        private readonly _intensity : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.DimmerVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_DIMMER, role);

            this._intensity = this.addRegister<[number]>(jacdac.DimmerReg.Intensity, "u0.16");
            this._variant = this.addRegister<[jacdac.DimmerVariant]>(jacdac.DimmerReg.Variant, "u8");            
        }
    

        /**
        * The intensity of the current. Set to ``0`` to turn off completely the current.
        */
        //% callInDebugger
        //% group="Dimmer"
        //% block="%dimmer intensity"
        //% blockId=jacdac_dimmer_intensity___get
        //% weight=100
        intensity(): number {
            this.start();            
            const values = this._intensity.pauseUntilValues() as any[];
            return values[0] * 100;
        }

        /**
        * The intensity of the current. Set to ``0`` to turn off completely the current.
        */
        //% group="Dimmer"
        //% blockId=jacdac_dimmer_intensity___set
        //% block="set %dimmer intensity to %value"
        //% weight=99
        //% value.min=0
        //% value.max=100
        //% value.defl=100
        setIntensity(value: number) {
            this.start();
            const values = this._intensity.values as any[];
            values[0] = value / 100;
            this._intensity.values = values as [number];
        }

        /**
        * The type of physical device
        */
        //% callInDebugger
        //% group="Dimmer"
        //% weight=98
        variant(): jacdac.DimmerVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

    
    }
    //% fixedInstance whenUsed block="dimmer1"
    export const dimmer1 = new DimmerClient("dimmer1");
}