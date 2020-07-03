# Contributing to xlab-website
> [中文版贡献指南](./CONTRIBUTING.zh-CN.md)

It is warmly welcomed if you have interest to contribute to xlab-website and help make it even better than it is today! The following is a set of guidelines for contributing to xlab-website.

- [Code of Conduct](#coc)
- [Submitting an Issue](#issue)
- [Submitting a Pull Request](#pr)

## <a name="coc"></a> Code of Conduct

We have adopted a [Code of Conduct][coc] to help us keep xlab-website open and inclusive. Please read the full text so that you can understand what actions will and will not be tolerated.

## <a name="issue"></a> Submitting an issue

If you have any questions or feature requests, please feel free to [Submit an Issue][new-issue].

Before you submit an issue, consider the following guidelines:

- Please search for related issues. Make sure you are not going to open a duplicate issue.
- Please specify what kind of issue it is and explain it in the title or content, e.g. `feature`, `bug`, `documentation`, `discussion`, `help wanted`... The issue will be tagged automatically by the robot of the project(Menbotics). See [Supported Issue Labels][issue-label].

To make the issue details as standard as possible, we setup an [Issue Template][issue-template] for issue reporters. Please be sure to follow the instructions to fill fields in template.

There are a lot of cases when you could open an issue:

- bug report
- feature request
- performance issues
- feature design
- help wanted
- doc incomplete
- test improvement
- any questions on project
- and so on

Also we must remind that when filling a new issue, please remember to remove the sensitive data from your post. Sensitive data could be password, secret key, network locations, private business data and so on.

## <a name="pr"></a> Submitting a Pull Request

To help you get your feet wet and get you familiar with our contribution process, we have collected some [Good First Issues][good-first-issues] that contain bugs or small features that have a relatively limited scope. This is a great place to get started.

Before you submit your Pull Request (PR), consider the following guidelines.

### 1. Claim an issue

Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment with `/self-assign` stating that you intend to work on it so other people don't accidentally duplicate your effort. The robot of the project(Menbotics) will set assignees of the issue to yourself automatically.

```shell
/self-assign
```

If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take over it but you should still leave a comment.

### 2. Fork the repository

Visit [X-lab2017/xlab-website][repo] repo and make your own copy of the repository by **forking** it.

### 3. Clone the repository

**Clone** your own copy of the repository to local, like :

```shell
# replace the XXX with your own user name
git clone git@github.com:XXX/xlab-website.git
cd xlab-website
```

### 4. Create a new branch

Create a new branch for development.

```shell
git checkout -b branch-name
```

The name of branch should be semantic, avoiding words like 'update' or 'tmp'. We suggest to use `feature/xxx`, if the modification is about to implement a new feature.

### 5. Make your changes

Now you can create your patch, including appropriate test cases in the new branch. Please read and follow our [Code Rules][rules].

(optional) After you finish your modification, run the following script to view it on http://localhost:1313/.

```shell
hugo server
```

### 6. Commit your changes

Commit your changes If your changes pass the tests. You are encouraged to use [Angular Commit-message-format][angular-commit-message-format] to write commit message. In this way, we could have a more trackable history and an automatically generated changelog.

```shell
git add .
git commit -sm "fix: add license headers (#264)"
```

### 7. Sync your local repository with the upstream

Keep your local repository updated with upstream repository by:

```shell
git remote add upstream git@github.com:X-lab2017/xlab-website.git
git fetch upstream master
git rebase upstream/master
```

If conflicts arise, you need to resolve the conflicts manually, then:

```shell
git add my-fix-file
git rebase --continue
```

### 8. Push your branch to GitHub

```shell
git push -f origin branch-name
```

### 9. Create a Pull Request

In GitHub, send a pull request to `X-lab2017/xlab-website`.

Please sign our [Contributor License Agreement (CLA)](#cla) before sending PRs.

To make sure we can easily recap what happened previously, we have prepared a [Pull Request Template][pr-template] and you need to fill out the PR template.

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

If we suggest changes then:

-   Make the required updates.

-   Re-run the test to ensure tests are still passing.

-   Commit your changes with `--amend` and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git add .
    git commit --amend
    git push -f origin branch-name
    ```

That's it! Thank you for your contribution!

### 10. After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the upstream repository:

-   Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete branch-name
    ```

-   Check out the master branch:

    ```shell
    git checkout master -f
    ```

-   Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

-   Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="cla"></a> Signing the CLA

Please sign our [Contributor License Agreement (CLA)][cla] before sending pull requests. For any code
changes to be accepted, the CLA must be signed.

[coc]: ./CODE_OF_CONDUCT.md

[new-issue]: https://github.com/X-lab2017/xlab-website/issues/new

[issue-label]: https://github.com/X-lab2017/xlab-website/labels

[issue-template]: ./.github/ISSUE_TEMPLATE/enhancement.md

[good-first-issues]: https://github.com/X-lab2017/xlab-website/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+

[repo]: https://github.com/X-lab2017/xlab-website

[rules]: ./CODE_RULES.md

[angular-commit-message-format]: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines

[pr-template]: ./.github/PULL_REQUEST_TEMPLATE.md

[cla]: https://cla-assistant.io/X-lab2017/xlab-website
