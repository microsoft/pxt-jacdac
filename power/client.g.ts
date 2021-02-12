namespace modules {
    /**
     * A power-provider service.
     **/
    //% fixedInstances blockGap=8
    export class PowerClient extends jacdac.SensorClient<[number]> {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_POWER, role, "u16");

            this._enabled = this.addRegister<[boolean]>(jacdac.PowerReg.Enabled, "u8");            
        }
    

        /**
        * Present current draw from the bus.
        */
        //% blockId=jacdac_power_current_draw___get
        //% group="Power"
        //% block="%power current draw" callInDebugger
        currentDraw(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Turn the power to the bus on/off.
        */
        //% blockId=jacdac_power_enabled___get
        //% group="Power"
        //% block="%power enabled" callInDebugger
        enabled(): boolean {            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }
        /**
        * Turn the power to the bus on/off.
        */
        //% blockId=jacdac_power_enabled___set
        //% group="Power" value.defl=1
        //% block="set %power %value=toggleOnOff"
        setEnabled(value: boolean) {
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

    }
    //% fixedInstance whenUsed
    export const power = new PowerClient("power");
}