namespace servers {
    const CODAL_BUTTON_COUNT = 16
    const CODAL_AXIS_COUNT = 6
    export class HIDJoystickServer extends jacdac.Server {
        constructor() {
            super(jacdac.SRV_HID_JOYSTICK)
        }

        start() {
            gamepad.setButton(0, false)
            super.start()
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.handleRegValue(
                pkt,
                jacdac.HidJoystickReg.ButtonCount,
                jacdac.HidJoystickRegPack.ButtonCount,
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
                jacdac.HidJoystickReg.AxisCount,
                jacdac.HidJoystickRegPack.AxisCount,
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
            const data = pkt.data
            if (data) {
                const n = Math.min(CODAL_BUTTON_COUNT, data.length)
                for (let i = 0; i < n; ++i) {
                    const p = data[i]
                    gamepad.setButton(i, p > 0 ? true : false)
                }
            }
            pkt.markHandled()
        }

        private handleSetAxis(pkt: jacdac.JDPacket) {
            const positions: [[number]] = pkt.jdunpack<[[[number]]]>(
                jacdac.HidJoystickCmdPack.SetAxis
            )[0]
            if (positions && positions.length >= 6) {
                // x0 x1 y0 y1 throttle rudder
                gamepad.move(
                    0,
                    Math.round(positions[0][0] * 0xff),
                    Math.round(positions[1][0] * 0xff)
                )
                gamepad.move(
                    1,
                    Math.round(positions[2][0] * 0xff),
                    Math.round(positions[3][0] * 0xff)
                )
                gamepad.setThrottle(0, Math.round(positions[4][0] * 32))
                gamepad.setThrottle(0, Math.round(positions[5][0] * 32))
            }
            pkt.markHandled()
        }
    }

    //% fixedInstance whenUsed weight=1 block="keyboard"
    export const hidJoystick = new HIDJoystickServer()
}
