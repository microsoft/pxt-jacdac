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
        //% group="Buzzer" blockSetVariable=myModule
        //% blockCombine block="volume" callInDebugger
        get volume(): number {
            const values = this._volume.values() as any[];
            return values[0];
        }
        /**
        * The volume (duty cycle) of the buzzer.
        */
        //% group="Buzzer" blockSetVariable=myModule
        //% blockCombine block="volume" callInDebugger
        set volume(value: number) {
            const values = this._volume.values() as any[];
            values[0] = value;
            this._volume.setValues(values as [number]);
        } 

    }
    //% fixedInstance whenUsed
    export const buzzer = new BuzzerClient("buzzer");
}