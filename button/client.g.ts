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
        //% blockId=jacdac_button_pressed___get
        //% group="Button"
        //% block="%button pressed" callInDebugger
        pressed(): boolean {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return !!values[0];
        } 

        /**
         * Emitted when button goes from inactive (`pressed == 0`) to active.
         */
        //% blockId=jacdac_on_button_down
        //% block="down" blockSetVariable=myModule
        //% group="Button"
        onDown(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.Down, handler);
        }
        /**
         * Emitted when button goes from active (`pressed == 1`) to inactive.
         */
        //% blockId=jacdac_on_button_up
        //% block="up" blockSetVariable=myModule
        //% group="Button"
        onUp(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.Up, handler);
        }
        /**
         * Emitted together with `up` when the press time was not longer than 500ms.
         */
        //% blockId=jacdac_on_button_click
        //% block="click" blockSetVariable=myModule
        //% group="Button"
        onClick(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.Click, handler);
        }
        /**
         * Emitted after button is held for 500ms. Long click events are followed by a separate up event.
         */
        //% blockId=jacdac_on_button_long_click
        //% block="long click" blockSetVariable=myModule
        //% group="Button"
        onLongClick(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.LongClick, handler);
        }
        /**
         * Emitted after the button is held for 1500ms. Hold events are followed by a separate up event.
         */
        //% blockId=jacdac_on_button_hold
        //% block="hold" blockSetVariable=myModule
        //% group="Button"
        onHold(handler: () => void) {
            this.registerEvent(jacdac.ButtonEvent.Hold, handler);
        }
    }
    //% fixedInstance whenUsed
    export const button = new ButtonClient("button");
}