# 加载文档方式

正常流程加载过大的js文件会阻塞页面，当我们把js文件放在底部时，可以解决这个问题，但是如果HTML过长，就会造成明显的延迟，可以使用 `defer` 和 `async`来解决这个问题。

## defer

告诉浏览器不要等待脚本，浏览器继续处理HTML、构建DOM，脚本在**后台下载**，在DOM构建完成之后，脚本再执行，在 `DOMContentLoaded` 事件之前执行。

```html
<p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- 立即可见 -->
<p>...content after script...</p>
```

`DOMContentLoaded` 事件处理程序等待具有 `defer` 特性的脚本执行完成之后，才被触发，具有 `defer` 特性的脚本保持其相对顺序，就像常规脚本一样，但是下载是并行下载的。

该属性适合外部脚本，如果没有`src`、则会忽略`defer` 属性

## async

`async` 意味着脚本是完全独立的：

- 浏览器不会因 `async` 脚本而阻塞
- 其他脚本不用等待 `async` 脚本加载完成，同样，`async` 脚本也不会等待其他脚本
- `DOMContentLoaded` 和异步脚本不会彼此等待

会在**后台加载**，加载完成后就会运行，`async` 也同 `defer` 一样，仅适用于外部脚本。
