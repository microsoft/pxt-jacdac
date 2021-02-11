namespace modules {
    /**
     * A device that can play various sounds stored locally. This service is typically paired with a ``storage`` service for storing sounds.
     **/
    //% fixedInstances blockGap=8
    export class SoundPlayerClient extends jacdac.Client {

            private readonly _volume : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_SOUND_PLAYER, role);

            this._volume = this.addRegister<[number]>(jacdac.SoundPlayerReg.Volume, "u0.16");            
        }
    

        /**
        * Global volume of the output. ``0`` means completely off. This volume is mixed with each play volumes.
        */
        //% group="Sound player" blockSetVariable=myModule
        //% blockCombine block="volume" callInDebugger
        get volume(): number {            
            const values = this._volume.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Global volume of the output. ``0`` means completely off. This volume is mixed with each play volumes.
        */
        //% group="Sound player" blockSetVariable=myModule
        //% blockCombine block="volume" callInDebugger
        set volume(value: number) {
            const values = this._volume.values as any[];
            values[0] = value;
            this._volume.values = values as [number];
        } 

    }
    //% fixedInstance whenUsed
    export const soundPlayer = new SoundPlayerClient("sound Player");
}