namespace modules {
    /**
     * A bi-directional DC motor.
     **/
    //% fixedInstances blockGap=8
    export class MotorClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;
            private readonly _duty : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_MOTOR, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.MotorReg.Enabled, "u8");
            this._duty = this.addRegister<[number]>(jacdac.MotorReg.Duty, "i1.15");            
        }
    

        /**
        * Turn the power to the motor on/off.
        */
        //% group="Motor" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): boolean {
            const values = this._enabled.values() as any[];
            return !!values[0];
        }
        /**
        * Turn the power to the motor on/off.
        */
        //% group="Motor" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: boolean) {
            const values = this._enabled.values() as any[];
            values[0] = value ? 1 : 0;
            this._enabled.setValues(values as [boolean]);
        }
        /**
        * PWM duty cycle of the motor. Use negative/positive values to run the motor forwards and backwards.
        * Positive is recommended to be clockwise rotation and negative counterclockwise. A duty of ``0`` 
        * while ``enabled`` acts as brake.
        */
        //% group="Motor" blockSetVariable=myModule
        //% blockCombine block="duty" callInDebugger
        get duty(): number {
            const values = this._duty.values() as any[];
            return values[0];
        }
        /**
        * PWM duty cycle of the motor. Use negative/positive values to run the motor forwards and backwards.
        * Positive is recommended to be clockwise rotation and negative counterclockwise. A duty of ``0`` 
        * while ``enabled`` acts as brake.
        */
        //% group="Motor" blockSetVariable=myModule
        //% blockCombine block="duty" callInDebugger
        set duty(value: number) {
            const values = this._duty.values() as any[];
            values[0] = value;
            this._duty.setValues(values as [number]);
        } 

    }
    //% fixedInstance whenUsed
    export const motor = new MotorClient("motor");
}