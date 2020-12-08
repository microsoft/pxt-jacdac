namespace jacdac {
    // Service: Role Manager
    export const SRV_ROLE_MANAGER = 0x119c3ad1
    export const SRV_ROLE_MANAGER_ALL_ROLES_ALLOCATED_RO_PACK_FORMAT = "u8"
    export const SRV_ROLE_MANAGER_GET_ROLE_COMMAND_PACK_FORMAT = "b[8]"
    export const SRV_ROLE_MANAGER_GET_ROLE_REPORT_PACK_FORMAT = "b[8] s"
    export const SRV_ROLE_MANAGER_SET_ROLE_COMMAND_PACK_FORMAT = "b[8] s"
    export const SRV_ROLE_MANAGER_LIST_STORED_ROLES_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_ROLE_MANAGER_STORED_ROLES_PIPE_REPORT_PACK_FORMAT = "b[8] s"
    export const SRV_ROLE_MANAGER_LIST_REQUIRED_ROLES_COMMAND_PACK_FORMAT = "b[12]"
    export const SRV_ROLE_MANAGER_REQUIRED_ROLES_PIPE_REPORT_PACK_FORMAT = "b[8] u32 s"
    export const enum RoleManagerReg {
        /**
         * Read-only bool (uint8_t). Indicates if all required roles have been allocated to devices.
         */
        AllRolesAllocated = 0x181,
    }

    export const enum RoleManagerCmd {
        /**
         * Argument: device_id devid (uint64_t). Get the role corresponding to given device identifer. Returns empty string if unset.
         */
        GetRole = 0x80,

        /**
         * report GetRole
         * ```
         * const [deviceId, role] = jdunpack<[Buffer, string]>(buf, "b[8] s")
         * ```
         */

        /**
         * Set role. Can set to empty to remove role binding.
         *
         * ```
         * const [deviceId, role] = jdunpack<[Buffer, string]>(buf, "b[8] s")
         * ```
         */
        SetRole = 0x81,

        /**
         * No args. Remove all role bindings.
         */
        ClearAllRoles = 0x84,

        /**
         * Argument: stored_roles pipe (bytes). Return all roles stored internally.
         */
        ListStoredRoles = 0x82,

        /**
         * Argument: required_roles pipe (bytes). List all roles required by the current program. `device_id` is `0` if role is unbound.
         */
        ListRequiredRoles = 0x83,
    }


    /**
     * pipe_report StoredRoles
     * ```
     * const [deviceId, role] = jdunpack<[Buffer, string]>(buf, "b[8] s")
     * ```
     */

    /**
     * pipe_report RequiredRoles
     * ```
     * const [deviceId, serviceClass, roles] = jdunpack<[Buffer, number, string]>(buf, "b[8] u32 s")
     * ```
     */


    export const enum RoleManagerEvent {
        /**
         * Emit notifying that the internal state of the service changed.
         */
        Change = 0x2,
    }

}
