namespace modules {
    //% fixedInstances
    export class MultitouchClient extends jacdac.SensorClient<[number[]]> {
        constructor(role: string) {
            super(jacdac.SRV_MULTITOUCH, role, "r: i32");
        }
    
        /**
        * Capacitance of channels. The capacitance is continuously calibrated, and a value of `0` indicates
        * no touch, wheres a value of around `100` or more indicates touch.
        * It's best to ignore this (unless debugging), and use events.
        */
        //% blockId=jacdacmultitouch101 block="%sensor capacity"
        //% group="capacity"
        get capacity(): number[] {
            // capacitance
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const multitouch = new MultitouchClient("multitouch");
}