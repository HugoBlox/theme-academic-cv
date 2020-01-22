#! /bin/bash

cp ~/gd/APA/cv/biobib.pdf static/files/cv.pdf
chmod a+r static/files/cv.pdf
academic import --bibtex maltzahn.bib
python addpdfs.py

