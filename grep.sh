echo "検索する文字列を入力してください"
read target
grep -n -r $target * | sed -e '/^themes\/academic\/exampleSite/d'| sed -e '/^docs/d' > "grep_result/${target}.txt"

