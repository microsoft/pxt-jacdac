namespace modules {
    /**
     * A sensor that detects light and dark surfaces, commonly used for line following robots.
     **/
    //% fixedInstances blockGap=8
    export class ReflectedLightClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_REFLECTED_LIGHT, role, "u0.16");
            
        }
    

        /**
        * Reports the reflected brightness. It may be a digital value or, for some sensor, analog value.
        */
        //% group="Reflected light" blockSetVariable=myModule
        //% blockCombine block="brightness" callInDebugger
        get brightness(): number {
            const values = this.values() as any[];
            return values[0];
        } 

        /**
         * The sensor detected a transition from light to dark
         */
        //% block="dark" blockSetVariable=myModule
        //% group="Reflected light" blockCombine
        onDark(handler: () => void) {
            this.registerEvent(jacdac.ReflectedLightEvent.Dark, handler);
        }
        /**
         * The sensor detected a transition from dark to light
         */
        //% block="light" blockSetVariable=myModule
        //% group="Reflected light" blockCombine
        onLight(handler: () => void) {
            this.registerEvent(jacdac.ReflectedLightEvent.Light, handler);
        }
    }
    //% fixedInstance whenUsed
    export const reflectedLight = new ReflectedLightClient("reflected Light");
}