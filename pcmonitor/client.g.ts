namespace modules {
    /**
     * Measures PC monitor.
     **/
    //% fixedInstances blockGap=8
    export class PCMonitorClient extends jacdac.Client {

        private readonly _cpuUsage : jacdac.RegisterClient<[number]>;
        private readonly _cpuTemperature : jacdac.RegisterClient<[number]>;
        private readonly _ramUsage : jacdac.RegisterClient<[number]>;
        private readonly _gpuInformation : jacdac.RegisterClient<[number,number]>;
        private readonly _networkInformation : jacdac.RegisterClient<[number,number]>;            

        constructor(role: string) {
            super(jacdac.SRV_PCMONITOR, role)

            this._cpuUsage = this.addRegister<[number]>(jacdac.PCMonitorReg.CpuUsage, jacdac.PCMonitorRegPack.CpuUsage)
            this._cpuTemperature = this.addRegister<[number]>(jacdac.PCMonitorReg.CpuTemperature, jacdac.PCMonitorRegPack.CpuTemperature)
            this._ramUsage = this.addRegister<[number]>(jacdac.PCMonitorReg.RamUsage, jacdac.PCMonitorRegPack.RamUsage)
            this._gpuInformation = this.addRegister<[number,number]>(jacdac.PCMonitorReg.GpuInformation, jacdac.PCMonitorRegPack.GpuInformation)
            this._networkInformation = this.addRegister<[number,number]>(jacdac.PCMonitorReg.NetworkInformation, jacdac.PCMonitorRegPack.NetworkInformation)            
        }
    

        /**
        * CPU usage in percent.
        */
        //% callInDebugger
        //% group="PC monitor"
        //% weight=100
        cpuUsage(): number {
            this.start();            
            const values = this._cpuUsage.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * CPU temperature in Celsius.
        */
        //% callInDebugger
        //% group="PC monitor"
        //% weight=99
        cpuTemperature(): number {
            this.start();            
            const values = this._cpuTemperature.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * RAM usage in percent.
        */
        //% callInDebugger
        //% group="PC monitor"
        //% weight=98
        ramUsage(): number {
            this.start();            
            const values = this._ramUsage.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * GPU info.
        */
        //% callInDebugger
        //% group="PC monitor"
        //% weight=97
        gpuInformationUsage(): number {
            this.start();            
            const values = this._gpuInformation.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * GPU info.
        */
        //% callInDebugger
        //% group="PC monitor"
        //% weight=96
        gpuInformationTemperature(): number {
            this.start();            
            const values = this._gpuInformation.pauseUntilValues() as any[];
            return values[1];
        }

        /**
        * Network transmit/receive speed in Kbytes per second.
        * 
        * A measure of PC monitor.
        */
        //% callInDebugger
        //% group="PC monitor"
        //% weight=95
        networkInformationTx(): number {
            this.start();            
            const values = this._networkInformation.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Network transmit/receive speed in Kbytes per second.
        * 
        * A measure of PC monitor.
        */
        //% callInDebugger
        //% group="PC monitor"
        //% weight=94
        networkInformationRx(): number {
            this.start();            
            const values = this._networkInformation.pauseUntilValues() as any[];
            return values[1];
        }

    
    }
    
    //% fixedInstance whenUsed weight=1 block="pcmonitor1"
    export const PCMonitor1 = new PCMonitorClient("PCMonitor1");
}