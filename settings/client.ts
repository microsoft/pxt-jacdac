namespace modules {
    /**
     * Persistent key-value storage interface for storing settings.
     **/
    //% fixedInstances blockGap=8
    export class SettingsClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SETTINGS, role)
        }

        /**
         * Notifies that some setting have been modified.
         */
        //% group="Settings"
        //% weight=100
        onChange(handler: () => void): void {
            this.registerEvent(jacdac.SettingsEvent.Change, handler)
        }

        /**
         * Get the value of given setting. If no such entry exists, the value returned is empty.
         */
        //% group="Settings"
        //% weight=99
        get(key: string): void {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(jacdac.SettingsCmd.Get, "s", [key])
            )
        }
    }
    //% fixedInstance whenUsed
    export const settings = new SettingsClient("settings")
}
