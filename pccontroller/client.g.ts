namespace modules {
    /**
     * Send various events to PC, including opening a URL, start an app, sending text, etc.
     **/
    //% fixedInstances blockGap=8
    export class PCControllerClient extends jacdac.Client {
            

        constructor(role: string) {
            super(jacdac.SRV_PCCONTROLLER, role)
            
        }
    


        /**
        * Open a URL in the default browser.
        */
        //% group="PC controller"
        //% blockId=jacdac_pccontroller_open_url_cmd
        //% block="%pccontroller open url $url"
        //% weight=100
        openUrl(url: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.PCControllerCmd.OpenUrl, jacdac.PCControllerCmdPack.OpenUrl, [url]))
        }

        /**
        * Start an app.
        */
        //% group="PC controller"
        //% blockId=jacdac_pccontroller_start_app_cmd
        //% block="%pccontroller start app $name"
        //% weight=99
        startApp(name: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.PCControllerCmd.StartApp, jacdac.PCControllerCmdPack.StartApp, [name]))
        }

        /**
        * Send text to the active window.
        */
        //% group="PC controller"
        //% blockId=jacdac_pccontroller_send_text_cmd
        //% block="%pccontroller send text $text"
        //% weight=98
        sendText(text: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.PCControllerCmd.SendText, jacdac.PCControllerCmdPack.SendText, [text]))
        }

        /**
        * Run a script.
        */
        //% group="PC controller"
        //% blockId=jacdac_pccontroller_run_script_cmd
        //% block="%pccontroller run script $script"
        //% weight=97
        runScript(script: string): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.PCControllerCmd.RunScript, jacdac.PCControllerCmdPack.RunScript, [script]))
        }
    
    }
    
    //% fixedInstance whenUsed weight=1 block="pccontroller1"
    export const PCController1 = new PCControllerClient("PCController1");
}