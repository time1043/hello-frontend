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
