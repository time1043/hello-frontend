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
