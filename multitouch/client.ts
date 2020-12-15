namespace jacdac {
    /**
     * A client of multiple buttons
     */
    export class MultiTouchClient extends jacdac.SensorClient {
        constructor(requiredDevice: string = null) {
            super("multitouch", jacdac.SRV_MULTITOUCH, requiredDevice);
        }

        /**
         * Reads the current capacitance
         */
        //% blockId=jdmultitouchvalue block="jacdac %button value"
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
        //% blockId=jdmulittouchevent block="jacdac %client on %event"
        //% group="Touch"
        onEvent(event: jacdac.MultitouchEvent, handler: (idx: number) => void) {
            this.registerHandler(event, handler);
        }
    }
}
namespace modules {
    //% fixedInstance whenUsed
    export const multiTouch = new jacdac.MultiTouchClient();
}
