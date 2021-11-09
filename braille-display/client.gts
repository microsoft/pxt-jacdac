namespace modules {
    /**
     * A Braille pattern display module. This module display [unicode braille patterns](https://www.unicode.org/charts/PDF/U2800.pdf), country specific encoding have to be implemented by the clients.
     **/
    //% fixedInstances blockGap=8
    export class BrailleDisplayClient extends jacdac.Client {

        private readonly _enabled : jacdac.RegisterClient<[boolean]>;
        private readonly _patterns : jacdac.RegisterClient<[string]>;
        private readonly _length : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_BRAILLE_DISPLAY, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.BrailleDisplayReg.Enabled, "u8");
            this._patterns = this.addRegister<[string]>(jacdac.BrailleDisplayReg.Patterns, "s");
            this._length = this.addRegister<[number]>(jacdac.BrailleDisplayReg.Length, "u8");            
        }
    

        /**
        * Determins if the braille display is active.
        */
        //% callInDebugger
        //% group="Display"
        //% block="%brailledisplay enabled"
        //% blockId=jacdac_brailledisplay_enabled___get
        //% weight=100
        enabled(): boolean {
            this.start();            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Determins if the braille display is active.
        */
        //% group="Display"
        //% blockId=jacdac_brailledisplay_enabled___set
        //% block="set %brailledisplay %value=toggleOnOff"
        //% weight=99
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }

        /**
        * Braille patterns to show. Must be unicode characters between `0x2800` and `0x28ff`.
        */
        //% callInDebugger
        //% group="Display"
        //% block="%brailledisplay patterns"
        //% blockId=jacdac_brailledisplay_patterns___get
        //% weight=98
        patterns(): string {
            this.start();            
            const values = this._patterns.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Braille patterns to show. Must be unicode characters between `0x2800` and `0x28ff`.
        */
        //% group="Display"
        //% blockId=jacdac_brailledisplay_patterns___set
        //% block="set %brailledisplay patterns to %value"
        //% weight=97
        setPatterns(value: string) {
            this.start();
            this.enabled = true;
            const values = this._patterns.values as any[];
            values[0] = value;
            this._patterns.values = values as [string];
        }

        /**
        * Gets the number of patterns that can be displayed.
        */
        //% callInDebugger
        //% group="Display"
        //% weight=96
        length(): number {
            this.start();            
            const values = this._length.pauseUntilValues() as any[];
            return values[0];
        }

    
    }
    //% fixedInstance whenUsed block="braille display1"
    export const brailleDisplay1 = new BrailleDisplayClient("braille Display1");
}