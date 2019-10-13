all: pdf

pdf: prepare
	@echo "Creating pdf output ..."
	@pwd
	@pandoc --latex-engine=xelatex content/rules/index.md -o content/rules/gpbn-rules.pdf

prepare:
	@echo "Preparing ..."
