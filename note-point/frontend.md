# frontend

- Big Picture

- 基础

  **HyperText Markup Language**: 用于定义网页的*结构*和内容

  **Cascading Style Sheets**: 用于定义网页的*样式*和布局

  **JavaScript**: 用于实现网页的*交互*功能

  **TypeScript**: JavaScript的超集，增加了类型系统，提供更强大的开发工具和更好的代码维护性

- 框架和库

  **Bootstrap**: 一个流行的CSS框架，提供预定义的样式和组件，简化网页设计和开发

  **jQuery**: 一个JavaScript库，简化DOM操作和事件处理

  **Vue.js**: 一个渐进式JavaScript框架，用于构建用户界面

  **React**: 一个用于构建用户界面的JavaScript库，由Facebook维护

- 后端全栈

  **Node.js**: 一个基于Chrome V8引擎的JavaScript运行时环境，用于服务器端开发





---

- Reference

  https://www.runoob.com/html/html-tutorial.html

  



## HyperText Markup Language

### html标签

- 基本结构

  ```html
  <!DOCTYPE html>		HTML声明
  <html></html>		
  
  <head></head>		头标签
  <body></body>		文档的主体内容
  
  ```

  基本信息

  ```html
  <h1></h1>			标题1-6		// 信息逻辑 字号
  <p></p>				文本段落
  <img src="...">			图片
  <a href="..."></a>		链接		// target=”_self”默认当前窗口跳转链接  target=”_blank”新窗口打开
  
  ```

  格式化文本

  ```html
  <br>				换行
  <b></b>				加粗
  <i></i>				斜体
  <u></u>				下划线
  
  ```

- 容器(本身无内容)

  ```html
  <div></div>			块级元素
  <span></span>		内联元素
  
  ```

  



---

- 列表

  ```html
  <ol></ol>			有序列表ordered list
  <ul></ul>			无序列表unordered list
  
  <li></li>			列表中的每项元素list item
  
  ```

  表格

  ```html
  <table></table>		定义表格	// border=”1”表格边框
  
  <thead></thead>		表格的头部
  <tbody></tbody>		表格的主体
  
  <tr></tr>			定义表格行table row
  
  <td></td>			表格行中的单元格table data 
  
  ```

  表单

  ```html
  <form></form>		定义表单
  
  <input>			 	定义输入控件，类型包括text、password、radio、checkbox、submit等
  <textarea>			 定义多行文本输入控件
  <button>			 定义按钮
      
  <select>			 定义下拉列表
  <option>			 定义下拉列表中的选项
  
  <label>			 	定义输入控件的标签
      
  ```

  



### html属性

- 标识和分类

  `id`: 唯一标识符，用于CSS选择器和JavaScript

  `class`: 类名，用于CSS选择器和JavaScript

- 样式和布局

  `style`: 内联样式，用于直接在元素上定义CSS样式

- 事件处理 (在特定事件发生时执行JavaScript代码)

  `onclick`: 单击元素时触发

  `onmouseover`: 鼠标悬停在元素上时触发

  `onkeydown`: 按下键盘按键时触发

- 链接和图像属性 (控制链接和图像的行为)

  `href`: 定义链接的目标URL

  `src`: 定义图像的源文件

  `alt`: 定义图像的替代文本，用于图像无法显示时

  `target`: 定义链接的打开方式，如在新窗口中打开

- 嵌入内容属性 (控制嵌入内容的显示和行为)

  `width` 和 `height`: 定义嵌入内容的宽度和高度

  `controls`: 显示媒体控制条

  



---

- 表格属性

  `colspan`: 定义单元格横跨的列数

  `rowspan`: 定义单元格横跨的行数

  `border`: 定义表格的边框宽度

- 表单属性 (控制表单和输入控件的行为)

  `name`: 定义表单元素的名称，用于服务器端处理

  `value`: 定义输入控件的初始值

  `type`: 定义输入控件的类型，如`text`、`password`、`radio`、`checkbox`等

  `disabled`: 禁用表单元素，使其不可用

  `required`: 标记表单元素为必填项

  



### 表单







### req和resp

- http

  **H**yper**T**ext **T**ransfer **P**rotocol，超文本传输协议，规定了浏览器和服务器之间数据传输的规则

  常见请求方法类型：GET获得数据(进入网页)、POST创建数据(登陆表单给到服务器)

  



---

- 常规

  ```
  请求 URL:				https://movie.douban.com/top250?start=25&filter=
  请求方法:				GET
  状态代码: 				200 OK
  远程地址: 				140.143.177.206:443
  引用者策略: 				unsafe-url
  
  ```

- 响应标头

  ```
  Cache-Control: 				must-revalidate, no-cache, private
  Connection: 				keep-alive
  Content-Encoding: 			br
  Content-Type:				text/html; charset=utf-8
  Date:						Thu, 22 Jun 2023 23:46:11 GMT
  Expires:					Sun, 1 Jan 2006 01:00:00 GMT
  Keep-Alive:					timeout=30
  Pragma:						no-cache
  Server:						dae
  Strict-Transport-Security:	max-age=15552000
  Transfer-Encoding:			chunked
  X-Content-Type-Options:		nosniff
  X-Dae-App:					movie
  X-Dae-Instance: 			default
  X-Douban-Mobileapp: 		0
  X-Xss-Protection: 			1; mode=block
  
  ```

- 请求标头

  ```
  Accept:				text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
  Accept-Encoding:	gzip, deflate, br
  Accept-Language:	zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
  Connection:			keep-alive
  Cookie:				bid=qRx14Q6A1To; douban-fav-remind=1; ll="118201"; __yadk_uid=yVzWTMuWBpPUvlvkT89jEzD8KD6FBVow; _vwo_uuid_v2=DB33717295475274573BD5D0CC4F5EDF4|12e323be86d1b1fde1d0c513f3d835ee; _ga=GA1.2.1359593985.1687435181; _gid=GA1.2.134030383.1687435181; _ga_Y4GN1R87RG=GS1.1.1687435180.1.0.1687435184.0.0.0; _pk_id.100001.4cf6=fd57b4e77ec7f362.1680844121.; __utmz=30149280.1687435188.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmz=223695111.1687435188.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1687476575%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DkJ6vgrrbkzaTF0BzGicODEEx9-B5ChwUp79II2ZpHs6NxxPjWb5ojhYzSXW-ADnK%26wd%3D%26eqid%3D8838718d0029b8f000000003649437a7%22%5D; _pk_ses.100001.4cf6=1; __utma=30149280.1417919745.1672366685.1687435188.1687476576.4; __utmb=30149280.0.10.1687476576; __utma=223695111.1176704748.1680844121.1687435188.1687476576.3; __utmb=223695111.0.10.1687476576; ap_v=0,6.0; __utmc=30149280; __utmc=223695111; dbcl2="262390855:LGc4H3UEy74"; ck=J_b0; frodotk_db="ba0f3b13e609b6832e2db13bb21d2389"; push_noty_num=0; push_doumail_num=0; __gads=ID=a8459784999c5a41-22a2c0e415d9009f:T=1672366683:RT=1687477553:S=ALNI_Mbav_ba3gjJ-rFDG9w9K4LkE5r0rw; __gpi=UID=00000b9a692d2958:T=1672366683:RT=1687477553:S=ALNI_MbKsJDWgLseb8ifvS-rn9IPWqqBdA
  Host:				movie.douban.com
  Referer:			https://movie.douban.com/top250?start
  Sec-Ch-Ua:			"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"
  Sec-Ch-Ua-Mobile:	?0
  Sec-Ch-Ua-Platform:	"Windows"
  Sec-Fetch-Dest:		document
  Sec-Fetch-Mode:		navigate
  Sec-Fetch-Site:		same-origin
  Sec-Fetch-User:		?1
  Upgrade-Insecure-Requests:	1
  User-Agent:			Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.51
  
  ```

  



#### req

- http req

  1 **请求行**：请求数据的第一行。其中`GET`表示请求方式，`/`表示请求资源路径，`HTTP/1.1`表示协议版本

  2 **请求头**：第二行开始，格式为`key：value`形式。

  3 **请求体**：POST请求的最后一部分，存放请求参数

- 常见的HTTP 请求头

  **Host**: 表示请求的主机名

  **User-Agent**: 浏览器版本，告知服务器客户端的相关信息

  **Accept**：表示浏览器能接收的资源类型，如`text/*`，`image/*`或者`*/*`表示所有





#### resp

- http resp

  1 **响应行**：响应数据的第一行。其中`HTTP/1.1`表示协议版本，`200`表示响应状态码，`OK`表示状态码描述

  2 **响应头**：第二行开始，格式为`key: value`形式

  3 **响应体**： 最后一部分，存放响应数据

- 常见的HTTP 响应头

  **Content-Type**：表示该响应内容的类型，例如`text/html`，`image/jpeg`

  **Content-Length**：表示该响应内容的长度（字节数）；

  **Content-Encoding**：表示该响应压缩算法，例如`gzip`；

  **Cache-Control**：指示客户端应如何缓存，例如`max-age=300`表示可以最多缓存300秒





## Cascading Style Sheets

### 编写位置





### 选择器

- 选择器

  通配选择器、元素选择器、class选择器、id选择器

  交集选择器、并集选择器

  后代选择器、子代选择器、兄弟选择器

  属性选择器

  伪类选择器





### css属性

- 文本属性

  `color`: 设置文本颜色

  `font-size`: 设置字体大小

  `font-family`: 设置字体族

  `text-align`: 设置文本对齐方式

  ```css
  color: red; /* 红色文本 */
  font-size: 16px; /* 16像素 */
  font-family: Arial, sans-serif; /* Arial字体，如果没有则使用无衬线字体 */
  text-align: center; /* 居中对齐 */
  
  ```

- 背景属性

  `background-color`: 设置背景颜色

  `background-image`: 设置背景图像

  `background-size`: 设置背景图像的大小

  ```css
  background-color: #f0f0f0; /* 浅灰色背景 */
  background-image: url('image.jpg'); /* 背景图像 */
  background-size: cover; /* 覆盖整个元素 */
  
  ```

  

  

---

- 布局属性

  `display`: 设置元素的显示类型，如`block`、`inline`、`inline-block`、`flex`等

  ```css
  display: block; /* 块级元素 */
  display: inline; /* 行内元素 */
  display: inline-block; /* 行内块级元素 */
  display: flex; /* Flexbox布局 */
  
  ```

- 定位属性

  `position`: 设置元素的定位方式，如`static`、`relative`、`absolute`、`fixed`等

  `top`、`right`、`bottom`、`left`: 设置元素的偏移量

  ```css
  position: relative; /* 相对定位 */
  position: absolute; /* 绝对定位 */
  position: fixed; /* 固定定位 */
  
  top: 10px; /* 顶部偏移10像素 */
  left: 20px; /* 左侧偏移20像素 */
  
  ```

- 盒子模型

  `width` 和 `height`: 设置元素的宽度和高度

  `margin`: 设置元素的外边距

  `padding`: 设置元素的内边距

  `border`: 设置元素的边框

  `border-radius`: 设置边框圆角

  ```css
  margin: 10px; /* 上下左右都为10px */
  margin: 10px 20px; /* 上下10px，左右20px */
  margin: 10px 20px 30px; /* 上10px，左右20px，下30px */
  margin: 10px 20px 30px 40px; /* 上10px，右20px，下30px，左40px */
  
  padding: 10px; /* 上下左右都为10px */
  padding: 10px 20px; /* 上下10px，左右20px */
  padding: 10px 20px 30px; /* 上10px，左右20px，下30px */
  padding: 10px 20px 30px 40px; /* 上10px，右20px，下30px，左40px */
  
  
  border: 1px solid black; /* 1像素黑色实线边框 */
  border-radius: 10px; /* 圆角10像素 */
  
  ```

  



### 盒子模型









### 常见布局

- 布局

  Flexbox

  Grid

























## JavaScrip

### 编写位置





### DOM操作







### 事件处理

























## TypeScript

### 类型系统





### 接口



### 类和模块









## Bootstrap

- Bootstrap

  Bootstrap的组件和样式

  快速构建响应式网页





## jQuery

- jQuery

  选择器、事件处理、动画效果

  简化DOM操作和事件处理







## Vue.js

- Vue.js

  学习组件、指令、生命周期钩子

  构建单页应用（SPA）





## React

- React

  学习组件、状态管理、路由

  构建复杂的用户界面









## Nodejs

- Nodejs

  服务器端开发、Express框架、数据库连接

  构建RESTful API，全栈应用

































