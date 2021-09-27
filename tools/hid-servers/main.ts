namespace userconfig {
    export const PIN_LED_R = DAL.PB_0 |  DAL.CFG_PIN_CONFIG_ACTIVE_LO
    export const PIN_LED_G = DAL.PA_7 |  DAL.CFG_PIN_CONFIG_ACTIVE_LO
    export const PIN_LED_B = DAL.PA_6 |  DAL.CFG_PIN_CONFIG_ACTIVE_LO
}

jacdac.productIdentifier = 0x3bcbc488

jacdac.startServer()
servers.hidKeyboard.start()
servers.hidMouse.start()
