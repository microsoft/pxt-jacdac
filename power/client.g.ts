namespace modules {
    /**
     * A power-provider service.
     **/
    //% fixedInstances blockGap=8
    export class PowerClient extends jacdac.SensorClient<[number]> {

            private readonly _enabled : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_POWER, role, "u16");

            this._enabled = this.addRegister(jacdac.PowerReg.Enabled, "u8");            
        }
    

        /**
        * Present current draw from the bus.
        */
        //% group="Power" blockSetVariable=myModule
        //% blockCombine block="current draw" callInDebugger
        get currentDraw(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }
        /**
        * Turn the power to the bus on/off.
        */
        //% group="Power" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): number {
            const values = this._enabled.values() as any[];
            return values && values.length > 0 && values[0];
        }     

        /**
        * Turn the power to the bus on/off.
        */
        //% group="Power" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: number) {
            const values = this._enabled.values() as any[];
            values[0] = value;
            this._enabled.setValues(values as [number]);
        }     

    }
    //% fixedInstance whenUsed
    export const power = new PowerClient("power");
}