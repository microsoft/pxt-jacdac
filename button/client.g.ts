namespace modules {
    /**
     * A push-button, which returns to inactive position when not operated anymore.
     **/
    //% fixedInstances blockGap=8
    export class ButtonClient extends jacdac.SensorClient<[boolean]> {
            

            constructor(role: string) {
            super(jacdac.SRV_BUTTON, role, "u8");
            
        }
    

        /**
        * Indicates whether the button is currently active (pressed).
        */
        //% group="Button" blockSetVariable=myModule
        //% blockCombine block="pressed" callInDebugger
        get pressed(): boolean {
            const values = this.values() as any[];
            return !!values[0];
        } 

        /**
         * Emitted when button goes from inactive (`pressed == 0`) to active.
         */
        //% block="down" blockSetVariable=myModule
        //% group="Button" blockCombine
        onDown(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.Down, handler);
        }
        /**
         * Emitted when button goes from active (`pressed == 1`) to inactive.
         */
        //% block="up" blockSetVariable=myModule
        //% group="Button" blockCombine
        onUp(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.Up, handler);
        }
        /**
         * Emitted together with `up` when the press time was not longer than 500ms.
         */
        //% block="click" blockSetVariable=myModule
        //% group="Button" blockCombine
        onClick(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.Click, handler);
        }
        /**
         * Emitted together with `up` when the press time was more than 500ms.
         */
        //% block="long click" blockSetVariable=myModule
        //% group="Button" blockCombine
        onLongClick(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.LongClick, handler);
        }
        /**
         * Emitted after the button is held for 1500ms. Hold events are followed by a separate up event.
         */
        //% block="hold" blockSetVariable=myModule
        //% group="Button" blockCombine
        onHold(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.Hold, handler);
        }
    }
    //% fixedInstance whenUsed
    export const button = new ButtonClient("button");
}