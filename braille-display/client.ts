namespace modules {
    /**
     * Converts a string from unicode Braille or Braille ASCII to unicode braille
     */
    export function brailify(s: string) {
        if (!s) return ""
        // space char -> unicode character
        const braille_ascii =
            "⠀⠮⠐⠼⠫⠩⠯⠄⠷⠾⠡⠬⠠⠤⠨⠌⠴⠂⠆⠒⠲⠢⠖⠶⠦⠔⠱⠰⠣⠿⠜⠹⠈⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵⠪⠳⠻⠘⠸"
        const a0 = " ".charCodeAt(0)
        const an = braille_ascii.length

        let r = ""
        const su = s.toUpperCase()
        for (let i = 0; i < su.length; ++i) {
            const c = su.charCodeAt(i)
            const ai = c - a0
            if (c >= 0x2800 && c <= 0x28ff) r += String.fromCharCode(c)
            else if (ai < an) r += braille_ascii.charAt(ai)
            else r += ""
        }
        return r
    }

    /**
     * A Braille pattern display module. This module display [unicode braille patterns](https://www.unicode.org/charts/PDF/U2800.pdf), country specific encoding have to be implemented by the clients.
     **/
    //% fixedInstances blockGap=8
    export class BrailleDisplayClient extends jacdac.Client {
        private readonly _enabled: jacdac.RegisterClient<[boolean]>
        private readonly _patterns: jacdac.RegisterClient<[string]>
        private readonly _length: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(jacdac.SRV_BRAILLE_DISPLAY, role)

            this._enabled = this.addRegister<[boolean]>(
                jacdac.BrailleDisplayReg.Enabled,
                jacdac.BrailleDisplayRegPack.Enabled
            )
            this._patterns = this.addRegister<[string]>(
                jacdac.BrailleDisplayReg.Patterns,
                jacdac.BrailleDisplayRegPack.Patterns
            )
            this._length = this.addRegister<[number]>(
                jacdac.BrailleDisplayReg.Length,
                jacdac.BrailleDisplayRegPack.Length,
                jacdac.RegisterClientFlags.Const
            )
        }

        /**
         * Sets the text as Braille ASCII or Unicode Braille characters.
         * Enables the display if needed.
         * @param text Braille ASCII or Unicode Braille characters to display
         */
        //% blockId=jacdac_brailledisplay_set_patterns_text block="show %brailledisplay string %text"
        //% group="Display"
        //% weight=100
        showString(text: string) {
            const brailled = brailify(text)
            this.setPatterns(brailled)
            if (text) this.setEnabled(true)
        }

        /**
         * Displays the number.
         * Enables the display if needed.
         */
        //% blockId=jacdac_brailledisplay_set_patterns_number block="show %brailledisplay number %text"
        //% group="Display"
        //% weight=99
        showNumber(value: number) {
            this.showString(isNaN(value) ? "?" : value.toString())
        }

        /**
         * Determines if the braille display is active.
         */
        //% callInDebugger
        //% group="Display"
        //% block="%brailledisplay enabled"
        //% blockId=jacdac_brailledisplay_enabled___get
        //% weight=90
        enabled(): boolean {
            this.start()
            const values = this._enabled.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Determines if the braille display is active.
         */
        //% group="Display"
        //% blockId=jacdac_brailledisplay_enabled___set
        //% block="set %brailledisplay %value=toggleOnOff"
        //% weight=89
        setEnabled(value: boolean) {
            this.start()
            const values = this._enabled.values as any[]
            values[0] = value ? 1 : 0
            this._enabled.values = values as [boolean]
        }

        /**
         * Braille patterns to show. Must be unicode characters between `0x2800` and `0x28ff`.
         */
        //% callInDebugger
        //% group="Display"
        //% weight=98
        patterns(): string {
            this.start()
            const values = this._patterns.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Braille patterns to show. Must be unicode characters between `0x2800` and `0x28ff`.
         */
        //% group="Display"
        //% weight=97
        setPatterns(value: string) {
            this.start()
            this.setEnabled(true)
            const values = this._patterns.values as any[]
            values[0] = value
            this._patterns.values = values as [string]
        }

        /**
         * Gets the number of patterns that can be displayed.
         */
        //% callInDebugger
        //% group="Display"
        //% weight=96
        length(): number {
            this.start()
            const values = this._length.pauseUntilValues() as any[]
            return values[0]
        }
    }

    //% fixedInstance whenUsed weight=1 block="braille display1"
    export const brailleDisplay1 = new BrailleDisplayClient("braille Display1")

    //% fixedInstance whenUsed weight=2 block="braille display2"
    export const brailleDisplay2 = new BrailleDisplayClient("braille Display2")
}
