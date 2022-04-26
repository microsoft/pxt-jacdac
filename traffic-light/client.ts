namespace modules {
    /**
     * Controls a mini traffic with a red, orange and green LED.
     **/
    //% fixedInstances blockGap=8
    export class TrafficLightClient extends jacdac.Client {
        private readonly _red: jacdac.RegisterClient<[boolean]>
        private readonly _yellow: jacdac.RegisterClient<[boolean]>
        private readonly _green: jacdac.RegisterClient<[boolean]>

        constructor(role: string) {
            super(jacdac.SRV_TRAFFIC_LIGHT, role)

            this._red = this.addRegister<[boolean]>(
                jacdac.TrafficLightReg.Red,
                jacdac.TrafficLightRegPack.Red
            )
            this._yellow = this.addRegister<[boolean]>(
                jacdac.TrafficLightReg.Yellow,
                jacdac.TrafficLightRegPack.Yellow
            )
            this._green = this.addRegister<[boolean]>(
                jacdac.TrafficLightReg.Green,
                jacdac.TrafficLightRegPack.Green
            )
        }

        /**
         * The on/off state of the red light.
         */
        //% callInDebugger
        //% group="Traffic Light"
        //% weight=100
        //% blockId=jacdac_trafficlight_red
        //% block="%trafficlight red"
        red(): boolean {
            this.start()
            const values = this._red.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * The on/off state of the red light.
         */
        //% group="Traffic Light"
        //% weight=99
        //% blockId=jacdac_trafficlight_setred
        //% block="set %trafficlight red to $value"
        //% value.shadow=toggleOnOff
        setRed(value: boolean) {
            this.start()
            const values = this._red.values as any[]
            values[0] = value ? 1 : 0
            this._red.values = values as [boolean]
        }

        /**
         * The on/off state of the yellow light.
         */
        //% callInDebugger
        //% group="Traffic Light"
        //% weight=98
        //% blockId=jacdac_trafficlight_yellow
        //% block="%trafficlight yellow"
        yellow(): boolean {
            this.start()
            const values = this._yellow.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * The on/off state of the yellow light.
         */
        //% group="Traffic Light"
        //% weight=97
        //% blockId=jacdac_trafficlight_setyellow
        //% block="set %trafficlight yellow to $value"
        //% value.shadow=toggleOnOff
        setYellow(value: boolean) {
            this.start()
            const values = this._yellow.values as any[]
            values[0] = value ? 1 : 0
            this._yellow.values = values as [boolean]
        }

        /**
         * The on/off state of the green light.
         */
        //% callInDebugger
        //% group="Traffic Light"
        //% weight=96
        //% blockId=jacdac_trafficlight_green
        //% block="%trafficlight green"
        green(): boolean {
            this.start()
            const values = this._green.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * The on/off state of the green light.
         */
        //% group="Traffic Light"
        //% weight=95
        //% blockId=jacdac_trafficlight_setgreen
        //% block="set %trafficlight green to $value"
        //% value.shadow=toggleOnOff
        setGreen(value: boolean) {
            this.start()
            const values = this._green.values as any[]
            values[0] = value ? 1 : 0
            this._green.values = values as [boolean]
        }
    }
    //% fixedInstance whenUsed weight=1 block="traffic light1"
    export const trafficLight1 = new TrafficLightClient("traffic Light1")
}
