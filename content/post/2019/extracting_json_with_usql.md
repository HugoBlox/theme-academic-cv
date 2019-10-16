---
title: Extracting JSON With USQL
date: 2019-03-25T12:07:00-04:00
draft: false
tags: [JSON,USQL,Data Lake]
series: Data Lake
---
While working on our Data Lake implementation we ran into issues saving our data to CSV. The Extractor for CSV does not ignore line feeds inside data. Which was a huge problem that we had to handle. After not much conversation it was decided to use JSON now, we planned on phasing JSON in later.

Extraction of JSON files is not available _"out of the box"_ with USQL, but there is a [GitHub repostiory with a JSON Extractor](https://github.com/Azure/usql) that is highly recommended.

## Sample JSON
Below is a sample of the JSON that I am working with, notice the line break in the OfficeDescription attribute.
```json
[{"items":
		[{
			"OfficeId":300000003298111,
			"OfficeName":"US",
			"OfficeDescription":"This is a long description
			that contains line breaks"
		}]
}]
```
Two challenges are present (at least for me at the time):
	- Nested JSON objects
	- Line breaks / carriage return included in attribute(s)

Using JSON the line break / carriage return challenge are resolved. The JSON format addresses this. The nested objects will be addressed shortly.

## JSON Extractor Assemblies
There are two assemblies provided to add JSON extracting with USQL. These are found

  - Microsoft.Analytics.Samples.Formats.dll
  - Newtonsoft.Json.dll

These assemblies will need to be uploading to the Data Lake, registered to a database and referenced in a USQL script.

Create a folder at the root of the Data Lake to store these assemblies. This root should be accessible to anyone who will be using the assemblies.

```
- Assemblies
	- Microsoft.Analytics.Samples.Formats.dll
	- Newtonsoft.Json.dll
```

### USQL Database
Azure Data Lake provides Data Lake Analytics provides the ability to query the Data Lake and manage USQL databases. The USQL database is different that _OLTP_ database such as Microsoft SQL Server.

### Create USQL Database and Assembly References
USQL provides ways of access the database using the USQL language. USQL scripts must be submitted as a job. The script below will drop the database `Assemblies` if it exists and then create a new database called `Assemblies`.

```sql
DROP DATABASE IF EXISTS Assemblies;

CREATE DATABASE Assemblies;
```
_Use the above script if **caution**, if the database exists it will be dropped and everything in it will be lost._

Once the USQL database is created, create the references to the assemblies in the database.

```sql
USE Assemblies;

REFERENCE ASSEMBLY Assemblies.[Newtonsoft.Json];
REFERENCE ASSEMBLY Assemblies.[Microsoft.Analytics.Samples.Formats];
```
_The above statements will use the database that was created and then create assemblies references for the assemblies._

This is all that is needed to add assemblies to USQL. They are now available for use by anyone with access to the USQL Database and Data Lake path.

## Using The JSON Extractor
Now, we are ready to start extracting data from the JSON files.

Create a new USQL script and declare the variables for your input and output files.

```sql
USING Microsoft.Analytics.Samples.Formats.Json;

DECLARE @InputFile string = @"/Offices/RAW/2019/03/{*}/{*}/offices.json";

DECLARE @OutputJsonFile string = @"/Offices/COOKED/master_offices.json";
```
The script above first set the `USING` to the JSON assemblies. Then declare variables for the source and destination files. The wildcards, `{*}`, in the script provide a way to look in different folder paths which will make all of the data available as one dataset. The `@InputFile` above will be extracting from all `offices.json` files from March 2019, for any day and hour that is present.

I ran into problems initially when trying to extract the data and it took longer that I like to admit. Below is the script that will extract data from the sample JSON.

```sql
@result =
    EXTRACT OfficeId Int64,
            OfficeName string,
            OfficeDescription string
    FROM @InputFile
    USING new MultiLevelJsonExtractor("items[*]",
          false,
          "OfficeId",
          "OfficeName",
          "OfficeDescription");
```
The issue I ran into was using the _basic_ extractor and NOT specifying the JSON path.
`USING new MultiLevelJsonExtractor(“items[*]” ....`
The sample JSON has a parent object that contains the objects I am looking to extract. Using the MultLevelJsonExtractor provides a way of parsing the JSON structure, then in the first parameter I provide the path to the objects that I am looking for.

The parameters provides are listed below.
  - JSON path to extract from  `items[*]`
  - Throw Errors if an attribute is NOT found `false`
  - Array of attributes that will be located from the path `"OfficeId","OfficeName","Status"`


_The Extract statement is the same as any other extract statement and references the attribute names as well as defines the data type._

At this point the JSON is extracted and available to use from the `@result` variable. We can query or just output the data to another file. This is where you would do any _cooking_ of the data that you wish before saving the results as the master file for use by a reporting tool.

For the purpose of this post I am not adding any of the cooking logic and just writing the file out to a new JSON file that will be the master file.
```
OUTPUT @result
TO @OutputJsonFile
USING new JsonOutputter();
```

We have now extracted data from the source JSON and saved it in a flat JSON format. The _master_ file can be used as a source for the reporting tool. This file is just one file that would be used to build a data model that will create reports.

## References
While I was researching JSON extraction I found a wonderful blog by [SQLChick.com](https://sqlchick.com) that contains great information on Data Lake and this topic as well. I had to modify some of what was provided for my purpose. I highly recommended looking at SQLChick.com for information on Data Lake, you will learn a lot from her.

[Querying Multi-Structured JSON Files with U-SQL in Azure Data Lake](https://www.sqlchick.com/entries/2017/9/4/querying-multi-structured-json-files-with-u-sql-in-azure-data-lake?rq=json)

[USQL Examples / JSON Extractor Repository](https://github.com/Azure/usql)
