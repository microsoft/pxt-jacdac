namespace modules {
    /**
     * A sensor that detects light and dark surfaces, commonly used for line following robots.
     **/
    //% fixedInstances blockGap=8
    export class ReflectedLightClient extends jacdac.SensorClient<[number]> {

        private readonly _variant : jacdac.RegisterClient<[jacdac.constants.ReflectedLightVariant]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_REFLECTED_LIGHT, role, "u0.16");

            this._variant = this.addRegister<[jacdac.constants.ReflectedLightVariant]>(jacdac.constants.ReflectedLightReg.Variant, "u8");            
        }
    

        /**
        * Reports the reflected brightness. It may be a digital value or, for some sensor, analog value.
        */
        //% callInDebugger
        //% group="Imaging"
        //% block="%reflectedlight brightness"
        //% blockId=jacdac_reflectedlight_brightness___get
        //% weight=100
        brightness(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Type of physical sensor used
        */
        //% callInDebugger
        //% group="Imaging"
        //% weight=99
        variant(): jacdac.constants.ReflectedLightVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

        /**
         * The sensor detected a transition from light to dark
         */
        //% group="Imaging"
        //% blockId=jacdac_on_reflectedlight_dark
        //% block="on %reflectedlight dark"
        //% weight=98
        onDark(handler: () => void): void {
            this.registerEvent(jacdac.constants.ReflectedLightEvent.Dark, handler);
        }
        /**
         * The sensor detected a transition from dark to light
         */
        //% group="Imaging"
        //% blockId=jacdac_on_reflectedlight_light
        //% block="on %reflectedlight light"
        //% weight=97
        onLight(handler: () => void): void {
            this.registerEvent(jacdac.constants.ReflectedLightEvent.Light, handler);
        }
    
    }
    //% fixedInstance whenUsed
    export const reflectedLight = new ReflectedLightClient("reflected Light");
}