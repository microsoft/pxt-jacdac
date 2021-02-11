namespace modules {
    /**
     * A sensor that measures the heading.
     **/
    //% fixedInstances blockGap=8
    export class CompassClient extends jacdac.SensorClient<[number]> {

            private readonly _enabled : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_COMPASS, role, "u16.16");

            this._enabled = this.addRegister(jacdac.CompassReg.Enabled, "u8");            
        }
    

        /**
        * The heading with respect to the magnetic north.
        */
        //% group="Compass" blockSetVariable=myModule
        //% blockCombine block="heading" callInDebugger
        get heading(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }
        /**
        * Turn on or off the sensor. Turning on the sensor may start a calibration sequence.
        */
        //% group="Compass" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        get enabled(): number {
            const values = this._enabled.values() as any[];
            return values && values.length > 0 && values[0];
        }     

        /**
        * Turn on or off the sensor. Turning on the sensor may start a calibration sequence.
        */
        //% group="Compass" blockSetVariable=myModule
        //% blockCombine block="enabled" callInDebugger
        set enabled(value: number) {
            const values = this._enabled.values() as any[];
            values[0] = value;
            this._enabled.setValues(values as [number]);
        }     

    }
    //% fixedInstance whenUsed
    export const compass = new CompassClient("compass");
}