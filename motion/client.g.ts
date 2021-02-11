namespace modules {
    /**
     * A sensor, typically PIR, that detects object motion within a certain range
     **/
    //% fixedInstances blockGap=8
    export class MotionClient extends jacdac.SensorClient<[boolean]> {
            

            constructor(role: string) {
            super(jacdac.SRV_MOTION, role, "u8");
            
        }
    

        /**
        * Reports is movement is currently detected by the sensor.
        */
        //% group="Motion" blockSetVariable=myModule
        //% blockCombine block="moving" callInDebugger
        get moving(): boolean {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return !!values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const motion = new MotionClient("motion");
}