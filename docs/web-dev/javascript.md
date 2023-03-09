---
id: 01-javascript
title: JavaScript
---

## Snippets

#### To help with CSS debugging (from a Smashing article "Overflow Issues in CSS"):

```js
[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})
```

---

#### var vs let
var is _function_-scoped

let is _block_-scoped


---

## Links

- [Smashing Magazine article "Overflow Issues in CSS"](https://www.smashingmagazine.com/2021/04/css-overflow-issues/)