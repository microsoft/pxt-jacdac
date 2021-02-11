namespace modules {
    /**
     * A capacitive touch sensor with multiple inputs.
     **/
    //% fixedInstances blockGap=8
    export class MultitouchClient extends jacdac.SensorClient<[number[]]> {
        constructor(role: string) {
            super(jacdac.SRV_MULTITOUCH, role, "r: i32");
        }
    
        /**
        * Capacitance of channels. The capacitance is continuously calibrated, and a value of `0` indicates
        * no touch, wheres a value of around `100` or more indicates touch.
        * It's best to ignore this (unless debugging), and use events.
        */
        //% blockId=jacdacmultitouch_101_0
        //% group="Multitouch" blockSetVariable=myModule
        //% blockCombine block="capacitance" callInDebugger
        get capacitance(): number[] {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const multitouch = new MultitouchClient("multitouch");
}