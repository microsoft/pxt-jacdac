namespace jacdac {
    // Service: Rover
    export const SRV_ROVER = 0x19f4d06b
    export const enum RoverReg {
        /**
         * The current position and orientation of the robot.
         *
         * ```
         * const [x, y, vx, vy, heading] = jdunpack<[number, number, number, number, number]>(buf, "i16.16 i16.16 i16.16 i16.16 i16.16")
         * ```
         */
        Kinematics = 0x101,
    }

}
