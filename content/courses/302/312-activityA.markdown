---
title: 'Activity A' 
linktitle: 'Activity A'
toc: true
type: docs
date: "2019-06-05T00:00:00-07:00"
draft: false
menu:
  302:
    weight: 312
    parent: "Assignments"
    identifier: "activityA"
    name: "Activity A"


# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 312
---



## Week 2 (Activity A) Description

A marketing consultant observed 50 consecutive shoppers at a grocery store, and recorded how much money each shopper spent in the store. The dataset is listed below.

---

## The Data

First things first: create [a new RStudio Project](https://support.rstudio.com/hc/en-us/articles/200526207). Using a separate project for each assignment is probably best. Don't worry about version control unless you either a) plan on working on these assignments across multiple devices, or b) are already knowledgeable of and comfortable with Git or Subversion.

You'll need to use this **[spending.csv](https://302.ryanstraight.com/spending.csv)** data for your assignment. The data is also displayed below.

Variable Name: `spending` = amount spent in USD. Use the following R code to import the data. Using the following code loads the file remotely. Alternatively, you can download it and keep a local copy and use `dfa <- read.table("spending.csv", header = TRUE)`, though this assumes your .csv is in [the project's working directory](https://support.rstudio.com/hc/en-us/articles/200711843-Working-Directories-and-Workspaces).)

Why are we calling it `dfa`? Well, `df` is often used as an abbreviation for `data frame`, which is what our new csv/table is called in R. It's `dfa` because it's the `data frame` for `Activity A`. It's important to name data and variables **meaningfully**.

{{% alert note %}}
If you want to reference the content in the `spending` column you'll need to reference the dataframe AND the variable: `dfa$spending`
{{% /alert %}}


```r
# Create the dataframe called dfa
dfa <- read.csv(url("https://302.ryanstraight.com/spending.csv"), header = TRUE) # This loads the data from the remote .csv file and saves it in our environment.

# Display our newly found data.
kable(dfa, caption = "Spending") # That displays the data frame we've just created as a nice looking table. You could also simply type dfa. Try them both out.
```



| spending|
|--------:|
|     2.32|
|     6.61|
|     6.90|
|     8.04|
|     9.45|
|    10.26|
|    11.34|
|    11.63|
|    12.66|
|    12.95|
|    13.67|
|    13.72|
|    14.35|
|    14.52|
|    14.55|
|    15.01|
|    15.33|
|    16.55|
|    17.15|
|    18.22|
|    18.30|
|    18.71|
|    19.54|
|    19.55|
|    20.58|
|    20.89|
|    20.91|
|    21.13|
|    23.85|
|    26.04|
|    27.07|
|    28.76|
|    29.15|
|    30.54|
|    31.99|
|    32.82|
|    33.26|
|    33.80|
|    34.76|
|    36.22|
|    37.52|
|    39.28|
|    40.80|
|    43.97|
|    45.58|
|    52.36|
|    61.57|
|    63.85|
|    64.30|
|    69.49|

{{% alert warning %}}
Except when instructed otherwise, make sure `echo = TRUE` flag is set on your `knitr::opts_chunk$set(echo = FALSE)` line in the *r setup* chunk! It defaults to `FALSE` so make sure you switch it to `TRUE`. This will display your code *and* the results.
{{% /alert %}}

---

## Assignment

For this activity, create and submit a document with the following (doing the coding in an R script file and then putting that code in an RMarkdown file is required!):

1.  Summarize the data by creating *and describing* the following descriptive statistics:
    1.  mean
    1.  median
    1.  standard deviation
    1.  interquartile range
    1.  (optional) any other descriptive statistics you find interesting
1.  Show how a histogram that, although the distribution of the data is slightly skewed with a long right tail, is approximately normally distributed.
1.  It's easiest to write your code in a `.R` file (called an R script file) so you can easily test it while working. *Then*, when you've got everything above taken care of, create a `.Rmd` file (RMarkdown) and use that to present your data rather than simply turning in code and the results. Here's a [great write-up on how code from an R script can be used in an R Markdown file]https://ourcodingclub.github.io/2016/11/24/rmarkdown-1.html).
    1. For this assignment and all others, having read the [introduction to RMarkdown](https://rmarkdown.rstudio.com/articles_intro.html) page is absolutely key.
    1. This is very likely going to take some trial and error. Set aside 2-3 times the amount of time you think this will take to account for fixing errors and debugging. R code is relatively straight forward and easy to use but it can be somewhat intimidating to the beginner. You're encouraged to read through most of the [R Markdown book](https://rmarkdown.rstudio.com/lesson-2.html) as it will make things *much* easier on  you in the long run. When in doubt: copy example code that works and tweak to your specifications.
1. Submitting the assignment:
    1. Submit *both* your `Rmd` and your `PDF` to the *Activity A* dropbox in the LMS by the stated due date and time.
    1. Remember: the point of using this file system is *reproducability*. If I can't see the content you won't get credit for it. That sounds obvious, right? This is why a PDF is important: if you just knit your `Rmd` file to `html`, you may be referencing local files in that page. Files that I don't have in the same location as you, possibly. So: `Rmd` AND `PDF` submissions, please!




---

## Results

We can find each of these respective descriptives using individual commands, such as `mean(dfa$spending)`, `median(dfa$spending)`, `sd(dfa$spending)`, and `IQR(dfa$spending)`. We can even get a very basic histogram with the `hist(dfa$spending)` command.

We could simply use an in-line R chunk like this: `` `r mean(dfa$spending)` ``. This would show up in our RMarkdown files as 25.8364. Remember, the point of using RMarkdown is that you don't need to work out the answer and then paste it somewhere else. The inline R code lets you place the calculated answer wherever you want _that updates whenever the data is changed_. Add a few more rows to the bottom of the `spending.csv` and that mean calculation will change without you having to do a thing.

That said, there are other ways to go about doing this.

### Summary

Here we have a summary of the `spending` data in two forms: descriptives and a table of relevant information like valid cases, missing cases, and a brief histogram. (You will need to install the **summarytools** package before this chunk will work.)


```r
#First, load the library
library(summarytools)    # That's how you make sure this chunk will run even if you run it all on its own.

# Next, display the summary.
print(descr(dfa), method = 'render', style = 'rmarkdown', table.classes = 'st-small')
```

<!--html_preserve--><div class="container st-container">
<h3>Descriptive Statistics</h3>
<h4>spending</h4>
<strong>N</strong>: 50
<br/>
<table class="table table-bordered table-striped st-table st-table-bordered st-table-striped st-descr-table st-small">
  <thead>
    <tr>
      <th></th>
      <th align="center" class="st-protect-top-border">spending</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Mean</strong></td>
      <td><span>25.84</span></td>
    </tr>
    <tr>
      <td>
        <strong>Std.Dev</strong></td>
      <td><span>16.15</span></td>
    </tr>
    <tr>
      <td>
        <strong>Min</strong></td>
      <td><span>2.32</span></td>
    </tr>
    <tr>
      <td>
        <strong>Q1</strong></td>
      <td><span>14.35</span></td>
    </tr>
    <tr>
      <td>
        <strong>Median</strong></td>
      <td><span>20.73</span></td>
    </tr>
    <tr>
      <td>
        <strong>Q3</strong></td>
      <td><span>33.80</span></td>
    </tr>
    <tr>
      <td>
        <strong>Max</strong></td>
      <td><span>69.49</span></td>
    </tr>
    <tr>
      <td>
        <strong>MAD</strong></td>
      <td><span>12.99</span></td>
    </tr>
    <tr>
      <td>
        <strong>IQR</strong></td>
      <td><span>19.27</span></td>
    </tr>
    <tr>
      <td>
        <strong>CV</strong></td>
      <td><span>0.63</span></td>
    </tr>
    <tr>
      <td>
        <strong>Skewness</strong></td>
      <td><span>1.04</span></td>
    </tr>
    <tr>
      <td>
        <strong>SE.Skewness</strong></td>
      <td><span>0.34</span></td>
    </tr>
    <tr>
      <td>
        <strong>Kurtosis</strong></td>
      <td><span>0.38</span></td>
    </tr>
    <tr>
      <td>
        <strong>N.Valid</strong></td>
      <td><span>50</span></td>
    </tr>
    <tr>
      <td>
        <strong>Pct.Valid</strong></td>
      <td><span>100.00</span></td>
    </tr>
  </tbody>
</table>
<p>Generated by <a href='https://github.com/dcomtois/summarytools'>summarytools</a> 0.9.3 (<a href='https://www.r-project.org/'>R</a> version 3.5.3)<br/>2019-06-16</p>
</div><!--/html_preserve-->

<!--html_preserve--><div class="container st-container">
<h3>Data Frame Summary</h3>
<h4>dfa</h4>
<strong>Dimensions</strong>: 50 x 1
  <br/><strong>Duplicates</strong>: 0
<br/>
<table class="table table-striped table-bordered st-table st-table-striped st-table-bordered st-multiline ">
  <thead>
    <tr>
      <th align="center" class="no st-protect-top-border"><strong>No</strong></th>
      <th align="center" class="variable st-protect-top-border"><strong>Variable</strong></th>
      <th align="center" class="stats.values st-protect-top-border"><strong>Stats / Values</strong></th>
      <th align="center" class="freqs.pct.valid st-protect-top-border"><strong>Freqs (% of Valid)</strong></th>
      <th align="center" class="graph st-protect-top-border"><strong>Graph</strong></th>
      <th align="center" class="valid st-protect-top-border"><strong>Valid</strong></th>
      <th align="center" class="missing st-protect-top-border"><strong>Missing</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">1</td>
      <td align="left">dfa
[numeric]</td>
      <td align="left">Mean (sd) : 25.8 (16.2)
min < med < max:
2.3 < 20.7 < 69.5
IQR (CV) : 19.3 (0.6)</td>
      <td align="left" style="vertical-align:middle">50 distinct values</td>
      <td align="left" style="vertical-align:middle;padding:0;background-color:transparent"><img style="border:none;background-color:transparent;padding:0" src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAJgAAABuBAMAAAApJ8cWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX////9/v2mpqby8vL///8shn5hAAAAAnRSTlMAAHaTzTgAAAABYktHRACIBR1IAAAAB3RJTUUH4wYQBiYJPdImgQAAAHhJREFUaN7t1rENwCAMAEGvQDaIswHZf7dU2EWsSLFcIPivXMBVIBChTM1S62x/e2HXPQIDAwMDAwMDAwMDAwMDA5sD06A0FkwdDAwMDGw9zJ+MAuyTAJsaO/wkFGC2rINFWPBTy2O+EQxsb8wvVgEWTXthWpJQpgfkmjDkkWFVKAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNi0xNlQxMzozODowOS0wNzowMOkfgYEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDYtMTZUMTM6Mzg6MDktMDc6MDCYQjk9AAAAAElFTkSuQmCC"></td>
      <td align="center">50
(100%)</td>
      <td align="center">0
(0%)</td>
    </tr>
  </tbody>
</table>
<p>Generated by <a href='https://github.com/dcomtois/summarytools'>summarytools</a> 0.9.3 (<a href='https://www.r-project.org/'>R</a> version 3.5.3)<br/>2019-06-16</p>
</div><!--/html_preserve-->

### Histogram

Though there is a small histogram displayed with the `dfSummary` output, we can plot a larger one to better see. Using R's build-in histogram function, `hist`:


```r
hist(dfa$spending)
```

<img src="/courses/302/312-activityA_files/figure-html/histogram-1.png" width="672" />

If we like, we can use the `ggplot2` plugin to create a more informative and visually pleasing one with labels, a different fill color, and a mean line:


```r
library(ggplot2)
ggplot(dfa, aes(x=dfa$spending)) +
  geom_histogram(binwidth=2.5, color="black", fill="lightblue") +
  geom_vline(aes(xintercept=mean(dfa$spending)), color="blue", linetype="dashed") +
  labs(title="Spending histogram plot",x="Spent($USD), mean `r mean(dfa$spending)`", y = "Count") +
  theme_classic()
```

<img src="/courses/302/312-activityA_files/figure-html/ggplot2-1.png" width="672" />
