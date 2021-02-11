namespace modules {
    /**
     * A 7-segment numeric display, with one or more digits.
     **/
    //% fixedInstances blockGap=8
    export class SevenSegmentDisplayClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SEVEN_SEGMENT_DISPLAY, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const sevenSegmentDisplay = new SevenSegmentDisplayClient("seven Segment Display");
}