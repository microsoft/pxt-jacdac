forever(() => {
    modules.cloudAdapter1.uploadNumber("time", Math.random(), Math.random())
    pause(1000)
})
