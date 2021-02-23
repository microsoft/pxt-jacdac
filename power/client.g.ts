namespace modules {
    /**
     * A power-provider service.
     **/
    //% fixedInstances blockGap=8
    export class PowerClient extends jacdac.SensorClient<[number]> {

            private readonly _enabled : jacdac.RegisterClient<[boolean]>;
            private readonly _maxPower : jacdac.RegisterClient<[number]>;
            private readonly _overload : jacdac.RegisterClient<[boolean]>;
            private readonly _batteryVoltage : jacdac.RegisterClient<[number]>;
            private readonly _batteryCharge : jacdac.RegisterClient<[number]>;
            private readonly _batteryCapacity : jacdac.RegisterClient<[number]>;
            private readonly _keepOnPulseDuration : jacdac.RegisterClient<[number]>;
            private readonly _keepOnPulsePeriod : jacdac.RegisterClient<[number]>;
            private readonly _priorityOffset : jacdac.RegisterClient<[number]>;            

            constructor(role: string) {
            super(jacdac.SRV_POWER, role, "u16");

            this._enabled = this.addRegister<[boolean]>(jacdac.PowerReg.Enabled, "u8");
            this._maxPower = this.addRegister<[number]>(jacdac.PowerReg.MaxPower, "u16");
            this._overload = this.addRegister<[boolean]>(jacdac.PowerReg.Overload, "u8");
            this._batteryVoltage = this.addRegister<[number]>(jacdac.PowerReg.BatteryVoltage, "u16");
            this._batteryCharge = this.addRegister<[number]>(jacdac.PowerReg.BatteryCharge, "u0.16");
            this._batteryCapacity = this.addRegister<[number]>(jacdac.PowerReg.BatteryCapacity, "u32");
            this._keepOnPulseDuration = this.addRegister<[number]>(jacdac.PowerReg.KeepOnPulseDuration, "u16");
            this._keepOnPulsePeriod = this.addRegister<[number]>(jacdac.PowerReg.KeepOnPulsePeriod, "u16");
            this._priorityOffset = this.addRegister<[number]>(jacdac.PowerReg.PriorityOffset, "i32");            
        }
    

        /**
        * Turn the power to the bus on/off.
        */
        //% callInDebugger
        //% group="Power"
        //% block="%power enabled"
        //% blockId=jacdac_power_enabled___get
        enabled(): boolean {
            this.start();            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Turn the power to the bus on/off.
        */
        //% blockId=jacdac_power_enabled___set
        //% group="Power" value.defl=1
        //% block="set %power %value=toggleOnOff"
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }

        /**
        * Limit the power provided by the service. The actual maximum limit will depend on hardware.
        * This field may be read-only in some implementations - you should read it back after setting.
        */
        //% callInDebugger
        //% group="Power"
        maxPower(): number {
            this.start();            
            const values = this._maxPower.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Limit the power provided by the service. The actual maximum limit will depend on hardware.
        * This field may be read-only in some implementations - you should read it back after setting.
        */
        //% 
        //% group="Power" value.min=0 value.max=500 value.defl=500
        //% block="set %power max power to %value"
        setMaxPower(value: number) {
            this.start();
            const values = this._maxPower.values as any[];
            values[0] = value;
            this._maxPower.values = values as [number];
        }

        /**
        * Indicates whether the power has been shut down due to overdraw.
        */
        //% callInDebugger
        //% group="Power"
        overload(): boolean {
            this.start();            
            const values = this._overload.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Present current draw from the bus.
        */
        //% callInDebugger
        //% group="Power"
        //% block="%power current draw"
        //% blockId=jacdac_power_current_draw___get
        currentDraw(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Voltage on input.
        */
        //% callInDebugger
        //% group="Power"
        batteryVoltage(): number {
            this.start();            
            const values = this._batteryVoltage.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Fraction of charge in the battery.
        */
        //% callInDebugger
        //% group="Power"
        batteryCharge(): number {
            this.start();            
            const values = this._batteryCharge.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Energy that can be delivered to the bus when battery is fully charged.
        * This excludes conversion overheads if any.
        */
        //% callInDebugger
        //% group="Power"
        batteryCapacity(): number {
            this.start();            
            const values = this._batteryCapacity.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Many USB power packs need current to be drawn from time to time to prevent shutdown.
        * This regulates how often and for how long such current is drawn.
        * Typically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%.
        */
        //% callInDebugger
        //% group="Power"
        keepOnPulseDuration(): number {
            this.start();            
            const values = this._keepOnPulseDuration.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Many USB power packs need current to be drawn from time to time to prevent shutdown.
        * This regulates how often and for how long such current is drawn.
        * Typically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%.
        */
        //% 
        //% group="Power" value.defl=600
        //% block="set %power keep on pulse duration to %value"
        setKeepOnPulseDuration(value: number) {
            this.start();
            const values = this._keepOnPulseDuration.values as any[];
            values[0] = value;
            this._keepOnPulseDuration.values = values as [number];
        }

        /**
        * Many USB power packs need current to be drawn from time to time to prevent shutdown.
        * This regulates how often and for how long such current is drawn.
        * Typically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%.
        */
        //% callInDebugger
        //% group="Power"
        keepOnPulsePeriod(): number {
            this.start();            
            const values = this._keepOnPulsePeriod.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Many USB power packs need current to be drawn from time to time to prevent shutdown.
        * This regulates how often and for how long such current is drawn.
        * Typically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%.
        */
        //% 
        //% group="Power" value.defl=20000
        //% block="set %power keep on pulse period to %value"
        setKeepOnPulsePeriod(value: number) {
            this.start();
            const values = this._keepOnPulsePeriod.values as any[];
            values[0] = value;
            this._keepOnPulsePeriod.values = values as [number];
        }

        /**
        * This value is added to `priority` of `active` reports, thus modifying amount of load-sharing
        * between different supplies.
        * The `priority` is clamped to `u32` range when included in `active` reports.
        */
        //% callInDebugger
        //% group="Power"
        priorityOffset(): number {
            this.start();            
            const values = this._priorityOffset.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * This value is added to `priority` of `active` reports, thus modifying amount of load-sharing
        * between different supplies.
        * The `priority` is clamped to `u32` range when included in `active` reports.
        */
        //% 
        //% group="Power"
        //% block="set %power priority offset to %value"
        setPriorityOffset(value: number) {
            this.start();
            const values = this._priorityOffset.values as any[];
            values[0] = value;
            this._priorityOffset.values = values as [number];
        }
 

    }
    //% fixedInstance whenUsed
    export const power = new PowerClient("power");
}