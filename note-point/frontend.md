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

接口

类和模块



### 概念

- 什么是ts

  TypeScript 由微软开发，是基于 JavaScript 的⼀个**扩展语⾔**

  TypeScript 包含了 JavaScript 的所有内容，即TypeScript 是 JavaScript 的**超集**

  TypeScript 增加了：静态类型检查、接⼝、 泛型等很多**现代开发特性**，更适合**⼤型项目的开发**

  TypeScript 需要编译为 JavaScript ，然后交给浏览器或其他 JavaScript 运⾏环境执⾏

- 为什么要学ts

  JavaScript 今非昔比 (全栈：前端、后端、移动端、桌面端；代码量丰富)

  JavaScript 当年出⽣简陋 

  



#### js困扰

- 不清楚的数据类型

  ```js
  let welcome = 'hello'
  welcome(); // 此⾏报错：TypeError: welcome is not a function
  ```

  有漏洞的逻辑

  ```js
  const str = Date.now() % 2 ? "奇数" : "偶数";
  if (str !== "奇数") {
    alert("hello");
  } else if (str === "偶数") {
    alert("world");  // 这辈子都运行不了
  }
  ```

  访问不存在的属性

  ```js
  const obj = { width: 10, height: 15 };
  const area = obj.width * obj.heigth;  // height
  ```

  低级的拼写错误

  ```js
  const message = "Hello,World";
  message.toUperCase(); // toUpperCase
  ```

  



---

- ts静态类型检查

  ```typescript
  // ts 静态类型检查：在代码运⾏前进⾏检查，发现代码的错误或不合理之处，减⼩运⾏时出现异常的⼏率
  // 把运行时的错误前置
  let welcome = "hello";
  welcome();
  
  // js 运行时错误
  
  ```

  



#### 编译ts

- 命令行编译

  ```bash
  npm i typescript -g
  tsc main.ts
  
  ```

  ⾃动化编译

  ```bash
  # 创建 TypeScript 编译控制⽂件
  tsc --init  # tsconfig.json 编译时配置  # 默认编译的js版本是ES7
  
  
  # 监视⽬录中的.ts⽂件变化
  tsc --watch  # tsconfig.json # noEmitOnError
  # ⼩优化，当编译出错时不⽣成.js⽂件
  tsc --noEmitOnError --watch  
  
  ```

- 脚手架基于webpack vite (开箱即用)

  



### 类型系统

#### 类型声明和类型推断

- 类型声明

  ```typescript
  // =============================================
  // 类型声明：限制变量
  // =============================================
  let a: string = "hello";
  let b: number;
  let c: boolean;
  
  a = "world";
  // a = 9;  // Type 'number' is not assignable to type 'string'
  // a = false;  // Type 'boolean' is not assignable to type 'string'
  
  b = -99;
  c = true;
  console.log(a, b, c);
  
  // =============================================
  // 类型声明：限制函数的参数和返回值类型
  // =============================================
  function add(a: number, b: number): number {
    return a + b;
  }
  let res = add(1, 3);
  console.log(res);
  
  ```

- 类型推断 (复杂的推断失误)

  ```typescript
  // =============================================
  // 类型推断
  // =============================================
  let a = -99; // a:number
  // a = "hello"; // Type 'string' is not assignable to type 'number'
  
  ```

  



#### 声明变量的关键字

- 声明变量的关键字 (ES6+)

  `var`：用于声明一个**变量**，作用域可以是全局或函数局部。存在*变量提升现象 hoisting*。

  `let`：用于声明一个**块级作用域**的**局部变量**。不存在*变量提升*，存在*暂时性死区 temporal dead zone*。

  `const`：用于声明一个**块级作用域**的**常量**。声明时**必须初始化**，且不能重新赋值。不存在*变量提升*，存在*暂时性死区*。

- *变量提升现象 hoisting*

  ```js
  // =============================================
  // 变量提升 (var)
  // =============================================
  console.log(a); // 输出: undefined
  var a = 10;
  
  // =============================================
  // 函数提升
  // =============================================
  foo(); // 输出: "Hello, world!"
  function foo() {
    console.log("Hello, world!");
  }
  
  ```

- *暂时性死区 temporal dead zone*

  ```js
  // =============================================
  // 暂时性死区：在变量声明之前，变量是不可访问的，即使在同一作用域内也是如此 (let const)
  // =============================================
  console.log(a); // ReferenceError: a is not defined
  let a = 10;
  
  ```

  



#### 推荐原始类型

- 推荐原始类型 不推荐包装对象

  ```typescript
  // =============================================
  // 推荐string 不推荐String(麻烦 且内存不友好)
  // =============================================
  let a: string; // 基本类型的字符串
  a = "hello";
  // a = new String("hello"); // Type 'String' is not assignable to type 'string'.
  // 'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
  
  let b: String; // 字符串对应的包装对象 // 基本类型的字符串
  b = "hello";
  b = new String("hello");
  
  console.log(typeof a); // string
  console.log(typeof b); // object
  
  // =============================================
  // 推荐number 不推荐Number(麻烦 且内存不友好)
  // =============================================
  let c: number = 12;
  console.log(c);
  
  let d: Number = new Number(12);
  console.log(d.valueOf());
  
  // =============================================
  // 自动装箱：原始类型 -> 包装对象(存在意义)
  // =============================================
  let str = "hello";
  console.log(str.length); // 输出: 5  // string没有length属性
  
  // 当访问str.length时，JavaScript引擎做了以下⼯作：
  let size = (function () {
    // 1. ⾃动装箱：创建⼀个临时的String对象包装原始字符串
    let tempStringObject = new String(str);
    // 2. 访问String对象的length属性
    let lengthValue = tempStringObject.length;
    // 3. 销毁临时对象，返回⻓度值
    // （JavaScript引擎⾃动处理对象销毁，开发者⽆感知）
    return lengthValue;
  })();
  console.log(size); // 输出: 5
  
  ```

  



#### 类型总览 ✔

- js数据类型

  基本数据类型：`string`、`number`、`boolean`；`null`、`undefined`；`symbol`(ES6 唯一的不可变的值)

  特殊类型：`bigint`(ES11 任意精度的整数)

  复杂数据类型：`object`：`Array`、`Function`、`Date`、`Error` 等  

- ts数据类型 (*js+*)

  六个新类型：`any` (放弃类型检查)、`unknown`(类型安全)；`never`(任何值都不是)、`void`(函数不返回任何值)；`tuple`(固定数量 数组类型)、`enum`(⼀组命名常量)

  ⾃定义类型：`type`(为任意类型创建别名)、`interface` 

  



---

- 具体

  **array**：数组类型，例如 `number[]` 或 `Array<number>`

  **tuple**：固定长度和类型的数组，例如 `[string, number]`

  **enum**：枚举类型，用于定义一组命名的常量。

  **function**：函数类型，例如 `(a: number, b: number) => number`

  



#### any unknown

- any 

  ```typescript
  // =============================================
  // any：放弃类型检查
  // =============================================
  let a: any; // 显式any
  a = 99;
  a = "hello";
  a = false;
  
  let b; // 隐式any
  b = 99;
  b = "hello";
  b = false;
  
  // 类型不安全：any类型可以赋值给任意类型
  let x: string; // x: string
  x = a; // 一种破坏
  console.log(typeof x); // x: boolean
  console.log(x);
  
  ```

- unknown

  ```typescript
  // =============================================
  // unkown：类型安全的any (起初不确定数据的具体类型，要后期才能确定)
  // =============================================
  let c: unknown;
  c = 100;
  c = false;
  c = "hello";
  
  // 类型安全
  let y: string;
  // y = c; // Type 'unknown' is not assignable to type 'string'
  
  // solution1: 加类型判断
  if (typeof c === "string") {
    y = c;
  }
  // solution2: 加断言
  y = c as string;
  // solution3: 加断言
  y = <string>c;
  
  // =============================================
  // any读取任何类型无警告 unknown不允许
  // =============================================
  let str1: string;
  str1 = "Hello";
  str1.toUpperCase();
  
  let str2: any;
  str2 = "Hello";
  str2.toUpperCase(); // 无警告
  
  let str3: unknown;
  str3 = "Hello";
  // str3.toUpperCase(); // 警告  // 'str3' is of type 'unknown'
  
  // solution：断言 强制指定str3的类型为string
  (str3 as string).toUpperCase(); // 无警告
  
  ```

  



#### never void

- never

  ```typescript
  // =============================================
  // never：任何值都不是 (一般不用)
  // =============================================
  
  // 不能存储任何数据
  let a: never;
  // a = 12; // err
  // a = "hello"; // err
  // a = true; // err
  
  // 一般ts主动推断
  let b: string = "hello";
  if (typeof b === "string") {
    console.log(b.toUpperCase());
  } else {
    console.log(b); // TypeScript会推断出此处的b是never，因为没有任何⼀个值符合此处的逻辑
  }
  
  // 可⽤于限制函数的返回值 (任何值都不⾏，像undeifned、null都不⾏)
  function throwError(str: string): never {
    throw new Error("程序异常退出:" + str);
  }
  
  ```

- void

  ```typescript
  // =============================================
  // void：含义是空，即函数不返回任何值，调⽤者也不应依赖其返回值进⾏任何操作
  // =============================================
  
  // ⽤于函数返回值声明
  function logMessage(msg: string): void {
    console.log(msg);
    // 无 return 指定函数返回值，即无显式返回值
    // 但有隐式返回值，undefined (void可以接受undefined)  //  undefined 是 void 可以接受的⼀种“空”
  }
  logMessage("你好");
  
  // 符合规范
  function logMessage2(msg: string): void {
    console.log(msg);
  }
  function logMessage3(msg: string): void {
    console.log(msg);
    return;
  }
  function logMessage4(msg: string): void {
    console.log(msg);
    return undefined;
  }
  
  // =============================================
  // undefined 和 void 区别
  // =============================================
  
  // 返回值类型为 void 的函数，调⽤者不应依赖其返回值进⾏任何操作
  function logMessage5(msg: string): void {
    console.log(msg);
  }
  let result5 = logMessage5("你好");
  // if (result5) {  // 此⾏报错：⽆法测试 "void" 类型的表达式的真实性
  //   console.log("logMessage有返回值");
  // }
  
  function logMessage6(msg: string): undefined {
    console.log(msg);
  }
  let result6 = logMessage6("你好");
  if (result6) {
    // 此⾏⽆警告
    console.log("logMessage有返回值");
  }
  
  // void 是⼀个⼴泛的概念，⽤来表达“空”，⽽ undefined 则是这种“空”的具体实现。
  // undefined 是 void 能接受的“空”状态的⼀种具体形式
  // void 包含 undefined，但 void 表达的语义超越了单纯的 undefined，它是⼀种意图上的约定，⽽不仅仅是特定值的限制
  
  // 如果⼀个函数返回类型为 void
  // 从语法上讲：函数是可以返回 undefined 的，⾄于显式返回，还是隐式返回，这⽆所谓！
  // 从语义上讲：函数调⽤者不应关⼼函数返回的值，也不应依赖返回值进⾏任何操作！即使我们知道它返回了 undefined
  
  ```

  



#### 声明对象 声明函数 声明数组

- 声明对象

  ```typescript
  // =============================================
  // 声明对象类型
  // =============================================
  // 限制person1对象必须有name属性，age为可选属性
  let person1: { name: string; age?: number };
  // 含义同上，也能⽤分号做分隔
  let person2: { name: string; age?: number };
  // 含义同上，也能⽤换⾏做分隔
  let person3: {
    name: string;
    age?: number;
  };
  
  // 如下赋值均可以
  person1 = { name: "李四", age: 18 };
  person2 = { name: "张三" };
  person3 = { name: "王五" };
  
  // // 如下赋值不合法，因为person3的类型限制中，没有对gender属性的说明
  // person3 = { name: "王五", gender: "男" };
  
  // =============================================
  // 索引签名 (对象可有任意数量的属性，且属性的键和类型是可变的)
  // =============================================
  // 限制person对象必须有name属性，可选age属性但值必须是数字，同时可以有任意数量、任意类型的其他属性
  let person: {
    name: string;
    age?: number;
    [key: string]: any; // 索引签名，完全可以不⽤key这个单词，换成其他的也可以
  };
  // 赋值合法
  person = {
    name: "张三",
    age: 18,
    gender: "男",
    address: "北京",
  };
  
  ```

- 声明函数

  ts`=>` 函数签名

  ```typescript
  // =============================================
  // 声明函数类型
  // =============================================
  let add: (a: number, b: number) => number; // 函数签名(函数名、入参、返回值类型)
  add = function (x, y) {
    return x + y;
  };
  
  // TypeScript 中的 => 在函数类型声明时表示函数类型，描述其参数类型和返回类型
  // JavaScript 中的 => 是⼀种定义函数的语法，是具体的函数实现
  // 函数类型声明还可以使⽤：接⼝、⾃定义类型等⽅式 ...
  
  ```

  js`=>` 定义函数的语法

  ```js
  // 1
  let add; 
  add = function (x, y) {
      return x + y;
  };
  
  // 2
  let add = (x, y) => {
    return x + y;
  };
  
  // 3
  let add = (x, y) => x + y;
  
  ```

- 声明数组

  ```typescript
  // =============================================
  // 声明数组类型
  // =============================================
  let arr1: string[];
  let arr2: Array<string>; // 泛型 ...
  arr1 = ["a", "b", "c"];
  arr2 = ["hello", "world"];
  
  ```

  



---

- obejct Object (用得的少)

  ```typescript
  // =============================================
  // obejct：所有⾮原始类型 (可存储对象、函数、数组等)
  // 由于限制的范围⽐较宽泛，在实际开发中使⽤的相对较少
  // =============================================
  
  let a: object;
  
  // 以下代码，是将【⾮原始类型】赋给a，所以均符合要求
  a = {};
  a = { name: "张三" };
  a = [1, 3, 5, 7, 9];
  a = function () {};
  a = new String("123");
  class Person {}
  a = new Person();
  
  // // 以下代码，是将【原始类型】赋给a，有警告
  // a = 1; // 警告：不能将类型“number”分配给类型“object”
  // a = true; // 警告：不能将类型“boolean”分配给类型“object”
  // a = "你好"; // 警告：不能将类型“string”分配给类型“object”
  // a = null; // 警告：不能将类型“null”分配给类型“object”
  // a = undefined; // 警告：不能将类型“undefined”分配给类型“object”
  
  // =============================================
  // Obejct：所有可以调⽤ Object ⽅法的类型 (除了 undefined 和 null 的任何值)
  // 由于限制的范围实在太⼤了！所以实际开发中使⽤频率极低
  // =============================================
  let b: Object;
  
  // 以下代码，均⽆警告，因为给a赋的值，都是Object的实例对象
  b = {};
  b = { name: "张三" };
  b = [1, 3, 5, 7, 9];
  b = function () {};
  b = new String("123");
  class Person2 {}
  b = new Person();
  b = 1; // 1不是Object的实例对象，但其包装对象是Object的实例
  b = true; // truue不是Object的实例对象，但其包装对象是Object的实例
  b = "你好"; // “你好”不是Object的实例对象，但其包装对象是Object的实例
  
  // // 以下代码均有警告
  // b = null; // 警告：不能将类型“null”分配给类型“Object”
  // b = undefined; // 警告：不能将类型“undefined”分配给类型“Object”
  
  ```

  



#### tuple

- tuple  

  ```typescript
  // =============================================
  // 元组Tuple 是⼀种特殊的数组类型，存储固定数量的元素，且每个元素的类型是已知的且可以不同
  // 元组⽤于精确描述⼀组值的类型，?表示可选元素
  // =============================================
  
  // 第⼀个元素必须是 string 类型，第⼆个元素必须是 number 类型。
  let arr1: [string, number];
  // 第⼀个元素必须是 number 类型，第⼆个元素是可选的，如果存在，必须是 boolean 类型。
  let arr2: [number, boolean?];
  // 第⼀个元素必须是 number 类型，后⾯的元素可以是任意数量的 string 类型
  let arr3: [number, ...string[]];
  
  // 可以赋值
  arr1 = ["hello", 123];
  arr2 = [100, false];
  arr2 = [200];
  arr3 = [100, "hello", "world"];
  arr3 = [100];
  
  // // 不可以赋值，arr1声明时是两个元素，赋值的是三个
  // arr1 = ["hello", 123, false];
  
  ```
  
  



#### enum

- 场景

  ```typescript
  // =============================================
  // 枚举enum 可定义⼀组命名常量
  // 增强代码的可读性、可维护性
  // =============================================
  
  // 存在的问题是调⽤walk时传参时没有任何提示，编码者很容易写错字符串内容
  // 并且⽤于判断逻辑的 up、down、left、right 是连续且相关的⼀组值
  function walk(str: string) {
    if (str === "up") {
      console.log("向【上】⾛");
    } else if (str === "down") {
      console.log("向【下】⾛");
    } else if (str === "left") {
      console.log("向【左】⾛");
    } else if (str === "right") {
      console.log("向【右】⾛");
    } else {
      console.log("未知⽅向");
    }
  }
  walk("up");
  walk("down");
  walk("left");
  walk("right");
  
  ```
  
- 数字枚举

  ```typescript
  // =============================================
  // 数字枚举
  // 其成员的值会⾃动递增，且具备反向映射的特点 (可以通过值来获取对应的枚举成员名称)
  // =============================================
  enum Direction2 {
    Up = 6, // ⾸次枚举成员默认值为0，后续成员会递增
    Down,
    Left,
    Right,
  }
  console.log(Direction2); // {0: 'Up', 1: 'Down', 2: 'Left', 3: 'Right', Up: 0, Down: 1, Left: 2, Right: 3}
  
  // 反向映射
  console.log(Direction2.Up); // 0
  console.log(Direction2[0]); // Up
  
  // // 此⾏代码报错，枚举中的属性是只读的
  // Direction.Up = "shang"; // Cannot assign to 'Up' because it is a read-only property
  
  function walk2(n: Direction2) {
    if (n === Direction2.Up) {
      console.log("向【上】⾛");
    } else if (n === Direction2.Down) {
      console.log("向【下】⾛");
    } else if (n === Direction2.Left) {
      console.log("向【左】⾛");
    } else if (n === Direction2.Right) {
      console.log("向【右】⾛");
    } else {
      console.log("未知⽅向");
    }
  }
  walk2(Direction2.Up);
  walk2(Direction2.Down);
  
  ```
  
- 字符串枚举

  ```typescript
  // =============================================
  // 字符串枚举
  // 枚举成员的值是字符串
  // =============================================
  enum Direction3 {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right",
  }
  let dir: Direction3 = Direction3.Up;
  console.log(dir); // up
  
  ```

- 常量枚举

  ```typescript
  // =============================================
  // 常量枚举
  // 特殊枚举类型，⽤const关键字定义，在编译时会被内联，避免⽣成⼀些额外的代码
  // =============================================
  
  // 普通枚举
  enum Directions4 {
    Up,
    Down,
    Left,
    Right,
  }
  let x4 = Directions4.Up;
  // // js
  // var Directions4;
  // (function (Directions4) {
  //     Directions4[Directions4["Up"] = 0] = "Up";
  //     Directions4[Directions4["Down"] = 1] = "Down";
  //     Directions4[Directions4["Left"] = 2] = "Left";
  //     Directions4[Directions4["Right"] = 3] = "Right";
  // })(Directions4 || (Directions4 = {}));
  // let x4 = Directions4.Up;
  
  // 常量枚举
  const enum Directions5 {
    Up,
    Down,
    Left,
    Right,
  }
  let x5 = Directions5.Up;
  // // js ✔
  // "use strict";
  // let x5 = 0 /* Directions5.Up */;
  
  ```

  



#### type

- type

  ```typescript
  // =============================================
  // type 为任意类型创建别名 (代码简洁性、可读性、复用性和扩展性)
  // =============================================
  type num = number;
  let price: num;
  price = 100;
  
  // =============================================
  // 联合类型：⼀种⾼级类型，它表示⼀个值可以是⼏种不同类型之⼀
  // =============================================
  type Status = number | string;
  function printStatus(status: Status) {
    console.log(status);
  }
  printStatus(404);
  printStatus("200");
  printStatus("501");
  
  type Gender = "男" | "⼥";
  function logGender(str: Gender) {
    console.log(str);
  }
  logGender("男");
  logGender("⼥");
  
  // =============================================
  // 交叉类型 Intersection Types：允许将多个类型合并为⼀个类型
  // 合并后的类型将拥有所有被合并类型的成员。交叉类型通常⽤于对象类型
  // =============================================
  
  //⾯积
  type Area = {
    height: number; //⾼
    width: number; //宽
  };
  //地址
  type Address = {
    num: number; //楼号
    cell: number; //单元号
    room: string; //房间号
  };
  
  // 定义类型House，且House是Area和Address组成的交叉类型
  type House = Area & Address;
  const house: House = {
    height: 180,
    width: 75,
    num: 6,
    cell: 3,
    room: "702",
  };
  
  ```

  





































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

































