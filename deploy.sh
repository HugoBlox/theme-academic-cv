#!/usr/bin/env bash

backup(){
  if [[ $1 = "dry-run" ]]
  then
    echo "dry run"
    rsync -avv -n --ignore-existing --recursive --delete ./public/ tiagoboldt.net:~/www/tiagoboldt.net/
    return 1
  fi
  echo "real deal"
  rsync -avv -n --ignore-existing --recursive --delete ./public/ tiagoboldt.net:~/www/tiagoboldt.net/
}

hugo --cleanDestinationDir --minify

backup "dry-run"
read -p "Continue? [yN]? " -n 1 -r
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "canceled"
    exit 1
fi
backup
