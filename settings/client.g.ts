namespace modules {
    /**
     * Non-volatile key-value storage interface for storing settings.
     **/
    //% fixedInstances blockGap=8
    export class SettingsClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SETTINGS, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const settings = new SettingsClient("settings");
}