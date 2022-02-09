modules.ledStrip1.setBrightness(85)
modules.ledStrip1.setAll(0x00ff00)
modules.ledStrip1.setPixel(2, 0xff0000)

pause(3000)

modules.ledStrip1.configure(30, undefined, 500)
forever(function () {
    modules.ledStrip1.showAnimation(
        modules.ledPixelAnimations.rainbowCycle,
        1000
    )
    pause(1000)
    modules.ledStrip1.showAnimation(
        modules.ledPixelAnimations.runningLights,
        1000
    )
    pause(1000)
    modules.ledStrip1.showAnimation(modules.ledPixelAnimations.comet, 1000)
    pause(1000)
    modules.ledStrip1.showAnimation(modules.ledPixelAnimations.sparkle, 1000)
    pause(1000)
    modules.ledStrip1.showAnimation(modules.ledPixelAnimations.colorWipe, 1000)
    pause(1000)
    modules.ledStrip1.showAnimation(
        modules.ledPixelAnimations.theatherChase,
        1000
    )
    pause(1000)
})
