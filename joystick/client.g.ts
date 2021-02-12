namespace modules {
    /**
     * A two axis directional joystick
     **/
    //% fixedInstances blockGap=8
    export class JoystickClient extends jacdac.SensorClient<[number,number]> {
            

            constructor(role: string) {
            super(jacdac.SRV_JOYSTICK, role, "i1.15 i1.15");
            
        }
    

        /**
        * The direction of the joystick measure in two direction.
        * If joystick is digital, then each direction will read as either `-0x8000`, `0x0`, or `0x7fff`.
        */
        //% blockId=jacdac_joystick_direction_x_get
        //% group="Joystick"
        //% block="%joystick x" callInDebugger
        x(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }
        /**
        * The direction of the joystick measure in two direction.
        * If joystick is digital, then each direction will read as either `-0x8000`, `0x0`, or `0x7fff`.
        */
        //% blockId=jacdac_joystick_direction_y_get
        //% group="Joystick"
        //% block="%joystick y" callInDebugger
        y(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[1];
        } 

    }
    //% fixedInstance whenUsed
    export const joystick = new JoystickClient("joystick");
}