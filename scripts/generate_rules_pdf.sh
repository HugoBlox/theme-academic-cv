#!/bin/bash

echo "GENERATING ENGLISH RULES"
pandoc content/en/rules/index.md --pdf-engine=xelatex -o content/en/rules/gbpn-rules.pdf || exit 1

echo "GENERATING ITALIAN RULES"
pandoc content/it/rules/index.md --pdf-engine=xelatex -o content/it/rules/gbpn-rules.pdf || exit 2
