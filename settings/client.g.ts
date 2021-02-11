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
        //% blockId=jacdac_on_settings_change
        //% block="change" blockSetVariable=myModule
        //% group="Settings"
        onChange(handler: () => void) {
            this.registerEvent(jacdac.SettingsEvent.Change, handler);
        }
    }
    //% fixedInstance whenUsed
    export const settings = new SettingsClient("settings");
}