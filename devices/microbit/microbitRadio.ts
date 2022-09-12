namespace servers {
    export class RadioServer extends jacdac.Server {
        enabled = true
        group = 1
        transmissionPower = 6

        constructor() {
            super(jacdac.SRV_BIT_RADIO)
        }

        start() {
            super.start()
            radio.setGroup(this.group)
            radio.setTransmitPower(this.transmissionPower)
            radio.onReceivedBuffer(buf => this.handleReceivedBuffer(buf))
            radio.onReceivedString(str => this.handleReceivedString(str))
            radio.onReceivedNumber(value =>
                this.handleReceivedNumber("", value)
            )
            radio.onReceivedValue((name, value) =>
                this.handleReceivedNumber(name, value)
            )
        }

        public handlePacket(pkt: jacdac.JDPacket) {
            // registers
            const oldEnabled = this.enabled
            this.enabled = this.handleRegBool(
                pkt,
                jacdac.BitRadioReg.Enabled,
                this.enabled
            )
            if (oldEnabled != this.enabled) {
                if (!this.enabled) radio.off()
                else radio.on()
            }

            const oldGroup = this.group
            this.group = this.handleRegValue(
                pkt,
                jacdac.BitRadioReg.Group,
                jacdac.BitRadioRegPack.Group,
                this.group
            )
            if (oldGroup !== this.group) radio.setGroup(this.group)
            const oldTransmissionPower = this.transmissionPower
            this.transmissionPower = this.handleRegValue(
                pkt,
                jacdac.BitRadioReg.TransmissionPower,
                jacdac.BitRadioRegPack.TransmissionPower,
                this.transmissionPower
            )
            if (oldTransmissionPower !== this.transmissionPower)
                radio.setTransmitPower(this.transmissionPower)

            // commands
            switch (pkt.serviceCommand) {
                case jacdac.BitRadioCmd.SendBuffer:
                    this.handleSendBuffer(pkt)
                    break
                case jacdac.BitRadioCmd.SendNumber:
                    this.handleSendNumber(pkt)
                    break
                case jacdac.BitRadioCmd.SendString:
                    this.handleSendString(pkt)
                    break
                case jacdac.BitRadioCmd.SendValue:
                    this.handleSendValue(pkt)
                    break
                default:
                    pkt.possiblyNotImplemented()
                    break
            }
        }

        private handleReceivedBuffer(data: Buffer) {
            const deviceSerialNumber = radio.receivedSerial()
            const rssi = radio.receivedSignalStrength()
            const time = radio.receivedTime()

            const payload = jacdac.jdpack<[number, number, number, Buffer]>(
                jacdac.BitRadioCmdPack.BufferReceived,
                [time, deviceSerialNumber, rssi, data]
            )
            this.sendReport(
                jacdac.JDPacket.from(jacdac.BitRadioCmd.BufferReceived, payload)
            )
        }

        private handleReceivedString(data: string) {
            const deviceSerialNumber = radio.receivedSerial()
            const rssi = radio.receivedSignalStrength()
            const time = radio.receivedTime()

            const payload = jacdac.jdpack<[number, number, number, string]>(
                jacdac.BitRadioCmdPack.StringReceived,
                [time, deviceSerialNumber, rssi, data]
            )
            this.sendReport(
                jacdac.JDPacket.from(jacdac.BitRadioCmd.StringReceived, payload)
            )
        }

        private handleReceivedNumber(name: string, data: number) {
            const deviceSerialNumber = radio.receivedSerial()
            const rssi = radio.receivedSignalStrength()
            const time = radio.receivedTime()

            const payload = jacdac.jdpack<
                [number, number, number, number, string]
            >("u32 u32 i8 x[3] f64 s", [
                time,
                deviceSerialNumber,
                rssi,
                data,
                name,
            ])
            this.sendReport(
                jacdac.JDPacket.from(jacdac.BitRadioCmd.NumberReceived, payload)
            )
        }

        private handleSendBuffer(pkt: jacdac.JDPacket) {
            const [data] = pkt.jdunpack<[Buffer]>(jacdac.BitRadioCmdPack.SendBuffer)
            radio.sendBuffer(data)
        }
        private handleSendNumber(pkt: jacdac.JDPacket) {
            const [n] = pkt.jdunpack<[number]>(jacdac.BitRadioCmdPack.SendNumber)
            radio.sendNumber(n)
        }
        private handleSendString(pkt: jacdac.JDPacket) {
            const [s] = pkt.jdunpack<[string]>(jacdac.BitRadioCmdPack.SendString)
            radio.sendString(s)
        }
        private handleSendValue(pkt: jacdac.JDPacket) {
            const [value, name] = pkt.jdunpack<[number, string]>(jacdac.BitRadioCmdPack.SendValue)
            radio.sendValue(name, value)
        }
    }

    //% fixedInstance whenUsed block="radio"
    export const radioServer = new RadioServer()
}
