---
title: "CRMUG Summit 2017"
date: 2017-11-27T00:00:00-00:00
tags: [CRM, Dynamics 365, User Group]
toc: false
---
![CRMUG Summit 2017](/images/2017/crmug_summit2017.jpeg)

I was able to attend [CRMUG Summit](https://na.usergroupsummit.com/home "CRMUG Summit") again this year. The 2017 Summit was hosted in Nashville, TN at the Gaylord Opryland Resort. I have been so impressed with the amount of content and the people who attend Summit both times now.

## My Goals
Before I leave for the Summit, I always prepare by listing out my goals. The number of sessions available is amazing and it is very easy to become overwhelmed and miss some very good sessions. Having my goals helps *lower*, not eliminate this. I keep my goals simple and also use the available app to “favorite” sessions I want to attend.

- GDPR
- Dynamics 365 v9 Update
- Reporting
- Customization

The topics listed above are what I wanted to focus this year. Of course, this can change based on further discussion with others at Summit. This year I heard there were about **7,000 people** in attendance. Each year it continues to grow.

### GDPR

On April 27, 2016, the European Parliament adopted the [General Data Protection Regulation](https://eugdpr.org/ "General Data Protection Regulation"). I work with a global company and knew this topic was very important even though I am not personally involved in the project myself. This regulation becomes enforceable on May 25, 2018.

I attended a round-table discussion about GDPR with others who have had a lot more time to research and prepare for GDPR. I wanted to become more familiar and be able to bring back information I learned.

One thing that I learned about GDPR is that there is still a lot of questions about this regulation.

#### Right To Be Forgotten

One major discussion was the Right To Be Forgotten and how this impacts other requirements for organizations. If a person is an EU citizens, they have the right to be forgotten and this is a personal option available to each EU citizen. This becomes complicated as personal information is many times exported to Excel or other reports used by organizations and all of these exports must be destroyed if a person requests to be forgotten. One thing to keep in mind is that if the data is required for other regulations such as financial reporting the data can be maintained. A major part of this is the ability to anonymize information so there is no way of personally identifying a person.

#### Data Policy

A data policy is a key component of GPDR. Having a data policy that not only specifies what data is being stored but also why it is stored. The policy must explain why the company needs the data that is stored and how they are protecting this data. A person’s consent is very important, once the data policy is available an individual must consent to a company’s use of their personal data. This means a person; a company cannot provide this consent for one of their employees. It was also discussed how if and when the data policy is changed consent must be collected again from people.
This one–hour roundtable was very informative but brought many more questions to me. As I stated this was my first exposure to GDPR and I am looking forward to learning more and correcting any misconceptions that I may have.

### Dynamics 365 v9 Update

Last year at Summit we learned about the launch and rebranding of Microsoft CRM Online to Dynamics 365. This year version 9 of Dynamics 365 was already announced and webinars available. But, we had the opportunity to attend sessions and hands-on labs with version 9. With version 9 of Dynamics 365, Microsoft has made available some new features that I am excited to use. Two of the biggest features that I am excited about are UUI and Virtual Entities.

#### Updated User Interface

The user interface has been updated even without using the new UUI. The updated user interface is cleaner to make it easier on the eyes and usability.

**UUI Unified User Interface**

Dynamics 365 will now have a new user interface that is designed to be responsive and offer cross-device viewing. A big advantage of the UUI is to make a consistent user interface on any device. So, you can design a form once and have it available on all devices.

But, we must keep in mind this is not a feature that you just turn on and it works. A new “app”, a feature that was released in version 8.2 needs to be created where we set the user interface to UUI and then build out the forms and menus to be available in this app. This will take time to design and implement but will bring users a more streamlined experience.

Currently, Advanced Find is NOT available in the UUI which is a big limitation for us.

### Virtual Entities

There is never one single system that contains all of the data that is needed. Integration with other systems is common and I have been doing integration for all of my career.The purpose of a Virtual Entity is to allow data from a different system to be available within Dynamics 365. The data in the system is NOT stored on Dynamics 365, but to the end-user it appears as if it is.

A virtual entity provides a way of creating an entity based on an OData feed to Dynamics without storing data in Dynamics and thus reducing the storage being used. A requirement of Virtual Entities is that the primary key must be a GUID.
During the hands-on lab time, I created a virtual entity and added this entity as a related entity to the account entity. I was then about to open a form and use a drop down that pulled from the oData feed that was NOT stored on Dynamics. I could save data and use Advanced Find to find accounts that had data from this oData feed set.

1.  Define a Virtual Entity Data Source, currently, it only supports OData V4 Data Provider.
2.  Create a new custom Entity of type Virtual Entity, specifying External Name and External Collection Name corresponding to the name of the entity and entity set in the OData service to connect to.
3.  Set the Id and Name attributes (or any custom attribute) of the Virtual Entity to the corresponding fields of OData entity.
4.  Id (Primary Key) field must be of type GUID else we will get the exception.
