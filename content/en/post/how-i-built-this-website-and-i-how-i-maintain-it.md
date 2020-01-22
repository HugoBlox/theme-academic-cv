+++
authors = []
date = 2020-01-03T11:00:00Z
draft = true
featured = false
projects = []
subtitle = "Using Hugo, Academic, and Forestry"
summary = "Learn how I built this website using Hugo and Academic, the little changes I made to match my old design, and how I keep posting from any devices using Forestry."
tags = []
title = "How I built this website and I how I maintain it"
[image]
caption = "Caption"
focal_point = "Smart"
placement = 0

+++
I've been looking to rework my "portfolio" website. This old website, was built from scratch using **ReactJS** with **Bootstrap** and **w3css**. It was pretty easy to maintain until I needed to update my status. Unlike how **Hugo** works, the website was not generating pages over static content. So every time I needed to add a work experience or a project, I needed to create the content, and include it in my website by adding a new react component in the appropriate JSX. You can have a look at the old website [here,](https://wwwold.haashi.fr) and its code [there](https://github.com/Haashi/Portfolio).

This is where I like **Hugo**, it helps you separate content from how it is displayed. Using Hugo templating system, you tell how you want your content to be displayed. In most case, you want a template for each type of content you have. Here on this website, there is two main types of content : "post" and "project". Once those templates are created, you only need to create contents using markdown files. The templating system can access metadata called "Front matter" of a markdown file. They are the first thing to needed to be declared inside a content. Example for this post :

    +++
    authors = []
    date = 2020-01-03T11:00:00Z
    draft = true
    featured = false
    projects = []
    subtitle = "Using Hugo, Academic, and Forestry"
    summary = "Learn how I built this website using Hugo and Academic, the little changes I made to match my old design, and how I keep posting from any devices using Forestry."
    tags = []
    title = "How I built this website and I how I maintain it"
    [image] caption = "Caption"
    focal_point = "Smart"
    placement = 0
    +++

You can learn more about the Hugo framework on their website here.After knowing I had to use Hugo to achieve my goal of easy maintain, I read the docs to get started. And one of the very few things they tell you about, are Themes. Themes are a collection of display templates. And knowing how bad I am at designing (and CSS), this was the icing on the cake. I browsed the themes from the Hugo site, with different criteria in mind : portfolio alike, internationalization (english and french), blog alike, responsive. One of the theme that matched all of these was Academic. Funny thing is that Academic (see the demo) can do much more than that. It can manage multiple users posting, team display, external link to online publications and even online courses !  
  
![](/img/academic.PNG)

To get started with the Theme, I forked the academic-kickstart repository on github. From there, it becomes really easy, you can just delete features you don't need. From the homepage, I only needed to display a short bio, my work experiences, my skills and contact informations (not a form because I would rather people to use their own way to contact me). I also edited the work experience template to support keywords (mainly to display technologies involved in the job). The academic template doesn't support this natively. I had this feature on my old website, and wanted to keep this for the new design. Thanks to the Hugo template lookup order, you can override a template from a theme with one of yours. I copied the template from the theme, edited the template to loop over the keywords and display theme using simple CSS (this is the most advanced I can do) :  
  
![](/img/bulletlist.PNG)

From there, I created all the contents about me, most of them were copy pasted from my old website. Now that everything was created, we need to deploy it. My previous portfolio was hosted on GitHub pages. I had no issue with it in 2 years, so I decided to use it again, but this time, improved thanks to one of the new features of GitHub : Actions. Using Actions, I can tell GitHub to build my website using a Hugo Docker and push it to the gh-pages branch which is served over my domain (the setting of a domain for GitHub pages is beyond the scope of this post). Here is the action I use :

    name: github pages
    
    on:
      push:
        branches:
        - master
    
    jobs:
      build-deploy:
        runs-on: ubuntu-18.04
        steps:
        - uses: actions/checkout@v1
          with:
            submodules: true
    
        - name: Setup Hugo
          uses: peaceiris/actions-hugo@v2
          with:
            hugo-version: '0.61.0'
            extended: true
    
        - name: Build
          run: hugo --minify
    
        - name: Deploy
          uses: peaceiris/actions-gh-pages@v2
          env:
            ACTIONS_DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
            PUBLISH_BRANCH: gh-pages
            PUBLISH_DIR: ./public

Pretty easy to read, every time there is a push on the master branch, it uses the checkout action (with submodules on because hugo themes are git submodules !), a hugo docker to build the page, and then another docker to deploy on the gh-pages branch.  
  
With that, I have a fully working continuous delivery process once I push or merge to the master branch. I can now focus on writing content and not worry about how will I update my website.

![](/img/githubactions.PNG)  
  
But can we take it even further ? Meet [forestry](https://forestry.io/ "forestry"). Forestry is a git-backed content management system working with most static pages frameworks out in the wild. It also is pretty easy to deploy, you just need to register your website, and add a static page to access it (often /admin). Once set up, you can edit any content using a richtext editor, from any device by accessing yourwebsite.com/admin and connecting with your forestry login (or oauth2).  
  
Now you can edit content from your favorite IDE/text editor, or doing it from your phone. Forestry will save your edits by committing directly to your repo. I won't use forestry to create all my posts, but I plan to use it a lot on the go.