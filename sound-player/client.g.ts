namespace modules {
    /**
     * A device that can play various sounds stored locally. This service is typically paired with a ``storage`` service for storing sounds.
     **/
    //% fixedInstances blockGap=8
    export class SoundPlayerClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SOUND_PLAYER, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const soundPlayer = new SoundPlayerClient("sound Player");
}