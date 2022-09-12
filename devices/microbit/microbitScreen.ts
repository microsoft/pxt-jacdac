namespace servers {
    export class ScreenServer extends jacdac.Server {
        constructor() {
            super(jacdac.SRV_DOT_MATRIX)
        }

        handlePacket(packet: jacdac.JDPacket) {
            const regCode = packet.regCode

            if (regCode == jacdac.DotMatrixReg.Dots) {
                if (packet.isRegSet) {
                    let x = 0,
                        y = 0
                    for (let i = 0; i < 25; i++) {
                        const byte = Math.floor(i / 5)
                        const bit = 1 << (i - byte * 5)
                        if (packet.data[byte] & bit) led.plot(y, x)
                        else led.unplot(y, x)
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
                        if (led.point(y, x)) {
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
                regCode == jacdac.DotMatrixReg.Columns ||
                regCode == jacdac.DotMatrixReg.Rows
            ) {
                this.handleRegValue(packet, regCode, jacdac.DotMatrixRegPack.Columns, 5)
            } else if (regCode == jacdac.DotMatrixReg.Brightness) {
                const b = this.handleRegValue(
                    packet,
                    regCode,
                    jacdac.DotMatrixRegPack.Brightness,
                    led.brightness() / 255.0
                )
                if (packet.isRegSet) led.setBrightness(b * 0xff)
            } else if (regCode === jacdac.DotMatrixReg.Variant) {
                this.handleRegValue(
                    packet,
                    regCode,
                    jacdac.DotMatrixRegPack.Variant,
                    jacdac.DotMatrixVariant.LED
                )
            } else if (packet.regCode === jacdac.DotMatrixReg.Brightness) {
                const b = led.brightness() / 255.0
                const nb = this.handleRegValue(
                    packet,
                    packet.regCode,
                    jacdac.DotMatrixRegPack.Brightness,
                    b
                )
                if (b !== nb) led.setBrightness(nb << 8)
            } else {
                packet.possiblyNotImplemented()
            }
        }
    }

    //% fixedInstance whenUsed block="screen"
    export const screenServer = new ScreenServer()
}
