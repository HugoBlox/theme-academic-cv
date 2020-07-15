---
id: 435
title: TSQL Get Number of Decimal Place (on a field)
date: 2009-03-04T08:08:00+08:00
author: ShareChiWai
layout: post
categories:
  - MSSQL Tips and Tricks
---

Today I need to do a query to get all the record which has 3 decimal places on one of the field and process them by using different method.

I am wondering if there any default TSQL function that I can use, so that it can save my time. Unfortunately, I could not find one, so that I decided to write my own function.

Here it is the TSQL code that I used to retrieve the number of decimal place of a field.

```
–Example input value
DECLARE @DecimalValue FLOAT
SET @DecimalValue = 12.34567
–Declare a variable to store the result
DECLARE @NoOfDecimalPlace INT

SET @NoOfDecimalPlace = CHARINDEX(';', REVERSE(CAST(@DecimalValue AS VARCHAR(30)))) -1

–Return Number of decimal Place
SELECT @NoOfDecimalPlace
```

Here it is my User Define Function for get number of decimal place of a number field.

</p>

<p>
  You can execute it by using the following SQL code
</p>
```
SELECT dbo. Get_NoOfDecimalPlace(0.123)

CREATE FUNCTION [dbo].[Get_NoOfDecimalPlace]
(

@ValueToProcess FLOAT=0
)
RETURNS INT
AS
BEGIN
— Declare the return variable here

DECLARE @NoOfDecimalPlace INT
SET @NoOfDecimalPlace = CHARINDEX(‘.’, REVERSE(CAST(@ValueToProcess AS VARCHAR(30)))) -1

RETURN @NoOfDecimalPlace
END

```
  Hope you found it useful.
```
