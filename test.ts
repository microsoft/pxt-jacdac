// pins.A9.digitalWrite(false)
jacdac.consolePriority = ConsolePriority.Log;
jacdac.settingsHost.start()
jacdac.start()
/*
forever(function() {
    console.log("angle 45")
    jacdac.servoClient.setAngle(45)
    pause(400)
    console.log("angle 90")
    jacdac.servoClient.setAngle(90)
    pause(400)
})
*/