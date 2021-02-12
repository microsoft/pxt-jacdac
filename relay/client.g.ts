namespace modules {
    /**
     * A switching relay.
     **/
    //% fixedInstances blockGap=8
    export class RelayClient extends jacdac.Client {

            private readonly _closed : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_RELAY, role);

            this._closed = this.addRegister<[boolean]>(jacdac.RelayReg.Closed, "u8");            
        }
    

        /**
        * Indicates whether the relay circuit is currently on (closed) or off (closed).
        */
        //% blockId=jacdac_relay_closed___get
        //% group="Relay"
        //% block="%relay closed" callInDebugger
        closed(): boolean {            
            const values = this._closed.pauseUntilValues() as any[];
            return !!values[0];
        }
        /**
        * Indicates whether the relay circuit is currently on (closed) or off (closed).
        */
        //% blockId=jacdac_relay_closed___set
        //% group="Relay"
        //% block="set %relay closed to %value"
        setClosed(value: boolean) {
            const values = this._closed.values as any[];
            values[0] = value ? 1 : 0;
            this._closed.values = values as [boolean];
        } 

        /**
         * Emitted when relay goes from ``off`` to ``on`` state.
         */
        //% blockId=jacdac_on_relay_on
        //% block="on" blockSetVariable=myModule
        //% group="Relay"
        onOn(handler: () => void) {
            this.registerEvent(jacdac.RelayEvent.On, handler);
        }
        /**
         * Emitted when relay goes from ``on`` to ``off`` state.
         */
        //% blockId=jacdac_on_relay_off
        //% block="off" blockSetVariable=myModule
        //% group="Relay"
        onOff(handler: () => void) {
            this.registerEvent(jacdac.RelayEvent.Off, handler);
        }
    }
    //% fixedInstance whenUsed
    export const relay = new RelayClient("relay");
}