# xfreact

- Reference - dev

  [react](https://legacy.reactjs.org/), [react zn](https://zh-hans.react.dev/), [react github](https://github.com/facebook/react), 

  [concise-react github](https://github.com/13RTK/React-Concise-Course), 
  
  [tailwindcss](https://www.tailwindcss.cn/), 
  
  P1-4



## 背景介绍

### 背景介绍

#### 课程定位

- 课程定位

  免费 精炼 国外资源

  入门渐进 从问题到概念 最佳实践引导

  不会面面俱到 没有面试八股 

- 学习建议

  即使不理解也要上手 最佳实践

  根据自己情况倍数 但不要跳过

  复习笔记 默写项目

  开心即效率 反对工厂上课 可以暂放可以热情

  无关操作系统 前端依托浏览器V8引擎

  



#### 课程内容

- 预备知识

  html css js(es6)

- 第一部分

  三件套体验react

  项目：动态圆圈编辑器、TODO列表

- 第二部分

  nodejs vite脚手架 (react开发范式)

  组件 Props children (划分组件和组件通信)

  数据请求 生命周期 (useEffect用法)

  项目：前期项目的组件抽象

  自定义hook (抽象操作逻辑)

  项目：天气预报 (vercel netlify 全球部署)

- 第三部分

  状态共享contextAPI (全局状态管理)

  reactRouter (路由)

  tailwindCSS (最流行的原子CSS库)

  性能优化 (useMemo memo useCallback)

  项目：前后端的学生管理系统 (react前沿工具)

  



### 编程环境

- 在线环境

  [stackblitz](https://stackblitz.com/edit/stackblitz-starters-opcydc?file=index.html)

- 本地环境

  html,css,js; nodejs

  vscode

  



#### 体验react

- 任务

  输入框输入内容，在页面中同步显示

  ```rust
  // 原生JS
  选中元素 <input> <p>
  绑定事件处理器
  
  // react
  react重写html内容 
  react挂载
  以标签形式输入函数
  
  ---
  
  // react cdn
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  
  ```

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Home</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>
    <body>
      <!-- Way1: 原生html js -->
      <!-- <div id="vanilla">
        <h1>Title</h1>
        <input class="vanilla-input" type="text" />
        <p class="vanilla-p"></p>
      </div>
      <hr /> -->
  
      <!-- Way2: React js -->
      <div id="app"></div>
  
      <!-- js -->
      <script src="main-react.js" type="text/babel"></script>
      <!-- <script src="main.js"></script> -->
    </body>
  </html>
  
  ```

  main.js (原生js的实现)

  ```js
  // 选中元素
  const inputEl = document.querySelector('.vanilla-input');
  const pEl = document.querySelector('.vanilla-p');
  
  // 绑定监听事件
  inputEl.addEventListener('input', (event) => {
    // console.log(event.target.value);
    pEl.textContent = event.target.value;
  });
  
  ```

  main-react.js (react的实现)

  ```js
  // react实现
  // const [textInput, setTextInput] = React.useState('');
  // <input onChange={(event) => setTextInput(event.target.value)} />
  // <p>{textInput}</p>
  
  // react重写html内容
  function MyApp() {
    const [textInput, setTextInput] = React.useState('');
  
    return (
      <main>
        <h1>Title</h1>
        {/* 绑定事件处理器 `on事件名` */}
        <input
          type="text"
          onChange={(event) => setTextInput(event.target.value)}
        />
        {/* 渲染展示 */}
        <p>{textInput}</p>
      </main>
    );
  }
  
  // react挂载
  const appEl = document.querySelector('#app');
  const root = ReactDOM.createRoot(appEl);
  // 以标签形式输入函数
  root.render(<MyApp />);
  
  ```

  



#### 配置vscode

- 自动保存 自动格式化

  settings -> save -> AutoSave:onFocusChange

  settings -> format -> DefaultFormatter: Prettier

- settings.json

  ```json
  {
    // save
    "files.autoSave": "onFocusChange",
    "editor.wordWrap": "on",
    "editor.lineHeight": 20,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "explicit"
    },
    // format
    "[rust]": {
      "editor.defaultFormatter": "rust-lang.rust-analyzer",
      "editor.formatOnSave": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.formatOnType": false,
    "notebook.defaultFormatter": "esbenp.prettier-vscode",
    // theme
    "workbench.colorTheme": "1984 - Cyberpunk",
    "workbench.iconTheme": "vscode-icons",
  
    // java maven spring
    "java.configuration.maven.userSettings": "/opt/module/maven/conf/settings.xml",
    "java.configuration.maven.globalSettings": "/opt/module/maven/conf/settings.xml",
    "maven.executable.path": "/opt/module/maven/bin/mvn",
    "maven.settingsFile": "/opt/module/maven/conf/settings.xml",
    "spring.initializr.defaultJavaVersion": "8",
    "spring.initializr.defaultLanguage": "Java",
    "spring.initializr.defaultPackaging": "JAR",
    "spring.initializr.defaultGroupId": "com.time1043",
    "spring.initializr.serviceUrl": [
      "https://start.aliyun.com/"
      // "https://start.spring.io"
    ]
  }
  ```

- 插件

  Prettier

  ```
  
  ```

- 新建项目

  ```bash
  # everything_is_componment_in_the_react
  cd /opt/code/frontend-code/hello-frontend/code-show/concise-react
  mkdir part01 part02 part03
  cd part01 && mkdir lecture01 lecture02 lecture03 lecture04 challenge01 challenge02
  
  ```

  



#### react项目：cdn

- cdn

  https://zh-hans.legacy.reactjs.org/docs/cdn-links.html

  https://dev.to/jeetvora331/write-react-code-with-cdn-in-html-56i9

  ```js
  // React ReactDOM
  //<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  //<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  
  // or 压缩优化 生产环境
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  
  // 原生js实现jsx语法
  <script type="text/javascript" src="https://unpkg.com/babel-standalone@6/babel.js"></script>
  
  
  // html连接js
  <script src="./main.js" type="text/babel"></script>
  
  ```
  
- 具体代码

  html
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <!-- Import React, ReactDOM -->
      <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
      <!-- Import Babel -->
      <script src="https://unpkg.com/babel-standalone@6/babel.js"></script>
    </head>
  
    <body>
      <div id="app"></div>
  
      <script src="./main.js" type="text/babel"></script>
    </body>
  </html>
  
  ```
  
  挂载元素 
  
  ```js
  function AppContent() {
    return <p>Hello React with CDN!</p>;
  }
  
  // doucument ReactDOM
  const appEl = document.querySelector("#app");
  const root = ReactDOM.createRoot(appEl);
  // render
  root.render(<AppContent />);
  
  ```
  
  



#### react项目：脚手架







## 基础语法

### 登陆表单【案例】

#### 初步实现 (useState, className, )

- concise-react/part01/lecture02/main.js

  ```jsx
  // 表单应用
  function AppContent() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    function handleSubmit(e) {
      // 触发submit事件默认页面刷新 需阻止默认事件发生
      e.preventDefault();
  
      if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
      }
      console.log("Username:", username);
      console.log("Password:", password);
  
      // 重置表单
      setUsername("");
      setPassword("");
    }
  
    // JSX syntax
    return (
      <main>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <br />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </main>
    );
  }
  
  const appEl = document.querySelector("#app");
  const root = ReactDOM.createRoot(appEl);
  root.render(<AppContent />);
  
  ```

- 总结

  useState

  ```jsx
  // 初始化
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
    
  // 绑定变量 插值表达式
  {username}
  // 修改变量值
  setUsername("");
  
  <input value={username} onChange={(e) => setUsername(e.target.value)}/>
    
  ```

  CSS className

  ```
  // JSX style属性{{}} 写对象
  <h1 style={{ textAlign: "center" }}>Login Form</h1>
  <button className="btn" type="submit">
  
  
  // className  style.css
  h1 {
    text-align: center;
  }
  .btn {
    margin: 1rem;
  }
  
  ```

  



#### 表单校验 (derived state)

- 分析总结

  ```
  // 表单校验
  // 若username<=4||password<=4 则输入框标红
  
  
  // 动态修改样式 input,
  const [textClass, setTextClass] = React.useState("input");
  
  // 绑定变量
  <input className={textClass}>
  
  // 若不满足条件则修改
  if (username.length <= 4) {
    setUsernameClass("input-error");
    return;
  }
  if (password.length <= 4) {
    setPasswordClass("input-error");
    return;
  }
  
  ---
  
  // React.derivedState (Vue.computed)  // 动态计算
  const usernameClass = username.length <= 4 ? "input-error" : "input";
  const passwordClass = password.length <= 4 ? "input-error" : "input";
  
  ```

  



#### 圆圈【案例】

- 挑战

  ```
  // 根据类名的css设置样式
  
  
  // #################################################
  // 1. 圆圈紫色
  // 2. 文本橙色
  // #################################################
  
  // 状态变量
  const [isPurple, setIsPurple] = React.useState(false);
  const [textColor, setTextColor] = React.useState("");
  
  // 获取用户输入 (值绑定)
  <input type="checkbox" value={isPurple onChange={() => setIsPurple(!isPurple)}/>
  <select value={textColor} onChange={(e) => setTextColor(e.target.value)}>
    <option value="" selected>White</option>
    <option value="text-black">Black</option>
    <option value="text-orange">Orange</option>
  </select>
  
  // 最终设置结果 (类名)
  <div className={`circle ${isPurple ? "purple" : ""} `}>Hi!</div>
  <div className={`circle ${isPurple ? "purple" : ""} ${textColor}`}>Hi!</div>
  
  
  // #################################################
  // 3. 圆圈大小
  // 4. 圆圈旋转
  // #################################################
  
  // 状态变量
  const [circleSize, setCircleSize] = React.useState(150);
  const [circleRotate, setCircleRotate] = React.useState(0);
  
  // 计算样式 style
  const circleStyle = {
    height: `${circleSize}px`,
    width: `${circleSize}px`,
    lineHeight: `${circleSize}px`,
    transform: `rotate(${circleRotate}deg)`,
  };
  
  // 获取用户输入 (值绑定)
  <input type="number" value={circleSize} onChange={(e) => setCircleSize(e.target.value)}/>
  <input type="number" value={circleRotate} onChange={(e) => setCircleRotate(e.target.value)}/>
  
  // 最终设置结果 (类名)
  <div className={`circle ${isPurple ? "purple" : ""} ${textColor}`} style={circleStyle}>Hi!</div>
  
  ```

  



### 天气预报【案例】

#### 数据渲染 (for if)

- 数据渲染

  列表渲染

  条件渲染

- 语法总结

  ```
  // 列表渲染 map
  cities.map  // 遍历 cities 数组
  在每个 section 中，使用 city.forecast.map 遍历 forecast 数组，为每个天气预报生成一个 li 元素。
  
  {cities.map((city, index) => (
    <section key={index} className="city">
      <h2>{city.country}</h2>
      <h3>{city.name}</h3>
    </section>
  ))}
  
  
  
  // 条件渲染
  使用 city.forecast ? ... : ... 来判断 city 对象中是否存在 forecast 属性。
  如果存在 forecast 属性，则渲染天气预报列表；否则，渲染 Can't find any data 的提示信息。
  
  // 日期格式化
  使用 new Date(day.date).toLocaleDateString() 将日期字符串转换为本地日期格式
      
  ```

  







### 语法总结

#### Hook

- Hook

  useState 在函数组件中添加状态

  useEffect 类组件中的生命周期方法 (omponentDidMount, componentDidUpdate, componentWillUnmount)

  useContext 在组件树中获取上下文

  useCallback 缓存函数 避免不必要的重新创建

  useMemo 缓存计算结果 提高性能

  useRef 访问DOM元素或保持一个可变的引用 不会触发重新渲染

  ```jsx
  // 在函数组件中添加状态
  const [state, setState] = useState(initialState);
  
  
  // 执行副作用操作 (如数据获取 订阅 手动修改DOM)
  useEffect(() => { /* 效果代码 */ }, [依赖数组]);
  
  // 与useEffect类似 但在所有DOMmutations之后同步执行 但在浏览器paint之前
  useLayoutEffect(() => { /* 效果代码 */ }, [依赖数组]);
  
  
  // 从上下文Context中获取值 而无需通过props逐层传递
  const value = useContext(MyContext);
  
  // 管理复杂的状态逻辑 (特别是当状态逻辑涉及多个子值或下一个状态依赖于前一个状态)
  const [state, dispatch] = useReducer(reducer, initialState);
  
  
  // 用于memoization记忆化函数 避免不必要的重新创建函数
  const memoizedCallback = useCallback(() => { /* 函数体 */ }, [依赖数组]);
  
  // 用于memoization记忆化计算 避免不必要的重新计算
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  
  
  // 访问DOM元素或保持一个可变的引用 该引用不会导致组件重新渲染
  const refContainer = useRef(initialValue);
  
  // 自定义暴露给父组件的子组件实例值
  useImperativeHandle(ref, () => ({ methodName: () => {} }), [依赖数组]);
  
  // 在React DevTools中显示自定义Hook的标签 方便调试
  useDebugValue(label);
  
  // 优化界面更新 提升用户体验 (特别是在处理大量数据或复杂更新时)
  const [isPending, startTransition] = useTransition();
  const deferredValue = useDeferredValue(value);
  
  ```

  



#### 流程控制

- 流程控制

  列表渲染

  条件渲染

  













## 项目实战

### Tailwindcss





























