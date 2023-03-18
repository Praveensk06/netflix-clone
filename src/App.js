import React from "react";
import "./components/home/style/index.css";
import HomeScreen from "../src/components/home/pages/HomeScreen";
import LoginScreen from "../src/components/login/LoginScreen";
import SignUpScreen from "../src/components/signup/SignUpScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // no user is logged in
  const user = null;
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Routes>
            {/* each route component specifies a path and the component */}
            <Route path="/" element={<LoginScreen />} />
            <Route path="/SignUpScreen" element={<SignUpScreen />} />
            <Route path="/home" element={<HomeScreen />}></Route>
          </Routes>
        ) : (
          // if user is logged in then only HomeScreen route is displayed
          <Route path="/home" element={<HomeScreen />}></Route>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
