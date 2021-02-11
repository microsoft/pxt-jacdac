namespace modules {
    /**
     * A sensor approximating the oxygen level. 
     * 
     * **Jacdac is not suitable for medical devices and should NOT be used in any kind of device to diagnose or treat any medical conditions.**
     **/
    //% fixedInstances blockGap=8
    export class PulseOximeterClient extends jacdac.SensorClient<[number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_PULSE_OXIMETER, role, "u8.8");
            
        }
    

        /**
        * The estimated oxygen level in blood.
        */
        //% group="Pulse Oximeter" blockSetVariable=myModule
        //% blockCombine block="oxygen" callInDebugger
        get oxygen(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[0];
        } 

    }
    //% fixedInstance whenUsed
    export const pulseOximeter = new PulseOximeterClient("pulse Oximeter");
}