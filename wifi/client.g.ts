namespace modules {
    /**
     * Discovery and connection to WiFi networks. Separate TCP service is used for data transfer.
     **/
    //% fixedInstances blockGap=8
    export class WifiClient extends jacdac.Client {
            

            constructor(role: string) {
            super(jacdac.SRV_WIFI, role);
            
        }
    
 

        /**
         * Emitted upon successful join and IP address assignment.
         */
        //% block="got ip" blockSetVariable=myModule
        //% group="WIFI" blockCombine
        onGotIp(handler: () => void) {
            this.registerEvent(jacdac.WifiEvent.GotIp, handler);
        }
        /**
         * Emitted when disconnected from network.
         */
        //% block="lost ip" blockSetVariable=myModule
        //% group="WIFI" blockCombine
        onLostIp(handler: () => void) {
            this.registerEvent(jacdac.WifiEvent.LostIp, handler);
        }
    }
    //% fixedInstance whenUsed
    export const wifi = new WifiClient("wifi");
}