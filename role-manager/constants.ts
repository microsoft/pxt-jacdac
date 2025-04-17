namespace jacdac {
    // Service Role Manager constants
    export const SRV_ROLE_MANAGER = 0x1e4b7e66
    export const enum RoleManagerReg {
        /**
         * Read-write bool (uint8_t). Normally, if some roles are unfilled, and there are idle services that can fulfill them,
         * the brain device will assign roles (bind) automatically.
         * Such automatic assignment happens every second or so, and is trying to be smart about
         * co-locating roles that share "host" (part before first slash),
         * as well as reasonably stable assignments.
         * Once user start assigning roles manually using this service, auto-binding should be disabled to avoid confusion.
         *
         * ```
         * const [autoBind] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        AutoBind = 0x80,

        /**
         * Read-only bool (uint8_t). Indicates if all required roles have been allocated to devices.
         *
         * ```
         * const [allRolesAllocated] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        AllRolesAllocated = 0x181,
    }

    export namespace RoleManagerRegPack {
        /**
         * Pack format for 'auto_bind' data.
         */
        export const AutoBind = "u8"

        /**
         * Pack format for 'all_roles_allocated' data.
         */
        export const AllRolesAllocated = "u8"
    }

    export const enum RoleManagerCmd {
        /**
         * Set role. Can set to empty to remove role binding.
         *
         * ```
         * const [deviceId, serviceIdx, role] = jdunpack<[Buffer, number, string]>(buf, "b[8] u8 s")
         * ```
         */
        SetRole = 0x81,

        /**
         * No args. Remove all role bindings.
         */
        ClearAllRoles = 0x84,

        /**
         * Argument: roles pipe (bytes). List all roles and bindings required by the current program. `device_id` and `service_idx` are `0` if role is unbound.
         *
         * ```
         * const [roles] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        ListRoles = 0x83,
    }

    export namespace RoleManagerCmdPack {
        /**
         * Pack format for 'set_role' data.
         */
        export const SetRole = "b[8] u8 s"

        /**
         * Pack format for 'list_roles' data.
         */
        export const ListRoles = "b[12]"
    }

    export const enum RoleManagerPipe {}
    /**
     * pipe_report Roles
     * ```
     * const [deviceId, serviceClass, serviceIdx, role] = jdunpack<[Buffer, number, number, string]>(buf, "b[8] u32 u8 s")
     * ```
     */

    export namespace RoleManagerPipePack {
        /**
         * Pack format for 'roles' data.
         */
        export const Roles = "b[8] u32 u8 s"
    }

    export const enum RoleManagerEvent {
        /**
         * Notifies that role bindings have changed.
         */
        //% block="change"
        Change = 0x3,
    }
}
