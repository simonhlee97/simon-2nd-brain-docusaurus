---
id: javascript-snippets
title: JavaScript Snippets
---

#### To help with CSS debugging (from Smashing Magazine "Overflow Issues in CSS"):

```js
[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})
```

---

#### var vs let

var is _function_-scoped

let is _block_-scoped

---