music.setVolume(100)
music.setTempo(180)

namespace machine {
    export class SonifyOptions {
        public waveShape: WaveShape;
        public effect: SoundExpressionEffect;
        public interpolation: InterpolationCurve;
        public startVolume: number;
        constructor() {
            this.waveShape = <WaveShape>Math.randomRange(0, 4);
            this.effect = <SoundExpressionEffect>Math.randomRange(0, 3);
            this.interpolation = <InterpolationCurve>Math.randomRange(0, 1);
            this.startVolume = Math.randomRange(100, 255);
        }

        play(t: number) {
            const duration = music.beat(BeatFraction.Half)
            const startf = t >= 0 ? t : 0
            const endf = t < 0 ? -t : 0
            const effect = music.createSoundEffect(
                this.waveShape,
                startf,
                endf,
                this.startVolume,
                255 - this.startVolume,
                duration,
                this.effect,
                this.interpolation
            )
            music.playSoundEffect(effect, SoundExpressionPlayMode.UntilDone)            
        }
    }

    export function playSoundExpression(expression: SoundExpression) {
        if (expression === SoundExpression.Happy) soundExpression.happy.play()
        else if (expression === SoundExpression.Sad) soundExpression.sad.play()
    }
}