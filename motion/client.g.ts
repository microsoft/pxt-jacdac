namespace modules {
    /**
     * A sensor, typically PIR, that detects object motion within a certain range
     **/
    //% fixedInstances blockGap=8
    export class MotionClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_MOTION, role, "u8");
        }
    
        /**
        * Reports is movement is currently detected by the sensor.
        */
        //% blockId=jacdacmotion_101_0
        //% group="moving"
        //% blockCombine block="moving" callInDebugger
        get moving(): number {
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const motion = new MotionClient("motion");
}