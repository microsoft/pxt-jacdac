namespace modules {
    /**
     * Starts the JACDAC bus and looks for modules.
     */
    //% blockId=jacdacmodulesstart block="start modules"
    //% group="Services" weight=0
    export function start() {
        jacdac.start();
    }
}