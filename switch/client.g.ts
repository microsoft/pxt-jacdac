namespace modules {
    //% fixedInstances
    export class SwitchClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_SWITCH, role, "u8");
        }
    
        /**
        * Indicates whether the switch is currently active (on).
        */
        //% blockId=jacdacswitch101 block="%sensor active"
        //% group="active"
        get active(): number {
            // active
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const switch = new SwitchClient("switch");
}