namespace modules {
    /**
     * Device that interacts, configure or inspects with the services on the bus. While a dashboard is on the bus, heuristics like device reset should be disabled.
     **/
    //% fixedInstances blockGap=8
    export class DashboardClient extends jacdac.Client {
            

        constructor(role: string) {
            super(jacdac.SRV_DASHBOARD, role);
            
        }
    

    
    }
    //% fixedInstance whenUsed block="dashboard1"
    export const dashboard1 = new DashboardClient("dashboard1");
}