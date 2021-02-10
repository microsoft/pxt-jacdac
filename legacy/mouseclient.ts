const enum JDMouseButton {
    //% block="right" enumval=1
    Right = 0x01,
    //% block="middle" enumval=4
    Middle = 0x04,
    //% block="left" enumval=2
    Left = 0x02,
}

namespace jacdac {
    //% fixedInstances
    export class MouseClient extends Client {
        constructor(role: string) {
            super("mous", SRV_MOUSE, role);
        }

        /** 
         * Sets the mouse button state to down
         */
        //% blockId=jdmouseSetButton block="%mouse button %index|%down=toggleDownUp"
        //% group="Mouse"
        setButton(button: MouseButton, down: boolean): void {
            this.sendPackedCommand(MouseCmd.SetButton, "BB", [button, down ? 1 : 0])
        }

        /**
         * Moves the mouse
         **/
        //% help=mouse/move
        //% blockId=mouseMove block="%mouse move x %x|y %y"
        //% x.min=-128 x.max=127
        //% y.min=-128 y.max=127
        //% group="Mouse"
        move(x: number, y: number): void {
            this.sendPackedCommand(MouseCmd.Move, "bb", [x, y])
        }

        /**
         * Moves the mouse
         **/
        //% help=mouse/wheel
        //% blockId=mouseWheel block="%mouse turn wheel %w"
        //% w.min=-128 w.max=127
        //% group="Mouse"
        turnWheel(w: number): void {
            this.sendPackedCommand(MouseCmd.Wheel, "b", [w])
        }
    }

    //% fixedInstance whenUsed block="mouse client"
    export const mouseClient = new MouseClient();
}