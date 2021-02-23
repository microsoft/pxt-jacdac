namespace modules {
    /**
     * A 3-axis magnetometer.
     **/
    //% fixedInstances blockGap=8
    export class MagnetometerClient extends jacdac.SensorClient<[number,number,number]> {

            private readonly _forcesError : jacdac.RegisterClient<[number,number,number]>;            

            constructor(role: string) {
            super(jacdac.SRV_MAGNETOMETER, role, "i32 i32 i32");

            this._forcesError = this.addRegister<[number,number,number]>(jacdac.MagnetometerReg.ForcesError, "i32 i32 i32");            
        }
    

        /**
        * Indicates the current magnetic field on magnetometer.
        * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
        */
        //% callInDebugger
        //% group="Magnetometer"
        //% block="%magnetomer x"
        //% blockId=jacdac_magnetomer_forces_x_get
        x(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Indicates the current magnetic field on magnetometer.
        * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
        */
        //% callInDebugger
        //% group="Magnetometer"
        //% block="%magnetomer y"
        //% blockId=jacdac_magnetomer_forces_y_get
        y(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * Indicates the current magnetic field on magnetometer.
        * For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
        */
        //% callInDebugger
        //% group="Magnetometer"
        //% block="%magnetomer z"
        //% blockId=jacdac_magnetomer_forces_z_get
        z(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[2];
        }

        /**
        * Error on the readings.
        */
        //% callInDebugger
        //% group="Magnetometer"
        x(): number {
            this.start();            
            const values = this._forcesError.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Error on the readings.
        */
        //% callInDebugger
        //% group="Magnetometer"
        y(): number {
            this.start();            
            const values = this._forcesError.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * Error on the readings.
        */
        //% callInDebugger
        //% group="Magnetometer"
        z(): number {
            this.start();            
            const values = this._forcesError.pauseUntilValues() as any[];
            return values[2];
        }
 

    }
    //% fixedInstance whenUsed
    export const magnetometer = new MagnetometerClient("magnetometer");
}