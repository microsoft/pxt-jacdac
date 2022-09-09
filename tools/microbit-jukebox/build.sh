#!/bin/sh

set -e
set -x
cfg=../../mkc.json
mkc --java-script --config-path $cfg
rm -rf pxt_modules/jacdac*
cp built/binary.js ../../docs/assets/js/microbit-jukebox-local.js
