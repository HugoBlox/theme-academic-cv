# 代码贡献规范

有任何疑问，欢迎提交 issue， 或者直接修改提交 PR!

- [提交 issue](#issue)
- [提交 Pull Request](#pr)
- [项目机器人说明](#menbotics)

## <a name="issue"></a> 提交 issue

有任何想法或问题，欢迎 [提交 issue][new-issue]。在提交 issue 时，请注意：

- 避免提交重复的 issue，在提交之前搜索现有的 issue。
- 确定 issue 的类型，并在标题或内容中标明。如 `feature`, `bug`, `documentation`, `discussion`, `help wanted`... 机器人 `Menbotics` 将会自动会该 `issue` 打上对应的标签。[查看所有标签][issue-label]。

- 尽量清晰、详细地描述该 `issue` 的意图。可参考 [Issue 模板][issue-template] 。

## <a name="pr"></a> 提交 Pull Request

如果你希望为本项目贡献代码，欢迎提交 Pull Request ，可参考以下流程：

### 1. 认领任务

在 Issue 列表 中挑选任务，然后在该 `issue` 下回复 `/self-assign`，表明你将认领该 issue，项目的机器人 `Menbotics` 会自动将该 issue 的 Assignees 指定为自己。

```shell
/self-assign
```

### 2. `Fork` 本仓库

访问 [X-lab2017/xlab-website][repo] 仓库的主页，并 `Fork` 到自己的账号下。

### 3. `Clone` 仓库

回到自己的 `GitHub` 主页，并找到刚刚 `Fork` 过来的仓库，进入仓库主页, 将该仓库 `clone` 到本地，如：

```shell
# 将下面的 XXX 替换成你自己的用户名
git clone git@github.com:XXX/xlab-website.git
cd xlab-website
```

### 4. 新建 `branch`

> 非紧急修复，不建议在 `master` 分支进行开发修改。

根据该分支的用途，起一个恰当的分支名称，新建分支，如：

```shell
git checkout -b feature/xxx
```

### 5. 修改内容，并提交

对相应文件做出修改，修改完成后，提交：

```shell
git add .
git commit -sm "fix: add license headers (#264)"
```

修改时，请参考 [Code Rules][rules].

> (可选) 修改完成后，可使用以下命令预览效果 (http://localhost:1313/)：
>
> ```shell
> hugo server
> ```

提交时，尽量：

(1) 用一句话清楚的描述这次提交做了什么。

(2) 关联相关 `issue`，如 `fix #1` 、`close #2`、`#3`

### 6. 同步上游仓库变更

同步上游仓库变更，因为可能有其他人先于你提交到上游仓库，防止冲突：

```bash
git remote add upstream git@github.com:X-lab2017/xlab-website.git
git fetch upstream
```

若上游仓库有变更，需要先进行 `rebase`:

```bash
git rebase upstream/master
```

如果发生冲突，你需要手动修改冲突文件，然后:

```shell
git add my-fix-file
git rebase --continue
```

### 7. 推送新分支到自己的远程仓库

```shell
git push -f origin my-fix-branch:my-fix-branch
```

### 8. 提 `Pull Request`

在自己仓库的页面上提 `Pull Request` 到上游仓库 `X-lab2017/xlab-website`。

在提交 `Pull Request` 之前，请确保已经签署 [Contributor License Agreement (CLA)](#cla)。

我们准备了一个 [Pull Request 模板][pr-template] ，你可以在 `Pull Request` 中详细地描述你所作的修改。

其他人将会对你的 `Pull Request` 进行`review`， `review` 之后，如果需要再进行更改，就修改相关内容，然后执行以下操作，该 PR 将会自动同步该 `commit` 。

```shell
git add .
git commit --amend
git push -f origin branch-name
```

### 9. 如果你的代码合并时出现冲突时，你可以：

- 删除远程分支:

  ```shell
  git push origin --delete branch-name
  ```

- 切回到 `master` 分支:

  ```shell
  git checkout master -f
  ```

- 删除本地分支(可选):

  ```shell
  git branch -D my-fix-branch
  ```

- 保持本地 `master` 分支与上游分支同步:

  ```shell
  git pull --ff upstream master
  ```

## <a name="menbotics"></a> 项目机器人说明

本项目已接入 `Menbotics` 机器人：，该机器人可以：

- **`Issue` 自动打标签**：具体见 [0、提交 issue](#0提交-issue)
- **任务认领**：具体见 [1、认领任务](#1认领任务)
- **代码自动合并**：Pull Request) 提交上来之后，有代码合并权限的人员可使用 `/approve` 让机器人自动合入代码。

机器人配置见 [hypertrons.json](./.github/hypertrons.json)，如在该配置文件中可以看到具体有哪些人员有代码合并权限。

[new-issue]: https://github.com/X-lab2017/xlab-website/issues/new
[issue-label]: https://github.com/X-lab2017/xlab-website/labels
[issue-template]: ./.github/ISSUE_TEMPLATE/enhancement.md
[repo]: https://github.com/X-lab2017/xlab-website
[rules]: ./CODE_RULES.md
[pr-template]: ./.github/PULL_REQUEST_TEMPLATE.md
[cla]: https://cla-assistant.io/X-lab2017/xlab-website
