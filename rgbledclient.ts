namespace jacdac {
    //% fixedInstances
    export class RGBLEDClient extends Client {
        constructor(requiredDevice: string = null) {
            super("RGBLED", jd_class.RGB_LED, requiredDevice);
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 20
         */
        //% blockId="jdrgbled_set_brightness" block="set %strip brightness %brightness"
        //% brightness.min=0 brightness.max=255
        //% weight=2 blockGap=8
        //% group="Light"
        setBrightness(brightness: number): void {
            this.setRegInt(REG_INTENSITY, brightness)
        }

        /**
         * Set the colour of the RGB led in hex format.
         *
         * Upper most byte is red, middle byte green, lower byte blue.
         */
        //% blockId="jdrgbled_set_color" block="set %strip color %colorcode"
        //% brightness.min=0 brightness.max=255
        //% weight=2 blockGap=8
        //% group="RGBLED"
        setColor(colorCode: number): void {
            let buf = Buffer.create(4);
            buf.setNumber(NumberFormat.Int32LE, 0, colorCode)
            this.sendCommand(JDPacket.from(JDRGBLEDCommand.SetColor, buf));
        }
    }
    //% fixedInstance whenUsed block="light client"
    export const rgbledClient = new RGBLEDClient();
}
