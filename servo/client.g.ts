namespace modules {
    /**
     * Servo is a small motor with arm that can be pointing at a specific direction.
     * 
     * The `min/max_angle/pulse` may be read-only if the servo is permanently affixed to its Jacdac controller.
     **/
    //% fixedInstances blockGap=8
    export class ServoClient extends jacdac.Client {

            private readonly _angle : jacdac.RegisterClient<[number]>;
            private readonly _enabled : jacdac.RegisterClient<[boolean]>;
            private readonly _offset : jacdac.RegisterClient<[number]>;
            private readonly _minAngle : jacdac.RegisterClient<[number]>;
            private readonly _minPulse : jacdac.RegisterClient<[number]>;
            private readonly _maxAngle : jacdac.RegisterClient<[number]>;
            private readonly _maxPulse : jacdac.RegisterClient<[number]>;
            private readonly _variant : jacdac.RegisterClient<[jacdac.ServoVariant]>;
            private readonly _stallTorque : jacdac.RegisterClient<[number]>;
            private readonly _responseSpeed : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_SERVO, role);

            this._angle = this.addRegister<[number]>(jacdac.ServoReg.Angle, "i16.16");
            this._enabled = this.addRegister<[boolean]>(jacdac.ServoReg.Enabled, "u8");
            this._offset = this.addRegister<[number]>(jacdac.ServoReg.Offset, "i16.16");
            this._minAngle = this.addRegister<[number]>(jacdac.ServoReg.MinAngle, "i16.16");
            this._minPulse = this.addRegister<[number]>(jacdac.ServoReg.MinPulse, "u16");
            this._maxAngle = this.addRegister<[number]>(jacdac.ServoReg.MaxAngle, "i16.16");
            this._maxPulse = this.addRegister<[number]>(jacdac.ServoReg.MaxPulse, "u16");
            this._variant = this.addRegister<[jacdac.ServoVariant]>(jacdac.ServoReg.Variant, "u8");
            this._stallTorque = this.addRegister<[number]>(jacdac.ServoReg.StallTorque, "u16.16");
            this._responseSpeed = this.addRegister<[number]>(jacdac.ServoReg.ResponseSpeed, "u16.16");            
        }
    

        /**
        * Specifies the angle of the arm.
        */
        //% callInDebugger
        //% group="Servo"
        //% block="%servo angle"
        //% blockId=jacdac_servo_angle___get
        angle(): number {
            this.start();            
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

        /**
        * Turn the power to the servo on/off.
        */
        //% callInDebugger
        //% group="Servo"
        //% block="%servo enabled"
        //% blockId=jacdac_servo_enabled___get
        enabled(): boolean {
            this.start();            
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
        * Correction applied to the angle to account for the servo arm drift.
        */
        //% callInDebugger
        //% group="Servo"
        offset(): number {
            this.start();            
            const values = this._offset.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Correction applied to the angle to account for the servo arm drift.
        */
        //% 
        //% group="Servo"
        //% block="set %servo offset to %value"
        setOffset(value: number) {
            this.start();
            const values = this._offset.values as any[];
            values[0] = value;
            this._offset.values = values as [number];
        }

        /**
        * Lowest angle that can be set.
        */
        //% callInDebugger
        //% group="Servo"
        minAngle(): number {
            this.start();            
            const values = this._minAngle.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Lowest angle that can be set.
        */
        //% 
        //% group="Servo" value.defl=-90
        //% block="set %servo min angle to %value"
        setMinAngle(value: number) {
            this.start();
            const values = this._minAngle.values as any[];
            values[0] = value;
            this._minAngle.values = values as [number];
        }

        /**
        * The length of pulse corresponding to lowest angle.
        */
        //% callInDebugger
        //% group="Servo"
        minPulse(): number {
            this.start();            
            const values = this._minPulse.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The length of pulse corresponding to lowest angle.
        */
        //% 
        //% group="Servo" value.defl=500
        //% block="set %servo min pulse to %value"
        setMinPulse(value: number) {
            this.start();
            const values = this._minPulse.values as any[];
            values[0] = value;
            this._minPulse.values = values as [number];
        }

        /**
        * Highest angle that can be set.
        */
        //% callInDebugger
        //% group="Servo"
        maxAngle(): number {
            this.start();            
            const values = this._maxAngle.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Highest angle that can be set.
        */
        //% 
        //% group="Servo" value.defl=90
        //% block="set %servo max angle to %value"
        setMaxAngle(value: number) {
            this.start();
            const values = this._maxAngle.values as any[];
            values[0] = value;
            this._maxAngle.values = values as [number];
        }

        /**
        * The length of pulse corresponding to highest angle.
        */
        //% callInDebugger
        //% group="Servo"
        maxPulse(): number {
            this.start();            
            const values = this._maxPulse.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The length of pulse corresponding to highest angle.
        */
        //% 
        //% group="Servo" value.defl=2500
        //% block="set %servo max pulse to %value"
        setMaxPulse(value: number) {
            this.start();
            const values = this._maxPulse.values as any[];
            values[0] = value;
            this._maxPulse.values = values as [number];
        }

        /**
        * Specifies the type of servo motor.
        * * Positional Rotation Servos: Positional servos can rotate the shaft in about half of the circle,
        * with features to avoid over-rotating. Most servo have a range of 180° but some allow 270° or 360°.
        * * Linear Servos: linear servos are also like a positional servo, but with additional gears to the adjust the output from circular to back-and-forth.
        */
        //% callInDebugger
        //% group="Servo"
        variant(): jacdac.ServoVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The servo motor will stop rotating when it is trying to move a ``stall_torque`` weight at a radial distance of ``1.0`` cm.
        */
        //% callInDebugger
        //% group="Servo"
        stallTorque(): number {
            this.start();            
            const values = this._stallTorque.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Time to move 60°.
        */
        //% callInDebugger
        //% group="Servo"
        responseSpeed(): number {
            this.start();            
            const values = this._responseSpeed.pauseUntilValues() as any[];
            return values[0];
        }
 

    }
    //% fixedInstance whenUsed
    export const servo = new ServoClient("servo");
}