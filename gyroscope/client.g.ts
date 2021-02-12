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
        //% blockId=jacdac_gyroscope_rotation_rates_x_get
        //% group="Movement"
        //% block="%gyroscope x" callInDebugger
        x(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdac_gyroscope_rotation_rates_y_get
        //% group="Movement"
        //% block="%gyroscope y" callInDebugger
        y(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        }
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdac_gyroscope_rotation_rates_z_get
        //% group="Movement"
        //% block="%gyroscope z" callInDebugger
        z(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[2];
        } 

    }
    //% fixedInstance whenUsed
    export const gyroscope = new GyroscopeClient("gyroscope");
}