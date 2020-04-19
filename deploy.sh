#!/usr/bin/env bash

backup(){
  if [[ $1 = "dry-run" ]]
  then
    echo "dry run"
    rsync -avvu -n --recursive --delete ./public/ tiagoboldt.net:~/www/tiagoboldt.net/
    return 1
  fi
  echo "real deal"
  rsync -avvu --recursive --delete ./public/ tiagoboldt.net:~/www/tiagoboldt.net/
}

hugo --cleanDestinationDir --minify

backup "dry-run"
read -p "Continue? [yN]? " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "canceled"
    exit 1
fi
backup
