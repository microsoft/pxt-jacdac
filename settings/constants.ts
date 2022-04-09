namespace jacdac {
    // Service Settings constants
    export const SRV_SETTINGS = 0x1107dc4a
    export const enum SettingsCmd {
        /**
         * Argument: key string (bytes). Get the value of given setting. If no such entry exists, the value returned is empty.
         *
         * ```
         * const [key] = jdunpack<[string]>(buf, "s")
         * ```
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
         *
         * ```
         * const [key] = jdunpack<[string]>(buf, "s")
         * ```
         */
        Delete = 0x84,

        /**
         * Argument: results pipe (bytes). Return keys of all settings.
         *
         * ```
         * const [results] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        ListKeys = 0x82,

        /**
         * Argument: results pipe (bytes). Return keys and values of all settings.
         *
         * ```
         * const [results] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        List = 0x83,

        /**
         * No args. Clears all keys.
         */
        Clear = 0x85,
    }

    export const enum SettingsCmdPack {
        /**
         * Pack format for 'get' register data.
         */
        Get = "s",

        /**
         * Pack format for 'get' register data.
         */
        GetReport = "z b",

        /**
         * Pack format for 'set' register data.
         */
        Set = "z b",

        /**
         * Pack format for 'delete' register data.
         */
        Delete = "s",

        /**
         * Pack format for 'list_keys' register data.
         */
        ListKeys = "b[12]",

        /**
         * Pack format for 'list' register data.
         */
        List = "b[12]",
    }

    /**
     * pipe_report ListedKey
     * ```
     * const [key] = jdunpack<[string]>(buf, "s")
     * ```
     */

    /**
     * pipe_report ListedEntry
     * ```
     * const [key, value] = jdunpack<[string, Buffer]>(buf, "z b")
     * ```
     */

    export const enum SettingsinfoPack {
        /**
         * Pack format for 'listed_key' register data.
         */
        ListedKey = "s",

        /**
         * Pack format for 'listed_entry' register data.
         */
        ListedEntry = "z b",
    }

    export const enum SettingsEvent {
        /**
         * Notifies that some setting have been modified.
         */
        //% block="change"
        Change = 0x3,
    }
}
