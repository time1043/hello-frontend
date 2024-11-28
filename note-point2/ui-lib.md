# ui-lib

- Reference

  [note github](https://gitee.com/alex_john/ui-lib/tree/main/material-ui), 

  

## 背景

- UI-Lib

  [mui](https://mui.com/), [materialui](https://mui.com/material-ui/), 
  
  [shadcn](https://ui.shadcn.com/), [shadcn-vue](https://www.shadcn-vue.com/), 
  
  [daisyui](https://daisyui.com/docs/themes/), 





## material

### 新建react项目

- 新建react项目

  ```bash
  npm create vite
  # materialui-demo
  # React
  # JavaScript
  
  
  # 精简项目
  cd materialui-demo
  rm -rf src/App.css src/index.css README.md  # src/App.jsx 精简
  mkdir src/components
  touch src/components/Chart.jsx src/components/Dashboard.jsx src/components/Deposits.jsx src/components/listItems.jsx src/components/Orders.jsx src/components/Title.jsx
  
  # 安装依赖
  # https://mui.com/material-ui/getting-started/installation/
  npm install @mui/material @emotion/react @emotion/styled
  npm install @fontsource/roboto  # 字体库
  npm install @mui/icons-material  # 内置图标库
  npm install @mui/x-charts
  
  
  # 模板
  # https://mui.com/material-ui/getting-started/templates/
  
  ```

  src/App.jsx

  ```jsx
  import Dashboard from "./components/Dashboard";
  
  function App() {
    return (
      <>
        <Dashboard />
      </>
    );
  }
  
  export default App;
  
  ```
  
  



### 明暗模式 dark

- [dark](https://mui.com/material-ui/customization/dark-mode/)

  src/App.jsx

  ```jsx
  import CssBaseline from "@mui/material/CssBaseline";
  import { ThemeProvider, createTheme } from "@mui/material/styles";
  import { useState } from "react";
  import Dashboard from "./components/Dashboard";
  
  function App() {
    const [themeMode, setThemeMode] = useState("light");
  
    const theme = createTheme({
      palette: {
        mode: themeMode,
      },
    });
  
    function toggleTheme() {
      setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard toggleTheme={toggleTheme} />
      </ThemeProvider>
    );
  }
  
  export default App;
  
  ```

  src/components/Dashboard.jsx

  ```jsx
  
            <IconButton color="inherit" onClick={toggleTheme}>
              {theme.palette.mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
  
  ```

  



## shadcn

### 新建vue项目

- 新建vue项目

  ```bash
  # https://www.shadcn-vue.com/docs/installation/vite.html
  #npm create vite@latest my-vue-app -- --template vue-ts  # npm 7+
  pnpm create vite
  # shadcn-vue
  # Vue
  # TypeScript
  
  
  # 精简项目
  cd shadcn-vue
  rm -rf README.md src/components/HelloWorld.vue src/style.css  # src/App.vue 精简
  touch src/components/AppForm.vue
  
  
  # 安装依赖
  pnpm add -D tailwindcss autoprefixer
  npx tailwindcss init -p
  
  # 配置文件
  
  # 初始化项目
  npx shadcn-vue@latest init
  # TypeScript? yes
  # framework? Vite
  # style? Default
  # color? Slate
  # tsconfig.json? ./tsconfig.json
  # global CSS file? src/assets/index.css
  # CSS variables? no 
  
  ```

  shadcn-vue/tsconfig.app.json

  ```
  {
    "compilerOptions": {
      // ...
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
      // ...
    }
  }
  ```

  shadcn-vue/vite.config.ts

  ```typescript
  import vue from "@vitejs/plugin-vue";
  import autoprefixer from "autoprefixer";
  import tailwind from "tailwindcss";
  import { fileURLToPath } from "url"; // pnpm add -D @types/node
  import { defineConfig } from "vite";
  
  // https://vite.dev/config/
  export default defineConfig({
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
  
  ```

- 使用

  shadcn-vue/src/App.vue
  
  ```vue
  <script setup lang="ts">
  import { Button } from "@/components/ui/button";  // npx shadcn-vue@latest add button
  </script>
  
  <template>
    <div>
      <Button>Click me</Button>
    </div>
  </template>
  
  ```
  
  



### 登陆表单

- [form](https://www.shadcn-vue.com/docs/components/form.html)

  ```
  // pnpm add vee-validate
  // npx shadcn-vue@latest add form
  ```

  







































