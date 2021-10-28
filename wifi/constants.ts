namespace jacdac {
    // Service: WIFI
    export const SRV_WIFI = 0x18aae1fa

    export const enum WifiAPFlags { // uint32_t
        //% block="has password"
        HasPassword = 0x1,
        //% block="wps"
        WPS = 0x2,
        //% block="has secondary channel above"
        HasSecondaryChannelAbove = 0x4,
        //% block="has secondary channel below"
        HasSecondaryChannelBelow = 0x8,
        //% block="ieee 802 11b"
        IEEE_802_11B = 0x100,
        //% block="ieee 802 11a"
        IEEE_802_11A = 0x200,
        //% block="ieee 802 11g"
        IEEE_802_11G = 0x400,
        //% block="ieee 802 11n"
        IEEE_802_11N = 0x800,
        //% block="ieee 802 11ac"
        IEEE_802_11AC = 0x1000,
        //% block="ieee 802 11ax"
        IEEE_802_11AX = 0x2000,
        //% block="ieee 802 long range"
        IEEE_802_LongRange = 0x8000,
    }

    export const enum WifiCmd {
        /**
         * Argument: results pipe (bytes). Return list of WiFi network from the last scan.
         * Scans are performed periodically while not connected (in particular, on startup and after current connection drops),
         * as well as upon `reconnect` and `scan` commands.
         *
         * ```
         * const [results] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        LastScanResults = 0x80,

        /**
         * Automatically connect to named network if available. Also set password if network is not open.
         *
         * ```
         * const [ssid, password] = jdunpack<[string, string]>(buf, "z z")
         * ```
         */
        AddNetwork = 0x81,

        /**
         * No args. Enable the WiFi (if disabled), initiate a scan, wait for results, disconnect from current WiFi network if any,
         * and then reconnect (using regular algorithm, see `set_network_priority`).
         */
        Reconnect = 0x82,

        /**
         * Argument: ssid string (bytes). Prevent from automatically connecting to named network in future.
         * Forgetting a network resets its priority to `0`.
         *
         * ```
         * const [ssid] = jdunpack<[string]>(buf, "s")
         * ```
         */
        ForgetNetwork = 0x83,

        /**
         * No args. Clear the list of known networks.
         */
        ForgetAllNetworks = 0x84,

        /**
         * Set connection priority for a network.
         * By default, all known networks have priority of `0`.
         *
         * ```
         * const [priority, ssid] = jdunpack<[number, string]>(buf, "i16 s")
         * ```
         */
        SetNetworkPriority = 0x85,

        /**
         * No args. Initiate search for WiFi networks. Generates `scan_complete` event.
         */
        Scan = 0x86,

        /**
         * Argument: results pipe (bytes). Return list of known WiFi networks.
         * `flags` is currently always 0.
         *
         * ```
         * const [results] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        ListKnownNetworks = 0x87,
    }


    /**
     * pipe_report Results
     * ```
     * const [flags, rssi, channel, bssid, ssid] = jdunpack<[jacdac.WifiAPFlags, number, number, Buffer, string]>(buf, "u32 x[4] i8 u8 b[6] s[33]")
     * ```
     */

    /**
     * pipe_report NetworkResults
     * ```
     * const [priority, flags, ssid] = jdunpack<[number, number, string]>(buf, "i16 i16 s")
     * ```
     */


    export const enum WifiReg {
        /**
         * Read-write bool (uint8_t). Determines whether the WiFi radio is enabled. It starts enabled upon reset.
         *
         * ```
         * const [enabled] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Enabled = 0x1,

        /**
         * Read-only bytes. 0, 4 or 16 byte buffer with the IPv4 or IPv6 address assigned to device if any.
         *
         * ```
         * const [ipAddress] = jdunpack<[Buffer]>(buf, "b[16]")
         * ```
         */
        IpAddress = 0x181,

        /**
         * Constant bytes. The 6-byte MAC address of the device. If a device does MAC address randomization it will have to "restart".
         *
         * ```
         * const [eui48] = jdunpack<[Buffer]>(buf, "b[6]")
         * ```
         */
        Eui48 = 0x182,

        /**
         * Read-only string (bytes). SSID of the access-point to which device is currently connected.
         * Empty string if not connected.
         *
         * ```
         * const [ssid] = jdunpack<[string]>(buf, "s[32]")
         * ```
         */
        Ssid = 0x183,

        /**
         * Read-only dB int8_t. Current signal strength. Returns -128 when not connected.
         *
         * ```
         * const [rssi] = jdunpack<[number]>(buf, "i8")
         * ```
         */
        Rssi = 0x184,
    }

    export const enum WifiEvent {
        /**
         * Emitted upon successful join and IP address assignment.
         */
        //% block="got ip"
        GotIp = 0x1,

        /**
         * Emitted when disconnected from network.
         */
        //% block="lost ip"
        LostIp = 0x2,

        /**
         * A WiFi network scan has completed. Results can be read with the `last_scan_results` command.
         * The event indicates how many networks where found, and how many are considered
         * as candidates for connection.
         *
         * ```
         * const [numNetworks, numKnownNetworks] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        //% block="scan complete"
        ScanComplete = 0x80,

        /**
         * Emitted whenever the list of known networks is updated.
         */
        //% block="networks changed"
        NetworksChanged = 0x81,

        /**
         * Argument: ssid string (bytes). Emitted when when a network was detected in scan, the device tried to connect to it
         * and failed.
         * This may be because of wrong password or other random failure.
         *
         * ```
         * const [ssid] = jdunpack<[string]>(buf, "s")
         * ```
         */
        //% block="connection failed"
        ConnectionFailed = 0x82,
    }

}
