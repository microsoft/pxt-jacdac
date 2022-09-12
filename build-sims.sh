#!/bin/sh

set -e
cd tools/microbit-jukebox
mkc --java-script --config-path ../../mkc.json
cp built/binary.js ../../docs/assets/js/microbit-jukebox.js
cd ../..
cd tools/microbit-microcode-servers
mkc --java-script --config-path ../../mkc.json
cp built/binary.js ../../docs/assets/js/microbit-microcode-servers.js
cd ../..
cd tools/multitool
mkc --java-script --config-path ./mkc.json
cp built/binary.js ../../docs/assets/js/multitool.js
