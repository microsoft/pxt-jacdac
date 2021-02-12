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
        //% blockId=jacdac_vibration_speed___get
        //% group="Vibration motor"
        //% block="%vibration speed" callInDebugger
        speed(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Determines if the vibration motor responds to vibrate commands.
        */
        //% blockId=jacdac_vibration_enabled___get
        //% group="Vibration motor"
        //% block="%vibration enabled" callInDebugger
        enabled(): boolean {            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }
        /**
        * Determines if the vibration motor responds to vibrate commands.
        */
        //% blockId=jacdac_vibration_enabled___set
        //% group="Vibration motor"
        //% block="set %vibration %value=toggleOnOff"
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

    }
    //% fixedInstance whenUsed
    export const vibrationMotor = new VibrationMotorClient("vibration Motor");
}