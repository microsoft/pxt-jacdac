namespace jacdac {
    // Service USB Bridge constants
    export const SRV_USB_BRIDGE = 0x18f61a4a

    export const enum UsbBridgeQByte { // uint8_t
        //% block="magic"
        Magic = 0xfe,
        //% block="literal magic"
        LiteralMagic = 0xf8,
        //% block="reserved"
        Reserved = 0xf9,
        //% block="serial gap"
        SerialGap = 0xfa,
        //% block="frame gap"
        FrameGap = 0xfb,
        //% block="frame start"
        FrameStart = 0xfc,
        //% block="frame end"
        FrameEnd = 0xfd,
    }

    export const enum UsbBridgeCmd {
        /**
         * No args. Disables forwarding of Jacdac packets.
         */
        DisablePackets = 0x80,

        /**
         * No args. Enables forwarding of Jacdac packets.
         */
        EnablePackets = 0x81,

        /**
         * No args. Disables forwarding of serial log messages.
         */
        DisableLog = 0x82,

        /**
         * No args. Enables forwarding of serial log messages.
         */
        EnableLog = 0x83,
    }

}
