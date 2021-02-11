namespace modules {
    /**
     * A capacitive touch sensor with multiple inputs.
     **/
    //% fixedInstances blockGap=8
    export class MultitouchClient extends jacdac.SensorClient<[number[]]> {
            

            constructor(role: string) {
            super(jacdac.SRV_MULTITOUCH, role, "r: i32");
            
        }
    

        /**
        * Capacitance of channels. The capacitance is continuously calibrated, and a value of `0` indicates
        * no touch, wheres a value of around `100` or more indicates touch.
        * It's best to ignore this (unless debugging), and use events.
        */
        //% group="Multitouch" blockSetVariable=myModule
        //% blockCombine block="capacitance" callInDebugger
        get capacitance(): number[] {
            const values = this.values() as any[];
            return values[0];
        } 

        /**
         * Emitted when an input is touched.
         */
        //% block="touch" blockSetVariable=myModule
        //% group="Multitouch" blockCombine
        onTouch(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.Touch, handler);
        }
        /**
         * Emitted when an input is no longer touched.
         */
        //% block="release" blockSetVariable=myModule
        //% group="Multitouch" blockCombine
        onRelease(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.Release, handler);
        }
        /**
         * Emitted when an input is briefly touched. TODO Not implemented.
         */
        //% block="tap" blockSetVariable=myModule
        //% group="Multitouch" blockCombine
        onTap(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.Tap, handler);
        }
        /**
         * Emitted when an input is touched for longer than 500ms. TODO Not implemented.
         */
        //% block="long press" blockSetVariable=myModule
        //% group="Multitouch" blockCombine
        onLongPress(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.LongPress, handler);
        }
        /**
         * Emitted when input channels are successively touched in order of increasing channel numbers.
         */
        //% block="swipe pos" blockSetVariable=myModule
        //% group="Multitouch" blockCombine
        onSwipePos(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.SwipePos, handler);
        }
        /**
         * Emitted when input channels are successively touched in order of decreasing channel numbers.
         */
        //% block="swipe neg" blockSetVariable=myModule
        //% group="Multitouch" blockCombine
        onSwipeNeg(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.SwipeNeg, handler);
        }
    }
    //% fixedInstance whenUsed
    export const multitouch = new MultitouchClient("multitouch");
}