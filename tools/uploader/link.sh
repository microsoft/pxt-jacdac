#!/bin/sh

test -f mkc.json.bkp || cp mkc.json mkc.json.bkp
cp mkc-local.json mkc.json
mkc init --symlink-pxt-modules
mv mkc.json.bkp mkc.json
rm -rf pxt_modules/jacdac* tsconfig.json
