# jQuery-bubbleBox

切换语言：中文 | [English](https://github.com/AiCorein/jQuery-bubbleBox/blob/main/README-en.md)

​	基于 jQuery 封装的气泡框插件。快速实现气泡框效果。




​	
### 1、使用方法

​	首先需要引入 jQuery。



​	然后，要有类似的 html 结构：

```html
<!-- 外围先有一个盒子，悬浮在这个盒子上，会触发气泡框 -->
<div class="outer-main-box">
	...
    <div class="inner-bubble-box">
        <!-- 这个盒子就是气泡框，可以自行调整样式 -->
        ...
    </div>
</div>
```
​	使用 `addBubbleAll()`  或 `addBubble()` 方法可以将 `inner-bubble-box` 转化为气泡框显示。

​	它们的原型：

```js
/**
 * 为多个盒子生成气泡框
 * @param parents: 选择 outer-main-box 的 jQuery 选择器
 * @param children: 选择 inner-bubble-box 的 jQuery 选择器
 * @param args: 设置对象，用于调整气泡框行为
 */
addBubbleAll(parents, children, args)

/**
 * 为单独某一盒子设置气泡框
 * @param parent: 选择 outer-main-box 的 jQuery 选择器
 * @param child: 选择 inner-bubble-box 的 jQuery 选择器
 * @param args: 设置对象，用于调整气泡框行为
 */
addBubble(parent, child, args)
```

​	设置对象的可选参数：

| 参数名       | 含义                                               | 默认值  |
| ------------ | -------------------------------------------------- | ------- |
| direction    | 气泡框弹出方向                                     | 'right' |
| offsetX      | 在四个方向的基础上，设置气泡框横向偏移（单位：px） | 10      |
| offsetY      | 在四个方向的基础上，设置气泡框纵向偏移（单位：px） | 0       |
| fadeInDelay  | 气泡框弹出延时（单位：ms）                         | 300     |
| fadeOutDelay | 气泡框消失延时（单位：ms）                         | 0       |
| fadeInTime   | 气泡框弹出时的渐变时间（单位：ms）                 | 100     |
| fadeOutTime  | 气泡框消失时的渐变时间（单位：ms）                 | 0       |


​	
### 2、示例

​	为两个 `main-box` 加上气泡框：

```html
<div class="main-box">
    <div class="main">这是主要内容 1</div>
    <div class="tip">
        <span>这是提示的标题</span>
        <br />
        <span>提示文字 1</span>
    </div>
</div>
<div class="main-box">
    <div class="main">这是主要内容 2</div>
    <div class="tip">
        <span>这是提示的标题</span>
        <br />
        <span>提示文字 2</span>
    </div>
</div>

<script>
    addBubbleAll('.main-box', '.main-box .tip', {
        offsetX: 30;
        offsetY: 20,
        fadeOutTime: 100,
    })
</script>
```

​	某些情况下，可能只需要对一个盒子加上气泡框的效果，这时用另一个方法就行：

```html
<div class="main-box">
    <div class="main">这是主要内容 1</div>
    <div class="tip">
        <span>这是提示的标题</span>
        <br />
        <span>提示文字 1</span>
    </div>
</div>
<div class="main-box">
    这里不需要气泡框！
</div>

<script>
    addBubble('.main-box:first', '.main-box .tip:first', {
        offsetX: 30;
        offsetY: 20,
        fadeOutTime: 100,
    })
</script>
```


​	
### 3、注意事项

- 气泡框最好先将 width、 min-height 属性都设置固定值，如果不设置两个都不要设置
- **除非你的气泡框是定高的，否则不建议设置固定的 height 值**
- 不要给气泡框设置 margin，margin 在该插件中会被置 0
- 气泡框的 display 和 position 属性无需预先设置

​	
### 4、效果演示
[去往演示](https://www.glowmem.com/projectsLab/tools/bubbleTest.html)
