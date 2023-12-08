serve:
	open http://localhost:1313/
	# note: the -D option lets hugo include posts that are marked as draft
	hugo server -D

biblio:
	pandoc -t markdown_strict \
		--citeproc static/files/pandoc-bib-template.md \
		-o static/files/bibliography.md \
		--bibliography static/files/gv.bib
