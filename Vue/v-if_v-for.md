# 为什么v-for 和v-if不建议一起使用?

## vue2

在vue2中，v-for的优先级更高，v-if将分别重复运行在每个v-for循环中，当需要展示的数据较少时，会造成很大的性能浪费

建议先对数据进行computed，对数据进行过滤

## vue3

在vue3中，当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名：

```vue
<!--
 这会抛出一个错误，因为属性 todo 此时
 没有在该实例上定义
-->
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
```

解决办法：

```vue
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```
