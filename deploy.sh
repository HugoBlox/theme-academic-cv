#!/usr/bin/env bash

hugo
( cd public && git add . && git commit -m "Build website" && git push origin master )
