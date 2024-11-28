# ui-component

## 背景

- 组件 (用轮子)

  图片上传展示: 

  进度条: [NProgress.js](https://ricostacruz.com/nprogress/), 

  日历日程: [tui.calendar](https://github.com/nhn/tui.calendar), 

  通知提醒: [toastify-js](https://apvarun.github.io/toastify-js/), 

  



### 进度条

- ui-component/nprogress-demo/vanilla/index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>nprogress-demo</title>
      <!-- import by cdn -->
      <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
      <link
        rel="stylesheet"
        href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
      />
      <link rel="stylesheet" href="style.css" />
    </head>
  
    <body>
      <div class="container">
        <h1>Get Advice</h1>
        <p></p>
        <button>Get Advice</button>
      </div>
  
      <script src="main.js"></script>
    </body>
  </html>
  
  ```

  ui-component/nprogress-demo/vanilla/main.js

  ```js
  const btnElement = document.querySelector("button");
  const pElement = document.querySelector("p");
  
  // 点击按钮后 请求事件(异步)
  btnElement.addEventListener("click", async () => {
    NProgress.start(); // 进度条
  
    await new Promise((resolve) => setTimeout(resolve, 2000)); // sleep
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    pElement.textContent = data.slip.advice;
  
    NProgress.done(); // 进度条
  });
  
  ```

  ui-component/nprogress-demo/vanilla/style.css

  ```css
  .container {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
    text-align: center;
  }
  
  button {
    display: block;
    margin: 0 auto;
  }
  
  ```

  



### 通知提醒



















































