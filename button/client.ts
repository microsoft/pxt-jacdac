namespace modules {
    /**
     * A push-button, which returns to inactive position when not operated anymore.
     **/
    //% fixedInstances blockGap=8
    export class ButtonClient extends jacdac.SimpleSensorClient {
        private readonly _analog: jacdac.RegisterClient<[boolean]>
        private _pressed: boolean = false
        private _holdDuration: number = 0

        constructor(role: string) {
            super(jacdac.SRV_BUTTON, role, "u0.16")

            this._analog = this.addRegister<[boolean]>(
                jacdac.ButtonReg.Analog,
                jacdac.ButtonRegPack.Analog,
                jacdac.RegisterClientFlags.Optional |
                    jacdac.RegisterClientFlags.Const
            )

            this.on(jacdac.EVENT, pkt => this.handleEvent(pkt))
        }

        private handleEvent(pkt: jacdac.JDPacket) {
            const code = pkt.eventCode
            switch (code) {
                case jacdac.ButtonEvent.Up:
                    this._pressed = false
                    this._holdDuration = pkt.intData
                    break
                case jacdac.ButtonEvent.Hold:
                    this._pressed = true
                    this._holdDuration = pkt.intData
                    break
                case jacdac.ButtonEvent.Down:
                    this._pressed = true
                    this._holdDuration = 0
                    break
            }
        }

        /**
         * Indicates the pressure state of the button, where ``0`` is open.
         */
        //% callInDebugger
        //% group="Button"
        //% weight=100
        pressure(): number {
            return this.reading() * 100
        }

        /**
         * Indicates if the button provides analog ``pressure`` readings.
         */
        //% callInDebugger
        //% group="Button"
        //% weight=99
        analog(): boolean {
            this.start()
            const values = this._analog.pauseUntilValues() as any[]
            return !!values[0]
        }

        /**
         * Determines if the button is pressed currently.
         *
         * If the event ``down`` is observed, ``pressed`` is true; if ``up`` or ``hold`` are observed, ``pressed`` is false.
         * To initialize, wait for any event or timeout to ``pressed`` is true after 750ms (1.5x hold time).
         */
        //% callInDebugger
        //% group="Button"
        //% block="%button pressed"
        //% blockId=jacdac_button_pressed___get
        //% weight=98
        pressed(): boolean {
            this.start()
            return this._pressed
        }

        /**
         * Run code when the pressure changes by the given threshold value.
         */
        //% group="Button"
        //% weight=97
        //% threshold.min=0
        //% threshold.max=100
        //% threshold.defl=5
        onPressureChangedBy(threshold: number, handler: () => void): void {
            this.onReadingChangedBy(threshold / 100, handler)
        }

        /**
         * Register code to run when an event is raised
         */
        //% group="Button"
        //% blockId=jacdac_on_button_event
        //% block="on %button %event"
        //% weight=96
        onEvent(ev: jacdac.ButtonEvent, handler: () => void): void {
            this.registerEvent(ev, handler)
        }

        /**
         * The latest reported hold duration when the button is down.
         *
         * The `down` and `hold` events also report the total hold duration in milliseconds.
         * The value is the last hold duration while the button is up.
         */
        //% callInDebugger
        //% group="Button"
        //% block="%button hold duration (ms)"
        //% blockId=jacdac_button_hold_duration_get
        //% weight=95
        holdDuration(): number {
            return this._holdDuration
        }

        /**
         * Emitted when button goes from inactive to active.
         */
        //% group="Button"
        //% weight=95
        onDown(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Down, handler)
        }
        /**
         * Emitted when button goes from active to inactive. The 'time' parameter
         * records the amount of time between the down and up events.
         */
        //% group="Button"
        //% weight=94
        onUp(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Up, handler)
        }
        /**
         * Emitted when the press time is greater than 500ms, and then at least every 500ms
         * as long as the button remains pressed. The 'time' parameter records the the amount of time
         * that the button has been held (since the down event).
         */
        //% group="Button"
        //% weight=93
        onHold(handler: () => void): void {
            this.registerEvent(jacdac.ButtonEvent.Hold, handler)
        }
    }
    //% fixedInstance whenUsed weight=1 block="button1"
    export const button1 = new ButtonClient("button1")

    //% fixedInstance whenUsed weight=2 block="button2"
    export const button2 = new ButtonClient("button2")

    //% fixedInstance whenUsed weight=3 block="button3"
    export const button3 = new ButtonClient("button3")

    //% fixedInstance whenUsed weight=4 block="button4"
    export const button4 = new ButtonClient("button4")
}
