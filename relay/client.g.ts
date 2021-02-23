namespace modules {
    /**
     * A switching relay.
     **/
    //% fixedInstances blockGap=8
    export class RelayClient extends jacdac.Client {

            private readonly _closed : jacdac.RegisterClient<[boolean]>;
            private readonly _variant : jacdac.RegisterClient<[jacdac.RelayVariant]>;
            private readonly _maxSwitchingCurrent : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_RELAY, role);

            this._closed = this.addRegister<[boolean]>(jacdac.RelayReg.Closed, "u8");
            this._variant = this.addRegister<[jacdac.RelayVariant]>(jacdac.RelayReg.Variant, "u8");
            this._maxSwitchingCurrent = this.addRegister<[number]>(jacdac.RelayReg.MaxSwitchingCurrent, "u32");            
        }
    

        /**
        * Indicates whether the relay circuit is currently on (closed) or off (closed).
        */
        //% callInDebugger
        //% group="Relay"
        //% block="%relay closed"
        //% blockId=jacdac_relay_closed___get
        closed(): boolean {
            this.start();            
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
            this.start();
            const values = this._closed.values as any[];
            values[0] = value ? 1 : 0;
            this._closed.values = values as [boolean];
        }

        /**
        * Describes the type of relay used.
        */
        //% callInDebugger
        //% group="Relay"
        variant(): jacdac.RelayVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Maximum switching current for a resistive load.
        */
        //% callInDebugger
        //% group="Relay"
        maxSwitchingCurrent(): number {
            this.start();            
            const values = this._maxSwitchingCurrent.pauseUntilValues() as any[];
            return values[0];
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