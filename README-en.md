# jQuery-bubbleBox

​	A bubbleBox plugin based on jQuery. Quickly achieve the bubble box effect.



### 1、How to use

​ First you need to import jQuery.



​	Then, have a similar html structure:

```html
<!-- The outer is a box. If hover on this box, the bubble box will be show. -->
<div class="outer-main-box">
	...
    <div class="inner-bubble-box">
        <!-- This box is the bubble box, you can custom its style. -->
        ...
    </div>
</div>
```
​	Use the `addBubbleAll()` or `addBubble()` to activate bubble box.

​	Prototypes：

```js
/**
 * Activate bubble boxes for multiple elements.
 * @param parents: The jQuery selector of outer-main-box
 * @param children: The jQuery selector fo inner-bubble-box
 * @param args: Use to adjust behaviors of bubble box
 */
addBubbleAll(parents, children, args)

/**
 * Activate bubble boxes for multiple elements.
 * @param parent: The jQuery selector of outer-main-box
 * @param child: The jQuery selector fo inner-bubble-box
 * @param args: an object use to adjust behaviors of bubble box
 */
addBubble(parent, child, args)
```

​	The optional params of args：

| Params       | Explanation                                               | Defaults  |
| ------------ | -------------------------------------------------- | ------- |
| direction    | Pop-up direction                                     | 'right' |
| offsetX      | On the basis of the four directions, set the horizontal offset (px) | 10      |
| offsetY      | On the basis of the four directions, set the vertical offset (px) | 0       |
| fadeInDelay  | Fade in delay (ms)                         | 300     |
| fadeOutDelay | Fade out delay (ms)                         | 0       |
| fadeInTime   | fade in time（ms）                 | 100     |
| fadeOutTime  | fade out time（ms）                 | 0       |


​	
### 2、Examples

​	Activate two bubble boxes for two `main-box`:

```html
<div class="main-box">
    <div class="main">main content 1</div>
    <div class="tip">
        <span>title 1</span>
        <br />
        <span>tip 1</span>
    </div>
</div>
<div class="main-box">
    <div class="main">main content 2</div>
    <div class="tip">
        <span>title 2</span>
        <br />
        <span>tip 2</span>
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

​	In some cases, you may only need to activate bubble box to single box, then use another method:

```html
<div class="main-box">
    <div class="main">main content 1</div>
    <div class="tip">
        <span>title 1</span>
        <br />
        <span>tip 1</span>
    </div>
</div>
<div class="main-box">
    No need for bubble box here.
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
### 3、Attentions

- **You can choose set width and min-height properties to fixed values for bubble boxes, or do not set them.**
- **it's not recommended to set a fixed height value unless it should be.**
- Don't set margin for bubble box, it'll be set to 0 in process.
- Display and position are no need to be set in advance.

