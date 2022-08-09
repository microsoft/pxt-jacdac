namespace modules {
    /**
     * A satellite-based navigation system like GPS, Gallileo, ...
     **/
    //% fixedInstances blockGap=8
    export class SatNavClient extends jacdac.SensorClient {
        private readonly _enabled: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(jacdac.SRV_SAT_NAV, role, jacdac.SatNavRegPack.Position)

            this._enabled = this.addRegister<[boolean]>(
                jacdac.SatNavReg.Enabled,
                jacdac.SatNavRegPack.Enabled
            )
        }

        /**
         * Reported coordinates, geometric altitude and time of position. Altitude accuracy is 0 if not available.
         */
        //% callInDebugger
        //% group="Satellite Navigation System"
        //% block="%satelittenavigationsystem timestamp (ms)"
        //% blockId=jacdac_satelittenavigationsystem_position_timestamp_get
        //% weight=100
        timestamp(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[0]
        }

        /**
         * Reported coordinates, geometric altitude and time of position. Altitude accuracy is 0 if not available.
         */
        //% callInDebugger
        //% group="Satellite Navigation System"
        //% block="%satelittenavigationsystem latitude (lat)"
        //% blockId=jacdac_satelittenavigationsystem_position_latitude_get
        //% weight=99
        latitude(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[1]
        }

        /**
         * Reported coordinates, geometric altitude and time of position. Altitude accuracy is 0 if not available.
         */
        //% callInDebugger
        //% group="Satellite Navigation System"
        //% block="%satelittenavigationsystem longitude (lon)"
        //% blockId=jacdac_satelittenavigationsystem_position_longitude_get
        //% weight=98
        longitude(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[2]
        }

        /**
         * Reported coordinates, geometric altitude and time of position. Altitude accuracy is 0 if not available.
         */
        //% callInDebugger
        //% group="Satellite Navigation System"
        //% block="%satelittenavigationsystem accuracy (m)"
        //% blockId=jacdac_satelittenavigationsystem_position_accuracy_get
        //% weight=97
        accuracy(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[3]
        }

        /**
         * Reported coordinates, geometric altitude and time of position. Altitude accuracy is 0 if not available.
         */
        //% callInDebugger
        //% group="Satellite Navigation System"
        //% block="%satelittenavigationsystem altitude (m)"
        //% blockId=jacdac_satelittenavigationsystem_position_altitude_get
        //% weight=96
        altitude(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[4]
        }

        /**
         * Reported coordinates, geometric altitude and time of position. Altitude accuracy is 0 if not available.
         */
        //% callInDebugger
        //% group="Satellite Navigation System"
        //% block="%satelittenavigationsystem altitude Accuracy (m)"
        //% blockId=jacdac_satelittenavigationsystem_position_altitudeAccuracy_get
        //% weight=95
        altitudeAccuracy(): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return values[5]
        }

        /**
         * Enables or disables the GPS module
         */
        //% callInDebugger
        //% group="Satellite Navigation System"
        //% block="%satelittenavigationsystem enabled"
        //% blockId=jacdac_satelittenavigationsystem_enabled___get
        //% weight=94
        enabled(): boolean {
            this.start()
            const values = this._enabled.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Enables or disables the GPS module
         */
        //% group="Satellite Navigation System"
        //% blockId=jacdac_satelittenavigationsystem_enabled___set
        //% block="set %satelittenavigationsystem %value=toggleOnOff"
        //% weight=93
        setEnabled(value: boolean) {
            this.start()
            const values = this._enabled.values as any[]
            values[0] = value ? 1 : 0
            this._enabled.values = values as [boolean]
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Satellite Navigation System"
        //% blockId=jacdac_on_satelittenavigationsystem_event
        //% block="on %satelittenavigationsystem %event"
        //% weight=92
        onEvent(ev: jacdac.SatNavEvent, handler: () => void): void {
            this.registerEvent(ev, handler)
        }

        /**
         * The module is disabled or lost connection with satellites.
         */
        //% group="Satellite Navigation System"
        //% weight=91
        onInactive(handler: () => void): void {
            this.registerEvent(jacdac.SatNavEvent.Inactive, handler)
        }
    }

    //% fixedInstance whenUsed weight=1 block="sat nav1"
    export const satNav1 = new SatNavClient("sat Nav1")
}
