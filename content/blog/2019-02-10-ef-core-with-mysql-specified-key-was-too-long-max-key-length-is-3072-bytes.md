---
id: 4109
title: EF Core with MySQL Specified key was too long; max key length is 3072 bytes
date: 2019-02-10T09:26:52+08:00
author: ShareChiWai
layout: post
categories:
  - .net core
tags:
  - dotnet core
  - EF Core
  - Entity Framework 筆記
  - mysql
---

<!--StartFragment-->

今日嘗試使用 **EF Core with MySQL** 時出現了以下的錯誤信息:

<pre class="wp-block-preformatted"><strong>MySql.Data.MySqlClient.MySqlException<br />   HResult=0x80004005<br />   Message=Specified key was too long; max key length is 3072 bytes<br />   Source=MySql.Data<br />   StackTrace:<br />    at MySql.Data.MySqlClient.MySqlStream.ReadPacket()<br />    at MySql.Data.MySqlClient.NativeDriver.GetResult(Int32& affectedRow, Int64& insertedId)<br />    at MySql.Data.MySqlClient.Driver.NextResult(Int32 statementId, Boolean force)<br />    at MySql.Data.MySqlClient.MySqlDataReader.NextResult()<br />    at MySql.Data.MySqlClient.MySqlCommand.ExecuteReader(CommandBehavior behavior)<br />    at MySql.Data.MySqlClient.MySqlCommand.ExecuteNonQuery()<br />    at Microsoft.EntityFrameworkCore.Storage.Internal.RelationalCommand.Execute(IRelationalConnection connection, DbCommandMethod executeMethod, IReadOnlyDictionary</strong><code>&lt;strong>2 parameterValues)    at Microsoft.EntityFrameworkCore.Storage.Internal.RelationalCommand.ExecuteNonQuery(IRelationalConnection connection, IReadOnlyDictionary&lt;/strong></code><strong>2 parameterValues)<br />    at Microsoft.EntityFrameworkCore.Migrations.MigrationCommand.ExecuteNonQuery(IRelationalConnection connection, IReadOnlyDictionary</strong><code>&lt;strong>2 parameterValues)    at Microsoft.EntityFrameworkCore.Migrations.Internal.MigrationCommandExecutor.ExecuteNonQuery(IEnumerable&lt;/strong></code><strong>1 migrationCommands, IRelationalConnection connection)<br />    at Microsoft.EntityFrameworkCore.Storage.RelationalDatabaseCreator.CreateTables()<br />    at Microsoft.EntityFrameworkCore.Storage.RelationalDatabaseCreator.EnsureCreated()<br />    at Microsoft.EntityFrameworkCore.Infrastructure.DatabaseFacade.EnsureCreated()<br />    at epm.Api.Startup.Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, ApplicationDbContext dbContext) in C:\Users\yauch\Documents\git\docker-easy-property\api\src\server\epm.Api\Startup.cs:line 65</strong></pre>

我是使了了 Official 的 **NuGet Package** "[`MySql.Data.EntityFrameworkCore`](https://www.nuget.org/packages/MySql.Data.EntityFrameworkCore/)  "
做了一會 research 之後發現...  
是這一個 package 的問題  
解決方法十分簡單..
我們只需要用另一個 nuget package 便可"**Pomelo.EntityFrameworkCore.MySql**"  
https://www.nuget.org/packages/Pomelo.EntityFrameworkCore.MySql

Hope you find it useful

<!--EndFragment-->
