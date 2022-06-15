namespace modules {
    /**
     * A switching relay.
     *
     * The contacts should be labelled `NO` (normally open), `COM` (common), and `NC` (normally closed).
     * When relay is energized it connects `NO` and `COM`.
     * When relay is not energized it connects `NC` and `COM`.
     * Some relays may be missing `NO` or `NC` contacts.
     * When relay module is not powered, or is in bootloader mode, it is not energized (connects `NC` and `COM`).
     **/
    //% fixedInstances blockGap=8
    export class RelayClient extends jacdac.Client {
        private readonly _active: jacdac.RegisterClient<[boolean]>
        private readonly _variant: jacdac.RegisterClient<[jacdac.RelayVariant]>
        private readonly _maxSwitchingCurrent: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(jacdac.SRV_RELAY, role)

            this._active = this.addRegister<[boolean]>(
                jacdac.RelayReg.Active,
                jacdac.RelayRegPack.Active
            )
            this._variant = this.addRegister<[jacdac.RelayVariant]>(
                jacdac.RelayReg.Variant,
                jacdac.RelayRegPack.Variant,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
            this._maxSwitchingCurrent = this.addRegister<[number]>(
                jacdac.RelayReg.MaxSwitchingCurrent,
                jacdac.RelayRegPack.MaxSwitchingCurrent,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Indicates whether the relay circuit is currently energized or not.
         */
        //% callInDebugger
        //% group="Relay"
        //% block="%relay active"
        //% blockId=jacdac_relay_active___get
        //% weight=100
        active(): boolean {
            this.start()
            const values = this._active.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Indicates whether the relay circuit is currently energized or not.
         */
        //% group="Relay"
        //% blockId=jacdac_relay_active___set
        //% block="set %relay active to %value"
        //% weight=99
        setActive(value: boolean) {
            this.start()
            const values = this._active.values as any[]
            values[0] = value ? 1 : 0
            this._active.values = values as [boolean]
        }

        /**
         * Describes the type of relay used.
         */
        //% callInDebugger
        //% group="Relay"
        //% weight=98
        variant(): jacdac.RelayVariant {
            this.start()
            const values = this._variant.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Maximum switching current for a resistive load.
         */
        //% callInDebugger
        //% group="Relay"
        //% weight=97
        maxSwitchingCurrent(): number {
            this.start()
            const values = this._maxSwitchingCurrent.pauseUntilValues() as any[]
            return values[0]
        }
    }

    //% fixedInstance whenUsed weight=1 block="relay1"
    export const relay1 = new RelayClient("relay1")
}
