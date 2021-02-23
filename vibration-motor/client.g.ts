namespace modules {
    /**
     * A vibration motor.
     **/
    //% fixedInstances blockGap=8
    export class VibrationMotorClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_VIBRATION_MOTOR, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.VibrationMotorReg.Enabled, "u8");            
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