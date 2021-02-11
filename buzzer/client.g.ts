namespace modules {
    //% fixedInstances
    export class BuzzerClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_BUZZER, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const buzzer = new BuzzerClient("buzzer");
}