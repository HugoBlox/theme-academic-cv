---
title: "Welcome to My New Blog"
date: 2019-03-02T00:00:00-00:00
tags: [Azure, Wyam.io, Static Site Generator, .DEV, Firebase]
toc: false
series: Site Update
---
{{< figure src="/images/2019/getdotdev.png" class="pic_width25" >}}

*UPDATED: March 10, 2019*

I have had many different sites over the years.

Recently, a few months ago I decided to shut them down. I was not updating them as much and focusing to much on maintaining and updating the site. With family and work I am very busy like many of you. A friend introduced me to [Wyam.io](https://www.wyam.io) which is a static site generator and hosting using Azure Blob Storage.

## Why a Static Site Generator
A static site generator does just want the name says, it generates a static web site. This removes the need for server side code on the hosting platform and increases the performance of the site. Sites are just HTML and Javascript. This also means there is no login for the site so security is increased as well. But, just make sure you have the access to your site secured so others can’t update data to your site.

### Markdown
I have been using Markdown for several years now and just love how it allows you to just focus on the content. You use the markdown syntax to describe how the content will be viewed and also can add markdown meta data about the document. Markdown files can easily be converted into HTML, PDF and other formats.

I have already been using markdown to create my posts and then convert them when ready. Now, using Wyam, I have a draft folder that contains my draft posts all written in markdown. When I am ready I move the post into the posts folder and run a build command which looks at all of the content and generates the site. The site is then ready to deploy to my hosting provider.

## Why Azure Blob Storage
Azure Blob Storage is very very cheap... It is not made for hosting dynamic web sites but it does have an option for hosting static pages. Publishing my site that is generated from Wyam to Azure Blob Storage is handled using AzCopy and then I purge the CDN for making the site available.

I have had some issues right now with the workflow and making my pages available with the most recent content. This is because I am new to use Azure Blob and CDN. So, once the workflow is streamlined, I will then put everything into a release batch file that will handle everything for me.

**UPDATE: Mar-05-2019**
*I have been having problems with purging the CDN on Azure, I have purged in through the portal as well as with PowerShell but it doesn't seem to always work (I am sure I am doing something wrong). For now I have [www.rainaldi.dev](https://www.rainaldi.dev) on Azure and [blog.rainaldi.dev](https://blog.rainaldi.dev) on Google Firebase.

I decided to also give Google Firebase a try.*

## Google Firebase Hosting
Originally I was trying to use Azure Blob Storage, this works but I have been running into issues with purging the CDN when I updated the site. I decided to try out [Google Firebase](https://firebase.google.com). This is where I am currently hosting [Rainaldi Blog](https://blog.rainaldi.dev). I will be writing more about this in a later post.


## Show your stuff with .dev
Like I said earlier, I deleted all of my web sites. I *thought* I had my backup from Wordpress before I removed the sites but I haven’t found it. I was able to get all of my posts and then had to manually convert them into Markdown. This way I have them available on this [new site](https://www.rainaldi.dev).

Since I let my other domains expire and I say that there is a new top level domain **.DEV**, I decided to purchase this domain. The price is very reasonable at $12 a year and is also secure so I don’t have to purchase an SSL certificate. I did purchase the domain through Google Domains.

> **A domain just for developers**
> From tools to platforms, languages to blogs, .dev is a home for all the interesting things that
> you build. .dev lets your clients know what you do before they even open your site.

[Google Domains .DEV](https://get.dev)

## Next Steps
Since this is just the start of this new site there are several things that need to be completed still to streamline it and learn more about the technologies that are being used. Below is what needs to be worked on.

* [x] Migrate old posts **(done)**
- [ ] Write deploy script that will deploy to Firebase
- [ ] ~~Write deploy script that will deploy to Azure Blob & Purge CDD~~
- [ ] ~~Resolve issues with URL write for clean URLs~~
- [ ] ~~Add pipeline to change size of images included in posts~~
- [ ] Connect to GitHub/Azure DevOpps for deployment
- [ ] Add reactions with [Disqus](https://disqus.com)
- [ ] Write complete post on steps to setup and use site
