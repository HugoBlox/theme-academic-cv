---
title: 'How to set Environment Variable on NodeJS'
date: 2019-06-25T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - NodeJs
tags:
  - NodeJs, Javascript
---

###如何設定 NodeJs Environment Variable  

**解決方法:**  
可以直接在 command line 設定  

```
set ENV_VARIABLE=9000 && npm start
```  

可以在`package.json` 上設定  
e.g.  

```
  "scripts": {
    "start": "set PORT=9000 &&  yarn run swagger && nodemon --exec babel-node src/index.js",babel-node src/index.js",
    "test": "yarn jest --coverage",
    "lint": "eslint src",
    "swagger:edit": "swagger project edit",
    "swagger": "js-yaml ./api/swagger/swagger.yaml > ./src/swagger.json"
  },
```
