// 选中元素
const inputEl = document.querySelector(".vanilla-input");
const pEl = document.querySelector(".vanilla-p");

// 监听输入事件
inputEl.addEventListener("input", (event) => {
  // console.log(event.target.value);
  pEl.textContent = event.target.value;
});
