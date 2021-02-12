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
        //% blockId=jacdac_multitouch_capacity_capacitance_get
        //% group="Button"
        //% block="%multitouch capacitance" callInDebugger
        capacitance(): number[] {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        } 

        /**
         * Emitted when an input is touched.
         */
        //% blockId=jacdac_on_multitouch_touch
        //% block="touch" blockSetVariable=myModule
        //% group="Button"
        onTouch(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.Touch, handler);
        }
        /**
         * Emitted when an input is no longer touched.
         */
        //% blockId=jacdac_on_multitouch_release
        //% block="release" blockSetVariable=myModule
        //% group="Button"
        onRelease(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.Release, handler);
        }
        /**
         * Emitted when an input is briefly touched. TODO Not implemented.
         */
        //% blockId=jacdac_on_multitouch_tap
        //% block="tap" blockSetVariable=myModule
        //% group="Button"
        onTap(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.Tap, handler);
        }
        /**
         * Emitted when an input is touched for longer than 500ms. TODO Not implemented.
         */
        //% blockId=jacdac_on_multitouch_long_press
        //% block="long press" blockSetVariable=myModule
        //% group="Button"
        onLongPress(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.LongPress, handler);
        }
        /**
         * Emitted when input channels are successively touched in order of increasing channel numbers.
         */
        //% blockId=jacdac_on_multitouch_swipe_pos
        //% block="swipe pos" blockSetVariable=myModule
        //% group="Button"
        onSwipePos(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.SwipePos, handler);
        }
        /**
         * Emitted when input channels are successively touched in order of decreasing channel numbers.
         */
        //% blockId=jacdac_on_multitouch_swipe_neg
        //% block="swipe neg" blockSetVariable=myModule
        //% group="Button"
        onSwipeNeg(handler: () => void) {
            this.registerEvent(jacdac.MultitouchEvent.SwipeNeg, handler);
        }
    }
    //% fixedInstance whenUsed
    export const multitouch = new MultitouchClient("multitouch");
}