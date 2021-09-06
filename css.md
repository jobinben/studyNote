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




  