namespace jacdac {
    // Service: TCP
    export const SRV_TCP = 0x1b43b70b

    export const enum TcpTcpError { // int32_t
        InvalidCommand = 0x1,
        InvalidCommandPayload = 0x2,
    }

    export const SRV_TCP_OPEN_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_TCP_OPEN_REPORT_PACK_FORMAT = "u16"
    export const SRV_TCP_OPEN_SSL_META_PIPE_COMMAND_PACK_FORMAT = "u16 s"
    export const SRV_TCP_OUTDATA_PIPE_COMMAND_PACK_FORMAT = "b"
    export const SRV_TCP_INDATA_PIPE_REPORT_PACK_FORMAT = "b"
    export const SRV_TCP_ERROR_META_PIPE_REPORT_PACK_FORMAT = "i32"
    export const enum TcpCmd {
        /**
         * Argument: inbound pipe (bytes). Open pair of pipes between network peripheral and a controlling device. In/outbound refers to direction from/to internet.
         */
        Open = 0x80,
    }

    export const enum TcpPipeCmd {
        /**
         * Open an SSL connection to a given host:port pair. Can be issued only once on given pipe.
         * After the connection is established, an empty data report is sent.
         * Connection is closed by closing the pipe.
         *
         * ```
         * const [tcpPort, hostname] = jdunpack<[number, string]>(buf, "u16 s")
         * ```
         */
        OpenSsl = 0x1,

        /**
         * Argument: error TcpError (int32_t). Reported when an error is encountered. Negative error codes come directly from the SSL implementation.
         */
        Error = 0x0,
    }

}
