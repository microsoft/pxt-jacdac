namespace modules {
    /**
     * A power-provider service.
     **/
    //% fixedInstances blockGap=8
    export class PowerClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_POWER, role, "u16");
        }
    
        /**
        * Present current draw from the bus.
        */
        //% blockId=jacdacpower_101_0
        //% group="current_draw"
        //% blockCombine block="current_draw" callInDebugger
        get currentDraw(): number {
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const power = new PowerClient("power");
}