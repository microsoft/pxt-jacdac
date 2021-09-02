namespace modules {
    /**
     * A service for configuring how Jacdac device map to HID input events. Users can have multiple configurations and swap between them by writing to `current_configuration`.
     **/
    //% fixedInstances blockGap=8
    export class HIDAdapterClient extends jacdac.Client {

        private readonly _numConfigurations : jacdac.RegisterClient<[number]>;
        private readonly _currentConfiguration : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_H_IDADAPTER, role);

            this._numConfigurations = this.addRegister<[number]>(jacdac.HIDAdapterReg.NumConfigurations, "u8");
            this._currentConfiguration = this.addRegister<[number]>(jacdac.HIDAdapterReg.CurrentConfiguration, "u8");            
        }
    

        /**
        * The number of configurations stored on the server.
        */
        //% callInDebugger
        //% group="HID Adapter"
        //% weight=100
        numConfigurations(): number {
            this.start();            
            const values = this._numConfigurations.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The number of configurations stored on the server.
        */
        //% group="HID Adapter"
        //% weight=99
        //% value.min=0
        //% value.max=255
        setNumConfigurations(value: number) {
            this.start();
            const values = this._numConfigurations.values as any[];
            values[0] = value;
            this._numConfigurations.values = values as [number];
        }

        /**
        * The current configuration the server is using.
        */
        //% callInDebugger
        //% group="HID Adapter"
        //% weight=98
        currentConfiguration(): number {
            this.start();            
            const values = this._currentConfiguration.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The current configuration the server is using.
        */
        //% group="HID Adapter"
        //% weight=97
        //% value.min=0
        //% value.max=255
        setCurrentConfiguration(value: number) {
            this.start();
            const values = this._currentConfiguration.values as any[];
            values[0] = value;
            this._currentConfiguration.values = values as [number];
        }

        /**
         * Event that notifies clients that the server has swapped to a new configuration or changed key bindings.
         */
        //% group="HID Adapter"
        //% blockId=jacdac_on_hidadapter_changed
        //% block="on %hidadapter changed"
        //% weight=96
        onChanged(handler: () => void): void {
            this.registerEvent(jacdac.HIDAdapterEvent.Changed, handler);
        }

        /**
        * Stores the given binding on the server. If a binding exists at this index, the new binding will replace it.
        */
        //% group="HID Adapter"
        //% blockId=jacdac_hidadapter_set_binding_cmd
        //% block="%hidadapter set binding"
        //% weight=95
        setBinding(configurationNumber: number, bindingIndex: number, padding: number, deviceId: number, serviceClass: number, triggerValue: number, triggerContext: number, serviceIndex: number, selector: number, modifiers: undefined): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.HIDAdapterCmd.SetBinding, "u8 u8 b[2] u64 u32 u32 u8 u8 u16 u16", [configurationNumber, bindingIndex, padding, deviceId, serviceClass, triggerValue, triggerContext, serviceIndex, selector, modifiers]))
        }

        /**
        * Clears a specific binding stored on the device.
        */
        //% group="HID Adapter"
        //% blockId=jacdac_hidadapter_clear_binding_cmd
        //% block="%hidadapter clear binding"
        //% weight=94
        clearBinding(configurationNumber: number, bindingIndex: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.HIDAdapterCmd.ClearBinding, "u8 u8", [configurationNumber, bindingIndex]))
        }

        /**
        * Clears a specific configuration stored on the device.
        */
        //% group="HID Adapter"
        //% blockId=jacdac_hidadapter_clear_configuration_cmd
        //% block="%hidadapter clear configuration"
        //% weight=93
        clearConfiguration(configurationNumber: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.HIDAdapterCmd.ClearConfiguration, "u8", [configurationNumber]))
        }

        /**
        * Clears all configurations and bindings stored on the device.
        */
        //% group="HID Adapter"
        //% blockId=jacdac_hidadapter_clear_cmd
        //% block="%hidadapter clear"
        //% weight=92
        clear(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.HIDAdapterCmd.Clear))
        }
    
    }
    //% fixedInstance whenUsed block="h idadapter 1"
    export const hIDAdapter1 = new HIDAdapterClient("h IDAdapter1");
}