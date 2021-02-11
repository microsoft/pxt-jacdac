namespace modules {
    /**
     * A vibration motor.
     **/
    //% fixedInstances blockGap=8
    export class VibrationMotorClient extends jacdac.SensorClient<[number]> {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_VIBRATION_MOTOR, role, "u0.8");

            this._enabled = this.addRegister<[boolean]>(jacdac.VibrationMotorReg.Enabled, "u8");            
        }
    

        /**
        * Rotation speed of the motor. If only one rotation speed is supported,
        * then `0` shell be off, and any other number on. 
        * Use the ``vibrate`` command to control the register.
        */
        //% group="Vibration motor" blockSetVariable=myModule
        //% blockCombine block="speed" callInDebugger
        get speed(): number {
            const values = this.values() as any[];
            return values[0];
        }
        /**
        * Determines if the vibration motor responds to vibrate commands.
        */
        //% group="Vibration motor" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): boolean {
            const values = this._enabled.values() as any[];
            return !!values[0];
        }
        /**
        * Determines if the vibration motor responds to vibrate commands.
        */
        //% group="Vibration motor" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: boolean) {
            const values = this._enabled.values() as any[];
            values[0] = value ? 1 : 0;
            this._enabled.setValues(values as [boolean]);
        } 

    }
    //% fixedInstance whenUsed
    export const vibrationMotor = new VibrationMotorClient("vibration Motor");
}