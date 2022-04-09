namespace servers {
    const SRV_DOT_MATRIX = 0x110d154b
    enum DotMatrixReg {
        Dots = 0x2,
        Brightness = 0x1,
        Rows = 0x181,
        Columns = 0x182,
        Variant = 0x107,
    }
    enum DotMatrixVariant { // uint8_t
        LED = 0x1,
        Braille = 0x2,
    }
    export class ScreenServer extends jacdac.Server {
        constructor() {
            super(SRV_DOT_MATRIX)
        }

        handlePacket(packet: jacdac.JDPacket) {
            const regCode = packet.regCode

            if (regCode == DotMatrixReg.Dots) {
                if (packet.isRegSet) {
                    let x = 0,
                        y = 0
                    for (let i = 0; i < 25; i++) {
                        const byte = Math.floor(i / 5)
                        const bit = 1 << (i - byte * 5)
                        if (packet.data[byte] & bit) led.plot(x, y)
                        else led.unplot(x, y)
                        x++
                        if (x == 5) {
                            x = 0
                            y++
                        }
                    }
                } else {
                    let x = 0,
                        y = 0
                    const buf = Buffer.create(5)
                    for (let i = 0; i < 25; i++) {
                        if (led.point(x, y)) {
                            const byte = Math.floor(i / 5)
                            const bit = 1 << (i - byte * 5)
                            buf[byte] |= bit
                        }
                        x++
                        if (x == 5) {
                            x = 0
                            y++
                        }
                    }
                    this.handleRegBuffer(packet, packet.regCode, buf)
                }
            } else if (
                regCode == DotMatrixReg.Columns ||
                regCode == DotMatrixReg.Rows
            ) {
                this.handleRegValue(packet, regCode, "u16", 5)
            } else if (regCode == DotMatrixReg.Brightness) {
                const b = this.handleRegValue(
                        packet,
                        regCode,
                        "u0.8",
                        led.brightness() / 255.0
                    )
                if (packet.isRegSet)
                    led.setBrightness(b * 0xff)
            } else if (regCode === DotMatrixReg.Variant) {
                this.handleRegValue(packet, regCode, "u8", DotMatrixVariant.LED)
            } else {
                packet.possiblyNotImplemented()
            }
        }
    }

    //% fixedInstance whenUsed block="screen"
    export const screenServer = new ScreenServer()
}
