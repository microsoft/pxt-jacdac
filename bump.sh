#!/bin/sh

set -e
git pull
makecode --mono-repo --bump
