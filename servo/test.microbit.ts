forever(() => {
    modules.servo1.run(50)
    //    modules.servo2.run(50)
    //   modules.servo3.run(50)
    basic.pause(1000)
    modules.servo1.run(0)
    //  modules.servo2.run(0)
    //  modules.servo3.run(0)
    //  basic.pause(1000)
})

modules.servo1.start()
//modules.servo2.start()
//modules.servo3.start()
