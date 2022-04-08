namespace modules {
    /**
     * A capacitive touch sensor with multiple inputs.
     **/
    //% fixedInstances blockGap=8
    export class MultitouchClient extends jacdac.SensorClient {
            

        constructor(role: string) {
            super(jacdac.SRV_MULTITOUCH, role, "r: i16");
            
        }
    

        /**
        * Capacitance of channels. The capacitance is continuously calibrated, and a value of `0` indicates
        * no touch, wheres a value of around `100` or more indicates touch.
        * It's best to ignore this (unless debugging), and use events.
        * 
        * Digital sensors will use `0` or `0xffff` on each channel.
        */
        //% callInDebugger
        //% group="Button"
        //% block="%multitouch capacitance"
        //% blockId=jacdac_multitouch_capacity_capacitance_get
        //% weight=100
        capacitance(): number[] {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Button"
        //% blockId=jacdac_on_multitouch_event
        //% block="on %multitouch %event"
        //% weight=99
        onEvent(ev: jacdac.MultitouchEvent, handler: () => void): void {
            this.registerEvent(ev, handler);
        }

        /**
         * Emitted when an input is touched.
         */
        //% group="Button"
        //% weight=98
        onTouch(handler: () => void): void {
            this.registerEvent(jacdac.MultitouchEvent.Touch, handler);
        }
        /**
         * Emitted when an input is no longer touched.
         */
        //% group="Button"
        //% weight=97
        onRelease(handler: () => void): void {
            this.registerEvent(jacdac.MultitouchEvent.Release, handler);
        }
        /**
         * Emitted when an input is briefly touched. TODO Not implemented.
         */
        //% group="Button"
        //% weight=96
        onTap(handler: () => void): void {
            this.registerEvent(jacdac.MultitouchEvent.Tap, handler);
        }
        /**
         * Emitted when an input is touched for longer than 500ms. TODO Not implemented.
         */
        //% group="Button"
        //% weight=95
        onLongPress(handler: () => void): void {
            this.registerEvent(jacdac.MultitouchEvent.LongPress, handler);
        }
        /**
         * Emitted when input channels are successively touched in order of increasing channel numbers.
         */
        //% group="Button"
        //% weight=94
        onSwipePos(handler: () => void): void {
            this.registerEvent(jacdac.MultitouchEvent.SwipePos, handler);
        }
        /**
         * Emitted when input channels are successively touched in order of decreasing channel numbers.
         */
        //% group="Button"
        //% weight=93
        onSwipeNeg(handler: () => void): void {
            this.registerEvent(jacdac.MultitouchEvent.SwipeNeg, handler);
        }
    
    }
    //% fixedInstance whenUsed block="multitouch1"
    export const multitouch1 = new MultitouchClient("multitouch1");
}