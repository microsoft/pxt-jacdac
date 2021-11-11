#!/bin/sh

set -e
rm -rf dist
mkdir dist
cp -v tools/multitool/built/combined.uf2 dist/multitool-f4-d5-n4.uf2
cp -v tools/multitool/built/n3/binary.hex dist/multitool-microbit.hex
cp -v tools/uploader/built/jacdac-iot-s2/binary.uf2 dist/uploader-esp32s2.uf2
cp -v tools/uploader/built/jacdac-iot-s2/binary.srcmap dist/uploader-esp32s2.srcmap
cp -v tools/microbit-oob/built/binary.hex dist/microbit-oob.hex
cp -v tools/farm-beats/built/binary.hex dist/farm-beats.hex
cp -v tools/hid-servers/built/jacdac-brain-f4/binary.uf2 dist/hid-servers-f4.uf2
cp -v tools/hid-servers/built/jacdac-brain-rp2040/binary.uf2 dist/hid-servers-rp2040.uf2
