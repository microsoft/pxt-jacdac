#!/bin/sh

set -e

node .genaiscript/genaiscript.cjs batch loc-strings "**/_locales/jacdac-*-strings.json" --apply-edits --vars lang=de



