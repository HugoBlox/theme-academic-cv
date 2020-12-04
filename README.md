# Overview

This is the GitHub page for the NASA High Mountain Asia team website.

## Contact

* [Anthony Arendt](mailto:arendta@uw.edu) at the University of Washington

## Deployment

* built with the [Academic](https://sourcethemes.com/academic/) website framework
* local deployment requires [Hugo](https://gohugo.io/getting-started/installing/)
  * (as of December 2020) currently requires Hugo version 0.61
  * if using Homebrew on MacOS, download the [Hugo 0.61 formula (hugo.rb)](https://raw.githubusercontent.com/Homebrew/homebrew-core/79894aee20a146d6cf7db7b4a362e7d491f499a1/Formula/hugo.rb), then run ```brew install hugo.rb```
* clone with ```git clone --recursive``` to also clone theme submodule
* with Hugo installed, type ```hugo server``` for localhost testing
* push changes to master and it will deploy automatically


## Add-ons

* [academic](https://pypi.org/project/academic/): Python administrative tool for the Academic website framework
* to automatically import your references in bibtex format, run: ```academic import --bibtex my_publications.bib```

