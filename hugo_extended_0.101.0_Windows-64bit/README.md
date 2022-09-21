<a href="https://gohugo.io/"><img src="https://raw.githubusercontent.com/gohugoio/gohugoioTheme/master/static/images/hugo-logo-wide.svg?sanitize=true" alt="Hugo" width="565"></a>

A Fast and Flexible Static Site Generator built with love by [bep](https://github.com/bep), [spf13](https://spf13.com/) and [friends](https://github.com/gohugoio/hugo/graphs/contributors) in [Go][].

[Website](https://gohugo.io) |
[Forum](https://discourse.gohugo.io) |
[Documentation](https://gohugo.io/getting-started/) |
[Installation Guide](https://gohugo.io/getting-started/installing/) |
[Contribution Guide](CONTRIBUTING.md) |
[Twitter](https://twitter.com/gohugoio)

[![GoDoc](https://godoc.org/github.com/gohugoio/hugo?status.svg)](https://godoc.org/github.com/gohugoio/hugo)
[![Tests on Linux, MacOS and Windows](https://github.com/gohugoio/hugo/workflows/Test/badge.svg)](https://github.com/gohugoio/hugo/actions?query=workflow%3ATest)
[![Go Report Card](https://goreportcard.com/badge/github.com/gohugoio/hugo)](https://goreportcard.com/report/github.com/gohugoio/hugo)

## Overview

Hugo is a static HTML and CSS website generator written in [Go][].
It is optimized for speed, ease of use, and configurability.
Hugo takes a directory with content and templates and renders them into a full HTML website.

Hugo relies on Markdown files with front matter for metadata, and you can run Hugo from any directory.
This works well for shared hosts and other systems where you don’t have a privileged account.

Hugo renders a typical website of moderate size in a fraction of a second.
A good rule of thumb is that each piece of content renders in around 1 millisecond.

Hugo is designed to work well for any kind of website including blogs, tumbles, and docs.

#### Supported Architectures

Currently, we provide pre-built Hugo binaries for Windows, Linux, FreeBSD, NetBSD, DragonFly BSD, OpenBSD, macOS (Darwin), and [Android](https://gist.github.com/bep/a0d8a26cf6b4f8bc992729b8e50b480b) for x64, i386 and ARM architectures.

Hugo may also be compiled from source wherever the Go compiler tool chain can run, e.g. for other operating systems including Plan 9 and Solaris.

**Complete documentation is available at [Hugo Documentation](https://gohugo.io/getting-started/).**

## Choose How to Install

If you want to use Hugo as your site generator, simply install the Hugo binaries.
The Hugo binaries have no external dependencies.

To contribute to the Hugo source code or documentation, you should [fork the Hugo GitHub project](https://github.com/gohugoio/hugo#fork-destination-box) and clone it to your local machine.

Finally, you can install the Hugo source code with `go`, build the binaries yourself, and run Hugo that way.
Building the binaries is an easy task for an experienced `go` getter.

### Install Hugo as Your Site Generator (Binary Install)

Use the [installation instructions in the Hugo documentation](https://gohugo.io/getting-started/installing/).

### Build and Install the Binaries from Source (Advanced Install)

#### Prerequisite Tools

* [Git](https://git-scm.com/)
* [Go (we test it with the last 2 major versions; but note that Hugo 0.95.0 only builds with >= Go 1.18.)](https://golang.org/dl/)

#### Fetch from GitHub

To fetch and build the source from GitHub:

```bash
mkdir $HOME/src
cd $HOME/src
git clone https://github.com/gohugoio/hugo.git
cd hugo
go install
```

**If you are a Windows user, substitute the `$HOME` environment variable above with `%USERPROFILE%`.**

If you want to compile with Sass/SCSS support use `--tags extended` and make sure `CGO_ENABLED=1` is set in your go environment. If you don't want to have CGO enabled, you may use the following command to temporarily enable CGO only for hugo compilation:

```bash
CGO_ENABLED=1 go install --tags extended
```

## The Hugo Documentation

The Hugo documentation now lives in its own repository, see https://github.com/gohugoio/hugoDocs. But we do keep a version of that documentation as a `git subtree` in this repository. To build the sub folder `/docs` as a Hugo site, you need to clone this repo:

```bash
git clone git@github.com:gohugoio/hugo.git
```
## Contributing to Hugo

**Note  March 16th 2022:** We are currently very constrained on human resources to do code reviews, so we currently require any new Pull Requests to be limited to bug fixes closing an existing issue. Also, we have updated to Go 1.18, but we will currently not accept any generic rewrites, "interface{} to any" replacements and similar.

For a complete guide to contributing to Hugo, see the [Contribution Guide](CONTRIBUTING.md).

We welcome contributions to Hugo of any kind including documentation, themes,
organization, tutorials, blog posts, bug reports, issues, feature requests,
feature implementations, pull requests, answering questions on the forum,
helping to manage issues, etc.

The Hugo community and maintainers are [very active](https://github.com/gohugoio/hugo/pulse/monthly) and helpful, and the project benefits greatly from this activity.

### Asking Support Questions

We have an active [discussion forum](https://discourse.gohugo.io) where users and developers can ask questions.
Please don't use the GitHub issue tracker to ask questions.

### Reporting Issues

If you believe you have found a defect in Hugo or its documentation, use
the GitHub issue tracker to report the problem to the Hugo maintainers.
If you're not sure if it's a bug or not, start by asking in the [discussion forum](https://discourse.gohugo.io).
When reporting the issue, please provide the version of Hugo in use (`hugo version`).

### Submitting Patches

The Hugo project welcomes all contributors and contributions regardless of skill or experience level.
If you are interested in helping with the project, we will help you with your contribution.
Hugo is a very active project with many contributions happening daily.

We want to create the best possible product for our users and the best contribution experience for our developers,
we have a set of guidelines which ensure that all contributions are acceptable.
The guidelines are not intended as a filter or barrier to participation.
If you are unfamiliar with the contribution process, the Hugo team will help you and teach you how to bring your contribution in accordance with the guidelines.

For a complete guide to contributing code to Hugo, see the [Contribution Guide](CONTRIBUTING.md).

[Go]: https://golang.org/
[Hugo Documentation]: https://gohugo.io/overview/introduction/

## Dependencies

Hugo stands on the shoulder of many great open source libraries.

If you run `hugo env -v` you will get a complete and up to date list.

In Hugo 0.100.1 that list is, in lexical order:

```
cloud.google.com/go/compute="v1.6.1"
cloud.google.com/go/iam="v0.3.0"
cloud.google.com/go/storage="v1.22.0"
cloud.google.com/go="v0.101.0"
github.com/Azure/azure-pipeline-go="v0.2.3"
github.com/Azure/azure-storage-blob-go="v0.14.0"
github.com/Azure/go-autorest/autorest/adal="v0.9.15"
github.com/Azure/go-autorest/autorest/date="v0.3.0"
github.com/Azure/go-autorest/autorest="v0.11.20"
github.com/Azure/go-autorest/logger="v0.2.1"
github.com/Azure/go-autorest/tracing="v0.6.0"
github.com/BurntSushi/locker="v0.0.0-20171006230638-a6e239ea1c69"
github.com/PuerkitoBio/purell="v1.1.1"
github.com/PuerkitoBio/urlesc="v0.0.0-20170810143723-de5bf2ad4578"
github.com/alecthomas/chroma="v0.10.0"
github.com/armon/go-radix="v1.0.0"
github.com/aws/aws-sdk-go-v2/config="v1.7.0"
github.com/aws/aws-sdk-go-v2/credentials="v1.4.0"
github.com/aws/aws-sdk-go-v2/feature/ec2/imds="v1.5.0"
github.com/aws/aws-sdk-go-v2/internal/ini="v1.2.2"
github.com/aws/aws-sdk-go-v2/service/internal/presigned-url="v1.3.0"
github.com/aws/aws-sdk-go-v2/service/sso="v1.4.0"
github.com/aws/aws-sdk-go-v2/service/sts="v1.7.0"
github.com/aws/aws-sdk-go-v2="v1.9.0"
github.com/aws/aws-sdk-go="v1.43.5"
github.com/aws/smithy-go="v1.8.0"
github.com/bep/clock="v0.3.0"
github.com/bep/debounce="v1.2.0"
github.com/bep/gitmap="v1.1.2"
github.com/bep/goat="v0.5.0"
github.com/bep/godartsass="v0.14.0"
github.com/bep/golibsass="v1.1.0"
github.com/bep/gowebp="v0.1.0"
github.com/bep/overlayfs="v0.6.0"
github.com/bep/tmc="v0.5.1"
github.com/clbanning/mxj/v2="v2.5.5"
github.com/cli/safeexec="v1.0.0"
github.com/cpuguy83/go-md2man/v2="v2.0.1"
github.com/disintegration/gift="v1.2.1"
github.com/dlclark/regexp2="v1.4.0"
github.com/dustin/go-humanize="v1.0.0"
github.com/evanw/esbuild="v0.14.42"
github.com/frankban/quicktest="v1.14.3"
github.com/fsnotify/fsnotify="v1.5.4"
github.com/getkin/kin-openapi="v0.94.0"
github.com/ghodss/yaml="v1.0.0"
github.com/go-openapi/jsonpointer="v0.19.5"
github.com/go-openapi/swag="v0.19.5"
github.com/gobuffalo/flect="v0.2.5"
github.com/gobwas/glob="v0.2.3"
github.com/gohugoio/go-i18n/v2="v2.1.3-0.20210430103248-4c28c89f8013"
github.com/gohugoio/locales="v0.14.0"
github.com/gohugoio/localescompressed="v1.0.1"
github.com/golang-jwt/jwt/v4="v4.0.0"
github.com/golang/groupcache="v0.0.0-20210331224755-41bb18bfe9da"
github.com/golang/protobuf="v1.5.2"
github.com/google/go-cmp="v0.5.8"
github.com/google/uuid="v1.3.0"
github.com/google/wire="v0.5.0"
github.com/googleapis/gax-go/v2="v2.3.0"
github.com/googleapis/go-type-adapters="v1.0.0"
github.com/gorilla/websocket="v1.5.0"
github.com/hairyhenderson/go-codeowners="v0.2.3-0.20201026200250-cdc7c0759690"
github.com/inconshreveable/mousetrap="v1.0.0"
github.com/jdkato/prose="v1.2.1"
github.com/jmespath/go-jmespath="v0.4.0"
github.com/kr/pretty="v0.3.0"
github.com/kr/text="v0.2.0"
github.com/kyokomi/emoji/v2="v2.2.9"
github.com/mailru/easyjson="v0.0.0-20190626092158-b2ccc519800e"
github.com/mattn/go-ieproxy="v0.0.1"
github.com/mattn/go-isatty="v0.0.14"
github.com/mattn/go-runewidth="v0.0.9"
github.com/mitchellh/hashstructure="v1.1.0"
github.com/mitchellh/mapstructure="v1.5.0"
github.com/muesli/smartcrop="v0.3.0"
github.com/niklasfasching/go-org="v1.6.2"
github.com/olekukonko/tablewriter="v0.0.5"
github.com/pelletier/go-toml/v2="v2.0.0-beta.7.0.20220408132554-2377ac4bc04c"
github.com/rogpeppe/go-internal="v1.8.1"
github.com/russross/blackfriday/v2="v2.1.0"
github.com/rwcarlsen/goexif="v0.0.0-20190401172101-9e8deecbddbd"
github.com/sanity-io/litter="v1.5.5"
github.com/sass/libsass="3.6.5"
github.com/spf13/afero="v1.8.2"
github.com/spf13/cast="v1.5.0"
github.com/spf13/cobra="v1.4.0"
github.com/spf13/fsync="v0.9.0"
github.com/spf13/jwalterweatherman="v1.1.0"
github.com/spf13/pflag="v1.0.5"
github.com/tdewolff/minify/v2="v2.11.5"
github.com/tdewolff/parse/v2="v2.5.31"
github.com/webmproject/libwebp="v1.2.0"
github.com/yuin/goldmark="v1.4.12"
go.opencensus.io="v0.23.0"
go.uber.org/atomic="v1.9.0"
gocloud.dev="v0.24.0"
golang.org/x/crypto="v0.0.0-20211108221036-ceb1ce70b4fa"
golang.org/x/image="v0.0.0-20211028202545-6944b10bf410"
golang.org/x/net="v0.0.0-20220425223048-2871e0cb64e4"
golang.org/x/oauth2="v0.0.0-20220411215720-9780585627b5"
golang.org/x/sync="v0.0.0-20210220032951-036812b2e83c"
golang.org/x/sys="v0.0.0-20220422013727-9388b58f7150"
golang.org/x/text="v0.3.7"
golang.org/x/tools="v0.1.10"
golang.org/x/xerrors="v0.0.0-20220411194840-2f41105eb62f"
google.golang.org/api="v0.76.0"
google.golang.org/genproto="v0.0.0-20220426171045-31bebdecfb46"
google.golang.org/grpc="v1.46.0"
google.golang.org/protobuf="v1.28.0"
gopkg.in/yaml.v2="v2.4.0"
```

