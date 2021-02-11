namespace modules {
    //% fixedInstances
    export class ButtonClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_BUTTON, role, "u8");
        }
    
        /**
        * Indicates whether the button is currently active (pressed).
        */
        //% blockId=jacdacbutton101 block="%sensor pressed"
        //% group="pressed"
        get pressed(): number {
            // pressed
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const button = new ButtonClient("button");
}