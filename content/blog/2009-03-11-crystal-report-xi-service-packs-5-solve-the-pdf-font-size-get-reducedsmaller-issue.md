---
id: 432
title: Crystal report XI Service Packs 5 solve the PDF font size get reduced/smaller issue
date: 2009-03-11T18:15:00+08:00
author: ShareChiWai
layout: post

categories:
  - Crystal Report Tips and Tricks
---

Today I just have a look at the documentation about Crystal report XI Service Packs 5, which has released at the end of Nov 2008.
They have mention the PDF generation issue which I posted few days ago about PDF font size get reduced after you export it from crystal report.

If you have similar issue, the following description may be able to help you get around it.

Hope you find it useful.

<span style="font-family:verdana;color:rgb(51,51,255);font-size:85%;"><span style="font-weight:bold;">ADAPT00940675</span><br />Description:<br />The registry key option ForceLargerFonts maintains the correct font size of reports that are exported to PDF format; however,<br />this option may cause data to be truncated along the right-side margin.<br />The problem is caused by a mismatch in the way that character widths are calculated between PDF and Microsoft Windows.<br />New Behavior:<br />This problem is resolved.<br />To solve the problem, the PDF export engine has been modified to use an algorithm that positions characters precisely to<br />prevent truncation, while still maintaining the correct font size. This algorithm is activated and controlled by two new registry<br />keys:<br />[HKEY_LOCAL_MACHINESOFTWAREBusiness Objects\Crystal ReportsExportPdf]<br />"UsePrecisePositioningForText"=dword:00000001<br />[HKEY_LOCAL_MACHINESOFTWAREBusiness Objects\Crystal ReportsExportPdf]<br />"TruncationAdjustment"=dword:00000002<br />The UsePrecisePositioningForText key enables the new functionality when it is set to 1. When this option is enabled, the<br />ForceLargerFonts option is automatically enabled (to maintain correct font sizes in PDF exports), and any manual settings<br />made to it are ignored. The TruncationAdjustment key controls a width calculation rounding function in the new algorithm and<br />accepts values between 0 and 10 inclusively. The default value of 2 has been tested to sufficiently eliminate most truncation<br />issues. If truncation still happens, users can increase the value.<br />Known Limitations:<br />When the UsePrecisePositioningForText key is enabled, exports to PDF format may take slightly longer, but by no more than<br />10%. Also, the exported PDF document will increase in file size over the standard output, and Crystal reports will consume<br />more GDI resources during the export.</span>
