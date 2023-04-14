import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
