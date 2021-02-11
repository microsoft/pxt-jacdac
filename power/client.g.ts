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
        //% group="Power" blockSetVariable=myModule
        //% blockCombine block="current draw" callInDebugger
        get currentDraw(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[0];
        }
        /**
        * Turn the power to the bus on/off.
        */
        //% group="Power" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): boolean {
            this._enabled.pauseUntilValues();
            const values = this._enabled.values as any[];
            return !!values[0];
        }
        /**
        * Turn the power to the bus on/off.
        */
        //% group="Power" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: boolean) {
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

    }
    //% fixedInstance whenUsed
    export const power = new PowerClient("power");
}