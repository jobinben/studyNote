# 常用标签

a form input button h1 p ul(un-order list 无序列表) ol(order list 有序列表) small strong div(块级划分) span (行内划分) kbd(键盘) video audio svg

    div 与 span 是一个没有意义的标签，无默认样式

# 属性

1. url：Uniform Resource Locator统一资源定位符

2. src：Source资源(所以可以是本地绝对路径也可以是url地址)

3. href：Hypertext Reference超文本引用 (指向一个地址)

## a标签属性

1. target: 结合iframe标签可以更直观展现效果
    - _blank : 打开一个新的页面
    - _self : 自身打开新的页面
    - _parent : 在上一级的页面打开新的页面
    - top: 在最上一级的页面打开新的页面
2. download :  表示自身的连接是下载属性，可以直接下载连接的内容。
3. href : 
    - //qq.com 如果连接不给http协议, 会自动继承当前文件的协议。
    - #xx 或 # 锚点 不做请求 会刷新页面
    - ?name=jobin 自动给当前连接添加参数执行get的请求
    - javascript:; 或 javascript: alert(1); 这些是伪协议，如果没有加js代码就什么也不做，也不会刷新页面
   
```html
<!-- 伪协议 http:  javascript: -->
<a href="#">点击连接不会跳转但是会刷新页面</a> 

<a href="javascript:;">点击连接不会跳转</a> 
```

## a标签（用于发起HTTP GET请求）||　form标签 (常用于发起HTTP POST请求)

不过form还是可以设置get请求和其他请求，默认是get请求。但是我们form都是常用于POST请求


# form和input标签

- 如果form标签内没有type=sumit的input标签时，存在一个Button标签时，会把button标签提升为type=sumit的属性。如果不想button被提升，可以在button标签加个type=button。

# 在html中 所有回车被缩进为一个空格

# div的高度由其内部文档流元素的高度决定。文档流: 文档内元素的流动方向

# span的高度是用建议行高自动赋值的
- span的高度如果小于div的高度，那么div设置的line-height就有效。否则无效
- 而div的高度可以通过设置好了line-height后，用padding来控制也可以。