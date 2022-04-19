namespace modules {
    /**
     * Controls a HID joystick.
     **/
    //% fixedInstances blockGap=8
    export class HidJoystickClient extends jacdac.Client {
        private readonly _buttonCount: jacdac.RegisterClient<[number]>
        private readonly _buttonsAnalog: jacdac.RegisterClient<[number]>
        private readonly _axisCount: jacdac.RegisterClient<[number]>

        private buttons: number[] = []
        private axis: number[] = []

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
         * Sets the state of a buttons
         */
        //% group="HID Joystick"
        //% blockId=jacdac_hidjoystick_set_buttons_cmd
        //% block="set %hidjoystick button $index to $down"
        //% weight=99
        //% index.min=0
        //% index.max=32
        //% down.shadow=toggleUpDown
        setButton(index: number, down: boolean) {
            index = index | 0
            if (index < 0) return
            const n = this.buttonCount()
            if (isNaN(n) || index >= n) return
            // grow as needed
            while (index >= this.buttons.length) this.buttons.push(0)
            // send to hid
            this.buttons[index] = down ? 99 : 0
            this.syncButtons()
        }

        /**
         * Sets the pressure of all buttons in %
         */
        //% group="HID Joystick"
        //% blockId=jacdac_hidjoystick_set_all_buttons_cmd
        //% block="set %hidjoystick all buttons to $pressure"
        //% weight=97
        setAllButtons(pressure: number[]): void {
            if (!pressure) return
            const n = this.buttonCount()
            if (isNaN(n)) return
            this.buttons = pressure.slice(0, Math.min(n, pressure.length))
            this.syncButtons()
        }

        private syncButtons() {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.HidJoystickCmd.SetButtons,
                    jacdac.HidJoystickCmdPack.SetButtons,
                    [this.buttons.map(p => [Math.clamp(0, 1, p / 100.0)])]
                )
            )
        }

        /**
         * Sets the state of an axis in -100%,100%
         */
        //% group="HID Joystick"
        //% blockId=jacdac_hidjoystick_set_buttons_cmd
        //% block="set %hidjoystick axis $index to $position"
        //% weight=99
        //% position.min=-100
        //% position.max=100
        setAxis(index: number, position: number) {
            index = index | 0
            if (index < 0) return
            const n = this.axisCount()
            if (isNaN(n) || index >= n) return
            // grow as needed
            while (index >= this.axis.length) this.axis.push(0)
            this.axis[index] = position
            this.syncAxis()
        }

        /**
         * Sets the state of analog inputs in -100%,100%.
         */
        //% group="HID Joystick"
        //% blockId=jacdac_hidjoystick_set_all_axis_cmd
        //% block="set %hidjoystick all axis to $position"
        //% weight=96
        setAllAxis(position: number[]): void {
            if (!position) return
            const n = this.axisCount()
            if (isNaN(n)) return
            this.axis = position.slice(0, Math.min(n, position.length))
            this.syncAxis()
        }

        private syncAxis() {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.HidJoystickCmd.SetAxis,
                    jacdac.HidJoystickCmdPack.SetAxis,
                    [this.axis.map(p => [Math.clamp(-1, 1, p / 100.0)])]
                )
            )
        }

        /**
         * Clears the joystick state
         */
        //% group="HID Joystick"
        //% blockId=jacdac_hidjoystick_clear
        //% block="clear %hidjoystick"
        //% weight=98
        clear() {
            this.buttons = []
            this.axis = []
            this.syncButtons()
            this.syncAxis()
        }
    }
    //% fixedInstance whenUsed weight=1 block="hid joystick1"
    export const hidJoystick1 = new HidJoystickClient("hid Joystick1")
}
