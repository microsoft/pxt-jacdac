namespace modules {
    /**
     * A 3-axis accelerometer.
     **/
    //% fixedInstances blockGap=8
    export class AccelerometerClient extends jacdac.SensorClient<[number,number,number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_ACCELEROMETER, role, "i6.10 i6.10 i6.10");
            
        }
    

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% group="Accelerometer" blockSetVariable=myModule
        //% blockCombine block="x" callInDebugger
        get x(): number {
            const values = this.values() as any[];
            return values[0];
        }
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% group="Accelerometer" blockSetVariable=myModule
        //% blockCombine block="y" callInDebugger
        get y(): number {
            const values = this.values() as any[];
            return values[1];
        }
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% group="Accelerometer" blockSetVariable=myModule
        //% blockCombine block="z" callInDebugger
        get z(): number {
            const values = this.values() as any[];
            return values[2];
        } 

        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% block="tilt up" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onTiltUp(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.TiltUp, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% block="tilt down" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onTiltDown(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.TiltDown, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% block="tilt left" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onTiltLeft(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.TiltLeft, handler);
        }
        /**
         * Emitted when accelerometer is tilted in the given direction.
         */
        //% block="tilt right" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onTiltRight(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.TiltRight, handler);
        }
        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        //% block="face up" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onFaceUp(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.FaceUp, handler);
        }
        /**
         * Emitted when accelerometer is laying flat in the given direction.
         */
        //% block="face down" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onFaceDown(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.FaceDown, handler);
        }
        /**
         * Emitted when total force acting on accelerometer is much less than 1g.
         */
        //% block="freefall" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onFreefall(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Freefall, handler);
        }
        /**
         * Emitted when forces change violently a few times.
         */
        //% block="shake" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onShake(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Shake, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% block="force 2g" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onForce_2g(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Force_2g, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% block="force 3g" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onForce_3g(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Force_3g, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% block="force 6g" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onForce_6g(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Force_6g, handler);
        }
        /**
         * Emitted when force in any direction exceeds given threshold.
         */
        //% block="force 8g" blockSetVariable=myModule
        //% group="Accelerometer" blockCombine
        onForce_8g(handler: () => void) {
            this.registerEvent(jacdac.AccelerometerEvent.Force_8g, handler);
        }
    }
    //% fixedInstance whenUsed
    export const accelerometer = new AccelerometerClient("accelerometer");
}