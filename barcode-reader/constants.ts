namespace jacdac {
    // Service Barcode reader constants
    export const SRV_BARCODE_READER = 0x1c739e6c

    export const enum BarcodeReaderFormat { // uint8_t
        //% block="aztec"
        Aztec = 0x1,
        //% block="code128"
        Code128 = 0x2,
        //% block="code39"
        Code39 = 0x3,
        //% block="code93"
        Code93 = 0x4,
        //% block="codabar"
        Codabar = 0x5,
        //% block="data matrix"
        DataMatrix = 0x6,
        //% block="ean13"
        Ean13 = 0x8,
        //% block="ean8"
        Ean8 = 0x9,
        //% block="itf"
        ITF = 0xa,
        //% block="pdf417"
        Pdf417 = 0xb,
        //% block="qr code"
        QrCode = 0xc,
        //% block="upc a"
        UpcA = 0xd,
        //% block="upc e"
        UpcE = 0xe,
    }

    export const enum BarcodeReaderReg {
        /**
         * Read-write bool (uint8_t). Turns on or off the detection of barcodes.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,

        /**
         * Constant. Reports the list of supported barcode formats, as documented in https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API.
         *
         * ```
         * const [format] = jdunpack<[jacdac.BarcodeReaderFormat[]]>(buf, "u8[]")
         * ```
         */
        Formats = 0x180,
    }

    export namespace BarcodeReaderRegPack {
        /**
         * Pack format for 'enabled' register data.
         */
        export const Enabled = "u8"

        /**
         * Pack format for 'formats' register data.
         */
        export const Formats = "r: u8"
    }

    export const enum BarcodeReaderEvent {
        /**
         * Raised when a bar code is detected and decoded. If the reader detects multiple codes, it will issue multiple events.
         * In case of numeric barcodes, the `data` field should contain the ASCII (which is the same as UTF8 in that case) representation of the number.
         *
         * ```
         * const [format, data] = jdunpack<[jacdac.BarcodeReaderFormat, string]>(buf, "u8 s")
         * ```
         */
        //% block="detect"
        Detect = 0x1,
    }

    export namespace BarcodeReaderEventPack {
        /**
         * Pack format for 'detect' register data.
         */
        export const Detect = "u8 s"
    }
}
