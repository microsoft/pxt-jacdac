namespace modules {
    //% fixedInstances
    export class CharacterScreenClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_CHARACTER_SCREEN, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const characterScreen = new CharacterScreenClient("character Screen");
}