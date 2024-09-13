# react18

- Reference 

  [react](https://zh-hans.react.dev/), [react cn](https://zh-hans.react.dev/), 





## Quick Start

- Overview

  如何创建和嵌套**组件** 

  如何添加标签和**样式** 

  如何**显示数据** 

  如何渲染条件和列表

  如何对**事件**做出响应并**更新界面** 

  如何在组件间**共享数据** 

  



### Concepts

- 组件

  web - page - components(外观 逻辑)
  
  组件是一个函数，函数的返回值是JSX代码
  
- JSX

  HTML + JS -> JSX (extends)

  必须要闭合 `<br/>`

  单个父节点 `<div>...<div/>` 或 `<>...</>`

  



---

- 组件化开发

  React 组件是返回标签的 JavaScript 函数

  ```react
  function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }
  ```

  嵌套组件：React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母

  ```react
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }
  ```

- chapter01_quick/hello_components.html

  [try-react-locally](https://react.dev/learn/installation#try-react-locally) 

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Hello World</title>
  
      <!-- react.dev.js, react-dom.dev.js, babel.min.js -->
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <!-- Don't use this in production: -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>
  
    <body>
      <div id="root"></div>
  
      <script type="text/babel">
        function MyApp() {
          return <h1>Hello, world!</h1>;
        }
  
        const container = document.getElementById("root"); // DOM
        const root = ReactDOM.createRoot(container); // ReactDOM
        root.render(<MyApp />);
      </script>
    </body>
  </html>
  
  ```

  



### 数据显示

- 数据显示

  简单显示：js表达式、{}

  条件渲染：普通js、三元运算符、if-else、&&

  列表渲染：map数组遍历、变量解析、unique-key-prop

  标签属性：属性变量、{}

  注意：布尔类型值不会显示、对象不能直接传

  



---

- 代码展示

  示例中，`style={{}}` 并不是一个特殊的语法，而是 `style={ }` 

  JSX 大括号内的一个普通 `{}` 对象。当你的样式依赖于 JavaScript 变量时，你可以使用 `style` 属性。

  ```jsx
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Hello World</title>
  
      <!-- react.dev.js, react-dom.dev.js, babel.min.js -->
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <!-- Don't use this in production: -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>
  
    <body>
      <div id="root"></div>
  
      <script type="text/babel">
        const user = {
          name: "Hedy Lamarr",
          imageUrl: "https://avatars.githubusercontent.com/u/132178516?v=4",
          imageSize: 90,
        };
  
        function Profile() {
          return (
            <>
              <h1>{user.name}</h1>
              <img
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                style={{
                  width: user.imageSize,
                  height: user.imageSize,
                }}
              />
            </>
          );
        }
  
        function MyApp() {
          let color = "red";
          let fontSize = "48px";
          let nothing = "no";
          return (
            <>
              <h1 style={{ color: color, fontSize: fontSize }} xxx={nothing}>
                Run you clear boy!
              </h1>
              <Profile />
            </>
          );
        }
  
        const container = document.getElementById("root"); // DOM
        const root = ReactDOM.createRoot(container); // ReactDOM
        root.render(<MyApp />);
      </script>
    </body>
  </html>
  
  ```

- 条件渲染 

  React 没有特殊的语法来编写条件语句，因此你使用的就是普通的 JavaScript 代码。例如使用 [`if`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 语句根据条件引入 JSX

  ```jsx
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return (
    <div>
      {content}
    </div>
  );
  ```

  更紧凑代码，可以使用 条件 `?` 运算符。与 `if` 不同的是，它工作于 JSX 内部

  ```jsx
  <div>
    {isLoggedIn ? (
      <AdminPanel />
    ) : (
      <LoginForm />
    )}
  </div>
  ```

  当你不需要 `else` 分支时，你也可以使用更简短的 逻辑 `&&` 语法

  ```jsx
  <div>
    {isLoggedIn && <AdminPanel />}
  </div>
  ```

  



---

- 代码显示

  ```jsx
        function MyText() {
          let name = "oswin"; // {} 里最原始js表达式 即有返回值
          let age = 18;
          let home = <a href="https://github.com/time1043">home</a>;
          return (
            <h2>
              name: {name}; age: {age + 1}; {age > 18 ? "big" : "small"}; {home};
              {"impossible".toUpperCase()};
            </h2>
          );
        }
  
        function MyList() {
          let arr = ["a", "b", "b", 1, 2, 3];
  
          // return <div>{arr}</div>;  // 拼接成字符串
          return (
            <div>
              {arr.map((item, index) => (
                <h3 key={index}>{item}</h3>
              ))}
            </div>
          ); // map数组遍历 变量解析 unique-key-prop
        }
  
        function MyApp() {
          let color = "red";
          let fontSize = "48px";
          let nothing = "no";
          return (
            <>
              <h1 style={{ color: color, fontSize: fontSize }} xxx={nothing}>
                Run you clear boy!
              </h1>
              <MyText xxx={nothing} />  // 组件间通信 父传子 子接收
              <MyList />
            </>
          );
        }
  
        const container = document.getElementById("root"); // DOM
        const root = ReactDOM.createRoot(container); // ReactDOM
        root.render(<MyApp />);
  
  ```

  



### 样式

- 在 React 中使用 `className` 来指定一个 CSS 的 class。与 HTML 的 [`class`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/class) 属性的工作方式相同

  ```jsx
  <img className="avatar" />
  ```

  在单独的 CSS 文件中编写 CSS 规则。添加到主文件中：HTML 的 `<link>` 标签；构建工具或框架 ...

  ```css
  /* In your CSS */
  .avatar {
    border-radius: 50%;
  }
  ```

  





### 事件





### 更新页面

































































































