# plktime

## 背景介绍

- Reference

  [course](https://www.bilibili.com/video/BV1kT4y187e9/), 

  



### 需求分析

- 需求

  桌面倒计时 桌面单词 -> 日常任务记录 -> 日历

  剪切板 -> 代码片段 持久化 (多端互联)

  桌面摄像头 
  
  桌面壁纸 
  
  文件检索everything 文件临时工作区 文件快捷方式
  
  工具集成 浏览器搜索 JSON 视频倍数 utool
  
   



### 项目规划

### 技术选型 ✔

### 业务流程

### 功能梳理

### 架构设计 ✔





## 页面设计 ✔

### 页面 X

### 页面 X





## 库表设计 ✔

### 汇总

### model X

### model X





## 接口数据 ✔

### Interface X

### Interface X





## 后端初始化

### 新建项目

### 依赖文件

### 配置文件

### 中间件配置





## 前端初始化

### 新建项目

- [新建项目](https://cn.electron-vite.org/guide/#%E6%90%AD%E5%BB%BA%E7%AC%AC%E4%B8%80%E4%B8%AA-electron-vite-%E9%A1%B9%E7%9B%AE)

  ```bash
  # 脚手架 electron-vite 
  npm i electron-vite -D
  npm create @quick-start/electron@latest  # @quick-start/create-electron@1.0.24  
  
  # ✔ Project name: … plktime1043
  # ✔ Select a framework: › vue
  # ✔ Add TypeScript? … Yes
  # ✔ Add Electron updater plugin? … Yes
  # ✔ Enable Electron download mirror proxy? … Yes
  
  cd plktime1043 && npm install
  npm run dev
  
  ```

  项目结构

  ```bash
  plktime1043$ tree -L 3
  .
  ├── build
  │   ├── entitlements.mac.plist
  │   ├── icon.icns
  │   ├── icon.ico
  │   └── icon.png
  ├── dev-app-update.yml
  ├── electron-builder.yml
  ├── electron.vite.config.ts
  ├── node_modules
  ├── out
  │   ├── main
  │   │   └── index.js
  │   └── preload
  │       └── index.js
  ├── package.json
  ├── package-lock.json
  ├── README.md
  ├── resources
  │   └── icon.png
  │
  ├── src						# 源代码
  │   ├── main					# 主进程 nodejs环境
  │   │   └── index.ts			# 
  │   ├── preload					# 桥梁
  │   │   ├── index.d.ts			# 
  │   │   └── index.ts			# 
  │   └── renderer				# 渲染进程 浏览器环境 页面
  │       ├── index.html			# 
  │       └── src					# 
  ├── tsconfig.json
  ├── tsconfig.node.json
  └── tsconfig.web.json
  
  ```

  



### 依赖配置

- [路由安装](https://router.vuejs.org/zh/installation.html)

  ```bash
  npm install vue-router@4
  
  ```

  



### 精简项目

- 项目规划

  ```bash
  mkdir src/renderer/src/route && touch src/renderer/src/route/index.ts
  mkdir src/renderer/src/views && touch src/renderer/src/views/Home.vue
  
  mkdir src/renderer/src/composables && touch src/renderer/src/composables/FlipNumber.ts src/renderer/src/composables/hd.ts
  mkdir src/renderer/src/assets/css
  
  ```

- 页面清空

  src/renderer/src/main.ts

  ```typescript
  import './assets/main.css'
  
  import { createApp } from 'vue'
  import App from './App.vue'
  
  createApp(App).mount('#app')
  
  ```

  src/renderer/src/App.vue

  ```vue
  <script setup lang="ts"></script>
  
  <template>
    <main>abc</main>
  </template>
  
  ```

  src/renderer/src/assets/main.css

  ```css
  body {
    /* display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url('./wavy-lines.svg');
    background-size: cover;
    user-select: none; */
  }
  
  ```

- 窗口置顶 窗口大小 初始位置 ([主进程API](https://electron.nodejs.cn/docs/latest/api/browser-window)) 

  src/main/index.ts

  ```typescript
  function createWindow(): void {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: 500, // 窗口大小
      height: 300,
      x: 0, // 窗口位置
      y: 0,
      alwaysOnTop: true, // 窗口置顶
      show: false,
      autoHideMenuBar: true,
      ...(process.platform === 'linux' ? { icon } : {}),
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false
      }
    })
  ```

  



### 路由配置

- Vue Router (两个页面)

  ```
  
  ```

  



## 后端接口 XXX

### 逻辑梳理

### 代码生成 MyBatisX



### 数据库访问层 (mapper) ✔

### 业务逻辑层 (service) ✔

### 接口访问层 (controller) ✔



### 数据模型 (model)

### 自定义异常

### 测试接口









## 前端页面 翻转时钟

- 功能拆分

  转半个

  



---

- 新建项目

  ```bash
  cd /opt/code/frontend-code/hello-frontend/code-show
  mkdir flipclock && cd flipclock/ && code .
  
  # vscode-plugin: live sass compiler, live sever
  touch index.html hd.scss _vars.scss _mixins.scss
  
  ```

  



- css模块化

  hd.scss

  ```scss
  @import "vars";
  @import "mixins";
  
  // #################################################
  // 自定义变量值
  // #################################################
  
  // // css variables 自定义属性 (动态更改样式)
  // // :root {
  // //   --width: 100px;
  // //   --height: 160px;
  // // }
  
  // // scss variables 变量 (编译成css)
  // $width: 100px;
  // $height: 160px;
  
  // #################################################
  // 混入功能mixin 自定义混合值变量
  // #################################################
  
  // // 尺寸
  // @mixin size($width, $height) {
  //   width: $width;
  //   height: $height;
  // }
  
  // // flex布局 主轴和交叉轴
  // @mixin flex($justify: center, $align: center) {
  //   display: flex;
  //   justify-content: $justify;
  //   align-items: $align;
  // }
  
  // #################################################
  // 基础样式
  // #################################################
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #dcdcdc;
    // width: 100vw;
    // height: 100vh;
    @include size(100vw, 100vh);
    // display: flex;
    // justify-content: center;
    // align-items: center;
    @include flex();
  }
  
  main {
    background-color: red;
    // //width: var(--width);
    // //height: var(--height);
    // width: $width;
    // height: $height;
    @include size($width, $height);
  }
  
  ```

  _vars.scss (定义变量值)

  ```scss
  $width: 100px;
  $height: 160px;
  
  ```

  _mixins.scss (定义混合变量值)

  ```scss
  // 尺寸
  @mixin size($width, $height) {
    width: $width;
    height: $height;
  }
  
  // flex布局 主轴和交叉轴
  @mixin flex($justify: center, $align: center) {
    display: flex;
    justify-content: $justify;
    align-items: $align;
  }
  
  ```

  



## 前端页面 XXX

### 布局

### 页面 X

### 页面 X

### 组件 X

### 组件 X

### 路由配置

### 类型约束





## 前后端联调 XXX

### 前端请求

### 页面 X

### 页面 X





## 项目部署





























































































