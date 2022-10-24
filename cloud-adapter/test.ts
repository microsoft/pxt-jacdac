modules.cloudAdapter1.onCloudCommand("test", (value, values) => {
    console.log("cloud command received: test " + value + " / " + values.join(","))
})
forever(() => {
    modules.cloudAdapter1.uploadNumber("rnd", Math.random(), Math.random())
    pause(5000)
})
