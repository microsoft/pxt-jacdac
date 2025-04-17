namespace jacdac {
    // Service I2C constants
    export const SRV_I2C = 0x1c18ca43

    export const enum I2CStatus { // uint8_t
        //% block="ok"
        OK = 0x0,
        //% block="nack addr"
        NAckAddr = 0x1,
        //% block="nack data"
        NAckData = 0x2,
        //% block="no i2c"
        NoI2C = 0x3,
    }

    export const enum I2CReg {
        /**
         * Read-only bool (uint8_t). Indicates whether the I2C is working.
         *
         * ```
         * const [ok] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Ok = 0x180,
    }

    export namespace I2CRegPack {
        /**
         * Pack format for 'ok' data.
         */
        export const Ok = "u8"
    }

    export const enum I2CCmd {
        /**
         * `address` is 7-bit.
         * `num_read` can be 0 if nothing needs to be read.
         * The `write_buf` includes the register address if required (first one or two bytes).
         *
         * ```
         * const [address, numRead, writeBuf] = jdunpack<[number, number, Buffer]>(buf, "u8 u8 b")
         * ```
         */
        Transaction = 0x80,

        /**
         * report Transaction
         * ```
         * const [status, readBuf] = jdunpack<[jacdac.I2CStatus, Buffer]>(buf, "u8 b")
         * ```
         */
    }

    export namespace I2CCmdPack {
        /**
         * Pack format for 'transaction' data.
         */
        export const Transaction = "u8 u8 b"

        /**
         * Pack format for 'transaction' data.
         */
        export const TransactionReport = "u8 b"
    }

}
