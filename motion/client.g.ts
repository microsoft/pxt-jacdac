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
        //% group="moving" blockSetVariable=myModule
        //% blockCombine block="moving" callInDebugger
        get moving(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const motion = new MotionClient("motion");
}