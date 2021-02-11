namespace modules {
    //% fixedInstances
    export class TVOCClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_TVOC, role, "u22.10");
        }
    
        /**
        * Total volatile organic compound readings in parts per billion.
        */
        //% blockId=jacdactvoc101 block="%sensor tvoc"
        //% group="tVOC"
        get tVOC(): number {
            // tVOC
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const TVOC = new TVOCClient("TVOC");
}