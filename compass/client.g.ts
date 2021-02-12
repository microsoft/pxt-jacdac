namespace modules {
    /**
     * A sensor that measures the heading.
     **/
    //% fixedInstances blockGap=8
    export class CompassClient extends jacdac.SensorClient<[number]> {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_COMPASS, role, "u16.16");

            this._enabled = this.addRegister<[boolean]>(jacdac.CompassReg.Enabled, "u8");            
        }
    

        /**
        * The heading with respect to the magnetic north.
        */
        //% blockId=jacdac_compass_heading___get
        //% group="Compass"
        //% block="%compass heading" callInDebugger
        heading(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Turn on or off the sensor. Turning on the sensor may start a calibration sequence.
        */
        //% blockId=jacdac_compass_enabled___get
        //% group="Compass"
        //% block="%compass enabled" callInDebugger
        enabled(): boolean {            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }
        /**
        * Turn on or off the sensor. Turning on the sensor may start a calibration sequence.
        */
        //% blockId=jacdac_compass_enabled___set
        //% group="Compass"
        //% block="set %compass %value=toggleOnOff"
        setEnabled(value: boolean) {
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

    }
    //% fixedInstance whenUsed
    export const compass = new CompassClient("compass");
}