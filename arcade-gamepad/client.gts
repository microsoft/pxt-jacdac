namespace modules {
    /**
     * This service is deprecated in favor of `gamepad` (although it is currently used by the micro:bit Arcade smart shield).
     * A gamepad with direction and action buttons for one player.
     * If a device has multiple controllers, it should have multiple gamepad services, using consecutive service identifiers.
     **/
    //% fixedInstances blockGap=8
    export class ArcadeGamepadClient extends jacdac.SensorClient {

        private readonly _availableButtons : jacdac.RegisterClient<[jacdac.ArcadeGamepadButton[]]>;            

        constructor(role: string) {
            super(jacdac.SRV_ARCADE_GAMEPAD, role, "r: u8 u0.8");

            this._availableButtons = this.addRegister<[jacdac.ArcadeGamepadButton[]]>(jacdac.ArcadeGamepadReg.AvailableButtons, "r: u8");            
        }
    

        /**
        * Indicates which buttons are currently active (pressed).
        * `pressure` should be `0xff` for digital buttons, and proportional for analog ones.
        */
        //% callInDebugger
        //% group="Button"
        //% block="%arcadegamepad button"
        //% blockId=jacdac_arcadegamepad_buttons_button_get
        //% weight=100
        button(): ([jacdac.ArcadeGamepadButton, number])[] {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Indicates which buttons are currently active (pressed).
        * `pressure` should be `0xff` for digital buttons, and proportional for analog ones.
        */
        //% callInDebugger
        //% group="Button"
        //% block="%arcadegamepad pressure"
        //% blockId=jacdac_arcadegamepad_buttons_pressure_get
        //% weight=99
        pressure(): undefined {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1] * 100;
        }

        /**
        * Indicates number of players supported and which buttons are present on the controller.
        */
        //% callInDebugger
        //% group="Button"
        //% weight=98
        availableButtonsButton(): jacdac.ArcadeGamepadButton[] {
            this.start();            
            const values = this._availableButtons.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Button"
        //% blockId=jacdac_on_arcadegamepad_event
        //% block="on %arcadegamepad %event"
        //% weight=97
        onEvent(ev: jacdac.ArcadeGamepadEvent, handler: () => void): void {
            this.registerEvent(ev, handler);
        }

        /**
         * Emitted when button goes from inactive to active.
         */
        //% group="Button"
        //% weight=96
        onDown(handler: () => void): void {
            this.registerEvent(jacdac.ArcadeGamepadEvent.Down, handler);
        }
        /**
         * Emitted when button goes from active to inactive.
         */
        //% group="Button"
        //% weight=95
        onUp(handler: () => void): void {
            this.registerEvent(jacdac.ArcadeGamepadEvent.Up, handler);
        }
    
    }
    //% fixedInstance whenUsed weight=1 block="arcade gamepad1"
    export const arcadeGamepad1 = new ArcadeGamepadClient("arcade Gamepad1");
}