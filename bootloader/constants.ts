namespace jacdac {
    // Service Bootloader constants
    export const SRV_BOOTLOADER = 0x1ffa9948

    export const enum BootloaderError { // uint32_t
        //% block="no error"
        NoError = 0x0,
        //% block="packet too small"
        PacketTooSmall = 0x1,
        //% block="out of flashable range"
        OutOfFlashableRange = 0x2,
        //% block="invalid page offset"
        InvalidPageOffset = 0x3,
        //% block="not page aligned"
        NotPageAligned = 0x4,
    }

    export const enum BootloaderCmd {
        /**
         * No args. The `service_class` is always `0x1ffa9948`. The `product_identifier` identifies the kind of firmware
         * that "fits" this device.
         */
        Info = 0x0,

        /**
         * report Info
         * ```
         * const [serviceClass, pageSize, flashableSize, productIdentifier] = jdunpack<[number, number, number, number]>(buf, "u32 u32 u32 u32")
         * ```
         */

        /**
         * Argument: session_id uint32_t. The flashing server should generate a random id, and use this command to set it.
         *
         * ```
         * const [sessionId] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        SetSession = 0x81,

        /**
         * report SetSession
         * ```
         * const [sessionId] = jdunpack<[number]>(buf, "u32")
         * ```
         */

        /**
         * Use to send flashing data. A physical page is split into `chunk_max + 1` chunks, where `chunk_no = 0 ... chunk_max`.
         * Each chunk is stored at `page_address + page_offset`. `page_address` has to be equal in all chunks,
         * and is included in response.
         * Only the last chunk causes writing to flash and elicits response.
         *
         * ```
         * const [pageAddress, pageOffset, chunkNo, chunkMax, sessionId, pageData] = jdunpack<[number, number, number, number, number, Buffer]>(buf, "u32 u16 u8 u8 u32 x[4] x[4] x[4] x[4] b[208]")
         * ```
         */
        PageData = 0x80,

        /**
         * report PageData
         * ```
         * const [sessionId, pageError, pageAddress] = jdunpack<[number, jacdac.BootloaderError, number]>(buf, "u32 u32 u32")
         * ```
         */
    }

    export namespace BootloaderCmdPack {
        /**
         * Pack format for 'info' data.
         */
        export const InfoReport = "u32 u32 u32 u32"

        /**
         * Pack format for 'set_session' data.
         */
        export const SetSession = "u32"

        /**
         * Pack format for 'set_session' data.
         */
        export const SetSessionReport = "u32"

        /**
         * Pack format for 'page_data' data.
         */
        export const PageData = "u32 u16 u8 u8 u32 u32 u32 u32 u32 b[208]"

        /**
         * Pack format for 'page_data' data.
         */
        export const PageDataReport = "u32 u32 u32"
    }
}
