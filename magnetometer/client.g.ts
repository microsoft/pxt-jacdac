namespace modules {
    /**
     * A 3-axis magnetometer.
     **/
    //% fixedInstances blockGap=8
    export class MagnetometerClient extends jacdac.SensorClient<[number,number,number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_MAGNETOMETER, role, "i32 i32 i32");
            
        }
    

        /**
        * Indicates the current magnetic field on magnetometer.
        * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
        */
        //% group="Magnetometer" blockSetVariable=myModule
        //% blockCombine block="x" callInDebugger
        get x(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }
        /**
        * Indicates the current magnetic field on magnetometer.
        * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
        */
        //% group="Magnetometer" blockSetVariable=myModule
        //% blockCombine block="y" callInDebugger
        get y(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[1];
        }
        /**
        * Indicates the current magnetic field on magnetometer.
        * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
        */
        //% group="Magnetometer" blockSetVariable=myModule
        //% blockCombine block="z" callInDebugger
        get z(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[2];
        }     
     

    }
    //% fixedInstance whenUsed
    export const magnetometer = new MagnetometerClient("magnetometer");
}