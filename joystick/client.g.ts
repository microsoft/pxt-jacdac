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
        //% group="Joystick" blockSetVariable=myModule
        //% blockCombine block="x" callInDebugger
        get x(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[0];
        }
        /**
        * The direction of the joystick measure in two direction.
        * If joystick is digital, then each direction will read as either `-0x8000`, `0x0`, or `0x7fff`.
        */
        //% group="Joystick" blockSetVariable=myModule
        //% blockCombine block="y" callInDebugger
        get y(): number {
            const values = this.values() as any[];
            return values && values.length > 0 && values[1];
        }     
     

    }
    //% fixedInstance whenUsed
    export const joystick = new JoystickClient("joystick");
}