function AppContent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // 表单校验
  // 动态修改样式 input, input-error
  // const [usernameClass, setUsernameClass] = React.useState("input");
  // const [passwordClass, setPasswordClass] = React.useState("input");

  // React.derivedState (Vue.computed)  // 动态计算
  const usernameClass = username.length <= 4 ? "input-error" : "input";
  const passwordClass = password.length <= 4 ? "input-error" : "input";

  function handleSubmit(e) {
    e.preventDefault();

    // 若username<=4||password<=4 则输入框标红
    // if (username.length <= 4) {
    //   setUsernameClass("input-error");
    //   return;
    // }
    // if (password.length <= 4) {
    //   setPasswordClass("input-error");
    //   return;
    // }
    if (usernameClass === "input-error" || passwordClass === "input-error") {
      alert("Please enter valid username and password");
      return;
    }

    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }
    console.log("Username:", username);
    console.log("Password:", password);

    setUsername("");
    setPassword("");
  }

  return (
    <main>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={usernameClass}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className={passwordClass}
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
