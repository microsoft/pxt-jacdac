#!/bin/sh

set -e
set -x
if test -d ../../../../../pxt-common-packages/libs/wifi---esp32 ; then
  cfg=mkc-local.json
else
  cfg=mkc.json
fi
mkc build -d --config-path $cfg
mkc serve -p 3232 --config-path $cfg
#cp built/binary.js ../../docs/assets/js/binary-local.js
