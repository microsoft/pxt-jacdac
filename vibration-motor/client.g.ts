namespace modules {
    /**
     * A vibration motor.
     **/
    //% fixedInstances blockGap=8
    export class VibrationMotorClient extends jacdac.SensorClient<[number]> {

            private readonly _enabled : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_VIBRATION_MOTOR, role, "u0.8");

            this._enabled = this.addRegister(jacdac.VibrationMotorReg.Enabled, "u8");            
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
            return values && values.length > 0 && values[0];
        }
        /**
        * Determines if the vibration motor responds to vibrate commands.
        */
        //% group="Vibration motor" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): number {
            const values = this._enabled.values() as any[];
            return values && values.length > 0 && values[0];
        }     

        /**
        * Determines if the vibration motor responds to vibrate commands.
        */
        //% group="Vibration motor" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: number) {
            const values = this._enabled.values() as any[];
            values[0] = value;
            this._enabled.setValues(values as [number]);
        }     

    }
    //% fixedInstance whenUsed
    export const vibrationMotor = new VibrationMotorClient("vibration Motor");
}