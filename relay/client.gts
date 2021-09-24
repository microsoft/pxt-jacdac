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
        * Indicates whether the relay circuit is currently energized (closed) or not.
        */
        //% callInDebugger
        //% group="Relay"
        //% block="%relay closed"
        //% blockId=jacdac_relay_closed___get
        //% weight=100
        closed(): boolean {
            this.start();            
            const values = this._closed.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Indicates whether the relay circuit is currently energized (closed) or not.
        */
        //% group="Relay"
        //% blockId=jacdac_relay_closed___set
        //% block="set %relay closed to %value"
        //% weight=99
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
        //% weight=98
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
        //% weight=97
        maxSwitchingCurrent(): number {
            this.start();            
            const values = this._maxSwitchingCurrent.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Emitted when relay goes from `inactive` to `active` state.
        * Normally open (NO) relays close the circuit when activated.
         */
        //% group="Relay"
        //% blockId=jacdac_on_relay_active
        //% block="on %relay active"
        //% weight=96
        onActive(handler: () => void): void {
            this.registerEvent(jacdac.RelayEvent.Active, handler);
        }
        /**
         * Emitted when relay goes from `active` to `inactive` state.
        * Normally closed (NC) relays open the circuit when activated.
         */
        //% group="Relay"
        //% blockId=jacdac_on_relay_inactive
        //% block="on %relay inactive"
        //% weight=95
        onInactive(handler: () => void): void {
            this.registerEvent(jacdac.RelayEvent.Inactive, handler);
        }
    
    }
    //% fixedInstance whenUsed block="relay1"
    export const relay1 = new RelayClient("relay1");
}