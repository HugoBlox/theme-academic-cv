---
title: "Learning Python"
date: 2019-04-03T00:00:00-00:00
tags: [Data Lake,Python,USQL,Templates]
toc: false
series: Data Lake
---
As part of my journey with _Data Lake_ I have started to look at Python. Our road map includes mi grating to _Data Bricks_ which makes use of the Python language for analyzing and accessing data. 

Currently we have our we have a way of bringing data from a source system into the Data Lake that is configurable. We can add a record to a configuration database and data will be exported from the source system and stored on the Data Lake in the location that we have specified. 

Once data is stored _raw_ on the Data Lake we need to “cook” the data to prepare it for use by reporting tools. This is currently handled using _USQL_ which is a combination of SQL and C#. 

The cooking process handles the following (currently):
- Appending a column with text values for codes
- Renaming columns so they follow our Enterprise Data Dictionary
- Removing any duplicate records as the “cooked” and “raw” data are merged together

To handle this we have a USQL script that is developed for every source dataset that is stored on the Data Lake. The script is very easily duplicated so I looked at using Python to generate the USQL files for each dataset.

I choose Python instead of C#, which is my main coding language, because of Python being used with _Data Bricks_. This provided me a way to start to learn Python while also adding value to the project. 

Python syntax is different from C# but I was able to easily adapt to it. Using a `:` to define a construct for code blocks. I have noticed differences in how objects are managed by Python which took a little time to understand and handle.

The script makes use of the [Jinja2](http://jinja.pocoo.org/) template Python Package. This Python package provides token replacement as well as object access inside of a template. Python also provides a built in CSV parser that is very easy to use and can provide a single CSV for as a dictionary which I found very useful.

Python is an object orientated language so I was able to build an object hierarchy that represents our Enterprise Data Dictionary, the Data Dictionary is loaded from a CSV file and then used to generate a USQL file that cooks data.

