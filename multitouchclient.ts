const enum JDMultiTouchEvent {
    //% block="swipe positive"
    SwipePos = 0x10,
    //% block="swipe negative"
    SwipeNeg = 0x11,
    //% block=""
    Tap = 3,
    //% block="long press"
    LongPress = 4,
    //% block="release"
    Release = 2,
    //% block="touch"
    Touch = 1,
}


namespace jacdac {
    /**
     * A client of multiple buttons
     */
    export class MultiTouchClient extends SensorClient {
        constructor(requiredDevice: string = null) {
            super("multitouch", SRV_MULTITOUCH, requiredDevice);
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
        onEvent(event: JDMultiTouchEvent, handler: (idx: number) => void) {
            this.registerHandler(event, handler);
        }
    }

    //% fixedInstance whenUsed block="multi touch client"
    export const multiTouchClient = new MultiTouchClient();
}
