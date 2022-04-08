namespace modules {
    /**
     * A mixin service that exposes verified telemetry information for a sensor (see https://github.com/Azure/Verified-Telemetry/tree/main/PnPModel).
     **/
    //% fixedInstances blockGap=8
    export class VerifiedTelemetryClient extends jacdac.Client {

        private readonly _telemetryStatus : jacdac.RegisterClient<[jacdac.VerifiedTelemetryStatus]>;
        private readonly _telemetryStatusInterval : jacdac.RegisterClient<[number]>;
        private readonly _fingerprintType : jacdac.RegisterClient<[jacdac.VerifiedTelemetryFingerprintType]>;
        private readonly _fingerprintTemplate : jacdac.RegisterClient<[number,Buffer]>;            

        constructor(role: string) {
            super(jacdac.SRV_VERIFIED_TELEMETRY, role);

            this._telemetryStatus = this.addRegister<[jacdac.VerifiedTelemetryStatus]>(jacdac.VerifiedTelemetryReg.TelemetryStatus, "u8");
            this._telemetryStatusInterval = this.addRegister<[number]>(jacdac.VerifiedTelemetryReg.TelemetryStatusInterval, "u32");
            this._fingerprintType = this.addRegister<[jacdac.VerifiedTelemetryFingerprintType]>(jacdac.VerifiedTelemetryReg.FingerprintType, "u8");
            this._fingerprintTemplate = this.addRegister<[number,Buffer]>(jacdac.VerifiedTelemetryReg.FingerprintTemplate, "u16 b");            
        }
    

        /**
        * Reads the telemetry working status, where ``true`` is working and ``false`` is faulty.
        */
        //% callInDebugger
        //% group="Verified Telemetry"
        //% weight=100
        telemetryStatus(): jacdac.VerifiedTelemetryStatus {
            this.start();            
            const values = this._telemetryStatus.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the interval between computing the fingerprint information.
        */
        //% callInDebugger
        //% group="Verified Telemetry"
        //% weight=99
        telemetryStatusInterval(): number {
            this.start();            
            const values = this._telemetryStatusInterval.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Specifies the interval between computing the fingerprint information.
        */
        //% group="Verified Telemetry"
        //% weight=98
        setTelemetryStatusInterval(value: number) {
            this.start();
            const values = this._telemetryStatusInterval.values as any[];
            values[0] = value;
            this._telemetryStatusInterval.values = values as [number];
        }

        /**
        * Type of the fingerprint.
        */
        //% callInDebugger
        //% group="Verified Telemetry"
        //% weight=97
        fingerprintType(): jacdac.VerifiedTelemetryFingerprintType {
            this.start();            
            const values = this._fingerprintType.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Template Fingerprint information of a working sensor.
        */
        //% callInDebugger
        //% group="Verified Telemetry"
        //% weight=96
        fingerprintTemplateConfidence(): number {
            this.start();            
            const values = this._fingerprintTemplate.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Template Fingerprint information of a working sensor.
        */
        //% callInDebugger
        //% group="Verified Telemetry"
        //% weight=95
        fingerprintTemplateTemplate(): Buffer {
            this.start();            
            const values = this._fingerprintTemplate.pauseUntilValues() as any[];
            return values[1];
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Verified Telemetry"
        //% blockId=jacdac_on_verifiedtelemetrysensor_event
        //% block="on %verifiedtelemetrysensor %event"
        //% weight=94
        onEvent(ev: jacdac.VerifiedTelemetryEvent, handler: () => void): void {
            this.registerEvent(ev, handler);
        }

        /**
         * The telemetry status of the device was updated.
         */
        //% group="Verified Telemetry"
        //% weight=93
        onTelemetryStatusChange(handler: () => void): void {
            this.registerEvent(jacdac.VerifiedTelemetryEvent.TelemetryStatusChange, handler);
        }
        /**
         * The fingerprint template was updated
         */
        //% group="Verified Telemetry"
        //% weight=92
        onFingerprintTemplateChange(handler: () => void): void {
            this.registerEvent(jacdac.VerifiedTelemetryEvent.FingerprintTemplateChange, handler);
        }

        /**
        * This command will clear the template fingerprint of a sensor and collect a new template fingerprint of the attached sensor.
        */
        //% group="Verified Telemetry"
        //% blockId=jacdac_verifiedtelemetrysensor_reset_fingerprint_template_cmd
        //% block="%verifiedtelemetrysensor reset fingerprint template"
        //% weight=91
        resetFingerprintTemplate(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.VerifiedTelemetryCmd.ResetFingerprintTemplate))
        }

        /**
        * This command will append a new template fingerprint to the `fingerprintTemplate`. Appending more fingerprints will increase the accuracy in detecting the telemetry status.
        */
        //% group="Verified Telemetry"
        //% blockId=jacdac_verifiedtelemetrysensor_retrain_fingerprint_template_cmd
        //% block="%verifiedtelemetrysensor retrain fingerprint template"
        //% weight=90
        retrainFingerprintTemplate(): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.onlyHeader(jacdac.VerifiedTelemetryCmd.RetrainFingerprintTemplate))
        }
    
    }
    //% fixedInstance whenUsed weight=1 block="verified telemetry1"
    export const verifiedTelemetry1 = new VerifiedTelemetryClient("verified Telemetry1");
}