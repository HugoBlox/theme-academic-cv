echo "検索する文字列を入力してください"
read target
grep -n -r $target * | sed -e '/^themes\/academic\/exampleSite/d'| sed -e '/^docs/d' > grep_result.txt
#arr=($(grep -r $target *))    
#echo ${arr[0]}
#s=""
#for item in ${arr[@]}
#do
#  s=$s$item
#  if [ ${var:0:28}!="themes/academic/exampleSite/" ]; then
#    if [ ${var:0:5}]!="docs" ]; then
#      echo $var >> result.txt
#    fi
#  fi
#done

#echo $s
#for ((i = 0; i < ${#arr[@]}; i++))
#do
#  var=${arr[$i]}
#  if [ ${var:0:28}!="themes/academic/exampleSite/" ]; then
#    if [ ${var:0:5}]!="docs" ]; then
#      echo $var >> result.txt
#    fi
#  fi
#done
#for var in ${arr[@]}
#do
#  if [ ${var:0:28}!="themes/academic/exampleSite/" ]; then
#    if [ ${var:0:5}]!="docs" ]; then
#      echo $var >> result.txt
#    fi
#  fi
#done
#grep -r $target *
#echo ""
#echo ""
#read -p "終了するにはなにかキーを入力してください"
