---
title: "Upgrade ReactJS - module build failed - Cannot find module 'js-levenshtein' "
date: 2020-05-03T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  -
tags:
  - reactjs
  - create-react-app
  - javascript
---

用了 ReactJS 一段時間...想看看有沒有更新可以使用..  
希望可以使用 `yarn upgrade` 來更新...  
但是更新了 `package.json` 的 dependencies 之後便出現了很多`webpack` 的 error  
最後到了`create-react-app` page 的 `CHANGELOG.md` ...跟著他的 migration guide 便可以更新到了...
原來解決方法十分簡單...
我們只需要跟著 mirgration guide 的 command 來更新 `react-script` 便可以
e.g.

```bash
## 更新到version 3.4.1
yarn add --exact react-scripts@3.4.1
```

如果遇到以下的 error message  
`module build failed - Cannot find module 'js-levenshtein'`
![module build failed - Cannot find module 'js-levenshtein](/img/2020/js-levenshtein.png 'module build failed - Cannot find module 'js-levenshtein')  
你可以嘗試執行以下 command 安裝 `babel-preset-react-app` 很可能是因為之前沒有安裝的

```bash
yarn add babel-preset-react-app
```

Hope you find it useful
