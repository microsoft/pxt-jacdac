namespace modules {
    /**
     * A 3-axis accelerometer.
     **/
    //% fixedInstances blockGap=8
    export class AccelerometerClient extends jacdac.SensorClient {

        private readonly _forcesError : jacdac.RegisterClient<[number]>;
        private readonly _maxForce : jacdac.RegisterClient<[number]>;
        private readonly _maxForcesSupported : jacdac.RegisterClient<[number[]]>;            

        constructor(role: string) {
            super(jacdac.SRV_ACCELEROMETER, role, "i12.20 i12.20 i12.20");

            this._forcesError = this.addRegister<[number]>(jacdac.AccelerometerReg.ForcesError, "u12.20");
            this._maxForce = this.addRegister<[number]>(jacdac.AccelerometerReg.MaxForce, "u12.20");
            this._maxForcesSupported = this.addRegister<[number[]]>(jacdac.AccelerometerReg.MaxForcesSupported, "r: u12.20");            
        }
    

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% callInDebugger
        //% group="Movement"
        //% block="%accelerometer x"
        //% blockId=jacdac_accelerometer_forces_x_get
        //% weight=100
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
        //% weight=99
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
        //% weight=98
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
        //% weight=97
        forcesError(): number {
            this.start();            
            const values = this._forcesError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Configures the range forces detected.
        * The value will be "rounded up" to one of `max_forces_supported`.
        */
        //% callInDebugger
        //% group="Movement"
        //% weight=96
        maxForce(): number {
            this.start();            
            const values = this._maxForce.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Configures the range forces detected.
        * The value will be "rounded up" to one of `max_forces_supported`.
        */
        //% group="Movement"
        //% weight=95
        setMaxForce(value: number) {
            this.start();
            const values = this._maxForce.values as any[];
            values[0] = value;
            this._maxForce.values = values as [number];
        }

        /**
        * Lists values supported for writing `max_force`.
        */
        //% callInDebugger
        //% group="Movement"
        //% weight=94
        maxForcesSupportedMaxForce(): number[] {
            this.start();            
            const values = this._maxForcesSupported.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Movement"
        //% blockId=jacdac_on_accelerometer_event
        //% block="on %accelerometer %event"
        //% weight=93
        onEvent(ev: jacdac.AccelerometerEvent, handler: () => void): void {
            this.onEvent(ev, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% group="Movement"
        //% weight=92
        onTiltUp(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.TiltUp, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% group="Movement"
        //% weight=91
        onTiltDown(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.TiltDown, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% group="Movement"
        //% weight=90
        onTiltLeft(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.TiltLeft, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% group="Movement"
        //% weight=89
        onTiltRight(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.TiltRight, handler);
        }
        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        //% group="Movement"
        //% weight=88
        onFaceUp(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.FaceUp, handler);
        }
        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        //% group="Movement"
        //% weight=87
        onFaceDown(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.FaceDown, handler);
        }
        /**
         * Emitted when total force acting on accelerometer is much less than 1g.
         */
        //% group="Movement"
        //% weight=86
        onFreefall(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.Freefall, handler);
        }
        /**
         * Emitted when forces change violently a few times.
         */
        //% group="Movement"
        //% weight=85
        onShake(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.Shake, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% group="Movement"
        //% weight=84
        onForce2g(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.Force2g, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% group="Movement"
        //% weight=83
        onForce3g(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.Force3g, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% group="Movement"
        //% weight=82
        onForce6g(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.Force6g, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% group="Movement"
        //% weight=81
        onForce8g(handler: () => void): void {
            this.registerEvent(jacdac.AccelerometerEvent.Force8g, handler);
        }
    
    }
    //% fixedInstance whenUsed block="accelerometer1"
    export const accelerometer1 = new AccelerometerClient("accelerometer1");
}