import React, { useEffect } from "react";
import "./components/home/style/index.css";
import HomeScreen from "../src/components/home/pages/HomeScreen";
import LoginScreen from "../src/components/login/LoginScreen";
import SignUpScreen from "../src/components/signup/SignUpScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

const App = () => {
  const user = null;

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/SignUpScreen" element={<SignUpScreen />} />
            <Route path="/home" element={<HomeScreen />}></Route>
          </Routes>
        ) : (
          <Route path="/home" element={<HomeScreen />}></Route>
        )}
        {/* 
        <Routes>
          <Route path="/home" element={<HomeScreen />}></Route>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
