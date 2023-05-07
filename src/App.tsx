import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Main from "./pages/Main";
import View from "./pages/View";
import Error from "./pages/Error";
import Layout from "./pages/Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<Main />}></Route>
          <Route path="view" element={<View />}></Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
