namespace modules {
    /**
     * A service that uses the [CODAL message bus](https://lancaster-university.github.io/microbit-docs/ubit/messageBus/) to send and receive small messages.
     **/
    //% fixedInstances blockGap=8
    export class CodalMessageBusClient extends jacdac.Client {
            

        constructor(role: string) {
            super(jacdac.SRV_CODAL_MESSAGE_BUS, role);
            
        }
    

        /**
         * Raised by the server is triggered by the server. The filtering logic of which event to send over JACDAC is up to the server implementation.
         */
        //% group="CODAL Message Bus"
        //% blockId=jacdac_on_codalmessagebus_message
        //% block="on %codalmessagebus message"
        //% weight=100
        onMessage(handler: () => void): void {
            this.registerEvent(jacdac.CodalMessageBusEvent.Message, handler);
        }

        /**
        * Send a message on the CODAL bus. If `source` is `0`, it is treated as wildcard.
        */
        //% group="CODAL Message Bus"
        //% blockId=jacdac_codalmessagebus_send_cmd
        //% block="%codalmessagebus send |source $source |value $value"
        //% weight=99
        send(source: number, value: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.CodalMessageBusCmd.Send, "u16 u16", [source, value]))
        }
    
    }
    //% fixedInstance whenUsed block="codal message bus1"
    export const codalMessageBus1 = new CodalMessageBusClient("codal Message Bus1");
}