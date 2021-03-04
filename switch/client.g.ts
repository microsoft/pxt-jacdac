namespace modules {
    /**
     * A switch, which keeps its position.
     **/
    //% fixedInstances blockGap=8
    export class SwitchClient extends jacdac.SensorClient<[boolean]> {

        private readonly _variant : jacdac.RegisterClient<[jacdac.constants.SwitchVariant]>;
        private readonly _autoOffDelay : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_SWITCH, role, "u8");

            this._variant = this.addRegister<[jacdac.constants.SwitchVariant]>(jacdac.constants.SwitchReg.Variant, "u8");
            this._autoOffDelay = this.addRegister<[number]>(jacdac.constants.SwitchReg.AutoOffDelay, "u16.16");            
        }
    

        /**
        * Indicates whether the switch is currently active (on).
        */
        //% callInDebugger
        //% group="Button"
        //% block="%switch active"
        //% blockId=jacdac_switch_active___get
        //% weight=100
        active(): boolean {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Describes the type of switch used.
        */
        //% callInDebugger
        //% group="Button"
        //% weight=99
        variant(): jacdac.constants.SwitchVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the delay without activity to automatically turn off after turning on.
        * For example, some light switches in staircases have such a capability.
        */
        //% callInDebugger
        //% group="Button"
        //% weight=98
        autoOffDelay(): number {
            this.start();            
            const values = this._autoOffDelay.pauseUntilValues() as any[];
            return values[0];
        }
 

        /**
         * Emitted when switch goes from ``off`` to ``on``.
         */
        //% group="Button"
        //% blockId=jacdac_on_switch_on
        //% block="on %switch on"
        //% weight=97
        onOn(handler: () => void): void {
            this.registerEvent(jacdac.constants.SwitchEvent.On, handler);
        }
        /**
         * Emitted when switch goes from ``on`` to ``off``.
         */
        //% group="Button"
        //% blockId=jacdac_on_switch_off
        //% block="on %switch off"
        //% weight=96
        onOff(handler: () => void): void {
            this.registerEvent(jacdac.constants.SwitchEvent.Off, handler);
        }
    
    }
    //% fixedInstance whenUsed
    export const switch_ = new SwitchClient("switch");
}