import "./App.css";

import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { FrontPage } from "./components/FrontPage";
import React, { useContext, useState } from "react";
import { AuthenticationContext } from "./components/AuthenticationContext";
import NavBar from "../src/components/NavBar";
import { Homepage } from "../src/components/HomePage";
import Protected from "./components/Protected";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };


  

  return (
    <>
      <NavBar isLoading={isLoading} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route
          element={
            <Protected isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        >
          <Route path="/home" element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
