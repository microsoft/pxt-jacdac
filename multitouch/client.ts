namespace modules {
    /**
     * A client of multiple buttons
     */
    //% fixedInstances
    //% blockGap=8
    export class MultiTouchClient extends jacdac.SensorClient {
        constructor(requiredDevice: string) {
            super(jacdac.SRV_MULTITOUCH, requiredDevice);
        }

        /**
         * Reads the current capacitance
         */
        //% blockId=jdmultitouchvalue block="%multiTouch value at $index"
        //% group="Touch"
        value(index: number): number {
            const s = this.state;
            if (!s || s.length + 1 < 2 * index) return -1;
            return s.getNumber(NumberFormat.UInt16LE, index * 2);
        }

        /**
         * Runs code when an event happens on the sensor
         * @param gesture 
         * @param handler 
         */
        //% blockId=jdmulittouchevent block="on %multiTouch $event at"
        //% group="Touch"
        onEvent(event: jacdac.MultitouchEvent, handler: (index: number) => void) {
            this.registerHandler(event, handler);
        }
    }

    //% fixedInstance whenUsed
    export const multiTouch = new MultiTouchClient("multitouch");
}
