#!/bin/sh

#参考：https://qiita.com/koara-local/items/2d67c0964188bba39e29
SCRIPT_DIR=$(cd $(dirname $0); pwd)
THEMES_DIR=$SCRIPT_DIR/themes/academic
THEMES_DIR_LENGTH=${#THEMES_DIR}+1
dirs=`find $THEMES_DIR/* -type f`
TARGETS=()
for dir in $dirs
do
  FILE_PATH="${dir:$THEMES_DIR_LENGTH}"
  if [ -e $SCRIPT_DIR/$FILE_PATH ]; then
    TARGETS=("${TARGETS[@]}" $FILE_PATH)
    echo $FILE_PATH
  fi
done
echo "${#TARGETS[@]}個のファイルが比較されます。"
echo -n "よろしいですか？(y/n):"
read str
if [ $str != "y" ]; then
  exit 0
fi
for target in ${TARGETS[@]}
do
  "C:\Program Files\WinMerge\WinMergeU.exe" $SCRIPT_DIR/$target $THEMES_DIR/$target -xq
done