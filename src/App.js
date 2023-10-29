import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router";

function App() {
  const [theme, setTheme] = useState("");

  function getThemeHandler(newTheme) {
    setTheme(newTheme);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={`App ${theme}`}>
            <div className="wrapper">
              <Header getTheme={getThemeHandler} />
              <Main />
            </div>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
