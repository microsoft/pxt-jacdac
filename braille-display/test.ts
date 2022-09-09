let i = 0
forever(() => {
    modules.brailleDisplay1.setText(i + "")
    pause(1000)
    i++
})
