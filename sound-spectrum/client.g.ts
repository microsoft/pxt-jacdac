namespace modules {
    /**
     * A microphone that analyzes the sound specturm
     **/
    //% fixedInstances blockGap=8
    export class SoundSpectrumClient extends jacdac.SensorClient<[Buffer]> {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_SOUND_SPECTRUM, role, "b");

            this._enabled = this.addRegister<[boolean]>(jacdac.SoundSpectrumReg.Enabled, "u8");            
        }
    

        /**
        * The computed frequency data.
        */
        //% blockId=jacdac_soundspectrum_frequency_bins___get
        //% group="Sound"
        //% block="%soundspectrum frequency bins" callInDebugger
        frequencyBins(): Buffer {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Turns on/off the micropohone.
        */
        //% blockId=jacdac_soundspectrum_enabled___get
        //% group="Sound"
        //% block="%soundspectrum enabled" callInDebugger
        enabled(): boolean {            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }
        /**
        * Turns on/off the micropohone.
        */
        //% blockId=jacdac_soundspectrum_enabled___set
        //% group="Sound"
        //% block="set %soundspectrum %value=toggleOnOff"
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        } 

    }
    //% fixedInstance whenUsed
    export const soundSpectrum = new SoundSpectrumClient("sound Spectrum");
}