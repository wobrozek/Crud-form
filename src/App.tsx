import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import View from "./pages/view";
import Error from "./pages/error";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<Main />}></Route>
          <Route path="view" element={<View />}></Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
