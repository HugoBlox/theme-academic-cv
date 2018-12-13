# Academic Kickstart
## Notes on deploying Alexander Lab Website:

The code here is used to generate the website https://AlexanderLabWHOI.github.io

### Instructions for website modification:
  * Make changes to the md files in the content folder or the config file
  * Add, commit, and push changes to https://github.com/AlexanderLabWHOI/academic-kickstart
  * Run `deploy_site.sh` to (1) build with hugo, (2) add, commit, and push website changes to `AlexanderLabWHOI.github.io`-- this should be done automatically as the `public/` directory is a submodule linked to AlexanderLabWHOI.github.io repo. **Note: if you are not Harriet, please make a pull request with changes noted and tag @halexand.**  
  * To update/populate publications with we are using https://github.com/sourcethemes/academic-admin.
    * If not installed-- create a conda environment and run: `pip3 install -U academic`. When installed you can run: `academic import --bibtex static/pubs/publications.bib`
    * This will populate the `/content/publication/` folder with a folder for each new publication. Please check the `index.md` within that folder to check key words, abstract, etc.
  * To create a submodule within public: ` git submodule add -f -b master https://github.com/alexanderlabwhoi/alexanderlabwhoi.github.io.git public`
## Notes on Academic Theme:


**Academic** is a framework to help you create a beautiful website quickly. Perfect for personal, student, or academic websites. [Check out the latest demo](https://themes.gohugo.io/theme/academic/) of what you'll get in less than 10 minutes or [view the documentation](https://sourcethemes.com/academic/docs/).

**Academic Kickstart** provides a minimal template to kickstart your new website by following the simple steps below.

[![Screenshot](https://raw.githubusercontent.com/gcushen/hugo-academic/master/academic.png)](https://github.com/gcushen/hugo-academic/)

## License

Copyright 2017 [George Cushen](https://georgecushen.com).

Released under the [MIT](https://github.com/sourcethemes/academic-kickstart/blob/master/LICENSE.md) license.



