# Timor-Leste covid-19 Dashboard

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2a4bf29-b250-437d-b933-a54cf7b5d205/deploy-status)](https://app.netlify.com/sites/focused-haibt-731db7/deploys)

## Dev setup
This site is managed by [Hugo](https://gohugo.io/). To setup your dev environment:
* Install hugo, see https://gohugo.io/getting-started/installing
* Clone this repository: `git clone https://github.com/covid19-tl/covid19-tl`
* `cd covid19-tl`
* Run the hugo development server: `hugo server -D`
* You can now access this site at http://localhost:1313/
* Try changing for example `content/tdt/home/cases.md`,  it will update in your browser


## Deployment
Deployment is managed by Netlify: https://app.netlify.com/sites/xenodochial-poitras-a4080a/overview
Every time you `git push` a new commit to master, Netlify will:
* Run the `hugo` command to generate all the site files in the `public` directory
* Publish the site to https://xenodochial-poitras-a4080a.netlify.app

## Architecture
This site uses a fork of [the Hugo Academic theme](https://github.com/covid19-tl/hugo-academic).