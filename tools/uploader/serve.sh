#!/bin/sh

set -x
http-server -c 0 -p 3232 -a localhost ../../docs
