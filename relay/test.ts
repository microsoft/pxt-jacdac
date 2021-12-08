forever(() => {
    modules.relay1.setClosed(true)
    pause(1000)
    modules.relay1.setClosed(false)
    pause(1000)
})
