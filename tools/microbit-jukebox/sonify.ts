// tone player
namespace machine {
    let nextTone: number
    let nextToneOptions: SonifyOptions

    function startTonePlayer() {
        music.stopAllSounds()
        control.runInBackground(() => {
            while (nextTone && nextToneOptions) {
                const t = nextTone
                const options = nextToneOptions

                nextTone = 0
                nextToneOptions = undefined

                machine.microbit.playTone(Math.abs(t))

                // 2.0 sound effects
                options.play(t)

                basic.pause(20)
            }
        })
    }
    export function scheduleTone(f: number, options: SonifyOptions) {
        nextTone = f
        nextToneOptions = options
        startTonePlayer()
    }

    function sonify(value: number, max: number, options: SonifyOptions) {
        const fmin = 200
        const fmax = 10000
        const f = Math.map(Math.abs(value), 0, max, fmin, fmax)
        scheduleTone(Math.sign(value) * f, options)
    }

    export function plot(value: number, max: number, options: SonifyOptions) {
        led.plotBarGraph(value, max)
        sonify(value, max, options)
    }

    export const enum SoundExpression {
        Happy, Sad
    }
}
