namespace jacdac {
    // Service PC controller constants
    export const SRV_PCCONTROLLER = 0x113d0987
    export const enum PCControllerCmd {
        /**
         * Argument: url string (bytes). Open a URL in the default browser.
         *
         * ```
         * const [url] = jdunpack<[string]>(buf, "s")
         * ```
         */
        OpenUrl = 0x80,

        /**
         * Argument: name string (bytes). Start an app.
         *
         * ```
         * const [name] = jdunpack<[string]>(buf, "s")
         * ```
         */
        StartApp = 0x81,

        /**
         * Argument: text string (bytes). Send text to the active window.
         *
         * ```
         * const [text] = jdunpack<[string]>(buf, "s")
         * ```
         */
        SendText = 0x82,

        /**
         * Argument: script string (bytes). Run a script.
         *
         * ```
         * const [script] = jdunpack<[string]>(buf, "s")
         * ```
         */
        RunScript = 0x83,
    }

    export namespace PCControllerCmdPack {
        /**
         * Pack format for 'open_url' data.
         */
        export const OpenUrl = "s"

        /**
         * Pack format for 'start_app' data.
         */
        export const StartApp = "s"

        /**
         * Pack format for 'send_text' data.
         */
        export const SendText = "s"

        /**
         * Pack format for 'run_script' data.
         */
        export const RunScript = "s"
    }

}
