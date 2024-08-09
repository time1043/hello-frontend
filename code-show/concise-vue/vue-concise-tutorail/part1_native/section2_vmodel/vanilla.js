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
