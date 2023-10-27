import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [theme, setTheme] = useState("");
  function getThemeHandler(newTheme) {
    setTheme(newTheme);
  }
  return (
    <div className={`App ${theme}`}>
      <div className="wrapper">
        <Header theme={theme} getTheme={getThemeHandler} />
        <Main theme={theme} />
      </div>
    </div>
  );
}

export default App;
