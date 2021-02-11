namespace modules {
    /**
     * A switch, which keeps its position.
     **/
    //% fixedInstances blockGap=8
    export class SwitchClient extends jacdac.SensorClient<[boolean]> {
            

            constructor(role: string) {
            super(jacdac.SRV_SWITCH, role, "u8");
            
        }
    

        /**
        * Indicates whether the switch is currently active (on).
        */
        //% group="Switch" blockSetVariable=myModule
        //% blockCombine block="active" callInDebugger
        get active(): boolean {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return !!values[0];
        } 

        /**
         * Emitted when switch goes from ``off`` to ``on``.
         */
        //% blockId=jacdac_on_switch_on
        //% block="on" blockSetVariable=myModule
        //% group="Switch"
        onOn(handler: () => void) {
            this.registerEvent(jacdac.SwitchEvent.On, handler);
        }
        /**
         * Emitted when switch goes from ``on`` to ``off``.
         */
        //% blockId=jacdac_on_switch_off
        //% block="off" blockSetVariable=myModule
        //% group="Switch"
        onOff(handler: () => void) {
            this.registerEvent(jacdac.SwitchEvent.Off, handler);
        }
    }
    //% fixedInstance whenUsed
    export const switch = new SwitchClient("switch");
}