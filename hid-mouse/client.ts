namespace modules {
    /**
     * Controls a HID mouse.
     **/
    //% fixedInstances blockGap=8
    export class HidMouseClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_HID_MOUSE, role)
        }

        /**
         * Sets the up/down state of one or more buttons.
         * A ``Click`` is the same as ``Down`` followed by ``Up`` after 100ms.
         * A ``DoubleClick`` is two clicks with ``150ms`` gap between them (that is, ``100ms`` first click, ``150ms`` gap, ``100ms`` second click).
         */
        //% group="HID Mouse"
        //% blockId=jacdac_hidmouse_set_button_cmd
        //% block="%hidmouse set button |buttons $buttons |event $event"
        //% weight=100
        setButton(
            buttons: jacdac.HidMouseButton,
            event: jacdac.HidMouseButtonEvent
        ): void {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.HidMouseCmd.SetButton,
                    jacdac.HidMouseCmdPack.SetButton,
                    [buttons, event]
                )
            )
        }

        /**
         * Moves the mouse by the distance specified.
         * If the time is positive, it specifies how long to make the move.
         */
        //% group="HID Mouse"
        //% blockId=jacdac_hidmouse_move_cmd
        //% block="%hidmouse move dx $dx dy $dy ||time $time"
        //% weight=99
        //% time.min=0
        move(dx: number, dy: number, time?: number): void {
            this.start()
            time = isNaN(time) ? 0 : time
            this.sendCommand(
                jacdac.JDPacket.jdpacked(
                    jacdac.HidMouseCmd.Move,
                    jacdac.HidMouseCmdPack.Move,
                    [dx, dy, time]
                )
            )
        }

        /**
         * Turns the wheel up or down. Positive if scrolling up.
         * If the time is positive, it specifies how long to make the move.
         */
        //% group="HID Mouse"
        //% blockId=jacdac_hidmouse_wheel_cmd
        //% block="%hidmouse wheel |dy $dy |time $time"
        //% weight=98
        wheel(dy: number, time: number): void {
            this.start()
            this.sendCommand(
                jacdac.JDPacket.jdpacked(jacdac.HidMouseCmd.Wheel, jacdac.HidMouseCmdPack.Wheel, [
                    dy,
                    time,
                ])
            )
        }
    }
    //% fixedInstance whenUsed weight=1 block="hid mouse 1"
    export const hidMouse1 = new HidMouseClient("hid Mouse1")
}
