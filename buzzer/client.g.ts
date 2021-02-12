namespace modules {
    /**
     * A simple buzzer.
     **/
    //% fixedInstances blockGap=8
    export class BuzzerClient extends jacdac.Client {

            private readonly _volume : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_BUZZER, role);

            this._volume = this.addRegister<[number]>(jacdac.BuzzerReg.Volume, "u0.8");            
        }
    

        /**
        * The volume (duty cycle) of the buzzer.
        */
        //% blockId=jacdac_buzzer_volume___get
        //% group="Sound"
        //% block="%buzzer volume" callInDebugger
        volume(): number {            
            const values = this._volume.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * The volume (duty cycle) of the buzzer.
        */
        //% blockId=jacdac_buzzer_volume___set
        //% group="Sound" value.min=0 value.max=1 value.defl=1
        //% block="set %buzzer volume to %value"
        setVolume(value: number) {
            this.start();
            const values = this._volume.values as any[];
            values[0] = value;
            this._volume.values = values as [number];
        } 

    }
    //% fixedInstance whenUsed
    export const buzzer = new BuzzerClient("buzzer");
}