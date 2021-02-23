namespace modules {
    /**
     * A gamepad with direction and action buttons for one player.
     **/
    //% fixedInstances blockGap=8
    export class ArcadeGamepadClient extends jacdac.SensorClient<[([jacdac.ArcadeGamepadButton, number])[]]> {

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
        pressure(): undefined {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * Indicates number of players supported and which buttons are present on the controller.
        */
        //% callInDebugger
        //% group="Button"
        button(): jacdac.ArcadeGamepadButton[] {
            this.start();            
            const values = this._availableButtons.pauseUntilValues() as any[];
            return values[0];
        }
 

        /**
         * Emitted when button goes from inactive to active.
         */
        //% blockId=jacdac_on_arcadegamepad_down
        //% block="down" blockSetVariable=myModule
        //% group="Button"
        onDown(handler: () => void) {
            this.registerEvent(jacdac.ArcadeGamepadEvent.Down, handler);
        }
        /**
         * Emitted when button goes from active to inactive.
         */
        //% blockId=jacdac_on_arcadegamepad_up
        //% block="up" blockSetVariable=myModule
        //% group="Button"
        onUp(handler: () => void) {
            this.registerEvent(jacdac.ArcadeGamepadEvent.Up, handler);
        }
    }
    //% fixedInstance whenUsed
    export const arcadeGamepad = new ArcadeGamepadClient("arcade Gamepad");
}