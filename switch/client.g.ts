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
        //% group="Switch" blockSetVariable=myModule
        //% blockCombine block="active" callInDebugger
        get active(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }     
     

        /**
         * Emitted when switch goes from ``off`` to ``on``.
         */
        //% block="on" blockSetVariable=myModule
        //% group="Switch" blockCombine
        onOn(handler: () => void) {
            this.registerEvent(jacdac.SwitchEvent.On, handler);
        }
        /**
         * Emitted when switch goes from ``on`` to ``off``.
         */
        //% block="off" blockSetVariable=myModule
        //% group="Switch" blockCombine
        onOff(handler: () => void) {
            this.registerEvent(jacdac.SwitchEvent.Off, handler);
        }
    }
    //% fixedInstance whenUsed
    export const switch = new SwitchClient("switch");
}