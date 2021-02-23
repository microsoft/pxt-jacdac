namespace modules {
    /**
     * Discovery and connection to WiFi networks. Separate TCP service is used for data transfer.
     **/
    //% fixedInstances blockGap=8
    export class WifiClient extends jacdac.Client {

            private readonly _connected : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_WIFI, role);

            this._connected = this.addRegister<[boolean]>(jacdac.WifiReg.Connected, "u8");            
        }
    

        /**
        * Indicates whether or not we currently have an IP address assigned.
        */
        //% callInDebugger
        //% group="Iot"
        connected(): boolean {
            this.start();            
            const values = this._connected.pauseUntilValues() as any[];
            return !!values[0];
        }
 

        /**
         * Emitted upon successful join and IP address assignment.
         */
        //% blockId=jacdac_on_wifi_got_ip
        //% block="got ip" blockSetVariable=myModule
        //% group="Iot"
        onGotIp(handler: () => void) {
            this.registerEvent(jacdac.WifiEvent.GotIp, handler);
        }
        /**
         * Emitted when disconnected from network.
         */
        //% blockId=jacdac_on_wifi_lost_ip
        //% block="lost ip" blockSetVariable=myModule
        //% group="Iot"
        onLostIp(handler: () => void) {
            this.registerEvent(jacdac.WifiEvent.LostIp, handler);
        }
    }
    //% fixedInstance whenUsed
    export const wifi = new WifiClient("wifi");
}