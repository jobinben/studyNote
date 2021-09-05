## 文档 documents

1. emmet : Google 查询emmet文档，是关于html的书写快速发送，也就是快捷键。


## 快捷键

1. Alt+Shift+B : 快速打开其他浏览器
2. Ctrl+P: 查找最近浏览文件


## 关于http

1. URI（统一资源标识符）, 包含URL(统一资源地址)和URN（统一资源名称）
2. HTTP, 两个电脑之间传输内容的协议
3. HTML, 超级文本，主要用来做页面跳转

- URL的作用能让你访问一个页面
- HTTP的作用是让你能下载这个页面
- HTML的作用是让你能看懂这个页面

## 关于域名

1. .com : 顶级域名(一级域名)
2. baidu.com: 二级域名
3. www.baidu.com: 三级域名


## 关于curl使用

1. 用curl来创造一个请求
2. curl -s -v -H "jobin:xxx" -- "https://www.baidu.com" (get请求)
3. curl -X POST -s -v -H "jobin:xxx" -- "https://www.baidu.com" （post请求）
3. curl -X POST -d "12345678900" -s -v -H "jobin:xxx" -- "https://www.baidu.com" （post请求并上传数据）
   
## 使用explainshell.com
可以查找关于命令的一些说明


## 请求的格式
1 动词 路径 协议/版本
2 Key1: value1
2 Key2: value2
2 Key3: value3
2 Content-Type: application/x-www-form-urlencoded
2 Host: www.baidu.com
2 User-Agent: curl/7.54.0
3 
4 要上传的数据

- 请求最多包含四部分，最少包含三部分。（也就是说第四部分可以为空）
- 第三部分永远都是一个回车（\n）
- 动词有 GET POST PUT PATCH DELETE HEAD OPTIONS 等
- 这里的路径包括「查询参数」，但不包括「锚点」
- 如果你没有写路径，那么路径默认为 /
- 第 2 部分中的 Content-Type 标注了第 4 部分的格式

## 响应的格式
1 协议/版本号 状态码 状态解释
2 Key1: value1
2 Key2: value2
2 Content-Length: 17931
2 Content-Type: text/html
3
4 要下载的内容

状态码要背，是服务器对浏览器说的话
- 1xx 不常用（信息，服务器收到请求）
- 2xx 表示成功
- 3xx 表示滚吧 （重定向到其他url）
- 4xx 表示你丫错了 （客户端错误）
- 5xx 表示好吧，我错了 （服务端错误）
- 状态解释没什么用
- 第 2 部分中的 Content-Type 标注了第 4 部分的格式
- 第 2 部分中的 Content-Type 遵循 MIME 规范