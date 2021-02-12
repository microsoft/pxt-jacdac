namespace modules {
    /**
     * A 3-axis gyroscope.
     **/
    //% fixedInstances blockGap=8
    export class GyroscopeClient extends jacdac.SensorClient<[number,number,number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_GYROSCOPE, role, "i12.20 i12.20 i12.20");
            
        }
    

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% group="Gyroscope" blockSetVariable=myModule
        //% blockCombine block="x" callInDebugger
        get x(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% group="Gyroscope" blockSetVariable=myModule
        //% blockCombine block="y" callInDebugger
        get y(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        }
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% group="Gyroscope" blockSetVariable=myModule
        //% blockCombine block="z" callInDebugger
        get z(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[2];
        } 

    }
    //% fixedInstance whenUsed
    export const gyroscope = new GyroscopeClient("gyroscope");
}