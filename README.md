# Academic Kickstart

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
