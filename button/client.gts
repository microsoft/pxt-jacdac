namespace modules {
    /**
     * A push-button, which returns to inactive position when not operated anymore.
     **/
    //% fixedInstances blockGap=8
    export class ButtonClient extends jacdac.SimpleSensorClient {

        private readonly _analog : jacdac.RegisterClient<[boolean]>;            

        constructor(role: string) {
            super(jacdac.SRV_BUTTON, role, "u0.16");

            this._analog = this.addRegister<[boolean]>(jacdac.ButtonReg.Analog, "u8");            
        }
    

        /**
        * Indicates the pressure state of the button, where `0` is open.
        */
        //% callInDebugger
        //% group="Button"
        //% block="%button pressure"
        //% blockId=jacdac_button_pressure___get
        //% weight=100
        pressure(): number {
            return this.reading() * 100;
        
        }

        /**
        * Indicates if the button provides analog `pressure` readings.
        */
        //% callInDebugger
        //% group="Button"
        //% weight=99
        analog(): boolean {
            this.start();            
            const values = this._analog.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Determines if the button is pressed currently.
        * 
        * If the event `down` is observed, `pressed` is true; if `up` or `hold` are observed, `pressed` is false.
        * To initialize, wait for any event or timeout to `pressed` is true after 750ms (1.5x hold time).
        */
        //% callInDebugger
        //% group="Button"
        //% weight=98
        pressed(): boolean {
            // TODO: implement client register
            throw "client register not implement";
        }

        /**
         * Run code when the pressure changes by the given threshold value.
        */
        //% group="Button"
        //% blockId=jacdac_button_on_pressure_change
        //% block="on %button pressure changed by %threshold"
        //% weight=97
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onPressureChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler);
        }

        /**
         * Emitted when button goes from inactive to active.
         */
        //% group="Button"
        //% blockId=jacdac_on_button_down
        //% block="on %button down"
        //% weight=96
        onDown(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Down, handler);
        }
        /**
         * Emitted when button goes from active to inactive. The 'time' parameter
        * records the amount of time between the down and up events.
         */
        //% group="Button"
        //% blockId=jacdac_on_button_up
        //% block="on %button up"
        //% weight=95
        onUp(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Up, handler);
        }
        /**
         * Emitted when the press time is greater than 500ms, and then at least every 500ms
        * as long as the button remains pressed. The 'time' parameter records the the amount of time
        * that the button has been held (since the down event).
         */
        //% group="Button"
        //% blockId=jacdac_on_button_hold
        //% block="on %button hold"
        //% weight=94
        onHold(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Hold, handler);
        }
    
    }
    //% fixedInstance whenUsed block="button1"
    export const button1 = new ButtonClient("button1");
}