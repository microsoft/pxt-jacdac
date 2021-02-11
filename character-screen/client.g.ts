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
        //% group="Character Screen" blockSetVariable=myModule
        //% blockCombine block="brightness" callInDebugger
        get brightness(): number {
            this._brightness.pauseUntilValues();
            const values = this._brightness.values as any[];
            return values[0];
        }
        /**
        * Brightness of the screen. `0` means off.
        */
        //% group="Character Screen" blockSetVariable=myModule
        //% blockCombine block="brightness" callInDebugger
        set brightness(value: number) {
            const values = this._brightness.values as any[];
            values[0] = value;
            this._brightness.values = values as [number];
        }
        /**
        * Text to show. Use `\n` to break lines.
        */
        //% group="Character Screen" blockSetVariable=myModule
        //% blockCombine block="message" callInDebugger
        get message(): string {
            this._message.pauseUntilValues();
            const values = this._message.values as any[];
            return values[0];
        }
        /**
        * Text to show. Use `\n` to break lines.
        */
        //% group="Character Screen" blockSetVariable=myModule
        //% blockCombine block="message" callInDebugger
        set message(value: string) {
            const values = this._message.values as any[];
            values[0] = value;
            this._message.values = values as [string];
        } 

    }
    //% fixedInstance whenUsed
    export const characterScreen = new CharacterScreenClient("character Screen");
}