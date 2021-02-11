namespace modules {
    /**
     * Servo is a small motor with arm that can be pointing at a specific direction.
     **/
    //% fixedInstances blockGap=8
    export class ServoClient extends jacdac.Client {

            private readonly _enabled : jacdac.RegisterClient<[number]>;
            private readonly _angle : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_SERVO, role);

            this._enabled = this.addRegister(jacdac.ServoReg.Enabled, "u8");
            this._angle = this.addRegister(jacdac.ServoReg.Angle, "i16.16");            
        }
    

        /**
        * Turn the power to the servo on/off.
        */
        //% group="Servo" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): number {
            const values = this._enabled.values() as any[];
            return values && values.length > 0 && values[0];
        }
        /**
        * Specifies the angle of the arm.
        */
        //% group="Servo" blockSetVariable=myModule
        //% blockCombine block="angle" callInDebugger
        get angle(): number {
            const values = this._angle.values() as any[];
            return values && values.length > 0 && values[0];
        }     

        /**
        * Turn the power to the servo on/off.
        */
        //% group="Servo" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: number) {
            const values = this._enabled.values() as any[];
            values[0] = value;
            this._enabled.setValues(values as [number]);
        }
        /**
        * Specifies the angle of the arm.
        */
        //% group="Servo" blockSetVariable=myModule
        //% blockCombine block="angle" callInDebugger
        set angle(value: number) {
            const values = this._angle.values() as any[];
            values[0] = value;
            this._angle.setValues(values as [number]);
        }     

    }
    //% fixedInstance whenUsed
    export const servo = new ServoClient("servo");
}