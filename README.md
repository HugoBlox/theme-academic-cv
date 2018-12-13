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

## Getting Started

The following two methods describe how to install in the cloud using your web browser and how to install on your PC using the Command Prompt/Terminal app.

### Quick install using your web browser

1. [Install Academic with Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/sourcethemes/academic-kickstart)
    * Netlify will provide you with a customizable URL to access your new site
2. On GitHub, go to your newly created `academic-kickstart` repository and edit `config.toml` to personalize your site. Shortly after saving the file, your site will automatically update
3. Read the [Quick Start Guide](https://sourcethemes.com/academic/docs/) to learn how to add Markdown content. For inspiration, refer to the [Markdown content](https://github.com/gcushen/hugo-academic/tree/master/exampleSite) which powers the [Demo](https://themes.gohugo.io/theme/academic/)

### Install on your PC

Prerequisites:

* [Download and install Git](https://git-scm.com/downloads)
* [Download and install Hugo](https://gohugo.io/getting-started/installing/#quick-install)

1. Clone (or [Fork](https://github.com/sourcethemes/academic-kickstart#fork-destination-box) or [download](https://github.com/sourcethemes/academic-kickstart/archive/master.zip)) the *Academic Kickstart* repository with Git:

       git clone https://github.com/sourcethemes/academic-kickstart.git My_Website

    *Note that if you forked Academic Kickstart, the above command should be edited to clone your fork.*

2. Initialize the theme:

       cd My_Website
       git submodule update --init --recursive

3. View your new website:

       hugo server

    Now you can go to [localhost:1313](http://localhost:1313) and your new Academic powered website should appear.

4. Read the [Quick Start Guide](https://sourcethemes.com/academic/docs/) to learn how to add Markdown content, customize your site, and deploy it.

## License

Copyright 2017 [George Cushen](https://georgecushen.com).

Released under the [MIT](https://github.com/sourcethemes/academic-kickstart/blob/master/LICENSE.md) license.

[![Analytics](https://ga-beacon.appspot.com/UA-78646709-2/academic-kickstart/readme?pixel)](https://github.com/igrigorik/ga-beacon)
