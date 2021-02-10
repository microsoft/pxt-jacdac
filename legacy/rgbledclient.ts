namespace jacdac {
    //% fixedInstances
    export class RGBLEDClient extends Client {
        constructor(requiredDevice: string) {
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
            this.sendCommand(JDPacket.jdpacked(JDRGBLEDCommand.SetColor, "u32", [colorCode]))
        }
    }
    //% fixedInstance whenUsed block="light client"
    export const rgbledClient = new RGBLEDClient();
}
