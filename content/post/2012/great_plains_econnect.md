---
title: "Great Plains eConnect 2010 PIPE is being closed erorr"
date: 2012-07-09T00:00:00-00:00
tags: [Great Plains, eConnect]
toc: false
---
This is a common error I have run across and can be solved by making a change on the
client's machine eConnect config file. This post is a reminder for me if I see this
on a new image of a machine using eConnect.

Error message `There was an error writing to the pipe: The pipe is being closed.``
occurs on eConnect for Microsoft Dynamics GP 2010.

Add **receiveTimeout=�infinite�** to the Microsoft.Dynamics.GP.eConnect.Service.exe.config
file for the eConnect Integration service.

The binding section should resemble this:
```xml
<binding name="eConnectNamedPipeConfig" closeTimeout="00:10:00" sendTimeout="00:10:00"
receiveTimeout ="infinite" transferMode="Buffered" hostNameComparisonMode="StrongWildcard"
maxBufferPoolSize="2147483647" maxBufferSize="2147483647"
maxReceivedMessageSize="2147483647">
	<readerQuotas maxDepth="60" maxStringContentLength="2147483647"maxArrayLength="2147483647"
	 maxBytesPerRead="2147483647" maxNameTableCharCount="2147483647" />
	<security mode="Transport"><transport protectionLevel="EncryptAndSign" />
	</security>
</binding>
```
[Read Microsoft Support KB.](http://support.microsoft.com/kb/2539263)
