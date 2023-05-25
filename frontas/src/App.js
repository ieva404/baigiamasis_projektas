import "./App.css";
import { Homepage } from "./components/HomePage";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { FrontPage } from "./components/FrontPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
