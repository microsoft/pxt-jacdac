namespace modules {
    /**
     * Indicates that the device acts as a bridge to the Jacdac bus.
     **/
    //% fixedInstances blockGap=8
    export class BridgeClient extends jacdac.Client {

        private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

        constructor(role: string) {
            super(jacdac.SRV_BRIDGE, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.BridgeReg.Enabled, "u8");            
        }
    

        /**
        * Enables or disables the bridge.
        */
        //% callInDebugger
        //% group="Bridge"
        //% block="%bridge enabled"
        //% blockId=jacdac_bridge_enabled___get
        //% weight=100
        enabled(): boolean {
            this.start();            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Enables or disables the bridge.
        */
        //% group="Bridge"
        //% blockId=jacdac_bridge_enabled___set
        //% block="set %bridge %value=toggleOnOff"
        //% weight=99
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }

    
    }
    //% fixedInstance whenUsed block="bridge1"
    export const bridge1 = new BridgeClient("bridge1");
}