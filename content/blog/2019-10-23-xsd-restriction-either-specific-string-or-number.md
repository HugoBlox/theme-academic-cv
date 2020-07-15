---
title: 'XSD restriction for either specific string or number (mixture type)'
date: 2019-10-23T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - XML
tags:
  - XML
  - XSD
---

如果在**XSD restriction** 上 容許 mix restriction (mix data type) 呢?  
**解決方法:**  
我們可以建立一個`simpleType`  
之後在`simpleType` 入面使用 `union`  
再把多個`simpleType` union 在一起  
**e.g.**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:simpleType name="NumberOrSpecificString">
    <xs:union>
      <xs:simpleType>
        <xs:restriction base="xs:integer"/>
      </xs:simpleType>
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:enumeration value="HongKong"/>
          <xs:enumeration value="London"/>
          <xs:enumeration value="Oxford"/>
        </xs:restriction>
      </xs:simpleType>
    </xs:union>
  </xs:simpleType>
</xs:schema>
```

Hope you find it useful
