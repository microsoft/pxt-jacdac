//jacdac.logPriority = ConsolePriority.Log
namespace test {
    //% fixedInstance whenUsed
    export const leftServo = new modules.ServoClient("leftServo?srvo=0")
    //% fixedInstance whenUsed
    export const middleServo = new modules.ServoClient("middleServo?srvo=1")
    //% fixedInstance whenUsed
    export const rightServo = new modules.ServoClient("rightServo?srvo=2")
}

forever(() => {
    console.log("middle")
    basic.clearScreen()
    led.plot(2, 0)
    test.middleServo.setAngle(90)
    test.rightServo.setAngle(0)
    test.leftServo.setAngle(0)
    pause(2000)

    console.log("right")
    basic.clearScreen()
    led.plot(4, 0)
    test.leftServo.setAngle(0)
    test.middleServo.setAngle(0)
    test.rightServo.setAngle(90)
    pause(2000)

    console.log("left")
    basic.clearScreen()
    led.plot(0, 0)
    test.leftServo.setAngle(90)
    test.middleServo.setAngle(0)
    test.rightServo.setAngle(0)
    pause(2000)
})
