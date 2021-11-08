forever(() => {
    modules.servo1.setAngle(-45)
    pause(3000)
    modules.servo1.setAngle(45)
    pause(3000)
})