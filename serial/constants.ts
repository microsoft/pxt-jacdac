namespace jacdac {
    // Service Serial constants
    export const SRV_SERIAL = 0x11bae5c4

    export const enum SerialParityType { // uint8_t
        //% block="none"
        None = 0x0,
        //% block="even"
        Even = 0x1,
        //% block="odd"
        Odd = 0x2,
    }

    export const enum SerialReg {
        /**
         * Read-write bool (uint8_t). Indicates if the serial connection is active.
         *
         * ```
         * const [connected] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Connected = 0x1,

        /**
         * Read-only string (bytes). User-friendly name of the connection.
         *
         * ```
         * const [connectionName] = jdunpack<[string]>(buf, "s")
         * ```
         */
        ConnectionName = 0x181,

        /**
         * Read-write baud uint32_t. A positive, non-zero value indicating the baud rate at which serial communication is be established.
         *
         * ```
         * const [baudRate] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        BaudRate = 0x80,

        /**
         * Read-write uint8_t. The number of data bits per frame. Either 7 or 8.
         *
         * ```
         * const [dataBits] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        DataBits = 0x81,

        /**
         * Read-write # uint8_t. The number of stop bits at the end of a frame. Either 1 or 2.
         *
         * ```
         * const [stopBits] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        StopBits = 0x82,

        /**
         * Read-write ParityType (uint8_t). The parity mode.
         *
         * ```
         * const [parityMode] = jdunpack<[jacdac.SerialParityType]>(buf, "u8")
         * ```
         */
        ParityMode = 0x83,

        /**
         * Read-write # uint8_t. A positive, non-zero value indicating the size of the read and write buffers that should be created.
         *
         * ```
         * const [bufferSize] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        BufferSize = 0x84,
    }

    export namespace SerialRegPack {
        /**
         * Pack format for 'connected' data.
         */
        export const Connected = "u8"

        /**
         * Pack format for 'connection_name' data.
         */
        export const ConnectionName = "s"

        /**
         * Pack format for 'baud_rate' data.
         */
        export const BaudRate = "u32"

        /**
         * Pack format for 'data_bits' data.
         */
        export const DataBits = "u8"

        /**
         * Pack format for 'stop_bits' data.
         */
        export const StopBits = "u8"

        /**
         * Pack format for 'parity_mode' data.
         */
        export const ParityMode = "u8"

        /**
         * Pack format for 'buffer_size' data.
         */
        export const BufferSize = "u8"
    }

    export const enum SerialCmd {
        /**
         * Argument: data bytes. Send a buffer of data over the serial transport.
         *
         * ```
         * const [data] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        Send = 0x80,

        /**
         * Argument: data bytes. Raised when a buffer of data is received.
         *
         * ```
         * const [data] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        Received = 0x80,
    }

    export namespace SerialCmdPack {
        /**
         * Pack format for 'send' data.
         */
        export const Send = "b"

        /**
         * Pack format for 'received' data.
         */
        export const Received = "b"
    }
}
