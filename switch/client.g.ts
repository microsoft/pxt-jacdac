namespace modules {
    /**
     * A switch, which keeps its position.
     **/
    //% fixedInstances blockGap=8
    export class SwitchClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_SWITCH, role, "u8");
        }
    
        /**
        * Indicates whether the switch is currently active (on).
        */
        //% blockId=jacdacswitch_101_0
        //% group="Switch" blockSetVariable=myModule
        //% blockCombine block="active" callInDebugger
        get active(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const switch = new SwitchClient("switch");
}