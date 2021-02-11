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
        //% blockId=jacdacarcadegamepad_101_0
        //% group="button"
        //% blockCombine block="button" callInDebugger
        get button(): ([ArcadeGamepadButton, number])[] {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

        /**
        * Indicates which buttons are currently active (pressed).
        * `pressure` should be `0xff` for digital buttons, and proportional for analog ones.
        */
        //% blockId=jacdacarcadegamepad_101_1
        //% group="pressure"
        //% blockCombine block="pressure" callInDebugger
        get pressure(): undefined {
            const values = this.values() as any[];
            return values && values.length > 0 && values[1];
        }

            
    }

    //% fixedInstance whenUsed
    export const arcadeGamepad = new ArcadeGamepadClient("arcade Gamepad");
}