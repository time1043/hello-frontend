function AppContent() {
  // 实时更新变量的值
  // Way1. DOM操作 - 费时费力
  // Way2. useState Hook
  const [text, setText] = React.useState("hw");

  return (
    <main>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </main>
  );
}

// doucument ReactDOM
const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);
// render
root.render(<AppContent />);
