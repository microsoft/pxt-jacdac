namespace modules {
    /**
     * A screen that displays characters.
     **/
    //% fixedInstances blockGap=8
    export class CharacterScreenClient extends jacdac.Client {

            private readonly _brightness : jacdac.RegisterClient<[number]>;
            private readonly _message : jacdac.RegisterClient<[string]>;            

            constructor(role: string) {
            super(jacdac.SRV_CHARACTER_SCREEN, role);

            this._brightness = this.addRegister<[number]>(jacdac.CharacterScreenReg.Brightness, "u0.8");
            this._message = this.addRegister<[string]>(jacdac.CharacterScreenReg.Message, "s");            
        }
    

        /**
        * Brightness of the screen. `0` means off.
        */
        //% blockId=jacdac_characterscreen_brightness___get
        //% group="Character Screen"
        //% block="%characterscreen brightness" callInDebugger
        brightness(): number {            
            const values = this._brightness.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Brightness of the screen. `0` means off.
        */
        //% blockId=jacdac_characterscreen_brightness___set
        //% group="Character Screen" value.min=0 value.max=1
        //% block="set %characterscreen brightness to %value"
        setBrightness(value: number) {
            this.start();
            const values = this._brightness.values as any[];
            values[0] = value;
            this._brightness.values = values as [number];
        }
        /**
        * Text to show. Use `\n` to break lines.
        */
        //% blockId=jacdac_characterscreen_message___get
        //% group="Character Screen"
        //% block="%characterscreen message" callInDebugger
        message(): string {            
            const values = this._message.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Text to show. Use `\n` to break lines.
        */
        //% blockId=jacdac_characterscreen_message___set
        //% group="Character Screen"
        //% block="set %characterscreen message to %value"
        setMessage(value: string) {
            this.start();
            const values = this._message.values as any[];
            values[0] = value;
            this._message.values = values as [string];
        } 

    }
    //% fixedInstance whenUsed
    export const characterScreen = new CharacterScreenClient("character Screen");
}