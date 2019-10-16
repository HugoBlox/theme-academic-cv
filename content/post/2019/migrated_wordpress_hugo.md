---
title: Why Migrated from WordPress to Hugo
date: 2019-03-25 16:07:00 +0000
tags:
- About
- Hugo
- Static Site Generater
- Firebase
- Forestry
- Netlify
series: Site Update
toc: false
---
This is a _personal site_ and lower cost is **ALWAYS** good!

Using a _Static Site Generator_ provides many benefits;  such as increase performance, customable, cheap hosting, [Markdown](https://en.wikipedia.org/wiki/Markdown) and active communities. I have been using Markdown for some time now and prefer to use Markdown. 

Having some research and investigation of different generators I decided on [GoHugo](https://www.gohugo.io). 

This site is also using [Netlify](https://www.netlify.com) for hosting and also editing this post with [ForestryIO](https://www.forestry.io). Once I publish this post in Forestry it will bre committed and trigger a build with Hugo and then be published on Netlify. I am a geek, so this is really cool!

## Why Hugo?

[Hugo](https://gohugo.io) is written in the [Go language](https://golang.org) and has great documentation and a very active community. When I first tried [GoHugo](https://www.gohugo.io) and was very impressed with how fast it generates code, very good documentation and a active community.

It is very easy to download Hugo and create a new site with one of the many themes available. Hugo like most _Static Site Generators_ are command line based, documented to make it very quick to create a new site. Hugo also provides a lot of ways to customize the site that provides a powerful framework.

One of the aspects that I really like about _Static Site Generators_ and Hugo is the use of Markdown. I have been using Markdown for a long time and ever had it enabled in Wordpress.

The theme [PaperCss](https://papercss-hugo-theme.netlify.com/) is very clean and really visually appealing. I added a submodule to the git repository for this blog and read the short and clear documentation. 

I am still struggling with placing images and having a better workflow in place. Currently, I am using the figure element and custom css.

## Why Static Site

A static site provides a huge performance increase of server side web sites. There is no server side processing on the web server which provides the performance gain. The site is all html,javascript, images and css. Pages are cached and hosted on a CDN to increase performance.

Hosting a static site is very easy, any web hosting will work for static pages. There is no requirement to make sure the hosting provider handles .NET, PHP or any other server side language. 

This opens you up to using Blob storage for hosting static sites which decreases the cost of hosting substantially. This can be with Azure, AWS, Google or [Netlify right here!](https://netlify.com) 

I started by using Azure with my developer account, but found there was a lot of steps and process that had to be setup and then included in the continuous integration. Then I tried Google Firebase, it was very simple to get setup on Firebase. But, I had trouble getting the continue integration working, I know others have it work I just didn't have the time to research. During my research I found Netlify and it made this SO easy! It was at that point the way I would go. I had one problem with having my theme deploy, a simple message and it was resolved.  

**Thank you Luke!!**

## Why Markdown

As I said early I have been using [Markdown](https://en.wikipedia.org/wiki/Markdown) for some time now, I use Markdown in my personal journal as well as when I am taking notes. With Markdown you focus on your writing with a basic text editor and apply some simple syntax that can be converted into other formats (in this case HTML). Markdown can be converted to PDF files and many other formats.

Markdown provides a separation of design from content. This provides a nice workflow for creating and editing content on a web site. This also provides a convenient way to use source control, like [Github](https://github.com).

### Front Matter

A concept known as _Front Matter_ is used with Markdown and Static Site Generators. Front Matter contains meta data about the content and can be included with every Markdown file.

```md
---
title: "Using Hugo Static Site Generater"
date: 2019-03-25T12:07:00-04:00
draft: true
tags: [About, Hugo, Static Site Generater, Firebase]
series: "About Site"
---
```

The snippet above shows the _Front Matter_ for this post. The information in the Markdown is used by the generator to build out the web site. Front Matter can be customized with new meta data and then used in templates to handle the meta data. For example, I will be adding additional information to the Front Matter for a feature image. You can customize _Front Matter_ to use it to achieve different results. I have this post set as part of a _Series_, this will provide a way to  group all posts in this series together. I will be adding _image_ to be specified in the Front Matter and then used for a thumbnail on a list page.

Since Markdown is text it can be edited with any text editor, but you can find text editors that are made for markdown like Note Pad ++, Atom, etc.

## Source Control

All of the site is stored on [GitHub](https://github.com), which provides a nice workflow for tracking changes and continuous integration. ~~opening up to continuous integration and deployment (I am not there yet...).~~

### Contributors

I don’t have any contributors but am open to having others contribute to this blog. This becomes very easy, I create a branch from GitHub and have someone start creating a post. The post is in source control and I can control if it is merged into “master” where the site is published.
