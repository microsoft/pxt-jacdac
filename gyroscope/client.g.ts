namespace modules {
    /**
     * A 3-axis gyroscope.
     **/
    //% fixedInstances blockGap=8
    export class GyroscopeClient extends jacdac.SensorClient<[number,number,number]> {
        constructor(role: string) {
            super(jacdac.SRV_GYROSCOPE, role, "i16.16 i16.16 i16.16");
        }
    
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdacgyroscope_101_0
        //% group="x" blockSetVariable=myModule
        //% blockCombine block="x" callInDebugger
        get x(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdacgyroscope_101_1
        //% group="y" blockSetVariable=myModule
        //% blockCombine block="y" callInDebugger
        get y(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[1];
        }

        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdacgyroscope_101_2
        //% group="z" blockSetVariable=myModule
        //% blockCombine block="z" callInDebugger
        get z(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[2];
        }

            
    }

    //% fixedInstance whenUsed
    export const gyroscope = new GyroscopeClient("gyroscope");
}