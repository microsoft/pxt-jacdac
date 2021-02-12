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
        //% blockId=jacdac_magnetomer_forces_x_get
        //% group="Magnetometer"
        //% block="%magnetomer x" callInDebugger
        x(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Indicates the current magnetic field on magnetometer.
        * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
        */
        //% blockId=jacdac_magnetomer_forces_y_get
        //% group="Magnetometer"
        //% block="%magnetomer y" callInDebugger
        y(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        }
        /**
        * Indicates the current magnetic field on magnetometer.
        * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
        */
        //% blockId=jacdac_magnetomer_forces_z_get
        //% group="Magnetometer"
        //% block="%magnetomer z" callInDebugger
        z(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[2];
        } 

    }
    //% fixedInstance whenUsed
    export const magnetometer = new MagnetometerClient("magnetometer");
}