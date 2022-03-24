const pattern = [0x000000, 0xff0000, 0x00ff00, 0x0000ff]

/*
function animateDisplayLEDs(b: Button) {
    if (b === Button.A) {        
        onlyLedDisplay.forEach(d => {
            d.rotate(1)
            d.show()
        })
    } else if (b === Button.B) {
        onlyLedDisplay.forEach(d => {
            d.rotate(-1)
            d.show()
        })
    } else {
        onlyLedDisplay.forEach(d => {
            const numPixels = d.numPixels()
            let j = 0
            for (let i = 0; i < numPixels; i++) {
                d.setPixelColor(i, pattern[j])
                j++
                if (j === pattern.length)
                    j = 0
            }
            d.show()
        })
    }
}
*/

machine.addClientFactory(jacdac.SRV_LED_DISPLAY, devid => {
    const client = new modules.LedDisplayClient(devid)
    client.setPixelColor(1, 0x00FF00)
    client.show()
})
