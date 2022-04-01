namespace modules {
    /**
     * A power-provider service.
     **/
    //% fixedInstances blockGap=8
    export class PowerClient extends jacdac.SimpleSensorClient {

        private readonly _allowed : jacdac.RegisterClient<[boolean]>;
        private readonly _maxPower : jacdac.RegisterClient<[number]>;
        private readonly _powerStatus : jacdac.RegisterClient<[jacdac.PowerPowerStatus]>;
        private readonly _batteryVoltage : jacdac.RegisterClient<[number]>;
        private readonly _batteryCharge : jacdac.RegisterClient<[number]>;
        private readonly _batteryCapacity : jacdac.RegisterClient<[number]>;
        private readonly _keepOnPulseDuration : jacdac.RegisterClient<[number]>;
        private readonly _keepOnPulsePeriod : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_POWER, role, "u16");

            this._allowed = this.addRegister<[boolean]>(jacdac.PowerReg.Allowed, "u8");
            this._maxPower = this.addRegister<[number]>(jacdac.PowerReg.MaxPower, "u16");
            this._powerStatus = this.addRegister<[jacdac.PowerPowerStatus]>(jacdac.PowerReg.PowerStatus, "u8");
            this._batteryVoltage = this.addRegister<[number]>(jacdac.PowerReg.BatteryVoltage, "u16");
            this._batteryCharge = this.addRegister<[number]>(jacdac.PowerReg.BatteryCharge, "u0.16");
            this._batteryCapacity = this.addRegister<[number]>(jacdac.PowerReg.BatteryCapacity, "u32");
            this._keepOnPulseDuration = this.addRegister<[number]>(jacdac.PowerReg.KeepOnPulseDuration, "u16");
            this._keepOnPulsePeriod = this.addRegister<[number]>(jacdac.PowerReg.KeepOnPulsePeriod, "u16");            
        }
    

        /**
        * Can be used to completely disable the service.
        * When allowed, the service may still not be providing power, see 
        * `power_status` for the actual current state.
        */
        //% callInDebugger
        //% group="Power"
        //% block="%power allowed"
        //% blockId=jacdac_power_allowed___get
        //% weight=100
        allowed(): boolean {
            this.start();            
            const values = this._allowed.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Can be used to completely disable the service.
        * When allowed, the service may still not be providing power, see 
        * `power_status` for the actual current state.
        */
        //% group="Power"
        //% blockId=jacdac_power_allowed___set
        //% block="set %power allowed to %value"
        //% weight=99
        //% value.defl=1
        setAllowed(value: boolean) {
            this.start();
            const values = this._allowed.values as any[];
            values[0] = value ? 1 : 0;
            this._allowed.values = values as [boolean];
        }

        /**
        * Limit the power provided by the service. The actual maximum limit will depend on hardware.
        * This field may be read-only in some implementations - you should read it back after setting.
        */
        //% callInDebugger
        //% group="Power"
        //% weight=98
        maxPower(): number {
            this.start();            
            const values = this._maxPower.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Limit the power provided by the service. The actual maximum limit will depend on hardware.
        * This field may be read-only in some implementations - you should read it back after setting.
        */
        //% group="Power"
        //% weight=97
        //% value.min=0
        //% value.max=900
        //% value.defl=900
        setMaxPower(value: number) {
            this.start();
            const values = this._maxPower.values as any[];
            values[0] = value;
            this._maxPower.values = values as [number];
        }

        /**
        * Indicates whether the power provider is currently providing power (`Powering` state), and if not, why not.
        * `Overprovision` means there was another power provider, and we stopped not to overprovision the bus.
        */
        //% callInDebugger
        //% group="Power"
        //% weight=96
        powerStatus(): jacdac.PowerPowerStatus {
            this.start();            
            const values = this._powerStatus.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Present current draw from the bus.
        */
        //% callInDebugger
        //% group="Power"
        //% block="%power current draw"
        //% blockId=jacdac_power_current_draw___get
        //% weight=95
        currentDraw(): number {
            return this.reading();
        
        }

        /**
        * Voltage on input.
        */
        //% callInDebugger
        //% group="Power"
        //% weight=94
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
        //% weight=93
        batteryCharge(): number {
            this.start();            
            const values = this._batteryCharge.pauseUntilValues() as any[];
            return values[0] * 100;
        }

        /**
        * Energy that can be delivered to the bus when battery is fully charged.
        * This excludes conversion overheads if any.
        */
        //% callInDebugger
        //% group="Power"
        //% weight=92
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
        //% weight=91
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
        //% group="Power"
        //% weight=90
        //% value.min=0
        //% value.max=65535
        //% value.defl=600
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
        //% weight=89
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
        //% group="Power"
        //% weight=88
        //% value.min=0
        //% value.max=65535
        //% value.defl=20000
        setKeepOnPulsePeriod(value: number) {
            this.start();
            const values = this._keepOnPulsePeriod.values as any[];
            values[0] = value;
            this._keepOnPulsePeriod.values = values as [number];
        }

        /**
         * Run code when the current draw changes by the given threshold value.
        */
        //% group="Power"
        //% blockId=jacdac_power_on_current_draw_change
        //% block="on %power current draw changed by %threshold"
        //% weight=87
        //% threshold.min=0
        //% threshold.max=65535
        //% threshold.defl=1
        onCurrentDrawChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold, handler);
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Power"
        //% blockId=jacdac_on_power_event
        //% block="on %power %event"
        //% weight=86
        onEvent(ev: jacdac.PowerEvent, handler: () => void): void {
            this.registerEvent(ev, handler);
        }

        /**
         * Emitted whenever `power_status` changes.
         */
        //% group="Power"
        //% weight=85
        onPowerStatusChanged(handler: () => void): void {
            this.registerEvent(jacdac.PowerEvent.PowerStatusChanged, handler);
        }

        /**
        * Sent by the power service periodically, as broadcast.
        */
        //% group="Power"
        //% blockId=jacdac_power_shutdown_cmd
        //% block="%power shutdown"
        //% weight=84
        shutdown(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.PowerCmd.Shutdown))
        }
    
    }
    //% fixedInstance whenUsed block="power1"
    export const power1 = new PowerClient("power1");
}