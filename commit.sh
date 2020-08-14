#!/bin/sh
branch_name=`git symbolic-ref --short HEAD`
if [ $branch_name != "master" ]; then
  echo "現在のbranchはmasterではありません。. "
  echo -n "Commitを続行しますか?(y/n):"
  read answer
  if [ ${answer^^} != "Y" ]; then
    exit
  fi
fi
hugo --cleanDestinationDir
git add .
git commit