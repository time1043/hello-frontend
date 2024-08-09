# concise-vue

## 背景介绍

### 课程介绍

- Reference

  [code-show](https://gitee.com/alex_john/vue-concise-tutorial/tree/main/part1/section-2)

- simple-vue

  单页面-指令：结合*html css js*练习基础的vue指令

  **简单项目**：检验指令学习情况

  组件开发-vue脚手架：脚手架构建vue组件、vite打包、npm运行

  组件沟通-prop|emit：组件之间传递数据

  动态组件|生命周期：动态切换不同组件、组件生命周期中处理数据

  **复杂项目**：检验学习成果

  composition|options：对比学习两种语法

  **结合ui库开发|完结**：结合vantui开发完整项目

- 工具

  vscode, plugin(vue)

  node npm

  



### hello-vue

- hello-vue

  引入cdn

  html标签：`v-model`、`{{ text }}` (同步内容)

  js代码：创建对象(data函数)、挂载对象

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>文档标题</title>
    <script src="https://unpkg.com/vue@latest"></script>
  </head>
  <body>
    <div id="demo">
      <input v-model.lazy="text" />
      <p>{{ text.split("").reverse().join("") }}</p>
    </div>
    
    <script>
      const app = {
        data() {
          return {
            text: ""
          }
        }
      };
      Vue.createApp(app).mount("#demo");
    </script>
  </body>
  </html>
  
  ```

  





### 环境配置

- 线上环境

  [html在线编辑](https://c.runoob.com/front-end/61/)、[Vue CDN](https://unpkg.com/vue@latest)

  codepen

  



---

- 本机环境

- 代码编辑器：[vscode](https://code.visualstudio.com/)、[vscode-vue](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial)

  放大合适大小：`ctrl =`

  自动保存：`ctrl ,`  -> `save:onFocusChange`

  自动换行：`ctrl ,`  -> `word wrap:on`

  格式化代码：`plugin:prettier` ->  `ctrl ,` ->  `Format:FormatOnSave; defaultFormatter:prettier` 

  插件安装：`live server`; `auto rename tag`, `Color Highlight`; `1984`, `vscode-icons` (主题和图标)

  默认终端：`ctrl shift p` -> `select default profile` -> `git bash`

- 工具

  [vue浏览器开发者插件](https://cn.vuejs.org/guide/scaling-up/tooling.html#browser-devtools)

  [vite-plugin-vue-devtools](https://devtools-next.vuejs.org/guide/vite-plugin)
  
  



---

- 编码环境：nodejs

  https://developer.aliyun.com/article/1078105

  ```bash
  npm config get registry  # 查看  # https://registry.npmmirror.com/
  npm config set registry https://registry.npm.taobao.org/  # 淘宝源镜像
  npm config set registry https://registry.npmjs.org/  # 官方源镜像
  
  npm i pnpm -g
  pnpm --version  # 9.7.0
  
  ```

- 脚手架创建项目

  https://cn.vuejs.org/guide/quick-start.html

  ```bash
  huangyingzhu@yingzhu MINGW64 /d/code2/frontend-code/hello-frontend/code-show/simple-vue (main)
  $ pnpm create vue@latest
  .../1913282b01c-3398                     |   +1 +
  .../1913282b01c-3398                     | Progress: resolved 1, reused 0, downloaded 1, added 1, done
  
  Vue.js - The Progressive JavaScript Framework
  
  √ 请输入项目名称： ... vue-project
  √ 是否使用 TypeScript 语法？ ... 否 / 是
  √ 是否启用 JSX 支持？ ... 否 / 是
  √ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
  √ 是否引入 Pinia 用于状态管理？ ... 否 / 是
  √ 是否引入 Vitest 用于单元测试？ ... 否 / 是
  √ 是否要引入一款端到端（End to End）测试工具？ » 不需要
  √ 是否引入 ESLint 用于代码质量检测？ ... 否 / 是
  √ 是否引入 Vue DevTools 7 扩展用于调试? (试验阶段) ... 否 / 是
  
  正在初始化项目 D:\code2\frontend-code\hello-frontend\code-show\simple-vue\vue-project...
  
  项目初始化完成，可执行以下命令：
  
    cd vue-project
    pnpm install
    pnpm dev
  
  ```

  



### 项目结构

- 项目结构vue

  ```bash
  vue-project
  ├── index.html					✔	// 项目的入口html文件，通常包含一个<div id="app">作为 Vue应用的挂载点
  ├── jsconfig.json						// 用于配置js项目的编译选项，提供更好的代码补全和导航
  ├── package.json				✔	// 项目的npm配置文件，包含项目的名称及版本号、依赖、脚本命令
  ├── vite.config.js						// Vite的配置文件，用于自定义Vite构建工具的行为，如插件、别名、代理等
  ├── .gitignore
  ├── README.md
  │
  ├── node_modules						// 第三方包依赖
  │
  ├── public								// 网站的图标文件，通常显示在浏览器的标签栏或书签中
  │   └── favicon.ico
  │
  │
  └── src							✔
      ├── App.vue						// Vue应用的根组件，通常包含整个应用的布局和结构
      ├── main.js						// 项目的入口js文件，负责初始化Vue应用并挂载到html的DOM元素上
      │
      ├── assets						// 静态资源
      │   ├── base.css				// 基础样式文件
      │   ├── logo.svg				// 项目Logo文件
      │   └── main.css				// 主样式文件
      │
      ├── components					// 组件
      │   ├── HelloWorld.vue
      │   ├── TheWelcome.vue
      │   └── WelcomeItem.vue
      │
      ├── views						// 页面
      │   └── 
      │
      ├── api							// API请求处理
      │   └── 
      │
      └── utils						// 工具函数
          └── 
                  
  ```
  
  









## 第一阶段 native

### vue指令

- vue指令 directive

  v-model(绑定变量)、[v-model修饰符](https://cn.vuejs.org/guide/essentials/forms.html#modifiers)

  v-bind(绑定标签中的属性)
  
  v-on(绑定事件监听的函数)、[v-on修饰符](https://cn.vuejs.org/api/built-in-directives.html#v-on)
  
  v-for(遍历数组中每个元素)
  
  v-if(条件成立才渲染标签；移出dom树)
  
  v-show(等效；添加隐藏属性)
  
  



---

- Task

  输入框输入内容，回显到屏幕上 (原生实现)

  输入框输入内容，回显到屏幕上 (vue实现)

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/vue@latest"></script>
      <title>Document</title>
    </head>
  
    <body>
      <div id="demo">
        <input type="text" v-model.lazy="text" />
        <p>{{ text }}</p>
      </div>
  
      <hr />
      <div>
        <input type="text" class="input-text" />
        <p class="p-text"></p>
      </div>
  
      <script src="vanilla.js"></script>
      <script src="vue.js"></script>
    </body>
  </html>
  
  ```

- vanilla.js (事件监听)

  ```js
  const pEle = document.querySelector(".p-text");
  const inputEle = document.querySelector(".input-text");
  
  // 懒加载
  let text = "";
  
  // 输入框 监听事件(新增)
  inputEle.addEventListener("input", (event) => {
    text = event.target.value;
  });
  
  // 输入框 监听事件(焦点模糊)
  inputEle.addEventListener("blur", () => {
    pEle.textContent = text;
  });
  
  ```

- vue.js (v-model 插值语法；懒加载；html模板中写js)

  ```js
  const app = {
    data() {
      return {
        text: "",
      };
    },
  };
  
  Vue.createApp(app).mount("#demo");
  
  ```
  
  



### 属性与事件

- Task

  文字颜色切换

- index.html (变量绑定 属性绑定)

  `v-bind:...` 简写 `:...` 

  `v-on:...` 简写 `@...`

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <link rel="stylesheet" href="style.css" />
      <script src="https://unpkg.com/vue@latest"></script>
    </head>
  
    <body>
      <div id="demo">
        <!-- 属性绑定 -->
        <h1 v-bind:class="textColor">demo</h1>
  
        <select v-model="textColor">
          <option value="red-text">Red</option>
          <option value="blue-text">Blue</option>
        </select>
  
        <!-- 属性绑定：每次点击后，按钮就变为不可用状态 (事件监听 绑定方法) -->
        <button v-bind:disabled="btnDisable" v-on:click="handleClick">
          Click
        </button>
      </div>
  
      <script>
        const app = {
          data() {
            return {
              textColor: "red-text",
              btnDisable: false,
            };
          },
  
          methods: {
            handleClick() {
              this.btnDisable = true; // 对象类处理 访问类属性用this
            },
          },
        };
        Vue.createApp(app).mount("#demo");
      </script>
    </body>
  </html>
  
  ```

  



### 表单校验 (demo)

- 表单校验

  ...

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <link rel="stylesheet" href="style.css" />
      <script src="https://unpkg.com/vue@latest"></script>
    </head>
  
    <body>
      <div id="app">
        <form>
          <input
            type="text"
            placeholder="enter your username"
            v-model.lazy="username"
            :class="username_is_error"
          />
          <br />
          <input
            type="password"
            placeholder="enter your password"
            v-model.lazy="password"
            :class="password_is_error"
          />
  
          <br />
          <button type="submit" @click.prevent="submit">Login</button>
        </form>
      </div>
  
      <script>
        // vue实例对象 变量绑定
        const app = {
          data() {
            return {
              // 绑定变量  数据变量(驼峰命名)
              username: "",
              password: "",
              // 绑定属性  和ui线管变量(下划线命名)
              username_is_error: "",
              password_is_error: "",
            };
          },
  
          methods: {
            submit() {
              // 重置 输入框错误警报
              this.password_is_error = this.username_is_error = "";
  
              // 校验
              if (this.username.length < 3 || this.password.length < 3) {
                // 输入框错误警报
                if (this.username.length < 3) {
                  this.username_is_error = "input-error";
                }
                if (this.password.length < 3) {
                  this.password_is_error = "input-error";
                }
                // 弹窗 失败
                alert("The input length samaller than 3");
                return;
              }
  
              // 弹窗 成功
              alert(
                `Your input is username: ${this.username} and password: ${this.password}`
              );
            },
          },
        };
        Vue.createApp(app).mount("#app");
      </script>
    </body>
  </html>
  
  ```

  



### 动态校验 watch

- [watch](https://cn.vuejs.org/api/options-state.html#watch)

  每当值发生变化，都会执行函数体中代码

  模块化开发、全局状态管理、跨组件传递数据、监听父组件的数据

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <link rel="stylesheet" href="style.css" />
      <script src="https://unpkg.com/vue@latest"></script>
    </head>
  
    <body>
      <div id="app">
        <form>
          <h1>{{title}}</h1>
          <input
            type="text"
            placeholder="enter your username"
            v-model.lazy="username"
            :class="username_is_error"
            @input="usernameValidate"
          />
          <br />
          <input
            type="password"
            placeholder="enter your password"
            v-model.lazy="password"
            :class="password_is_error"
            @input="passwordValidate"
          />
  
          <br />
          <button type="submit" @click.prevent="submit">Login</button>
        </form>
      </div>
  
      <script>
        const app = {
          data() {
            return {
              title: "table",
              username: "",
              password: "",
              username_is_error: "",
              password_is_error: "",
            };
          },
  
          methods: {
            submit() {
              this.password_is_error = this.username_is_error = "";
  
              if (this.username.length < 3 || this.password.length < 3) {
                if (this.username.length < 3) {
                  this.username_is_error = "input-error";
                }
                if (this.password.length < 3) {
                  this.password_is_error = "input-error";
                }
  
                alert("The input length samaller than 3");
                return;
              }
  
              alert(
                `Your input is username: ${this.username} and password: ${this.password}`
              );
            },
  
            // 动态校验 原生的
            usernameValidate() {
              // this.username_is_error = "";
              // if (this.username.length < 3) {
              //   this.username_is_error = "input-error";
              // }
            },
            passwordValidate() {
              // this.password_is_error = "";
              // if (this.password.length < 3) {
              //   this.password_is_error = "input-error";
              // }
            },
          },
  
          watch: {
            username(val, _oldVal) {
              this.username_is_error = "";
              this.title = "table"; // title
              if (val.length < 3) {
                this.username_is_error = "input-error";
                this.title = "error occur"; // title
              }
            },
            password(val, _oldVal) {
              this.password_is_error = "";
              this.title = "table"; // title
              if (val.length < 3) {
                this.password_is_error = "input-error";
                this.title = "error occur"; // title
              }
            },
            title(val, oldVal) {
              if (val === oldVal) {
                return;
              }
              if (oldVal === "error occur") {
                alert("input valid");
                return;
              }
              alert("input error");
            },
          },
        };
        Vue.createApp(app).mount("#app");
      </script>
    </body>
  </html>
  
  ```

  



### 动态矩形 (demo)

- task

  拖拽坐标轴：四个变量、动态计算

  作用在矩形上：绑定事件、绑定属性

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <link rel="stylesheet" href="./style.css" />
      <script src="https://unpkg.com/vue@latest"></script>
    </head>
  
    <body>
      <div id="app">
        <h2>CSS3 Perspective Playground</h2>
        <main>
          <section class="settings">
            <div class="settings-container">
              <label>perspective: {{perspective}} px;</label>
              <input type="range" min="0" max="999" v-model="perspective" />
  
              <label>rotateX: {{rotateX}} deg; </label>
              <input type="range" min="-180" max="180" v-model="rotateX" />
  
              <label>rotateY: {{rotateY}} deg; </label>
              <input type="range" min="-180" max="180" v-model="rotateY" />
  
              <label>rotateZ: {{rotateZ}} deg; </label>
              <input type="range" min="-180" max="180" v-model="rotateZ" />
  
              <button type="button" @click.prevent="handleReset">Reset</button>
            </div>
          </section>
  
          <section class="output">
            <div class="box-container">
              <!-- Set style -->
              <div class="box" :style="[boxStyle]"></div>
            </div>
          </section>
        </main>
      </div>
  
      <script src="./main.js"></script>
    </body>
  </html>
  
  ```

  main.js

  ```js
  // {
  //   transform: `perspective(0px)rotateX(0deg)rotateY(0deg)rotateZ(0deg)`,
  // }
  
  const app = {
    data() {
      return {
        perspective: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
      };
    },
  
    methods: {
      handleReset() {
        this.perspective = this.rotateX = this.rotateY = this.rotateZ = 0;
      },
    },
  
    computed: {
      boxStyle() {
        return {
          transform: `perspective(${this.perspective}px)rotateX(${this.rotateX}deg)rotateY(${this.rotateY}deg)rotateZ(${this.rotateZ}deg)`,
        };
      },
    },
  };
  
  Vue.createApp(app).mount("#app");
  
  ```

  



### 列表渲染 v-for

- task: todo list

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <script src="https://unpkg.com/vue@latest"></script>
      <link rel="stylesheet" href="style.css" />
    </head>
  
    <body>
      <div id="app">
        <h1>Todo List</h1>
        <input placeholder="enter the todo you want to add" v-model="curTodo" />
        <br />
        <button @click="addTodo">Add</button>
  
        <!-- todo list -->
        <!-- way1 -->
        <div>{{ todoArr }}</div>
        <!-- way2 -->
        <div>
          <li>{{todoArr[0]}}</li>
          <li>{{todoArr[1]}}</li>
          <li>{{todoArr[2]}}</li>
        </div>
        <!-- way3 -->
        <div v-for="(todo, idx) in todoArr">
          <li key="idx">
            {{todo}} <button @click="removeTodo(todo)">&times;</button>
          </li>
        </div>
      </div>
  
      <script src="./main.js"></script>
    </body>
  </html>
  
  ```

  main.js

  ```js
  // ["Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"]
  
  const app = {
    data() {
      return {
        todoArr: [
          "Vue",
          "React",
          "Nuxt",
          "NextJS",
          "Node",
          "NestJS",
          "React Native",
          "Electron",
          "Rust",
        ],
        curTodo: "",
      };
    },
  
    methods: {
      addTodo() {
        // 不要将空字符串添加到数组中
        if (!this.curTodo.trim().length) {
          alert("The input is empty");
          return;
        }
  
        this.todoArr.push(this.curTodo);
        this.curTodo = "";
      },
  
      removeTodo(removeTodo) {
        this.todoArr = this.todoArr.filter((todo) => todo !== removeTodo);
      },
    },
  };
  
  Vue.createApp(app).mount("#app");
  
  ```

  



### 条件渲染 v-if

- task

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <script src="https://unpkg.com/vue@latest"></script>
      <link rel="stylesheet" href="style.css" />
    </head>
  
    <body>
      <div id="app">
        <h1>Todo List</h1>
        <input placeholder="enter the todo you want to add" v-model="curTodo" />
        <hr />
        <button @click="addTodo">Add</button>
  
        <!-- todo list -->
        <div v-for="(todo, idx) in todoArr">
          <li key="idx">
            <div :class="todo.isComplete ? 'complete': ''">{{todo.item}}</div>
            <button @click="completeItem(todo.item)" v-if="!todo.isComplete">
              complete
            </button>
            <button @click="removeTodo(todo)">&times;</button>
          </li>
        </div>
      </div>
  
      <script src="./main.js"></script>
    </body>
  </html>
  
  ```

  main.js

  ```js
  const app = {
    data() {
      return {
        todoArr: [
          { item: "Vue", isComplete: false },
          { item: "React", isComplete: true },
          { item: "Nuxt", isComplete: false },
          { item: "NextJS", isComplete: false },
          { item: "Node", isComplete: false },
          { item: "NestJS", isComplete: false },
          { item: "React Native", isComplete: false },
          { item: "Electron", isComplete: false },
          { item: "Rust", isComplete: false },
        ],
        curTodo: "",
      };
    },
  
    methods: {
      addTodo() {
        if (!this.curTodo.trim().length) {
          alert("The input is empty");
          return;
        }
  
        this.todoArr.push({ item: this.curTodo, isComplete: false });
        this.curTodo = "";
      },
  
      removeTodo(removeTodo) {
        this.todoArr = this.todoArr.filter((todo) => todo !== removeTodo);
      },
  
      completeItem(item) {
        const index = this.todoArr.findIndex((todo) => todo.item === item);
        this.todoArr[index] = { ...this.todoArr[index], isComplete: true };
      },
    },
  };
  
  Vue.createApp(app).mount("#app");
  
  ```

  



### computed

- [computed](https://cn.vuejs.org/api/reactivity-core.html#computed)

  基于几个变量生成一个值





---

- task

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <script src="https://unpkg.com/vue@latest"></script>
      <link rel="stylesheet" href="style.css" />
    </head>
  
    <body>
      <div id="app">
        <label>
          Purple
          <input type="checkbox" v-model="isPurple" />
        </label>
  
        <select v-model="textColor">
          <option value="">White</option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
  
        <label>
          Circle Size
          <input type="number" v-model="size" />
        </label>
  
        <label>
          Circle Rotate
          <input type="number" v-model="angle" />
        </label>
  
        <div
          class="circle"
          :class="[circleClass, textColor]"
          :style="[circleSize, circleAngle]"
        >
          Hi!
        </div>
      </div>
  
      <script src="./main.js"></script>
    </body>
  </html>
  
  ```

  main.js

  ```js
  /*
    height: 0px,
    width: 0px,
    lineHeight: 0px,
    transform: `rotate(0deg)`,
  */
  
  const app = {
    data() {
      return {
        isPurple: false,
        textColor: "",
        size: 200,
        angle: 0,
      };
    },
  
    computed: {
      circleClass() {
        return {
          purple: this.isPurple,
        };
      },
  
      circleSize() {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`,
          lineHeight: `${this.size}px`,
        };
      },
  
      circleAngle() {
        return {
          transform: `rotate(${this.angle}deg)`,
        };
      },
    },
  };
  
  Vue.createApp(app).mount("#app");
  
  ```

  



## 第二阶段 nodejs

### vue模板

- 项目创建和运行

  ```bash
  # 创建
  pnpm create vue@latest .  # 当前目录作为vue项目  # circle-vue  # no
  pnpm i  # 安装依赖
  
  # 运行
  pnpm run dev
  
  ```

  ![](res/Snipaste_2024-08-09_13-19-15.png)
  
  



### 组件与props

- 组件的抽离

  父组件.vue：导入语句、computed属性声明子组件、标签方式使用子组件
  
- [props](https://cn.vuejs.org/guide/components/props.html#props)

  vue中数据只能由父组件传递给子组件(props)，不能由子组件反向影响父组件
  
  子组件能够去触发父组件的方法 



- 将App.vue拆分成多个组件

  ```bash
  touch src/components/TagglePurple.vue
  
  ```

  









### 组件拆分







### emit







### slot





### 组件抽象复用









### 获取api数据









### 生命周期







## 项目 HotMovice

### 项目结构







### 组件拆分









### 请求电影数据







### 动态组件KeepAlive



### 电影详情页





### 观看历史







## 第三阶段

### 组合式api







### emits|props与组合式api









### setup组合式api







### 自定义hook







## 项目 热点新闻

### 配置vantui



### 导航栏







### 标签



### 收藏页切换







### 新闻列表





### 运动列表 娱乐列表 金融列表





### 列表抽象



### 项目重构









### 新闻收藏





































































































































