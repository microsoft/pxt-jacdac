namespace modules {
    /**
     * A capacitive or pressure sensitive push-button.
     **/
    //% fixedInstances blockGap=8
    export class AnalogButtonClient extends jacdac.SensorClient<[number]> {

        private readonly _inactiveThreshold : jacdac.RegisterClient<[number]>;
        private readonly _activeThreshold : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.constants.AnalogButtonVariant]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_ANALOG_BUTTON, role, "u0.16");

            this._inactiveThreshold = this.addRegister<[number]>(jacdac.constants.AnalogButtonReg.InactiveThreshold, "u0.16");
            this._activeThreshold = this.addRegister<[number]>(jacdac.constants.AnalogButtonReg.ActiveThreshold, "u0.16");
            this._variant = this.addRegister<[jacdac.constants.AnalogButtonVariant]>(jacdac.constants.AnalogButtonReg.Variant, "u8");            
        }
    

        /**
        * Indicates the current pressure (``force``) on the button.
        */
        //% callInDebugger
        //% group="Button"
        //% block="%analogbutton pressure"
        //% blockId=jacdac_analogbutton_pressure___get
        //% weight=100
        pressure(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Indicates the lower threshold for ``inactive`` events.
        */
        //% callInDebugger
        //% group="Button"
        //% weight=99
        inactiveThreshold(): number {
            this.start();            
            const values = this._inactiveThreshold.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Indicates the lower threshold for ``inactive`` events.
        */
        //% group="Button"
        //% weight=98
        //% value.min=0
        //% value.max=1
        setInactiveThreshold(value: number) {
            this.start();
            const values = this._inactiveThreshold.values as any[];
            values[0] = value;
            this._inactiveThreshold.values = values as [number];
        }

        /**
        * Indicates the threshold for ``active`` events.
        */
        //% callInDebugger
        //% group="Button"
        //% weight=97
        activeThreshold(): number {
            this.start();            
            const values = this._activeThreshold.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Indicates the threshold for ``active`` events.
        */
        //% group="Button"
        //% weight=96
        //% value.min=0
        //% value.max=1
        setActiveThreshold(value: number) {
            this.start();
            const values = this._activeThreshold.values as any[];
            values[0] = value;
            this._activeThreshold.values = values as [number];
        }

        /**
        * The type of physical button.
        */
        //% callInDebugger
        //% group="Button"
        //% weight=95
        variant(): jacdac.constants.AnalogButtonVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

        /**
         * Emitted when button goes from inactive (pressure less than threshold) to active.
         */
        //% group="Button"
        //% blockId=jacdac_on_analogbutton_active
        //% block="on %analogbutton active"
        //% weight=94
        onActive(handler: () => void): void {
            this.registerEvent(jacdac.constants.AnalogButtonEvent.Active, handler);
        }
        /**
         * Emitted when button goes from active (pressure higher than threshold) to inactive.
         */
        //% group="Button"
        //% blockId=jacdac_on_analogbutton_inactive
        //% block="on %analogbutton inactive"
        //% weight=93
        onInactive(handler: () => void): void {
            this.registerEvent(jacdac.constants.AnalogButtonEvent.Inactive, handler);
        }
    
    }
    //% fixedInstance whenUsed
    export const analogButton = new AnalogButtonClient("analog Button");
}