namespace modules {
    /**
     * Real time clock to support collecting data with precise time stamps.
     **/
    //% fixedInstances blockGap=8
    export class RealTimeClockClient extends jacdac.SensorClient<[number,number,number,number,number,number,number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_REAL_TIME_CLOCK, role, "u16 u8 u8 u8 u8 u8 u8");
            
        }
    

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="year" callInDebugger
        get year(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[0];
        }
        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="month" callInDebugger
        get month(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[1];
        }
        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="day of month" callInDebugger
        get dayOfMonth(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[2];
        }
        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="day of week" callInDebugger
        get dayOfWeek(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[3];
        }
        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="hour" callInDebugger
        get hour(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[4];
        }
        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="min" callInDebugger
        get min(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[5];
        }
        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="sec" callInDebugger
        get sec(): number {
            this._reading.pauseUntilValues();
            const values = this._reading.values as any[];
            return values[6];
        } 

    }
    //% fixedInstance whenUsed
    export const realTimeClock = new RealTimeClockClient("real Time Clock");
}