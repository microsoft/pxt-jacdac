forever(() => {
    modules.vibrationMotor1.vibrate(1000, 50)
    pause(500)
    modules.vibrationMotor1.vibrate(1000, 50, 500, 10)
    pause(1000)
    modules.vibrationMotor1.vibrate(200, 50, 200, 30, 3)
    pause(500)
})
