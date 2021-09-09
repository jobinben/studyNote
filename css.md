# border-box 和 content-box 区别 (与padding和border改变有关， 与margin改变无关)

1. Chrome浏览器box-sizing默认是content-box, content-box就是元素的内容宽高保持不变，padding和border的改变会使元素的width和height发生改变。
   
 ```css
 .content-box{
    height: 100px;
    width: 200px;
    padding: 20px;
    box-sizing: content-box; /*content-box*/

    /*
    元素的宽高是 padding上下左右20px,元素的内容宽高保持不变, 而整个元素的宽高width = width + 40px(padding左右的20px)，
    height = height + 40px (padding上下的20px)。
    最终元素的宽高是 140 * 240 px; 
    */
 }
 ```  
     简答:  content-box情况下，padding和border的改变会使整个元素的宽高改变。

2. border-box就是用元素内容和padding和border一起决定元素的width和height，就是width,height和元素的内容以及padding和border相互制约。
    - width和height改变，padding和border不改变时，元素内容的宽高会发生相应的改变。
    - padding和border改变，width和height不改变是，元素内容的宽高会发生相应的改变，而整个元素的width和height不改变。
    - 元素内容的宽高等于: 元素的宽高 - (border + padding)
  
  ```css

    .border-box{
        height: 100px;
        width: 200px;
        padding: 20px;
        box-sizing: border-box; /*设置为border-box*/
    }
    /*
    元素的宽高是 padding上下左右20px, 元素内容的height = height - 40px (padding的上下20px), 
    元素内容的width = width - 40px (padding的左右20px)。
    最终元素总体的宽高保持 100 * 200 px
    */
  ```
    简答: border-box情况下，padding和border的改变使元素的内容宽高改变，而整个元素的宽高保持不变。


## 实际工作场景下（推荐使用border-box)

    我更喜欢用border-box，因为border-box更灵活一点，举个例子，我在业务中遇到一个问题，我的商品详情页的一个盒子是高度自适应的，为146px，
    但是在ie8浏览器上显示为146.8px，如何解决，如果对盒子设置height:146px;则会出现被撑高的情况，因为box-sizing默认为content-box，
    你给元素设置宽高只是给元素内容设置宽高，你元素的总高度是heigtht + border + padding所以就会出现撑高，
    解决方法就是给当前的盒子设置box-sizing: border-box这样你设置高度为146px时，会默然将元素内容的高度进行相应减少来保证整体高度为146px，
    这个最大的好处就是你这个盒子有好几个，而且有不同的padding和border值，解决这个的最好的方法就是给盒子设置border-box


# block（块级元素） 和 inline（内联元素）
- block : 从上往下流动，会另起一行
- inline : 从左往右流动，不会另起一行, 直到当前行width满了后自动往下一行溢出。
  
html其实并没有分块级元素和内联元素的说法，这些只是某个标签的默认样式，
你可以通过CSS的display来指定或改变他的样式，从内联变成块级，或者块级变成内联。

- inline-block: 使块级元素变成inline元素的特性。

常用的div就是块级元素block，常用的span就是内联元素inline

# float
如果某个元素给了float的属性，那么我们需要在它的父元素添加一个clearfix清除它造成的bug，比如一旦后面或者中间有空隙，其他元素就会浮动上来。
为了防止这个bug，父元素加上以下css
```css
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}
```
- 需要设置float的元素，最后最好再用一个div包裹起来，这个div并且给它的增加一个class设置为clearfix

#  word-break
因为一个内联元素的内容有一个很长很长的英文单词，在内容满了后不会自动换行。

- 可以打散英文长单词不换行的bug
  
# 关于CSS的height和width
1. 在不是特殊情况下，不要用height指定一个元素的高度，元素的高度正常让他们的文档流和建议行高决定。
指定一个height的高度后，可能会造成一些bug。如元素变拥挤。不会响应改变，

2. width最好也不要设置，当一个元素脱离文档流，如把他的display设置为fixed; 那么他的宽度你设置为100%的情况下，还有padding其他属性，那他会溢出屏幕。
   如果要解决padding造成的溢出的bug，可以用多一个子元素套住父元素包含的所有子元素。父元素不要去设置padding-left或padding-right。

3. max-width: 当窗口宽度小于最大宽度时。可以自适应。用这个代替width。


# 关于 position
- fixed : 相对于窗口定位
- absolute: 相对于父元素的第一个relative定位。

# 所有非空标签都有伪类(::before, ::after)
1. 如div button span 
2. 伪类的初始类型是 内联元素也就是display: inline。 我们可以把他改为块级元素