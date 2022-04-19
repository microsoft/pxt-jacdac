namespace modules {
    /**
     * Controls a HID joystick.
     **/
    //% fixedInstances blockGap=8
    export class HidJoystickClient extends jacdac.Client {
        private readonly _buttonCount: jacdac.RegisterClient<[number]>
        private readonly _buttonsAnalog: jacdac.RegisterClient<[number]>
        private readonly _axisCount: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(jacdac.SRV_HID_JOYSTICK, role)

            this._buttonCount = this.addRegister<[number]>(
                jacdac.HidJoystickReg.ButtonCount,
                jacdac.HidJoystickRegPack.ButtonCount
            )
            this._buttonsAnalog = this.addRegister<[number]>(
                jacdac.HidJoystickReg.ButtonsAnalog,
                jacdac.HidJoystickRegPack.ButtonsAnalog
            )
            this._axisCount = this.addRegister<[number]>(
                jacdac.HidJoystickReg.AxisCount,
                jacdac.HidJoystickRegPack.AxisCount
            )
        }

        /**
         * Number of button report supported
         */
        //% callInDebugger
        //% group="HID Joystick"
        //% weight=100
        buttonCount(): number {
            this.start()
            const values = this._buttonCount.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * A bitset that indicates which button is analog.
         */
        //% callInDebugger
        //% group="HID Joystick"
        //% weight=99
        buttonsAnalog(): number {
            this.start()
            const values = this._buttonsAnalog.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Number of analog input supported
         */
        //% callInDebugger
        //% group="HID Joystick"
        //% weight=98
        axisCount(): number {
            this.start()
            const values = this._axisCount.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Sets the up/down button state, one byte per button, supports analog buttons. For digital buttons, use `0` for released, `1` for pressed.
         */
        //% group="HID Joystick"
        //% blockId=jacdac_hidjoystick_set_buttons_cmd
        //% block="%hidjoystick set buttons $pressure"
        //% weight=97
        setButtons(pressure: number[]): void {
            if (!pressure) return

            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.HidJoystickCmd.SetButtons,
                    jacdac.HidJoystickCmdPack.SetButtons,
                    [pressure.map(p => [p])]
                )
            )
        }

        /**
         * Sets the state of analog inputs.
         */
        //% group="HID Joystick"
        //% blockId=jacdac_hidjoystick_set_axis_cmd
        //% block="%hidjoystick set axis $position"
        //% weight=96
        setAxis(position: number[]): void {
            if (!position) return
            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.HidJoystickCmd.SetAxis,
                    jacdac.HidJoystickCmdPack.SetAxis,
                    [position.map(p => [p])]
                )
            )
        }
    }
    //% fixedInstance whenUsed weight=1 block="hid joystick1"
    export const hidJoystick1 = new HidJoystickClient("hid Joystick1")
}
