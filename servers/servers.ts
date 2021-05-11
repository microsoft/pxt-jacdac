/**
 * Blocs to handle Jacdac servers
 */
//% icon="icons/jacdac.svg"
//% weight=79 color="#009900"
namespace servers {
    /**
     * Starts a jacdac server
     */
    //% blockId=jacdac_start_server block="start $server"
    export function startServer(server: jacdac.Server) {
        if (server)
            server.start()
    }
}