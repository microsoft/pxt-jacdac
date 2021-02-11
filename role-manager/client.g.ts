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
        constructor(role: string) {
            super(jacdac.SRV_ROLE_MANAGER, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const roleManager = new RoleManagerClient("role Manager");
}