namespace jacdac {
    // Service: MIDI output
    export const SRV_M_IDIOUTPUT = 0x1a848cd7
    export const enum MIDIOutputReg {
        /**
         * Read-write bool (uint8_t). Opens or closes the port to the MIDI device
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,
    }

    export const enum MIDIOutputCmd {
        /**
         * No args. Clears any pending send data that has not yet been sent from the MIDIOutput's queue.
         */
        Clear = 0x80,

        /**
         * Argument: data bytes. Enqueues the message to be sent to the corresponding MIDI port
         *
         * ```
         * const [data] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        Send = 0x81,
    }

}
