namespace modules {
    /**
     * Discovery and connection to WiFi networks. Separate TCP service can be used for data transfer.
     **/
    //% fixedInstances blockGap=8
    export class WifiClient extends jacdac.SimpleSensorClient {

        private readonly _enabled : jacdac.RegisterClient<[boolean]>;
        private readonly _ipAddress : jacdac.RegisterClient<[Buffer]>;
        private readonly _eui48 : jacdac.RegisterClient<[Buffer]>;
        private readonly _ssid : jacdac.RegisterClient<[string]>;            

        constructor(role: string) {
            super(jacdac.SRV_WIFI, role, "i8");

            this._enabled = this.addRegister<[boolean]>(jacdac.WifiReg.Enabled, "u8");
            this._ipAddress = this.addRegister<[Buffer]>(jacdac.WifiReg.IpAddress, "b[16]");
            this._eui48 = this.addRegister<[Buffer]>(jacdac.WifiReg.Eui48, "b[6]");
            this._ssid = this.addRegister<[string]>(jacdac.WifiReg.Ssid, "s[32]");            
        }
    

        /**
        * Current signal strength. Returns -128 when not connected.
        */
        //% callInDebugger
        //% group="Iot"
        //% block="%wifi rssi"
        //% blockId=jacdac_wifi_rssi___get
        //% weight=100
        rssi(): number {
            return this.reading();
        
        }

        /**
        * Determines whether the WiFi radio is enabled. It starts enabled upon reset.
        */
        //% callInDebugger
        //% group="Iot"
        //% block="%wifi enabled"
        //% blockId=jacdac_wifi_enabled___get
        //% weight=99
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
        //% weight=98
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
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
         * Run code when the rssi changes by the given threshold value.
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_on_rssi_change
        //% block="on %wifi rssi changed by %threshold"
        //% weight=94
        //% threshold.min=0
        //% threshold.max=-20
        //% threshold.defl=1
        onRssiChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler);
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Iot"
        //% blockId=jacdac_on_wifi_event
        //% block="on %wifi %event"
        //% weight=93
        onEvent(ev: jacdac.WifiEvent, handler: () => void): void {
            this.registerEvent(ev, handler);
        }

        /**
         * Emitted upon successful join and IP address assignment.
         */
        //% group="Iot"
        //% weight=92
        onGotIp(handler: () => void): void {
            this.registerEvent(jacdac.WifiEvent.GotIp, handler);
        }
        /**
         * Emitted when disconnected from network.
         */
        //% group="Iot"
        //% weight=91
        onLostIp(handler: () => void): void {
            this.registerEvent(jacdac.WifiEvent.LostIp, handler);
        }
        /**
         * A WiFi network scan has completed. Results can be read with the `last_scan_results` command.
        * The event indicates how many networks where found, and how many are considered
        * as candidates for connection.
         */
        //% group="Iot"
        //% weight=90
        onScanComplete(handler: () => void): void {
            this.registerEvent(jacdac.WifiEvent.ScanComplete, handler);
        }
        /**
         * Emitted whenever the list of known networks is updated.
         */
        //% group="Iot"
        //% weight=89
        onNetworksChanged(handler: () => void): void {
            this.registerEvent(jacdac.WifiEvent.NetworksChanged, handler);
        }
        /**
         * Emitted when when a network was detected in scan, the device tried to connect to it
        * and failed.
        * This may be because of wrong password or other random failure.
         */
        //% group="Iot"
        //% weight=88
        onConnectionFailed(handler: () => void): void {
            this.registerEvent(jacdac.WifiEvent.ConnectionFailed, handler);
        }

        /**
        * Automatically connect to named network if available. Also set password if network is not open.
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_add_network_cmd
        //% block="%wifi add network |ssid $ssid |password $password"
        //% weight=87
        addNetwork(ssid: string, password: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.WifiCmd.AddNetwork, "z z", [ssid, password]))
        }

        /**
        * Enable the WiFi (if disabled), initiate a scan, wait for results, disconnect from current WiFi network if any,
        * and then reconnect (using regular algorithm, see `set_network_priority`).
        */
        //% group="Iot"
        //% blockId=jacdac_wifi_reconnect_cmd
        //% block="%wifi reconnect"
        //% weight=86
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
        //% weight=85
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
        //% weight=84
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
        //% weight=83
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
        //% weight=82
        scan(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.WifiCmd.Scan))
        }
    
    }
    //% fixedInstance whenUsed weight=1 block="wifi1"
    export const wifi1 = new WifiClient("wifi1");
}