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
        //% blockId=jacdacreflectedlight_101_0
        //% group="brightness"
        //% blockCombine block="brightness" callInDebugger
        get brightness(): number {
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const reflectedLight = new ReflectedLightClient("reflected Light");
}