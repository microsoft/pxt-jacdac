namespace modules {
    //% fixedInstances
    export class SliderClient extends jacdac.SensorClient {
        constructor(requiredDevice: string = null) {
            super("slider", jacdac.SRV_SLIDER, requiredDevice);
        }

        /**
         * Gets the position of the slider
         */
        //% blockId=jacdacsliderposition block="jacdac %slider position"
        //% group="Slider"
        get position(): number {
            if (!this.started) {
                this.setStreaming(true, 100)
            }
            if (!this.state || this.state.length < 2)
                return 0
            const v = this.state.getNumber(NumberFormat.UInt16LE, 0)
            return v / 0x10000
        }
    }

    /**
     * Default slider
     */
    //% fixedInstance
    export const slider = new SliderClient();
}