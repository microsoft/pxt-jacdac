namespace modules {
    /**
     * Connects to any JACDAC modules.
     */
    //% blockId=jacdacmodulesstart block="connect modules"
    export function connect() {
        jacdac.start();
    }
}