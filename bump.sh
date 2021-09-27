#!/bin/sh

set -e
makecode --mono-repo --bump
cd tools/microbit-oob && sh release.sh && cd ../..
cd tools/hid-server && sh release.sh && cd ../..
git add -m "updated firmwares"