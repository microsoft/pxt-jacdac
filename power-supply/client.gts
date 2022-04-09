namespace modules {
    /**
     * A power supply with a fixed or variable voltage range
     **/
    //% fixedInstances blockGap=8
    export class PowerSupplyClient extends jacdac.Client {

        private readonly _enabled : jacdac.RegisterClient<[boolean]>;
        private readonly _outputVoltage : jacdac.RegisterClient<[number]>;
        private readonly _minimumVoltage : jacdac.RegisterClient<[number]>;
        private readonly _maximumVoltage : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_POWER_SUPPLY, role);

            this._enabled = this.addRegister<[boolean]>(jacdac.PowerSupplyReg.Enabled, jacdac.PowerSupplyRegPack.Enabled);
            this._outputVoltage = this.addRegister<[number]>(jacdac.PowerSupplyReg.OutputVoltage, jacdac.PowerSupplyRegPack.OutputVoltage);
            this._minimumVoltage = this.addRegister<[number]>(jacdac.PowerSupplyReg.MinimumVoltage, jacdac.PowerSupplyRegPack.MinimumVoltage);
            this._maximumVoltage = this.addRegister<[number]>(jacdac.PowerSupplyReg.MaximumVoltage, jacdac.PowerSupplyRegPack.MaximumVoltage);            
        }
    

        /**
        * Turns the power supply on with `true`, off with `false`.
        */
        //% callInDebugger
        //% group="Power supply"
        //% block="%powersupply enabled"
        //% blockId=jacdac_powersupply_enabled___get
        //% weight=100
        enabled(): boolean {
            this.start();            
            const values = this._enabled.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Turns the power supply on with `true`, off with `false`.
        */
        //% group="Power supply"
        //% blockId=jacdac_powersupply_enabled___set
        //% block="set %powersupply %value=toggleOnOff"
        //% weight=99
        setEnabled(value: boolean) {
            this.start();
            const values = this._enabled.values as any[];
            values[0] = value ? 1 : 0;
            this._enabled.values = values as [boolean];
        }

        /**
        * The current output voltage of the power supply. Values provided must be in the range `minimum_voltage` to `maximum_voltage`
        */
        //% callInDebugger
        //% group="Power supply"
        //% block="%powersupply output voltage"
        //% blockId=jacdac_powersupply_output_voltage___get
        //% weight=98
        outputVoltage(): number {
            this.start();            
            const values = this._outputVoltage.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The current output voltage of the power supply. Values provided must be in the range `minimum_voltage` to `maximum_voltage`
        */
        //% group="Power supply"
        //% blockId=jacdac_powersupply_output_voltage___set
        //% block="set %powersupply output voltage to %value"
        //% weight=97
        setOutputVoltage(value: number) {
            this.start();
            this.enabled = true;
            const values = this._outputVoltage.values as any[];
            values[0] = value;
            this._outputVoltage.values = values as [number];
        }

        /**
        * The minimum output voltage of the power supply. For fixed power supplies, `minimum_voltage` should be equal to `maximum_voltage`.
        */
        //% callInDebugger
        //% group="Power supply"
        //% weight=96
        minimumVoltage(): number {
            this.start();            
            const values = this._minimumVoltage.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * The maximum output voltage of the power supply. For fixed power supplies, `minimum_voltage` should be equal to `maximum_voltage`.
        */
        //% callInDebugger
        //% group="Power supply"
        //% weight=95
        maximumVoltage(): number {
            this.start();            
            const values = this._maximumVoltage.pauseUntilValues() as any[];
            return values[0];
        }

    
    }
    //% fixedInstance whenUsed weight=1 block="power supply1"
    export const powerSupply1 = new PowerSupplyClient("power Supply1");
}