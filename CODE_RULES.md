# Code Rules

It is warmly welcomed if you have interest to contribute to xlab-website and help make it even better than it is today! The following is a set of guidelines for contributing to xlab-website.

- [Create/Edit a Blog Post](#blog)
- [Create/Edit a User](#user)
- [Create/Edit a Project](#project)
- [Writing Content](#content)


## <a name="blog"></a> Create/Edit a Blog Post

To create a blog/news article,

### Automatically

```shell
hugo new  --kind post post/my-article-name
```

### Manually

Simply create a file `content/post/my-article-name.md`, then write the front matter and main content manually.

### Simply Edit a Blog Post

Edit the newly created file at `content/post/my-article-name.md`.

Hugo will automatically generate summaries of posts that appear on the homepage. If you are dissatisfied with an automated summary, you can either limit the summary length by appropriately placing `<!--more-->` in the article body, or completely override the automated summary by adding a `summary` parameter to the `+++` preamble such that:

```shell
summary: "Summary of my post."
```


## <a name="user"></a> Create/Edit a User

To create an additional user,

### Automatically

```shell
hugo new --kind authors authors/firstname-lastname
```

### Manually

Simply create a folder `content/authors/firstname-lastname` and create a file `content/authors/firstname-lastname/_index.md`.

### Simply Edit a User

Edit the newly created file at `content/authors/firstname-lastname/_index.md`. 

Once you have edited the parameters in the front matter (top of the file), you can add the user’s full biography in the body (below the final `---`) using Markdown formatting.

You can also upload a square photo for the user to the new `authors/firstname-lastname/` folder and name it `avatar` (in JPEG or PNG format). If you didn’t replace the default avatar image in the process, you may wish to delete it from the folder.


## <a name="project"></a> Create/Edit a Project

To create a project,

### Automatically

```shell
hugo new  --kind project project/my-project-name
```

### Manually

Simply create a file `content/project/my-project-name.md`, then write the front matter and main content manually.

### Simply Edit a Project

Edit the newly created file at `content/project/my-project-name.md`.

Either you can link the project to an external project website by setting the `external_link: "http://external-project.com"` variable at the top of the file, or you can add content (below the final `---`) in order to render a project page on your website.


## <a name="content"></a> Writing Content

### Front Matter

Front matter allows page-specific metadata and functionality to be included at the top of a Markdown file.

For editing your content locally on your computer, we recommend [Typora][typora] or [Visual Studio Code][vscode].

#### 1. Core metadata:

- **title**: the title of your page

- **summary**: a one-sentence summary of the content on your page. The summary can be shown on the homepage and can also benefit your search engine ranking.

- **date**: the [RFC 3339 date][date] that the page was published. A future date will schedule the page to be published in the future. If you use the `hugo new ... ` commands described on this page, the date will be filled automatically when you create a page. Also see **lastmod** and **publishDate**.

- **authors**: display the authors of the page and link to their user profiles if they exist. To link to a user profile, create a user based on the admin template and reference their username (the name of a user in your `authors` folder) in the `authors` field, e.g. `authors: ["admin"]`.

- **tags**: tagging your content helps users to discover similar content on your site. Tags can improve search relevancy and are displayed after the page content and also in the Tag Cloud widget. E.g. `tags: ["Electronics", "Diodes"]`.

#### 2. Popular metadata:

- **subtitle**: an optional subtitle that will be displayed under the title

- **featured**: by setting `featured: true`, a page can be displayed in the Featured widget. This is useful for sticky, announcement blog posts or selected publications etc.

- **categories**: categorizing your content helps users to discover similar content on your site. Categories can improve search relevancy and display at the top of a page alongside a page’s metadata. E.g. `categories: ["Art"]`.

- **lastmod**: the [RFC 3339 date][date] that the page was last modified. If using Git, enable `enableGitInfo` in `config.toml` to have the page modification date automatically updated, rather than manually specifying `lastmod`.

- **publishDate**: the [RFC 3339 date][date] that the page was published. You only need to specify this option if you wish to set **date** in the future but publish the page now, as is the case for publishing a journal article that is to appear in a journal etc.

- **draft**: by setting `draft: true`, only you will see your page when you preview your site locally on your computer

### Main Content

Rich content can be written in Academic using Markdown, LaTeX math, and Shortcodes. For more details please refer to [Docs of Academic][academic-docs].


[typora]: https://www.typora.io/

[vscode]: https://code.visualstudio.com/

[date]: https://github.com/toml-lang/toml#local-date-time

[academic-docs]: https://sourcethemes.com/academic/docs/writing-markdown-latex/
