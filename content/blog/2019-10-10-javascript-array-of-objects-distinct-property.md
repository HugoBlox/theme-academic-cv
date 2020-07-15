---
title: 'How to get distinct values from an array of objects in JavaScript '
date: 2019-06-25T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - Javascript
tags:
  - NodeJs
  - Javascript
  - ES5
---

今日有個 task 其中一個地方要在 Array of Json object 中  
Distinct 一個 property  

```javascript
const data = [
  {
    id: 1,
    category: 'fruit',
    name: 'Apple',
  },
  {
    id: 2,
    category: 'fruit',
    name: 'Banana',
  },
  {
    id: 3,
    category: 'herb',
    name: 'Basil',
  },
  {
    id: 4,
    category: 'herb',
    name: 'Rosemary',
  },
  {
    id: 5,
    category: 'fruit',
    name: 'Dragon Fruit',
  },
];
```

**解決方法:** (ES5)  

```
 var categories = data.map( // try to retrieve specific property
        function(item) {
          return item.category;
        }) // Distinct
        .filter(function(item, index, arr){
          return arr.indexOf(item) === index;
        }) // sort
        .sort();

```

**解決方法:** (ES6)  

```
 const categories = [...new Set(data.map(x => x.category ))];

```

Hope you find it useful
