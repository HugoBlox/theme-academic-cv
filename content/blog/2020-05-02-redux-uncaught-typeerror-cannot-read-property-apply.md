---
title: "redux - uncaught TypeError: Cannot read property 'apply' of undefined(…)"
date: 2020-05-02T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  -
tags:
  - reactjs
  - redux
  - troubleshoot
  - javascript
---

剛剛在寫 reactjs publish 上去 Firebase 之後出現了以一的 error message  
``  
之後便顯示唔到這個 react page 了

做了一會 research 之後發現應該是 redux compose 既問題

**解決方法:**
我改了之前的

```javascript
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
```

改成這樣便可以了

```javascript
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.REDUX_DEVTOOLS_EXTENSION
      ? window.REDUX_DEVTOOLS_EXTENSION()
      : (f) => f
  )
);
```

Hope you find it useful
