modules.relay1.onOn(() => {
    // when relay transitions from closed to open
    console.log("on")
})

modules.relay1.onOff(() => {
    // when relay transitions from open to closed
    console.log("off")
})