# javaScript

## 箭头函数

1. 箭头函数没有自己的 `this`
2. 箭头函数没有 `arguments`
3. 箭头函数因为没有自己的 `this` 所以不能作为构造函数使用 `new`

## eventLoop

### 为什么要区分宏认为和微任务？

js机制在对待任务时，被认为是不平等的，执行更快的任务应该可以插队，不必等待执行耗时的任务先执行完。

- 微任务是线程之间的切换，速度快
- 宏任务是进程之间的切换，速度慢，每次执行都需要切换上下文

## setTimeout 实现 setInterval

```js
const myFunction = () => {
  // do something
  setTimeout(myFunction, 1000);
};

setTimeout(myFunction, 1000);
```
