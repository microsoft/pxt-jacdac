namespace modules {
    //% fixedInstances
    export class ReflectedLightClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_REFLECTED_LIGHT, role, "u0.16");
        }
    
        /**
        * Reports the reflected brightness. It may be a digital value or, for some sensor, analog value.
        */
        //% blockId=jacdacreflectedlight101 block="%sensor brightness"
        //% group="brightness"
        get brightness(): number {
            // brightness
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const reflectedLight = new ReflectedLightClient("reflected Light");
}