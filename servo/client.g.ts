namespace modules {
    /**
     * Servo is a small motor with arm that can be pointing at a specific direction.
     * 
     * The `min/max_angle/pulse` may be read-only if the servo is permanently affixed to its Jacdac controller.
     **/
    //% fixedInstances blockGap=8
    export class ServoClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;
            private readonly _angle : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_SERVO, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.ServoReg.Enabled, "u8");
            this._angle = this.addRegister<[number]>(jacdac.ServoReg.Angle, "i16.16");            
        }
    

        /**
        * Turn the power to the servo on/off.
        */
        //% blockId=jacdac_servo_enabled___get
        //% group="Servo"
        //% block="%servo enabled" callInDebugger
        enabled(): boolean {            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }
        /**
        * Turn the power to the servo on/off.
        */
        //% blockId=jacdac_servo_enabled___set
        //% group="Servo"
        //% block="set %servo %value=toggleOnOff"
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }
        /**
        * Specifies the angle of the arm.
        */
        //% blockId=jacdac_servo_angle___get
        //% group="Servo"
        //% block="%servo angle" callInDebugger
        angle(): number {            
            const values = this._angle.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Specifies the angle of the arm.
        */
        //% blockId=jacdac_servo_angle___set
        //% group="Servo" value.min=-90 value.max=90
        //% block="set %servo angle to %value"
        setAngle(value: number) {
            this.start();
            const values = this._angle.values as any[];
            values[0] = value;
            this._angle.values = values as [number];
        } 

    }
    //% fixedInstance whenUsed
    export const servo = new ServoClient("servo");
}