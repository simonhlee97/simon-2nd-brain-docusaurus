---
id: cool-random-stuff
title: Cool Random Stuff
---

## The Y Combinator

`const Y = f => (x => x(x))(x => f(y => x(x)(y)));`

It loops over a function a given number of times. For example, it can calculate Fibonacci sequences:

```js
const Y = f => (x => x(x))(x => f(y => x(x)(y)));
const fib = f => n => n <= 1 ? n : f(n-1) + f(n-2);
let yFib = Y(fib);
yFib(10); // returns 55
```

## Miscellaneous, and other Sites I Love
- [Everything I Know](https://wiki.nikiv.dev/) - this site definitely inspired me to track and document all the stuff I learn and cool stuff I have discovered on the web.