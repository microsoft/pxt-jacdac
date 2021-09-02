#!/bin/sh

set -e
set -x
if test -d ../../../../../pxt-common-packages/libs/wifi---esp32 ; then
  mkc -j -c mkc-local.json
else
  mkc -j -c mkc.json
fi
cp built/binary.js ../../docs/assets/js/binary-local.js
