namespace modules {
    //% fixedInstances
    export class MotionClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_MOTION, role, "u8");
        }
    
        /**
        * Reports is movement is currently detected by the sensor.
        */
        //% blockId=jacdacmotion101 block="%sensor moving"
        //% group="moving"
        get moving(): number {
            // moving
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const motion = new MotionClient("motion");
}