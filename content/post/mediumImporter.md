+++
title = "MediumImporter"
subtitle = "Why I wrote this script in go to import the articles I make"
date = 2018-11-20T13:03:12+01:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Medium", "golang", "programming"]
categories = ["Development"]

+++

# Some background

I would like to import the articles I write for my [personal website](sergiorosello.com) directly into my [medium account](https://medium.com/@SergioRM). This is something I thought Medium would have as a feature, but it seems it doesn't.  
Searching on-line I came across medium's own [API](https://github.com/Medium/medium-api-docs) and was surprised to see that their own API supported uploading a file formatted with Markdown so I decided to use their [Go SDK](https://github.com/Medium/medium-sdk-go) to create my own importer script and learn go in the process.

# Why do it in Go?

I have never used the Go programming language, nevertheless it's always a good time to learn!  
To get started I read the official [Golang getting started page](https://golang.org/doc/code.html) and reproduced their first example. After having a general understanding of the way the project had to be structured, setting up the _$GOPATH_ and basic functions. I got to the chase.

# Markdown to Medium importer

This is a very simple script that speeds up my workflow.  
It simply uploads to [my medium account](https://medium.com/@SergioRM) account a markdown file.

## Setup

Follow these steps to setup the project in a breeze.

1. `git clone https://github.com/SergioRosello/M2M.git yourRepoName`
2. `cd yourRepoName`
3. `go get github.com/Medium/medium-sdk-go`
4. `export TOKEN=yourPersonalToken`

To get your personal token, go to [profile > settings](https://medium.com/me/settings) > integration tokens. There enter a description for you're token and press on **Get integration token**. Be careful, use this token as if it was a password. Don't share or upload it anywhere.

## Usage

1. In the project root directory, enter `go install` to install the program into your default [$GOPATH](https://golang.org/doc/code.html#GOPATH) 
2. Pass the title of the post as the first argument and the path of the file to import into [Medium](https://medium.com/) as the second argument to the program

An example: `M2M postTitle path/to/file/to/upload.md`

### Argument values

1. Title: any string (if it contains spaces, control them)
2. File path: The file you want to import

# How the code works

## Methods

```go
func MDFile(s string) []byte {
  dat, err := ioutil.ReadFile(s)
  check(err)
  return dat
}
```

Method that reads the file whose route is passed and returns it as bytes.

## Main function

In main _func_: some interesting lines: `f := os.Args[1]` Gets argument from command line execution

Using Medium's API is very straightforward. First you create a new client, then you get the user and finally you create the post. Three simple, easy steps.

1. `m := medium.NewClientWithAccessToken(os.Getenv("TOKEN"))`
2. `u, err := m.GetUser("")`
3. `p, err := .-CreatePost(somePostOptions)`

### Some Things worth noticing:
On step 1, you get the token you exported (See step 4 on setup section) On step 2, if `GetUser()` argument is a empty string, it returns the current user's ID and in step 3, the entire list of options is available [here](https://github.com/Medium/medium-api-docs#33-posts)

# Future work

Extend the commend line arguments and make them autocomplete!

# Final notes

I didn't think making this tool would have been as easy and interesting as it has been.  
If you want to use this tool to import your notes or posts into Medium, you are more than welcome and if you would like to propose some changes/improvements, you have my attention. Thanks for reading!
