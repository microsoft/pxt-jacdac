namespace modules {
    /**
     * Controls a mini traffic with a red, orange and green LED.
     **/
    //% fixedInstances blockGap=8
    export class TrafficLightClient extends jacdac.Client {
            

            constructor(role: string) {
            super(jacdac.SRV_TRAFFIC_LIGHT, role);
            
        }
    
 

    }
    //% fixedInstance whenUsed
    export const trafficLight = new TrafficLightClient("traffic Light");
}