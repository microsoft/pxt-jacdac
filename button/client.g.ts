namespace modules {
    /**
     * A push-button, which returns to inactive position when not operated anymore.
     **/
    //% fixedInstances blockGap=8
    export class ButtonClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_BUTTON, role, "u8");
        }
    
        /**
        * Indicates whether the button is currently active (pressed).
        */
        //% blockId=jacdacbutton_101_0
        //% group="Button" blockSetVariable=myModule
        //% blockCombine block="pressed" callInDebugger
        get pressed(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const button = new ButtonClient("button");
}