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
        //% blockId=jacdac_color_color_red_get
        //% group="Color"
        //% block="%color red" callInDebugger
        red(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * Detected color in the RGB color space.
        */
        //% blockId=jacdac_color_color_green_get
        //% group="Color"
        //% block="%color green" callInDebugger
        green(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        }
        /**
        * Detected color in the RGB color space.
        */
        //% blockId=jacdac_color_color_blue_get
        //% group="Color"
        //% block="%color blue" callInDebugger
        blue(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[2];
        } 

    }
    //% fixedInstance whenUsed
    export const color = new ColorClient("color");
}