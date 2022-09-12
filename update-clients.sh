#!/bin/sh

set -e
git pull
for f in $(find . -name '*.gts'); do
    echo "processing $f..."; 
    cf="${f%.*}.g.ts"
    if [ -f $cf ]
    then
        cp "$f" "${cf}"
    fi
done

prettier --write **/*.ts
cp accelerometer/constants.ts devices/microbit/constants/accelerometer.ts
cp bit-radio/constants.ts devices/microbit/constants/bit-radio.ts
cp button/constants.ts devices/microbit/constants/button.ts
cp buzzer/constants.ts devices/microbit/constants/buzzer.ts
cp compass/constants.ts devices/microbit/constants/compass.ts
cp dot-matrix/constants.ts devices/microbit/constants/dot-matrix.ts
cp light-level/constants.ts devices/microbit/constants/light-level.ts
cp sound-level/constants.ts devices/microbit/constants/sound-level.ts
cp sound-player/constants.ts devices/microbit/constants/sound-player.ts
cp temperature/constants.ts devices/microbit/constants/temperature.ts
