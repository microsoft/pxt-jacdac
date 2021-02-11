namespace modules {
    /**
     * A thermometer measuring outside or inside environment.
     **/
    //% fixedInstances blockGap=8
    export class ThermometerClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_THERMOMETER, role, "i22.10");
        }
    
        /**
        * The temperature.
        */
        //% blockId=jacdacthermometer_101_0
        //% group="temperature" blockSetVariable=myModule
        //% blockCombine block="temperature" callInDebugger
        get temperature(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const thermometer = new ThermometerClient("thermometer");
}