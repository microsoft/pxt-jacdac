namespace modules {
    /**
     * Assign roles to services on the Jacdac bus.
     * 
     * Internally, the role manager stores a mapping from from `(device_id, service_idx)` to role name.
     * Users refer to services by using role names (eg., they instantiate an accelerometer client with a given role name).
     * Each client has a role, and roles are unique to clients
     * (ie., one should not have both a gyro and accelerometer service with role `left_leg`).
     * 
     * Role names can be hierarchical, using slash character as a separator.
     * Examples: `left_leg/acc`, `left_leg/gyro`, `right_leg/acc`.
     * If two roles share the prefix before first slash, it should be used as a hint that the services
     * should be co-located on a single device
     * (eg., here the `left_leg` "location" is expected to have both an accelerometer and a gyro service on a single device).
     **/
    //% fixedInstances blockGap=8
    export class RoleManagerClient extends jacdac.Client {

            private readonly _autoBind : jacdac.RegisterClient<[boolean]>;
            private readonly _allRolesAllocated : jacdac.RegisterClient<[boolean]>;            

            constructor(role: string) {
            super(jacdac.SRV_ROLE_MANAGER, role);

            this._autoBind = this.addRegister<[boolean]>(jacdac.RoleManagerReg.AutoBind, "u8");
            this._allRolesAllocated = this.addRegister<[boolean]>(jacdac.RoleManagerReg.AllRolesAllocated, "u8");            
        }
    

        /**
        * Normally, if some roles are unfilled, and there are idle services that can fulfill them,
        * the brain device will assign roles (bind) automatically.
        * Such automatic assignment happens every second or so, and is trying to be smart about 
        * co-locating roles that share "host" (part before first slash),
        * as well as reasonably stable assignments.
        * Once user start assigning roles manually using this service, auto-binding should be disabled to avoid confusion.
        */
        //% callInDebugger
        //% group="Role Manager"
        autoBind(): boolean {
            this.start();            
            const values = this._autoBind.pauseUntilValues() as any[];
            return !!values[0];
        }

        /**
        * Normally, if some roles are unfilled, and there are idle services that can fulfill them,
        * the brain device will assign roles (bind) automatically.
        * Such automatic assignment happens every second or so, and is trying to be smart about 
        * co-locating roles that share "host" (part before first slash),
        * as well as reasonably stable assignments.
        * Once user start assigning roles manually using this service, auto-binding should be disabled to avoid confusion.
        */
        //% 
        //% group="Role Manager" value.defl=1
        //% block="set %rolemanager auto bind to %value"
        setAutoBind(value: boolean) {
            this.start();
            const values = this._autoBind.values as any[];
            values[0] = value ? 1 : 0;
            this._autoBind.values = values as [boolean];
        }

        /**
        * Indicates if all required roles have been allocated to devices.
        */
        //% callInDebugger
        //% group="Role Manager"
        allRolesAllocated(): boolean {
            this.start();            
            const values = this._allRolesAllocated.pauseUntilValues() as any[];
            return !!values[0];
        }
 

        /**
         * Emit notifying that the internal state of the service changed.
         */
        //% blockId=jacdac_on_rolemanager_change
        //% block="change" blockSetVariable=myModule
        //% group="Role Manager"
        onChange(handler: () => void) {
            this.registerEvent(jacdac.RoleManagerEvent.Change, handler);
        }
    }
    //% fixedInstance whenUsed
    export const roleManager = new RoleManagerClient("role Manager");
}