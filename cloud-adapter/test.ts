modules.cloudAdapter1.onCloudCommand("test", (value) => {
    console.log("cloud command received: test " + value)
})
forever(() => {
    modules.cloudAdapter1.uploadNumber("rnd", Math.random(), Math.random())
    pause(5000)
})
