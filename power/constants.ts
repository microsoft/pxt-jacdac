namespace jacdac {
    // Service: Power
    export const SRV_POWER = 0x1fa4c95a
    export const enum PowerReg {
        /**
         * Read-write bool (uint8_t). Turn the power to the bus on/off.
         */
        Enabled = 0x1,

        /**
         * Read-write mA uint16_t. Limit the power provided by the service. The actual maximum limit will depend on hardware.
         * This field may be read-only in some implementations - you should read it back after setting.
         */
        MaxPower = 0x7,

        /**
         * Read-only bool (uint8_t). Indicates whether the power has been shut down due to overdraw.
         */
        Overload = 0x181,

        /**
         * Read-only mA uint16_t. Present current draw from the bus.
         */
        CurrentDraw = 0x101,

        /**
         * Read-only mV uint16_t. Voltage on input.
         */
        BatteryVoltage = 0x180,

        /**
         * Read-only ratio uint16_t. Fraction of charge in the battery.
         */
        BatteryCharge = 0x182,

        /**
         * Constant mWh uint32_t. Energy that can be delivered to the bus when battery is fully charged.
         * This excludes conversion overheads if any.
         */
        BatteryCapacity = 0x183,

        /**
         * Read-write ms uint16_t. Many USB power packs need current to be drawn from time to time to prevent shutdown.
         * This regulates how often and for how long such current is drawn.
         * Typically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%.
         */
        KeepOnPulseDuration = 0x80,

        /**
         * Read-write ms uint16_t. Many USB power packs need current to be drawn from time to time to prevent shutdown.
         * This regulates how often and for how long such current is drawn.
         * Typically a 1/8W 22 ohm resistor is used as load. This limits the duty cycle to 10%.
         */
        KeepOnPulsePeriod = 0x81,
    }

}
