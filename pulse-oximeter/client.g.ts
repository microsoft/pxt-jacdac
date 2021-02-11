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
        //% blockId=jacdacpulseoximeter_101_0
        //% group="oxygen"
        //% blockCombine block="oxygen" callInDebugger
        get oxygen(): number {
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const pulseOximeter = new PulseOximeterClient("pulse Oximeter");
}