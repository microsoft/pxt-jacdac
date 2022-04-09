namespace modules {
    /**
     * Non-volatile key-value storage interface for storing settings.
     **/
    //% fixedInstances blockGap=8
    export class SettingsClient extends jacdac.Client {
            

        constructor(role: string) {
            super(jacdac.SRV_SETTINGS, role)
            
        }
    

        /**
         * Register code to run when an event is raised
         */
        //% group="Settings"
        //% blockId=jacdac_on_settings_event
        //% block="on %settings %event"
        //% weight=100
        onEvent(ev: jacdac.SettingsEvent, handler: () => void): void {
            this.registerEvent(ev, handler);
        }

        /**
         * Notifies that some setting have been modified.
         */
        //% group="Settings"
        //% weight=99
        onChange(handler: () => void): void {
            this.registerEvent(jacdac.SettingsEvent.Change, handler);
        }

        /**
        * Get the value of given setting. If no such entry exists, the value returned is empty.
        */
        //% group="Settings"
        //% blockId=jacdac_settings_get_cmd
        //% block="%settings get $key"
        //% weight=98
        get(key: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.SettingsCmd.Get, "s", [key]))
        }
    
    }
    //% fixedInstance whenUsed weight=1 block="settings1"
    export const settings1 = new SettingsClient("settings1");
}