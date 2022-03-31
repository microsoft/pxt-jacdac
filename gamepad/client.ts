namespace modules {
    /**
     * A two axis directional joystick
     **/
    //% fixedInstances blockGap=8
    export class GamepadClient extends jacdac.SensorClient {
        private readonly _variant: jacdac.RegisterClient<
            [jacdac.GamepadVariant]
        >
        private readonly _buttonsAvailable: jacdac.RegisterClient<
            [jacdac.GamepadButtons]
        >

        constructor(role: string) {
            super(jacdac.SRV_GAMEPAD, role, "u32 i1.15 i1.15")

            this._variant = this.addRegister<[jacdac.GamepadVariant]>(
                jacdac.GamepadReg.Variant,
                "u8"
            )
            this._buttonsAvailable = this.addRegister<[jacdac.GamepadButtons]>(
                jacdac.GamepadReg.ButtonsAvailable,
                "u32"
            )
        }

        /**
         * If the joystick is analog, the directional buttons should be "simulated", based on joystick position
         * (`Left` is `{ x = -1, y = 0 }`, `Up` is `{ x = 0, y = -1}`).
         * If the joystick is digital, then each direction will read as either `-1`, `0`, or `1` (in fixed representation).
         * The primary button on the joystick is `A`.
         */
        //% callInDebugger
        //% group="Button"
        //% weight=100
        buttons(): jacdac.GamepadButtons {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * If the joystick is analog, the directional buttons should be "simulated", based on joystick position
         * (`Left` is `{ x = -1, y = 0 }`, `Up` is `{ x = 0, y = -1}`).
         * If the joystick is digital, then each direction will read as either `-1`, `0`, or `1` (in fixed representation).
         * The primary button on the joystick is `A`.
         */
        //% callInDebugger
        //% group="Button"
        //% block="%joystick x"
        //% blockId=jacdac_joystick_direction_x_get
        //% weight=99
        x(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[1] * 100
        }

        /**
         * If the joystick is analog, the directional buttons should be "simulated", based on joystick position
         * (`Left` is `{ x = -1, y = 0 }`, `Up` is `{ x = 0, y = -1}`).
         * If the joystick is digital, then each direction will read as either `-1`, `0`, or `1` (in fixed representation).
         * The primary button on the joystick is `A`.
         */
        //% callInDebugger
        //% group="Button"
        //% block="%joystick y"
        //% blockId=jacdac_joystick_direction_y_get
        //% weight=98
        y(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[2] * 100
        }

        /**
         * Indicates if the button (or combination of) is down.
         * @param button
         * @returns true if selected buttons are down
         */
        //% callInDebugger
        //% group="Button"
        //% block="%joystick is button $button down"
        //% blockId=jacdac_joystick_direction_buttons_is_down
        //% weight=100
        isButtonDown(button: jacdac.GamepadButtons): boolean {
            const buttons = this.buttons()
            return (buttons & button) == button
        }

        /**
         * The type of physical joystick.
         */
        //% callInDebugger
        //% group="Button"
        //% weight=97
        variant(): jacdac.GamepadVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Indicates a bitmask of the buttons that are mounted on the joystick.
         * If the `Left`/`Up`/`Right`/`Down` buttons are marked as available here, the joystick is digital.
         * Even when marked as not available, they will still be simulated based on the analog joystick.
         */
        //% callInDebugger
        //% group="Button"
        //% weight=96
        buttonsAvailable(): jacdac.GamepadButtons {
            this.start()
            const values = this._buttonsAvailable.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Button"
        //% blockId=jacdac_on_gamepad_event
        //% block="on %gamepad %event"
        //% weight=95
        onEvent(ev: jacdac.GamepadEvent, handler: () => void): void {
            this.onEvent(ev, handler)
        }

        /**
         * Emitted whenever the state of buttons changes.
         */
        //% group="Button"
        //% weight=94
        onButtonsChanged(handler: () => void): void {
            this.registerEvent(jacdac.GamepadEvent.ButtonsChanged, handler)
        }
    }
    //% fixedInstance whenUsed block="gamepad1"
    export const gamepad1 = new GamepadClient("gamepad1")
}
