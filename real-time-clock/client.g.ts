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
        //% blockId=jacdacrealtimeclock_101_0
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="year" callInDebugger
        get year(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% blockId=jacdacrealtimeclock_101_1
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="month" callInDebugger
        get month(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[1];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% blockId=jacdacrealtimeclock_101_2
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="day_of_month" callInDebugger
        get dayOfMonth(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[2];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% blockId=jacdacrealtimeclock_101_3
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="day_of_week" callInDebugger
        get dayOfWeek(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[3];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% blockId=jacdacrealtimeclock_101_4
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="hour" callInDebugger
        get hour(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[4];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% blockId=jacdacrealtimeclock_101_5
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="min" callInDebugger
        get min(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[5];
        }

        /**
        * Current time in 24h representation. 
        * * ``day_of_month`` is day of the month, starting at ``1``
        * * ``day_of_week`` is day of the week, starting at ``1`` as monday
        * Default streaming period is 1 second.
        */
        //% blockId=jacdacrealtimeclock_101_6
        //% group="Real time clock" blockSetVariable=myModule
        //% blockCombine block="sec" callInDebugger
        get sec(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[6];
        }

            
    }

    //% fixedInstance whenUsed
    export const realTimeClock = new RealTimeClockClient("real Time Clock");
}