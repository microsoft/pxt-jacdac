namespace modules {
    /**
     * Senses RGB colors
     **/
    //% fixedInstances blockGap=8
    export class ColorClient extends jacdac.SensorClient<[number,number,number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_COLOR, role, "u0.16 u0.16 u0.16");
            
        }
    

        /**
        * Detected color in the RGB color space.
        */
        //% group="Color" blockSetVariable=myModule
        //% blockCombine block="red" callInDebugger
        get red(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Detected color in the RGB color space.
        */
        //% group="Color" blockSetVariable=myModule
        //% blockCombine block="green" callInDebugger
        get green(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        }
        /**
        * Detected color in the RGB color space.
        */
        //% group="Color" blockSetVariable=myModule
        //% blockCombine block="blue" callInDebugger
        get blue(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[2];
        } 

    }
    //% fixedInstance whenUsed
    export const color = new ColorClient("color");
}