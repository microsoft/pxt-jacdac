namespace modules {
    /**
     * A 3-axis accelerometer.
     **/
    //% fixedInstances blockGap=8
    export class AccelerometerClient extends jacdac.SensorClient<[number,number,number]> {

            private readonly _forcesError : jacdac.RegisterClient<[number]>;
            private readonly _maxForce : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_ACCELEROMETER, role, "i12.20 i12.20 i12.20");

            this._forcesError = this.addRegister<[number]>(jacdac.AccelerometerReg.ForcesError, "i12.20");
            this._maxForce = this.addRegister<[number]>(jacdac.AccelerometerReg.MaxForce, "i12.20");            
        }
    

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% callInDebugger
        //% group="Movement"
        //% block="%accelerometer x"
        //% blockId=jacdac_accelerometer_forces_x_get
        x(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% callInDebugger
        //% group="Movement"
        //% block="%accelerometer y"
        //% blockId=jacdac_accelerometer_forces_y_get
        y(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% callInDebugger
        //% group="Movement"
        //% block="%accelerometer z"
        //% blockId=jacdac_accelerometer_forces_z_get
        z(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[2];
        }

        /**
        * Error on the reading value.
        */
        //% callInDebugger
        //% group="Movement"
        forcesError(): number {
            this.start();            
            const values = this._forcesError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Configures the range forces detected.
        * Read-back after setting to get current value.
        */
        //% callInDebugger
        //% group="Movement"
        maxForce(): number {
            this.start();            
            const values = this._maxForce.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Configures the range forces detected.
        * Read-back after setting to get current value.
        */
        //% 
        //% group="Movement"
        //% block="set %accelerometer max force to %value"
        setMaxForce(value: number) {
            this.start();
            const values = this._maxForce.values as any[];
            values[0] = value;
            this._maxForce.values = values as [number];
        }
 

        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% blockId=jacdac_on_accelerometer_tilt_up
        //% block="tilt up" blockSetVariable=myModule
        //% group="Movement"
        onTiltUp(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.TiltUp, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% blockId=jacdac_on_accelerometer_tilt_down
        //% block="tilt down" blockSetVariable=myModule
        //% group="Movement"
        onTiltDown(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.TiltDown, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% blockId=jacdac_on_accelerometer_tilt_left
        //% block="tilt left" blockSetVariable=myModule
        //% group="Movement"
        onTiltLeft(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.TiltLeft, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% blockId=jacdac_on_accelerometer_tilt_right
        //% block="tilt right" blockSetVariable=myModule
        //% group="Movement"
        onTiltRight(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.TiltRight, handler);
        }
        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        //% blockId=jacdac_on_accelerometer_face_up
        //% block="face up" blockSetVariable=myModule
        //% group="Movement"
        onFaceUp(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.FaceUp, handler);
        }
        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        //% blockId=jacdac_on_accelerometer_face_down
        //% block="face down" blockSetVariable=myModule
        //% group="Movement"
        onFaceDown(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.FaceDown, handler);
        }
        /**
         * Emitted when total force acting on accelerometer is much less than 1g.
         */
        //% blockId=jacdac_on_accelerometer_freefall
        //% block="freefall" blockSetVariable=myModule
        //% group="Movement"
        onFreefall(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Freefall, handler);
        }
        /**
         * Emitted when forces change violently a few times.
         */
        //% blockId=jacdac_on_accelerometer_shake
        //% block="shake" blockSetVariable=myModule
        //% group="Movement"
        onShake(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Shake, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% blockId=jacdac_on_accelerometer_force_2g
        //% block="force 2g" blockSetVariable=myModule
        //% group="Movement"
        onForce_2g(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Force_2g, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% blockId=jacdac_on_accelerometer_force_3g
        //% block="force 3g" blockSetVariable=myModule
        //% group="Movement"
        onForce_3g(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Force_3g, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% blockId=jacdac_on_accelerometer_force_6g
        //% block="force 6g" blockSetVariable=myModule
        //% group="Movement"
        onForce_6g(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Force_6g, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% blockId=jacdac_on_accelerometer_force_8g
        //% block="force 8g" blockSetVariable=myModule
        //% group="Movement"
        onForce_8g(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Force_8g, handler);
        }
    }
    //% fixedInstance whenUsed
    export const accelerometer = new AccelerometerClient("accelerometer");
}