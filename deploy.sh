#!/usr/bin/env bash

hugo
rsync  -avz --delete public/ tiagoboldt.net:~/www/tiagoboldt.net/
