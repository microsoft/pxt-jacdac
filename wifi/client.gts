namespace modules {
    /**
     * Discovery and connection to WiFi networks. Separate TCP service can be used for data transfer.
     * 
     * The device controlled by this service is meant to connect automatically, once configured.
     * To that end, it keeps a list of known WiFi networks, with priorities and passwords.
     * It will connect to the available network with numerically highest priority,
     * breaking ties in priority by signal strength (typically all known networks have priority of `0`).
     **/
    //% fixedInstances blockGap=8
    export class WifiClient extends jacdac.Client {

        private readonly _enabled : jacdac.RegisterClient<[boolean]>;
        private readonly _connected : jacdac.RegisterClient<[boolean]>;
        private readonly _ipAddress : jacdac.RegisterClient<[Buffer]>;
        private readonly _eui48 : jacdac.RegisterClient<[Buffer]>;
        private readonly _ssid : jacdac.RegisterClient<[string]>;
        private readonly _rssi : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_WIFI, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.WifiReg.Enabled, "u8");
            this._connected = this.addRegister<[boolean]>(jacdac.WifiReg.Connected, "u8");
            this._ipAddress = this.addRegister<[Buffer]>(jacdac.WifiReg.IpAddress, "b[16]");
            this._eui48 = this.addRegister<[Buffer]>(jacdac.WifiReg.Eui48, "b[6]");
            this._ssid = this.addRegister<[string]>(jacdac.WifiReg.Ssid, "s[32]");
            this._rssi = this.addRegister<[number]>(jacdac.WifiReg.Rssi, "i8");            
        }
    

        /**
        * Determines whether the WiFi radio is enabled. It starts enabled upon reset.
        */
        //% callInDebugger
        //% group="Iot"
        //% block="%wifi enabled"
        //% blockId=jacdac_wifi_enabled___get
        //% weight=100
        enabled(): boolean {
            this.start();            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Determines whether the WiFi radio is enabled. It starts enabled upon reset.
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_enabled___set
        //% block="set %wifi %value=toggleOnOff"
        //% weight=99
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }

        /**
        * Indicates whether or not we currently have an IP address assigned.
        */
        //% callInDebugger
        //% group="Iot"
        //% weight=98
        connected(): boolean {
            this.start();            
            const values = this._connected.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * 0, 4 or 16 byte buffer with the IPv4 or IPv6 address assigned to device if any.
        */
        //% callInDebugger
        //% group="Iot"
        //% weight=97
        ipAddress(): Buffer {
            this.start();            
            const values = this._ipAddress.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The 6-byte MAC address of the device. If a device does MAC address randomization it will have to "restart".
        */
        //% callInDebugger
        //% group="Iot"
        //% weight=96
        eui48(): Buffer {
            this.start();            
            const values = this._eui48.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * SSID of the access-point to which device is currently connected.
        * Empty string if not connected.
        */
        //% callInDebugger
        //% group="Iot"
        //% weight=95
        ssid(): string {
            this.start();            
            const values = this._ssid.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Current signal strength. Returns -128 when not connected.
        */
        //% callInDebugger
        //% group="Iot"
        //% weight=94
        rssi(): number {
            this.start();            
            const values = this._rssi.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Emitted upon successful join and IP address assignment.
         */
        //% group="Iot"
        //% blockId=jacdac_on_wifi_got_ip
        //% block="on %wifi got ip"
        //% weight=93
        onGotIp(handler: () => void): void {
            this.registerEvent(jacdac.WifiEvent.GotIp, handler);
        }
        /**
         * Emitted when disconnected from network.
         */
        //% group="Iot"
        //% blockId=jacdac_on_wifi_lost_ip
        //% block="on %wifi lost ip"
        //% weight=92
        onLostIp(handler: () => void): void {
            this.registerEvent(jacdac.WifiEvent.LostIp, handler);
        }
        /**
         * A WiFi network scan has completed. Results can be read with the `last_scan_results` command.
        * The event indicates how many networks where found, and how many are considered
        * as candidates for connection.
         */
        //% group="Iot"
        //% blockId=jacdac_on_wifi_scan_complete
        //% block="on %wifi scan complete"
        //% weight=91
        onScanComplete(handler: () => void): void {
            this.registerEvent(jacdac.WifiEvent.ScanComplete, handler);
        }
        /**
         * Emitted whenever the list of known networks is updated.
         */
        //% group="Iot"
        //% blockId=jacdac_on_wifi_networks_changed
        //% block="on %wifi networks changed"
        //% weight=90
        onNetworksChanged(handler: () => void): void {
            this.registerEvent(jacdac.WifiEvent.NetworksChanged, handler);
        }

        /**
        * Automatically connect to named network if available. Also set password if network is not open.
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_add_network_cmd
        //% block="%wifi add network |ssid $ssid |password $password"
        //% weight=89
        addNetwork(ssid: string, password: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.WifiCmd.AddNetwork, "z z", [ssid, password]))
        }

        /**
        * Initiate a scan, wait for results, disconnect from current WiFi network if any,
        * and then reconnect (using regular algorithm, see `set_network_priority`).
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_reconnect_cmd
        //% block="%wifi reconnect"
        //% weight=88
        reconnect(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.WifiCmd.Reconnect))
        }

        /**
        * Prevent from automatically connecting to named network in future.
        * Forgetting a network resets its priority to `0`.
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_forget_network_cmd
        //% block="%wifi forget network $ssid"
        //% weight=87
        forgetNetwork(ssid: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.WifiCmd.ForgetNetwork, "s", [ssid]))
        }

        /**
        * Clear the list of known networks.
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_forget_all_networks_cmd
        //% block="%wifi forget all networks"
        //% weight=86
        forgetAllNetworks(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.WifiCmd.ForgetAllNetworks))
        }

        /**
        * Set connection priority for a network.
        * By default, all known networks have priority of `0`.
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_set_network_priority_cmd
        //% block="%wifi set network priority |priority $priority |ssid $ssid"
        //% weight=85
        setNetworkPriority(priority: number, ssid: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.WifiCmd.SetNetworkPriority, "i16 s", [priority, ssid]))
        }

        /**
        * Initiate search for WiFi networks. Generates `scan_complete` event.
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_scan_cmd
        //% block="%wifi scan"
        //% weight=84
        scan(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.WifiCmd.Scan))
        }
    
    }
    //% fixedInstance whenUsed block="wifi1"
    export const wifi1 = new WifiClient("wifi1");
}