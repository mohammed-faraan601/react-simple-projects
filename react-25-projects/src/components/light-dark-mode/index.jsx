import React from "react";
import useLocalStorage from "./useLocalStorage";
import './styles.css';

function LigthDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleChangeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default LigthDarkMode;
