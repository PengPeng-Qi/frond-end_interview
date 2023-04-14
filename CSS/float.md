# 浮动

## 清除浮动

当父盒子没有设置高度，而子盒子浮动了，此时就会影响下面的布局，我们就应该清除浮动。

清除浮动是为了**清除浮动后元素脱离标准流后对后续标准的影响。**

### 解决方法

策略：只让父盒子内部受影响，不影响父盒子外面的其他盒子

方法：

1. 父级添加 `overflow` 属性，将其属性值设置为hidden、auto或scroll开启bfc
2. 额外标签法，在浮动的元素后面加一个空的块级元素，然后添加 `clear: both` 样式
3. `::after` 伪元素法，给浮动盒子元素后面加一个块级元素，只不过元素是css伪类实现的

```css
.clearfix:after{
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
  /* 设置clear：both */
  clear: both;
}
```
