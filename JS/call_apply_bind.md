# call apply bind

## call

```js
Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw Error("Error");
  }
  let params = [...arguments].slice(1);

  context.fn = this;
  let res = context.fn(...params);
  delete context.fn;

  return res;
};
```

## apply

```js
Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw Error("Error");
  }
  let params = [...arguments].slice(1, 2)[0];

  context.fn = this;
  let res = context.fn(...params);
  delete context.fn;

  return res;
};
```

## bind

```js
Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw Error("Error");
  }

  let params = [...arguments].slice(1);
  let fn = this;

  return function () {
    fn.call(context, ...params);
  };
};
```
