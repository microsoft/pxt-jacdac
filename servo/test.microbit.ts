basic.showIcon(IconNames.Happy)
modules.servo1.setEnabled(true)
forever(() => {
    modules.servo1.setAngle(-45)
    basic.showIcon(IconNames.LeftTriangle)
    modules.servo1.setAngle(45)
    basic.showIcon(IconNames.Triangle)
})
