modules.relay1.onActive(() => {
    // when relay transitions from closed to open
    console.log("on")
})

modules.relay1.onInactive(() => {
    // when relay transitions from open to closed
    console.log("off")
})