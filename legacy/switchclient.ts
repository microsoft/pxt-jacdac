namespace jacdac {
    //% fixedInstances
    export class SwitchClient extends SensorClient {
        constructor(role: string) {
            super("switch", SRV_SWITCH, role);
        }

        /**
         * Reads the current x value from the sensor
         */
        //% blockId=jacdacswitchright block="%switch right"
        //% group="Switch"
        right(): boolean {
            const s = this.state;
            if (!s || s.length < 1) return false;
            return !!s.getNumber(NumberFormat.UInt8LE, 0);
        }

        /**
         * Runs code when an event happens on the sensor
         * @param gesture 
         * @param handler 
         */
        //% blockId=jacdacswitchonevent block="on %switch %event"
        //% group="Switch"
        onEvent(event: SwitchDirection, handler: () => void) {
            this.registerEvent(event, handler);
        }
    }

    //% fixedInstance whenUsed block="switch client"
    export const switchClient = new SwitchClient();
}