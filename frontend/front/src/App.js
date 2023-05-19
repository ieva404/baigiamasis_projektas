import "./App.css";
import { Homepage } from "./components/HomePage";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
