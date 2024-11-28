// react实现
// const [textInput, setTextInput] = React.useState('');
// <input onChange={(event) => setTextInput(event.target.value)} />
// <p>{textInput}</p>

// react重写html
function MyApp() {
  const [textInput, setTextInput] = React.useState("");

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
const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);
// 以标签形式输入函数
root.render(<MyApp />);
