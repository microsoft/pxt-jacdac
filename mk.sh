#!/bin/sh

set -e
makecode build -u -j --mono-repo -c mkc.json
makecode build -u -j --mono-repo -c mkc-maker.json
makecode build -u -j --mono-repo -c mkc-arcade.json
makecode build -u -j --mono-repo -h v3 -c mkc-calliope.json
