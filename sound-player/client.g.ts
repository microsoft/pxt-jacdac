namespace modules {
    //% fixedInstances
    export class SoundPlayerClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SOUND_PLAYER, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const soundPlayer = new SoundPlayerClient("sound Player");
}