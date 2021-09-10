namespace modules {
    /**
     * Non-volatile key-value storage interface for storing settings.
     **/
    //% fixedInstances blockGap=8
    export class SettingsClient extends jacdac.Client {
            

        constructor(role: string) {
            super(jacdac.SRV_SETTINGS, role);
            
        }
    

        /**
         * Notifies that some setting have been modified.
         */
        //% group="Settings"
        //% blockId=jacdac_on_settings_change
        //% block="on %settings change"
        //% weight=100
        onChange(handler: () => void): void {
            this.registerEvent(jacdac.SettingsEvent.Change, handler);
        }

        /**
        * Get the value of given setting. If no such entry exists, the value returned is empty.
        */
        //% group="Settings"
        //% blockId=jacdac_settings_get_cmd
        //% block="%settings get $key"
        //% weight=99
        get(key: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.SettingsCmd.Get, "s", [key]))
        }
    
    }
    //% fixedInstance whenUsed block="settings 1"
    export const settings1 = new SettingsClient("settings1");
}