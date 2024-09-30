const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  // BrowserWindow conf
  // https://www.electronjs.org/zh/docs/latest/api/browser-window
  // https://wizardforcel.gitbooks.io/electron-doc/content/api/browser-window.html
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });

  // win.loadURL("https://github.com");
  win.loadFile("./pages/index.html"); // ctrl shift i
});
