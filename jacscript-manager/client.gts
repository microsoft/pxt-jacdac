namespace modules {
    /**
     * Allows for deployment and control over Jacscript virtual machine.
     * 
     * Programs start automatically after device restart or uploading of new program.
     * You can stop programs until next reset by setting the `running` register to `0`.
     * 
     * TODO - debug interface:
     * * read-globals command/register
     * * globals-changed pipe
     * * breakpoint command
     * * some performance monitoring?
     **/
    //% fixedInstances blockGap=8
    export class JacscriptManagerClient extends jacdac.Client {

        private readonly _running : jacdac.RegisterClient<[boolean]>;
        private readonly _autostart : jacdac.RegisterClient<[boolean]>;
        private readonly _logging : jacdac.RegisterClient<[boolean]>;
        private readonly _programSize : jacdac.RegisterClient<[number]>;
        private readonly _programHash : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_JACSCRIPT_MANAGER, role);

            this._running = this.addRegister<[boolean]>(jacdac.JacscriptManagerReg.Running, "u8");
            this._autostart = this.addRegister<[boolean]>(jacdac.JacscriptManagerReg.Autostart, "u8");
            this._logging = this.addRegister<[boolean]>(jacdac.JacscriptManagerReg.Logging, "u8");
            this._programSize = this.addRegister<[number]>(jacdac.JacscriptManagerReg.ProgramSize, "u32");
            this._programHash = this.addRegister<[number]>(jacdac.JacscriptManagerReg.ProgramHash, "u32");            
        }
    

        /**
        * Indicates if the program is currently running.
        * To restart the program, stop it (write `0`), read back the register to make sure it's stopped,
        * start it, and read back.
        */
        //% callInDebugger
        //% group="Jacscript Manager"
        //% weight=100
        running(): boolean {
            this.start();            
            const values = this._running.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Indicates if the program is currently running.
        * To restart the program, stop it (write `0`), read back the register to make sure it's stopped,
        * start it, and read back.
        */
        //% group="Jacscript Manager"
        //% weight=99
        setRunning(value: boolean) {
            this.start();
            const values = this._running.values as any[];
            values[0] = value ? 1 : 0;
            this._running.values = values as [boolean];
        }

        /**
        * Indicates wheather the program should be re-started upon `reboot()` or `panic()`.
        * Defaults to `true`.
        */
        //% callInDebugger
        //% group="Jacscript Manager"
        //% weight=98
        autostart(): boolean {
            this.start();            
            const values = this._autostart.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Indicates wheather the program should be re-started upon `reboot()` or `panic()`.
        * Defaults to `true`.
        */
        //% group="Jacscript Manager"
        //% weight=97
        setAutostart(value: boolean) {
            this.start();
            const values = this._autostart.values as any[];
            values[0] = value ? 1 : 0;
            this._autostart.values = values as [boolean];
        }

        /**
        * `log_message` reports are only sent when this is `true`.
        * It defaults to `false`.
        */
        //% callInDebugger
        //% group="Jacscript Manager"
        //% weight=96
        logging(): boolean {
            this.start();            
            const values = this._logging.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * `log_message` reports are only sent when this is `true`.
        * It defaults to `false`.
        */
        //% group="Jacscript Manager"
        //% weight=95
        setLogging(value: boolean) {
            this.start();
            const values = this._logging.values as any[];
            values[0] = value ? 1 : 0;
            this._logging.values = values as [boolean];
        }

        /**
        * The size of current program.
        */
        //% callInDebugger
        //% group="Jacscript Manager"
        //% weight=94
        programSize(): number {
            this.start();            
            const values = this._programSize.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Return FNV1A hash of the current bytecode.
        */
        //% callInDebugger
        //% group="Jacscript Manager"
        //% weight=93
        programHash(): number {
            this.start();            
            const values = this._programHash.pauseUntilValues() as any[];
            return values[0];
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Jacscript Manager"
        //% blockId=jacdac_on_jacscriptmanager_event
        //% block="on %jacscriptmanager %event"
        //% weight=92
        onEvent(ev: jacdac.JacscriptManagerEvent, handler: () => void): void {
            this.onEvent(ev, handler);
        }

        /**
         * Emitted when the program calls `panic(panic_code)` or `reboot()` (`panic_code == 0` in that case).
        * The byte offset in byte code of the call is given in `program_counter`.
        * The program will restart immediately when `panic_code == 0` or in a few seconds otherwise.
         */
        //% group="Jacscript Manager"
        //% weight=91
        onProgramPanic(handler: () => void): void {
            this.registerEvent(jacdac.JacscriptManagerEvent.ProgramPanic, handler);
        }
        /**
         * Emitted after bytecode of the program has changed.
         */
        //% group="Jacscript Manager"
        //% weight=90
        onProgramChange(handler: () => void): void {
            this.registerEvent(jacdac.JacscriptManagerEvent.ProgramChange, handler);
        }

        /**
        * Open pipe for streaming in the bytecode of the program. The size of the bytecode has to be declared upfront.
        * To clear the program, use `bytecode_size == 0`.
        * The bytecode is streamed over regular pipe data packets.
        * The bytecode shall be fully written into flash upon closing the pipe.
        * If `autostart` is true, the program will start after being deployed.
        * The data payloads, including the last one, should have a size that is a multiple of 32 bytes.
        * Thus, the initial bytecode_size also needs to be a multiple of 32.
        */
        //% group="Jacscript Manager"
        //% blockId=jacdac_jacscriptmanager_deploy_bytecode_cmd
        //% block="%jacscriptmanager deploy bytecode $bytecodeSize"
        //% weight=89
        deployBytecode(bytecodeSize: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.JacscriptManagerCmd.DeployBytecode, "u32", [bytecodeSize]))
        }
    
    }
    //% fixedInstance whenUsed block="jacscript manager1"
    export const jacscriptManager1 = new JacscriptManagerClient("jacscript Manager1");
}