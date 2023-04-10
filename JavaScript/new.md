# new

```js
function myNew(Fn) {
  let obj = new Object();

  obj.__proto__ = Fn.prototype;

  let res = Fn.apply(obj, [...arguments].slice(1));

  return typeof res === "object" ? res : obj;
}
```
