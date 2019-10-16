---
title: "Exploring Data Lake"
date: 2019-03-07T00:00:00-00:00
tags: [Azure, Data Lake]
toc: false
series: Data Lake
---
I am excited about a new project that I am involved in. We are moving our Business Intellignece System to a [Data Lake](https://en.wikipedia.org/wiki/Data_lake). This has been in discussion for some time now, another team in our company is already using Azure Data Lake and having some great results. This project is challenging as well as **fun**, I am a  tech guy...

I have learned so much during the planning of this project and we are ready to move to implementation.  This involves having the resources available both physical and human and to began development. Having someone help with this has been a huge value and she has coached me the full way. I wanted to explain some things that I learned about Data Lake in this post. More will be coming as we begin development.

## Azure
First, it is important to note that we are buildng this using Azure Data Lake Gen 1. The way I have been thinking about a Data Lake is file storage on the cloud. But, it is much more than that. I was so confused as to why we would want to use CSV files for our Data Lake and also the purpose of the Data Lake.

### Data Lake is NOT a Data Warehouse
This is very important to understand, a Data Warehouse is a database that is built to report on data. Typically using an OLAP database and the STAR Schema. A Data Warehouse may be populated from a Data Lake.

A Data Lake though, can store **unstructured**, **semi-structured** and **structured** data. That can be ready to use now or anytime in the future. Data can be stored on the Data Lake that you may not know what you are going to use it for yet. You may store clicks on your web sites from a log on your Data Lake for future analysis.

The idea that you store information on the Data Lake, storing as much information as you can so you can use this data now or later.  This data is unstructured meaning you do NOT have a schema that you are working with. CSV files are often used. This provides a way of saving a file with data to the lake from any system. The schema is determined on read, so when the data is looked at is when you care about the schema.

The big point here is to realize that a Data Warehouse and a Data Lake are two different concepts. One is used for reporting on data in a structured way. The other (Data Lake) is used for storing all kinds of data that may not be used at the moment but can be used at a later time. The cost of storage on a Data Lake is very very low. This allows you to store as much data as possible.

## CSV Files?
Just like I mentioned earlier, I was shocked about the idea of storing CSV files on  the Data Lake. But I now understand, we are not using CSV files for our project we are using JSON files. *More on that later*.

### Schema on Read
This is a very important concept to understand. A CSV file is a ***Schema on Read***, you can open the CSV file up and determine what the schema is. You don't have to build a schema to create a CSV file. You just write it out. So if you have a system that is providing you data you have to send the data over and store in on the Data Lake. When you are ready to use that data you will determine the schema when reading it and begin to analyze it.

Standard databases are ***Schema on Write***, you create a schema that you will use and data is add to the database following the schema that was already created.

## Data Lake Storage
Azure Data Lake is built upon [Apache Hadoop's](https://en.wikipedia.org/wiki/Apache_Hadoop) distrubted file system. This file system provides a low cost storage of data that can easily be searched and transformed to build data models from. This is a big part of **BIG DATA**, having the ability to store and query very large sets of data that can grew to terrabytes or petabytes.

### Navigating the Data Lake
Because of all of the different types of data that can be stored in a Data Lake the meta data is very important. The data needs to be understood and have the ability to find it.

#### RAW Data
Below is a sample of storing data on a Data Lake, using sales transactions.
```
* catalog
  - RAW
    - SalesData
      - Store100
        - 03
          - 01
              - transactions.json
      - Store200
        - 03
          - 01
              - transactions.csv
      - Store300
        - 03
          - 01
              - transactions.txt

```

Each of the files may have a different format.
*transaction.json*
```json
{"id":"9012","date":"2019-03-01T03:14","totalinvoice":321.09}
```

*transaction.csv*
```csv
84012,2019-03-01T05:06",51.01
```
*transaction.txt*
```txt
50012 2019-03-01T09:37  25.00
```

In the above example each location is sending the daily sales transactions to the Data Lake. The location will send the transactions in a JSON format and save the files to the correct location. This structure can be secured so each location will only have access to their directory path. This is the RAW data that is being sent from the source system. One location may send a JSON file and one location may send a CSV file. The schema on each location may be slightly different as well. We deal with that when we begin to read the data and transform it to the results that are desired. The above example is assuming that a daily file is  received from each location.

#### MASTER Data
We have to next transform the data into a more usable format. In this example we have decided that after the locations load the raw data the data will be merged together and cleaned. We create a batch that reads all of the raw data from the current previous day and merge the data into a single file for the day. Part of this merge process adds an additional data point to represent that store.  The end result in a daily file in JSON that combines all of the individual raw location files into a single daily file.
```
\catalog\MASTER\SalesData\2019\03\01\all_transactions.json
```

*all_transactions.json*
```json
{"store":"100",id":"9012","date":"2019-03-01T03:14","totalinvoice":321.09}
{"store":"200",id":"84012","date":"2019-03-01T05:06","totalinvoice":51.01}
{"store":"300",id":"50012","date":"2019-03-01T09:37","totalinvoice":25.00}
```

This is a longer post than I anticipated, but I wanted to capture what a Data Lake is and build upon this. There are several other components that need to be addressed and will be in a future post.

- How to query the RAW data files
- How to create the MASTER data file
- What to do with the MASTER data file
