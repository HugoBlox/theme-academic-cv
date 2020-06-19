---
widget: "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless: true  # This file represents a page section.
active: true  # Activate this widget? true/false
weight: 10  # Order that this section will appear
---

# How to add yourself to the lab webpage
The lab webpage is hosted by github pages. The code for the webpage is in a github repository. Any collaborator on the repository can make changes to the webpage.

### If you have never used git and github before:
1. [Sign up for an account](https://github.com/).
2. [Download the git software](https://git-scm.com/downloads)
3. Get your git account set up on your computer. Check out this [getting started document](https://help.github.com/en/github/getting-started-with-github).

### Now that you have git working, you can download the website repo locally 
1. Give Kiva your github username so she can add you as a collaborator for the website repo.
2. In  the terminal (MacOS) or Git Bash (Windows), type `git clone https://github.com/okenk/academic-kickstart.git directory-name` where "directory-name" is what you want the folder to be called. It may ask for your github username and password. Once it is downloaded, switch to the new directory with `cd directory-name`.
3. Now type `git submodule update --init --recursive`.
4. We want to avoid problems associated with two people editing things at once. By default, you are working off of the "master branch." Instead, you want to work off of your own development branch. To do this, type `git checkout -b my-awesome-branch`. (You can call the branch whatever you want.) Now it's time to make changes!

### How to add yourself to the list of lab members
1. Create a new folder: ~/content/authors/your-name where ~ is the location of the lab webpage directory on your local computer.
2. Using the _index.md file in the admin sub-directory of authors as a template, create and fill in your own _index.md file in your new personal folder. (The file name still needs to be called _index.md.) Set `superuser = false`. Set `organization` equal to your graduate group if you are a grad student; keep it as WFCB if you are a postdoc. Set your `user group` equal to `"Graduate students"` or `"Postdocs"`. Your `role` can be more specific, e.g., PhD student, PhD candidate, MS student, etc. I usually do this in RStudio but any text editor will do. If using RStudio, open the website's RProject first, ~/academic.RProj.
3. Fill in remaining personal details and a short biography. Feel free to leave anything out or add extra links.
4. Add a picture of yourself to your directory folder and title it avatar.jpg

### Ok, now it's time to test your changes, push them to the remote repository, and rebuild the website.
1. [Install Hugo](https://gohugo.io/getting-started/installing/). This is the engine that takes a bunch of markdown files and the other setup parameters and themes and converts the whole thing to html.
2. Install the `blogdown` R package.
3. With the website's RProject open, run the R command `blogdown::serve_site()`. The website will open in the RStudio preview window, though it's kind of buggy. Instead, after successfully running the R command, there should be a message "Serving the directory ~ at X." Copy the url X into a web browser, and you can better preview the webpage.
4. If you want to make further changes, `blogdown` will automatically update newly saved changes to the locally served site, so just hit refresh in your browser after hitting save in RStudio.
5. Back in the terminal or Git Bash, type `git commit -a -m "description of changes made"`.
6. Check github to make sure no one else published any changes while you were working. If not, type `git commit -a -m "message describing what you did"`. If there are changes, go back to the terminal or Git Bash and type
```
git fetch
git rebase
```
This will update the files in your local repository and then add your changes on top of that.
6. Now type `git push origin my-awesome-branch`.
7. Now navigate to the [online repo on github](https://github.com/okenk/academic-kickstart), find your branch, and click the green button "Compare and pull request". Add a message summarizing your changes. Then click the green button "Send pull request".
8. The published html files are associated with a different repository. Kiva will update these.

Some git commands can be run through RStudio. For more info, [go here](https://support.rstudio.com/hc/en-us/articles/200532077-Version-Control-with-Git-and-SVN).

If you found these directions confusing, please improve them! You can find the directions in ~/content/internal/index.md

