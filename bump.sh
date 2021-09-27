#!/bin/sh

set -e
git pull
makecode --mono-repo --bump
cd tools/microbit-oob && sh release.sh && cd ../..
cd tools/hid-server && sh release.sh && cd ../..
