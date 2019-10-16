---
title: "Backup Buddy for Wordpress"
date: 2011-08-29T00:00:00-00:00
tags: [Wordpress]
toc: false
---
Part of the project I am on involves moving the entire WordPress site from our internal data center to an Amazon EC2 zone. Backup Buddy was recommended by a consultant that we are working with and I tested it against a Go Daddy account first.

Well, let's same this is a fantastic plugin, I backed up the entire site (database and files) and moved the ZIP file as well as the importbuddy.php file to the root of the new server.

Navigating to importbuddy.php walks you through a very easy wizard that will setup a migration from one server to another, changing all links to reflect the new domain.

I will be running some more tests today and will plan on a real case to EC2 tomorrow, so far it looks like this task will be a breeze with Backup Buddy!

## UPDATE: 8/31/2011
I am becoming very frustrated with backing up the full site, backing up a database is a very stable. I am getting errors inconsistently and unable to resolve so far.

Native zip function unavailable or failed: Backup file couldn�t be created without entering slower compatibility mode. Falling back to compatibility method. Note that this method is slower and cannot exclude directories. Hoping to figure out how to resolve the above errors, in the meantime I am going to move the files using FTP and a straight database backup. I still love the idea behind BackupBuddy, but nervous about the stability of the product at this point.

Workaround #1:
Uncheck `Enable ZIP compression` and the full backup runs very fast, I do have a 400MB file now as a backup though.

Still, have to get this working with Amazon S3 for Disaster Recovery, that is next.
