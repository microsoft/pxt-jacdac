namespace modules {
    //% fixedInstances
    //% blockGap=8
    export class PotentiometerClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_POTENTIOMETER, role, "u0.16");
        }

        /**
         * Gets the position of the slider between 0 and 1
         */
        //% blockId=jacdacsliderposition block="%slider position"
        //% group="Slider"
        get position(): number {
            if (!this.started) {
                this.setStreaming(true, 100)
            }

            const [value = 0] = this._reading.values;
            return value;
        }
    }

    /**
     * Default slider
     */
    //% fixedInstance whenUsed
    export const potentiometer = new PotentiometerClient("potentiometer");
}