namespace jacdac {
    // Service: Settings
    export const SRV_SETTINGS = 0x1107dc4a
    export const SRV_SETTINGS_GET_COMMAND_PACK_FORMAT = "s"
    export const SRV_SETTINGS_GET_REPORT_PACK_FORMAT = "z b"
    export const SRV_SETTINGS_SET_COMMAND_PACK_FORMAT = "z b"
    export const SRV_SETTINGS_DELETE_COMMAND_PACK_FORMAT = "s"
    export const SRV_SETTINGS_LIST_KEYS_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_SETTINGS_LISTED_KEY_PIPE_REPORT_PACK_FORMAT = "s"
    export const SRV_SETTINGS_LIST_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_SETTINGS_LISTED_ENTRY_PIPE_REPORT_PACK_FORMAT = "z b"
    export const enum SettingsCmd {
        /**
         * Argument: key string (bytes). Get the value of given setting. If no such entry exists, the value returned is empty.
         */
        Get = 0x80,

        /**
         * report Get
         * ```
         * const [key, value] = jdunpack<[string, Buffer]>(buf, "z b")
         * ```
         */

        /**
         * Set the value of a given setting.
         *
         * ```
         * const [key, value] = jdunpack<[string, Buffer]>(buf, "z b")
         * ```
         */
        Set = 0x81,

        /**
         * Argument: key string (bytes). Delete a given setting.
         */
        Delete = 0x84,

        /**
         * Argument: results pipe (bytes). Return keys of all settings.
         */
        ListKeys = 0x82,

        /**
         * Argument: results pipe (bytes). Return keys and values of all settings.
         */
        List = 0x83,

        /**
         * No args. Clears all keys.
         */
        Clear = 0x85,
    }


    /**
     * pipe_report ListedEntry
     * ```
     * const [key, value] = jdunpack<[string, Buffer]>(buf, "z b")
     * ```
     */


}
