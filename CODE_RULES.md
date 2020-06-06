# Code Rules

It is warmly welcomed if you have interest to contribute to xlab-website and help make it even better than it is today! The following is a set of guidelines for contributing to xlab-website.

**Remember that always use dash `-` instead of spaces, E.g. use `leo-fang` instead of `leo fang`.**

- [Create/Edit a User](#user)
- [Create/Edit a Project](#project)
- [Create/Edit a Blog Post](#blog)
- [Writing Content](#content)


## <a name="user"></a> 1. Create/Edit a User

### 1.1 Create

To create an additional user automatically or manually,

#### (1) Automatically

```shell
hugo new --kind authors authors/firstname-lastname
```

#### (2) Manually

Directly create a folder `content/authors/firstname-lastname` and create a file `content/authors/firstname-lastname/index.md`.

### 1.2 Edit

Edit the newly created file at `content/authors/firstname-lastname/index.md`. 

Once you have edited the parameters in the front matter (top of the file), you can add the user’s full biography in the body (below the final `---`) using Markdown formatting.

You can also upload a square photo for the user to the new `authors/firstname-lastname/` folder and name it `avatar` (in JPEG or PNG format). If you didn’t replace the default avatar image in the process, you may wish to delete it from the folder.


## <a name="project"></a> 2. Create/Edit a Project

### 2.1 Create

To create a project automatically or manually,

#### (1) Automatically

```shell
hugo new --kind project project/my-project-name
```

#### (2) Manually

Directly create a folder `content/project/my-project-name` and a file `content/project/my-project-name/index.md`.

### 2.2 Edit

Edit the newly created file at `content/project/my-project-name/index.md`.

Either you can link the project to an external project website by setting the `external_link: "http://external-project.com"` variable at the top of the file, or you can add content (below the final `---`) in order to render a project page on your website.


## <a name="blog"></a> 3. Create/Edit a Blog Post

### 3.1 Create

To create a blog/news article automatically or manually,

#### (1) Automatically

```shell
hugo new --kind post post/my-article-name
```

#### (2) Manually

Directly create a folder `content/post/my-article-name` and create a file `content/post/my-article-name/index.md`.

### 3.2 Edit

Edit the newly created file at `content/post/my-article-name/index.md`.

Hugo will automatically generate summaries of posts that appear on the homepage. If you are dissatisfied with an automated summary, you can either limit the summary length by appropriately placing `<!--more-->` in the article body, or completely override the automated summary by adding a `summary` parameter to the `+++` preamble such that:

```shell
summary: "Summary of my post."
```


## <a name="content"></a> 4. Writing Content

### 4.1 Front Matter

Front matter allows page-specific metadata and functionality to be included at the top of a Markdown file.

For editing your content locally on your computer, we recommend [Visual Studio Code][vscode] or [Typora][typora].

#### (1) Core metadata:

- **title**: the title of your page.

- **summary**: a one-sentence summary of the content on your page. The summary can be shown on the homepage and can also benefit your search engine ranking.

- **date**: the [RFC 3339 date][date] that the page was published. A future date will schedule the page to be published in the future. If you use the `hugo new ... ` commands described on this page, the date will be filled automatically when you create a page. Also see **lastmod** and **publishDate**.

- **authors**: display the authors of the page and link to their user profiles if they exist. To link to a user profile, create a user based on the admin template and reference their username (the name of a user in your `authors` folder) in the `authors` field, e.g. `authors: ["admin"]`.

- **tags**: tagging your content helps users to discover similar content on your site. Tags can improve search relevancy and are displayed after the page content and also in the Tag Cloud widget. E.g. `tags: ["Electronics", "Diodes"]`.

#### (2) Popular metadata:

- **subtitle**: an optional subtitle that will be displayed under the title.

- **featured**: by setting `featured: true`, a page can be displayed in the Featured widget. This is useful for sticky, announcement blog posts or selected publications etc.

- **categories**: categorizing your content helps users to discover similar content on your site. Categories can improve search relevancy and display at the top of a page alongside a page’s metadata. E.g. `categories: ["Art"]`.

- **lastmod**: the [RFC 3339 date][date] that the page was last modified. If using Git, enable `enableGitInfo` in `config.toml` to have the page modification date automatically updated, rather than manually specifying `lastmod`.

- **publishDate**: the [RFC 3339 date][date] that the page was published. You only need to specify this option if you wish to set **date** in the future but publish the page now, as is the case for publishing a journal article that is to appear in a journal etc.

- **draft**: by setting `draft: true`, only you will see your page when you preview your site locally on your computer.

### 4.2 Main Content

Rich content can be written in Academic using Markdown, LaTeX math, and Shortcodes. For more details please refer to [Docs of Academic][academic-docs].


[vscode]: https://code.visualstudio.com/

[typora]: https://www.typora.io/

[date]: https://github.com/toml-lang/toml#local-date-time

[academic-docs]: https://sourcethemes.com/academic/docs/writing-markdown-latex/
