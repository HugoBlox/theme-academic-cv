+++
title = "Create a website with Hugo, Academic theme and Amazon S3 - part 2"
subtitle = "Creating a AWS S3 bucket"
date = 2018-11-12T15:43:31+01:00
draft = false

author = ["Sergio Roselló"]

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["S3", "AWS", "Hugo", "Academic", "git"]
categories = []
summary = "We will create a very simple and basic static website with Hugo and upload it to a S3 bucket"
+++

This is part 2 of a multipart post on how to create and upload a website for your personal projects or even a business website.  
In this short little tutorial, I will show you how to create a S3 bucket on [AWS](https://aws.amazon.com/es/).  
There are however some prerequisites:  

1. Have completed successfully the [first post]({{<ref "post/uploadToS3.md" >}})
2. Have a AWS account
3. Have CLI access to S3 (Alternatively you can use your web browser)

## What is S3?  
It stands for **S**imple **S**torage **S**ervice. It is designed to store large amounts of data that can be easily accessed, secured and analyzed in a fast an efficient way.
Some of it's features are:

1. Object based storage. It stores files, pictures, audio... Anything you want really but it not meant for storage of live systems.
2. Provides encryption if you require it
3. Versioning
4. Amazon guarantees 99.99% availability and 99.99999999999% data durability

## Why use S3 to store my website?
Personally, I think Amazon S3 gives me a very high peace of mind. I know that if some day my website becomes the target of a DDOS attack, or put simply: loads of people try to access it, it will stand it's ground and be unbreakable. Jokes aside, As Amazon S3 allows static website hosting, I didn't really give it a second thought. I'm also learning AWS in this period of my life, so it fits perfectly.

## Getting dirty
We are going to create the website's bucket (Where it will be stored) generate our static website and upload it to out bucket.
### Creating the S3 Bucket
To create a S3 bucket, the first thing you have to do is look for S3. It's under storage, in the Services tab. Click on it.  

1. Click on the blue create bucket button:
{{< figure library="1" src="createBucket.png" >}}
Once this is created, a new window will appear, asking you to enter some details.
2. Enter the details:
{{< figure library="1" src="enterName.png" >}}
Enter the bucket's name and select the region nearest to you. 
3. You can now leave everything as-is and press `next` until you finish creating the bucket.
4. Once the bucket is created, click on it. You will now see 4 tabs: *Overview, Properties, Permissions* and *Management*. Click on **Properties**. 
5. Now click on **Static website hosting**. This will allow our bucket to serve static websites.
{{< figure library="1" src="static.png" >}}
On this screen click on *Use this bucket to host a website* and then save it.
6. On the four tabs we had before, click on **Permissions** and then click on **Bucket policy**.
{{< figure library="1" src="policy.png" >}}
7. Now, paste this text into the text field: 
You can also generate it with amazon's [policy generator](https://awspolicygen.s3.amazonaws.com/policygen.html).  Here we are simply telling it to allow everybody to access the bucket's URL.

```json
{
    "Version": "2012-10-17",
    "Id": "Policy1541962184724",
    "Statement": [
        {
            "Sid": "Stmt1541962180914",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOURWEBSITEBUCKETNAME/*"
        }
    ]
}
```

### Uploading the website to the bucket  

To upload the website to the bucket, we have two possibilities: do it via the command line or upload it with our browser. I will show you both.
#### Website
1. To generate the static website with Hugo the command we have to **execute** is: `hugo` in our website's root directory. Pretty straight forward, right?
2. Go to your website's bucket in AWS and select **Upload**  
{{< figure library="1" src="upload.png" >}}
3. Upload the entire **public** directory to the bucket.

#### CLI
Here the first step is exactly the same as above:

1. To generate the static website with Hugo the command we have to **execute** is: `hugo` in our website's root directory. Pretty straight forward, right?  
2. In a terminal, enter the following command: `aws s3 cp --recursive path/to/public/directory s3://name-of-personal-website-bucket`

### Accessing the website
The readers with sharp attention will have realized that we have already been given the bucket's endpoint. It's under Properties > static website hosting. If you Access this address through your browser, your website will appear (When we upload it)

Now, send the website to your closest ones and show it to them!
