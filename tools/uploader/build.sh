#!/bin/sh

set -e
set -x
if test -d ../../../../../pxt-common-packages/libs/wifi---esp32 ; then
  cfg=mkc-local.json
else
  cfg=mkc.json
fi
mkc --java-script --config-path $cfg
cp built/binary.js ../../docs/assets/js/binary-local.js
