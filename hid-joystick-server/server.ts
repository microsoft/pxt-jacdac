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
            for (let i = 0; i < CODAL_BUTTON_COUNT; ++i) {
                const p = data[i] || 0
                gamepad.setButton(i, p > 127 ? true : false)
            }
            pkt.markHandled()
        }

        private handleSetAxis(pkt: jacdac.JDPacket) {
            const positions: number[][] = pkt.jdunpack<number[][][]>(
                jacdac.HidJoystickCmdPack.SetAxis
            )[0]
            const pos = positions.map(p => p[0])
            // x0 x1 y0 y1 throttle rudder
            // -1..1 -> -127..127
            gamepad.move(
                0,
                Math.round((pos[0] || 0) * 127),
                Math.round((pos[1] || 0) * 127)
            )
            gamepad.move(
                1,
                Math.round((pos[2] || 0) * 127),
                Math.round((pos[3] || 0) * 127)
            )
            // -1..1 -> 0..31
            gamepad.setThrottle(0, Math.round(((pos[4] || 0) + 1) * 16))
            gamepad.setThrottle(1, Math.round(((pos[5] || 0) + 1) * 16))
            pkt.markHandled()
        }
    }

    //% fixedInstance whenUsed weight=1 block="keyboard"
    export const hidJoystick = new HIDJoystickServer()
}
