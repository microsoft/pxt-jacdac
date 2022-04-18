namespace servers {
    const CODAL_BUTTON_COUNT = 16
    const CODAL_AXIS_COUNT = 6
    export class HIDJoystickServer extends jacdac.Server {
        constructor() {
            super(jacdac.SRV_HID_JOYSTICK)
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.handleRegValue(
                pkt,
                jacdac.HidJoystickReg.ButtonsCount,
                jacdac.HidJoystickRegPack.ButtonsCount,
                CODAL_BUTTON_COUNT
            )
            this.handleRegValue(
                pkt,
                jacdac.HidJoystickReg.ButtonsAnalog,
                jacdac.HidJoystickRegPack.ButtonsAnalog,
                0
            )
            this.handleRegValue(
                pkt,
                jacdac.HidJoystickReg.AxisAvailable,
                jacdac.HidJoystickRegPack.AxisAvailable,
                CODAL_AXIS_COUNT
            )

            if (pkt.isCommand)
                switch (pkt.serviceCommand) {
                    case jacdac.HidJoystickCmd.SetButtons:
                        this.handleSetButtons(pkt)
                        break
                    case jacdac.HidJoystickCmd.SetAxis:
                        this.handleSetAxis(pkt)
                        break
                }
        }

        private handleSetButtons(pkt: jacdac.JDPacket) {
            pkt.markHandled()
            const pressure: number[] = pkt.jdunpack(
                jacdac.HidJoystickCmdPack.SetButtons
            )[0]
            if (pressure) {
                const n = Math.min(CODAL_BUTTON_COUNT, pressure.length)
                for (let i = 0; i < n; ++i)
                    gamepad.setButton(i, pressure[i] > 0 ? true : false)
            }
        }

        private handleSetAxis(pkt: jacdac.JDPacket) {
            pkt.markHandled()
            const positions: number[] = pkt.jdunpack(
                jacdac.HidJoystickCmdPack.SetAxis
            )
            if (positions && positions.length >= 6) {
                // x0 x1 y0 y1 throttle rudder
                gamepad.move(
                    0,
                    Math.round(positions[0] * 0xff),
                    Math.round(positions[1] * 0xff)
                )
                gamepad.move(
                    1,
                    Math.round(positions[2] * 0xff),
                    Math.round(positions[3] * 0xff)
                )
                gamepad.setThrottle(0, Math.round(positions[4] * 32))
                gamepad.setThrottle(0, Math.round(positions[5] * 32))
            }
        }
    }

    //% fixedInstance whenUsed weight=1 block="keyboard"
    export const hidJoystick = new HIDJoystickServer()
}
