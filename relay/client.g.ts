namespace modules {
    /**
     * A switching relay.
     **/
    //% fixedInstances blockGap=8
    export class RelayClient extends jacdac.Client {

            private readonly _closed : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_RELAY, role);

            this._closed = this.addRegister(jacdac.RelayReg.Closed, "u8");            
        }
    

        /**
        * Indicates whether the relay circuit is currently on (closed) or off (closed).
        */
        //% group="Relay" blockSetVariable=myModule
        //% blockCombine block="closed" callInDebugger
        get closed(): number {
            const values = this._closed.values() as any[];
            return values && values.length > 0 && values[0];
        }     

        /**
        * Indicates whether the relay circuit is currently on (closed) or off (closed).
        */
        //% group="Relay" blockSetVariable=myModule
        //% blockCombine block="closed" callInDebugger
        set closed(value: number) {
            const values = this._closed.values() as any[];
            values[0] = value;
            this._closed.setValues(values as [number]);
        }     

        /**
         * Emitted when relay goes from ``off`` to ``on`` state.
         */
        //% block="on" blockSetVariable=myModule
        //% group="Relay" blockCombine
        onOn(handler: () => void) {
            this.registerEvent(jacdac.RelayEvent.On, handler);
        }
        /**
         * Emitted when relay goes from ``on`` to ``off`` state.
         */
        //% block="off" blockSetVariable=myModule
        //% group="Relay" blockCombine
        onOff(handler: () => void) {
            this.registerEvent(jacdac.RelayEvent.Off, handler);
        }
    }
    //% fixedInstance whenUsed
    export const relay = new RelayClient("relay");
}