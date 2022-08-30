const buttonDownIcons = [
    IconNames.SmallHeart,
    IconNames.Happy,
    IconNames.SmallDiamond,
    IconNames.EigthNote,
    IconNames.SmallSquare,
    IconNames.Pitchfork,
    IconNames.Silly,
    IconNames.Tortoise,
]
const buttonHoldIcons = [
    IconNames.Heart,
    IconNames.Asleep,
    IconNames.Diamond,
    IconNames.QuarterNote,
    IconNames.Square,
    IconNames.Target,
    IconNames.Surprised,
    IconNames.Butterfly,
]
const buttonNotes = [
    Note.C,
    Note.D,
    Note.E,
    Note.F,
    Note.G,
    Note.A,
    Note.B,
    Note.C5,
]
let buttonIndex = 0
machine.addClientFactory(jacdac.SRV_BUTTON, (devid, srvid, options) => {
    const bi = buttonIndex++
    const down = buttonDownIcons[bi % buttonDownIcons.length]
    const hold = buttonHoldIcons[bi % buttonHoldIcons.length]
    const tone = buttonNotes[bi % buttonNotes.length]
    const client = new modules.ButtonClient(`${devid}:${srvid}`)
    // todo mouse
    client.onUp(() => {
        basic.clearScreen()
    })
    client.onDown(() => {
        basic.showIcon(down, 0)
        machine.scheduleTone(tone, options)
    })
    client.onHold(() => {
        basic.showIcon(hold, 0)
    })
    return client
})
