forever(() => {
    modules.jacscriptCloud.uploadNumber(
        "time",
        input.runningTime(),
        Math.random()
    )
    pause(1000)
})
