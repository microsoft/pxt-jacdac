namespace modules {
    /**
     * A sensor, typically PIR, that detects object motion within a certain range
     **/
    //% fixedInstances blockGap=8
    export class MotionClient extends jacdac.SensorClient {

        private readonly _maxDistance : jacdac.RegisterClient<[number]>;
        private readonly _angle : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.MotionVariant]>;            

        constructor(role: string) {
            super(jacdac.SRV_MOTION, role, jacdac.MotionRegPack.Moving)

            this._maxDistance = this.addRegister<[number]>(jacdac.MotionReg.MaxDistance, jacdac.MotionRegPack.MaxDistance)
            this._angle = this.addRegister<[number]>(jacdac.MotionReg.Angle, jacdac.MotionRegPack.Angle)
            this._variant = this.addRegister<[jacdac.MotionVariant]>(jacdac.MotionReg.Variant, jacdac.MotionRegPack.Variant)            
        }
    

        /**
        * Reports is movement is currently detected by the sensor.
        */
        //% callInDebugger
        //% group="Movement"
        //% block="%motion moving"
        //% blockId=jacdac_motion_moving___get
        //% weight=100
        moving(): boolean {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Maximum distance where objects can be detected.
        */
        //% callInDebugger
        //% group="Movement"
        //% weight=99
        maxDistance(): number {
            this.start();            
            const values = this._maxDistance.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Opening of the field of view
        */
        //% callInDebugger
        //% group="Movement"
        //% weight=98
        angle(): number {
            this.start();            
            const values = this._angle.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Type of physical sensor
        */
        //% callInDebugger
        //% group="Movement"
        //% weight=97
        variant(): jacdac.MotionVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Movement"
        //% blockId=jacdac_on_motion_event
        //% block="on %motion %event"
        //% weight=96
        onEvent(ev: jacdac.MotionEvent, handler: () => void): void {
            this.registerEvent(ev, handler);
        }

        /**
         * A movement was detected.
         */
        //% group="Movement"
        //% weight=95
        onMovement(handler: () => void): void {
            this.registerEvent(jacdac.MotionEvent.Movement, handler);
        }
    
    }
    //% fixedInstance whenUsed weight=1 block="motion1"
    export const motion1 = new MotionClient("motion1");
}