# X-lab Official Website

 Official website of X-lab open laboratory, you can view the site on http://www.x-lab.info.

 ![avatar](./static/img/xlab.png)

## Quick Start

Make sure that you have installed [Git][git-install] and [Hugo][hugo-install], then

```bash
$ git clone git@github.com:X-lab2017/xlab-website.git
$ cd xlab-website
$ rm -r themes/academic/
$ git submodule update --init --recursive
$ hugo server
```

The `Git` is **necessary**, but the `Hugo` is **not necessary** if you do not want to view the site locally or generate some pages automatically, follow our [Contributing Guide][CONTRIBUTING] will undoubtedly lead you making changes to our site!

## Support

If you have any questions or feature requests, please feel free to submit an issue.


[git-install]: https://git-scm.com/downloads

[hugo-install]: https://gohugo.io/getting-started/installing/#quick-install

[CONTRIBUTING]: ./CONTRIBUTING.md
