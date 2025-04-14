#!/bin/sh

set -e
rm -rf dist
mkdir dist
cp -v tools/multitool/built/combined.uf2 dist/multitool-f4-d5-n4.uf2
cp -v tools/multitool/built/n3/binary.hex dist/multitool-microbit.hex
cp -v tools/microbit-oob/built/binary.hex dist/microbit-oob.hex
cp -v tools/microbit-jukebox/built/binary.hex dist/microbit-jukebox.hex
cp -v tools/farm-beats/built/binary.hex dist/farm-beats.hex
