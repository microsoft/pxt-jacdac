namespace jacdac {
    // Service PC monitor constants
    export const SRV_PCMONITOR = 0x18627b15
    export const enum PCMonitorReg {
        /**
         * Read-only % uint8_t. CPU usage in percent.
         *
         * ```
         * const [cpuUsage] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        CpuUsage = 0x190,

        /**
         * Read-only °C uint8_t. CPU temperature in Celsius.
         *
         * ```
         * const [cpuTemperature] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        CpuTemperature = 0x191,

        /**
         * Read-only % uint8_t. RAM usage in percent.
         *
         * ```
         * const [ramUsage] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        RamUsage = 0x192,

        /**
         * GPU info.
         *
         * ```
         * const [usage, temperature] = jdunpack<[number, number]>(buf, "u8 u8")
         * ```
         */
        GpuInformation = 0x193,

        /**
         * Network transmit/receive speed in Kbytes per second.
         *
         * ```
         * const [tx, rx] = jdunpack<[number, number]>(buf, "u16 u16")
         * ```
         */
        NetworkInformation = 0x195,
    }

    export namespace PCMonitorRegPack {
        /**
         * Pack format for 'cpu_usage' data.
         */
        export const CpuUsage = "u8"

        /**
         * Pack format for 'cpu_temperature' data.
         */
        export const CpuTemperature = "u8"

        /**
         * Pack format for 'ram_usage' data.
         */
        export const RamUsage = "u8"

        /**
         * Pack format for 'gpu_information' data.
         */
        export const GpuInformation = "u8 u8"

        /**
         * Pack format for 'network_information' data.
         */
        export const NetworkInformation = "u16 u16"
    }
}
