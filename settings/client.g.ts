namespace modules {
    //% fixedInstances
    export class SettingsClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SETTINGS, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const settings = new SettingsClient("settings");
}