namespace modules {
    /**
     * A vibration motor.
     **/
    //% fixedInstances blockGap=8
    export class VibrationMotorClient extends jacdac.Client {
            

        constructor(role: string) {
            super(jacdac.SRV_VIBRATION_MOTOR, role);
            
        }
    


        /**
        * Starts a sequence of vibration and pauses. To stop any existing vibration, send an empty payload.
        */
        //% group="Vibration motor"
        //% blockId=jacdac_vibrationmotor_vibrate_cmd
        //% block="%vibrationmotor vibrate |duration $duration |intensity $intensity"
        //% weight=100
        vibrate(duration: ([number, number])[], intensity: undefined): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.VibrationMotorCmd.Vibrate, "r: u8 u0.8", [duration, intensity]))
        }
    
    }
    //% fixedInstance whenUsed weight=1 block="vibration motor1"
    export const vibrationMotor1 = new VibrationMotorClient("vibration Motor1");
}