namespace modules {
    //% fixedInstances
    export class PowerClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_POWER, role, "u16");
        }
    
        /**
        * Present current draw from the bus.
        */
        //% blockId=jacdacpower101 block="%sensor current draw"
        //% group="currentDraw"
        get currentDraw(): number {
            // currentDraw
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const power = new PowerClient("power");
}