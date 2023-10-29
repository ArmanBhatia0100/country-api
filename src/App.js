import { useState } from "react";
import { Routes, Route } from "react-router";
import FlagDetailPage from "./components/FlagDetailPage";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";

function App() {
  return (
    <div className={`App`}>
      <div className="wrapper">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/country/:alpha2Code" element={<FlagDetailPage />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
