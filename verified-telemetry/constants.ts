namespace jacdac {
    // Service Verified Telemetry constants
    export const SRV_VERIFIED_TELEMETRY = 0x2194841f

    export const enum VerifiedTelemetryStatus { // uint8_t
        //% block="unknown"
        Unknown = 0x0,
        //% block="working"
        Working = 0x1,
        //% block="faulty"
        Faulty = 0x2,
    }

    export const enum VerifiedTelemetryFingerprintType { // uint8_t
        //% block="fall curve"
        FallCurve = 0x1,
        //% block="current sense"
        CurrentSense = 0x2,
        //% block="custom"
        Custom = 0x3,
    }

    export const enum VerifiedTelemetryReg {
        /**
         * Read-only Status (uint8_t). Reads the telemetry working status, where ``true`` is working and ``false`` is faulty.
         *
         * ```
         * const [telemetryStatus] = jdunpack<[jacdac.VerifiedTelemetryStatus]>(buf, "u8")
         * ```
         */
        TelemetryStatus = 0x180,

        /**
         * Read-write ms uint32_t. Specifies the interval between computing the fingerprint information.
         *
         * ```
         * const [telemetryStatusInterval] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        TelemetryStatusInterval = 0x80,

        /**
         * Constant FingerprintType (uint8_t). Type of the fingerprint.
         *
         * ```
         * const [fingerprintType] = jdunpack<[jacdac.VerifiedTelemetryFingerprintType]>(buf, "u8")
         * ```
         */
        FingerprintType = 0x181,

        /**
         * Template Fingerprint information of a working sensor.
         *
         * ```
         * const [confidence, template] = jdunpack<[number, Buffer]>(buf, "u16 b")
         * ```
         */
        FingerprintTemplate = 0x182,
    }

    export const enum VerifiedTelemetryCmd {
        /**
         * No args. This command will clear the template fingerprint of a sensor and collect a new template fingerprint of the attached sensor.
         */
        ResetFingerprintTemplate = 0x80,

        /**
         * No args. This command will append a new template fingerprint to the `fingerprintTemplate`. Appending more fingerprints will increase the accuracy in detecting the telemetry status.
         */
        RetrainFingerprintTemplate = 0x81,
    }

    export const enum VerifiedTelemetryEvent {
        /**
         * Argument: telemetry_status Status (uint8_t). The telemetry status of the device was updated.
         *
         * ```
         * const [telemetryStatus] = jdunpack<[jacdac.VerifiedTelemetryStatus]>(buf, "u8")
         * ```
         */
        //% block="telemetry status change"
        TelemetryStatusChange = 0x3,

        /**
         * The fingerprint template was updated
         */
        //% block="fingerprint template change"
        FingerprintTemplateChange = 0x80,
    }
}
