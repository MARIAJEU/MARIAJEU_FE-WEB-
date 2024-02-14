import "./App.css";
import React from "react";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PwRecoveryPage from "./pages/PwRecoveryPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/signin" element={<SignInPage></SignInPage>} />
        <Route path="/signup" element={<SignUpPage></SignUpPage>} />
        <Route path="/pwhelp" element={<PwRecoveryPage></PwRecoveryPage>} />
      </Routes>
    </div>
  );
}

export default App;
