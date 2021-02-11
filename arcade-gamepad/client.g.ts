namespace modules {
    /**
     * A gamepad with direction and action buttons for one player.
     **/
    //% fixedInstances blockGap=8
    export class ArcadeGamepadClient extends jacdac.SensorClient<[([ArcadeGamepadButton, number])[]]> {
            

            constructor(role: string) {
            super(jacdac.SRV_ARCADE_GAMEPAD, role, "r: u8 u0.8");
            
        }
    

        /**
        * Indicates which buttons are currently active (pressed).
        * `pressure` should be `0xff` for digital buttons, and proportional for analog ones.
        */
        //% group="Arcade Gamepad" blockSetVariable=myModule
        //% blockCombine block="button" callInDebugger
        get button(): ([ArcadeGamepadButton, number])[] {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Indicates which buttons are currently active (pressed).
        * `pressure` should be `0xff` for digital buttons, and proportional for analog ones.
        */
        //% group="Arcade Gamepad" blockSetVariable=myModule
        //% blockCombine block="pressure" callInDebugger
        get pressure(): undefined {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        } 

        /**
         * Emitted when button goes from inactive to active.
         */
        //% blockId=jacdac_on_arcadegamepad_down
        //% block="down" blockSetVariable=myModule
        //% group="Arcade Gamepad"
        onDown(handler: () => void) {
            this.registerEvent(jacdac.ArcadeGamepadEvent.Down, handler);
        }
        /**
         * Emitted when button goes from active to inactive.
         */
        //% blockId=jacdac_on_arcadegamepad_up
        //% block="up" blockSetVariable=myModule
        //% group="Arcade Gamepad"
        onUp(handler: () => void) {
            this.registerEvent(jacdac.ArcadeGamepadEvent.Up, handler);
        }
    }
    //% fixedInstance whenUsed
    export const arcadeGamepad = new ArcadeGamepadClient("arcade Gamepad");
}