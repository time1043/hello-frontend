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
