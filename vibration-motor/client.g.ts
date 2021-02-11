namespace modules {
    //% fixedInstances
    export class VibrationMotorClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_VIBRATION_MOTOR, role, "u0.8");
        }
    
        /**
        * Rotation speed of the motor. If only one rotation speed is supported,
        * then `0` shell be off, and any other number on. 
        * Use the ``vibrate`` command to control the register.
        */
        //% blockId=jacdacvibration101 block="%sensor speed"
        //% group="speed"
        get speed(): number {
            // speed
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const vibrationMotor = new VibrationMotorClient("vibration Motor");
}