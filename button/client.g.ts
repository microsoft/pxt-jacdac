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
        //% callInDebugger
        //% group="Button"
        //% block="%button pressed"
        //% blockId=jacdac_button_pressed___get
        //% weight=100
        pressed(): boolean {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return !!values[0];
        }
 

        /**
         * Emitted when button goes from inactive (`pressed == 0`) to active.
         */
        //% group="Button"
        //% blockId=jacdac_on_button_down
        //% block="on %button down"
        //% weight=99
        onDown(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Down, handler);
        }
        /**
         * Emitted when button goes from active (`pressed == 1`) to inactive.
         */
        //% group="Button"
        //% blockId=jacdac_on_button_up
        //% block="on %button up"
        //% weight=98
        onUp(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Up, handler);
        }
        /**
         * Emitted together with `up` when the press time was not longer than 500ms.
         */
        //% group="Button"
        //% blockId=jacdac_on_button_click
        //% block="on %button click"
        //% weight=97
        onClick(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Click, handler);
        }
        /**
         * Emitted after button is held for 500ms. Long click events are followed by a separate up event.
         */
        //% group="Button"
        //% blockId=jacdac_on_button_long_click
        //% block="on %button long click"
        //% weight=96
        onLongClick(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.LongClick, handler);
        }
        /**
         * Emitted after the button is held for 1500ms. Hold events are followed by a separate up event.
         */
        //% group="Button"
        //% blockId=jacdac_on_button_hold
        //% block="on %button hold"
        //% weight=95
        onHold(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Hold, handler);
        }
    
    }
    //% fixedInstance whenUsed
    export const button = new ButtonClient("button");
}