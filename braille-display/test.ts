let i = 0
forever(() => {
    modules.brailleDisplay1.showNumber(i)
    pause(1000)
    i++
})
