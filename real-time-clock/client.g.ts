namespace modules {
    /**
     * Real time clock to support collecting data with precise time stamps.
     **/
    //% fixedInstances blockGap=8
    export class RealTimeClockClient extends jacdac.SensorClient<[number,number,number,number,number,number,number]> {

            private readonly _error : jacdac.RegisterClient<[number]>;
            private readonly _precision : jacdac.RegisterClient<[number]>;
            private readonly _variant : jacdac.RegisterClient<[jacdac.RealTimeClockVariant]>;            

            constructor(role: string) {
            super(jacdac.SRV_REAL_TIME_CLOCK, role, "u16 u8 u8 u8 u8 u8 u8");

            this._error = this.addRegister<[number]>(jacdac.RealTimeClockReg.Error, "u16.16");
            this._precision = this.addRegister<[number]>(jacdac.RealTimeClockReg.Precision, "u16.16");
            this._variant = this.addRegister<[jacdac.RealTimeClockVariant]>(jacdac.RealTimeClockReg.Variant, "u8");            
        }
    

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% callInDebugger
        //% group="Real time clock"
        //% block="%realtimeclock year"
        //% blockId=jacdac_realtimeclock_local_time_year_get
        year(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% callInDebugger
        //% group="Real time clock"
        //% block="%realtimeclock month"
        //% blockId=jacdac_realtimeclock_local_time_month_get
        month(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% callInDebugger
        //% group="Real time clock"
        //% block="%realtimeclock day of month"
        //% blockId=jacdac_realtimeclock_local_time_day_of_month_get
        dayOfMonth(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[2];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% callInDebugger
        //% group="Real time clock"
        //% block="%realtimeclock day of week"
        //% blockId=jacdac_realtimeclock_local_time_day_of_week_get
        dayOfWeek(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[3];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% callInDebugger
        //% group="Real time clock"
        //% block="%realtimeclock hour"
        //% blockId=jacdac_realtimeclock_local_time_hour_get
        hour(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[4];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% callInDebugger
        //% group="Real time clock"
        //% block="%realtimeclock min"
        //% blockId=jacdac_realtimeclock_local_time_min_get
        min(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[5];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% callInDebugger
        //% group="Real time clock"
        //% block="%realtimeclock sec"
        //% blockId=jacdac_realtimeclock_local_time_sec_get
        sec(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[6];
        }

        /**
        * Time drift since the last call to the ``set_time`` command.
        */
        //% callInDebugger
        //% group="Real time clock"
        error(): number {
            this.start();            
            const values = this._error.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Error on the clock, in parts per million of seconds.
        */
        //% callInDebugger
        //% group="Real time clock"
        precision(): number {
            this.start();            
            const values = this._precision.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The type of physical clock used by the sensor.
        */
        //% callInDebugger
        //% group="Real time clock"
        variant(): jacdac.RealTimeClockVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    }
    //% fixedInstance whenUsed
    export const realTimeClock = new RealTimeClockClient("real Time Clock");
}