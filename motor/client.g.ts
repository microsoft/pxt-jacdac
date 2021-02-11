namespace modules {
    //% fixedInstances
    export class MotorClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_MOTOR, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const motor = new MotorClient("motor");
}