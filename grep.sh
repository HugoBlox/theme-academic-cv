echo "検索する文字列を入力してください"
read target
array=($(grep -r $target *))

for var in ${array[@]}
do
  if [ ${var:0:28}!="themes/academic/exampleSite/" ]; then
    if [ ${var:0:5}]!="docs" ]; then
      echo $var
    fi
  fi
done
echo ""
echo ""
read -p "終了するにはなにかキーを入力してください"
