import React, { useState } from "react";
import SignUpScreen from "../signup/SignUpScreen";
import "./LoginScreen.css";
import { auth } from "../../firebase";

import { useNavigate, Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  // const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  // log in
  const handlerSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user);

      // toast.success("successfully logged in");
      navigate("/home"); // redirect to HomeScreen
    } catch (error) {
      alert(error.message);

      // toast.error(error.message);
    }
  };

  return (
    <div className="login-screen">
      <div className="login-screen-bg">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="login-screen-logo"
        />
        <Link
          to="/SignUpScreen"
          // onClick={() => setSignIn(true)}
          className="login-btn"
        >
          Sign Up
        </Link>
        <div className="login-screen-gradient"></div>
        <div className="login-screen-body">
          <>
            <h1>Unlimited films,Tv Programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create membership.</h3>
            <div className="login-screen-input">
              <form onSubmit={handlerSubmit}>
                <div className="form-group ">
                  <input type="email" placeholder="Email Address" />
                  <input type="password" placeholder="Enter Password" />
                </div>
                <button
                  className="login-screen-get-started-btn"
                  // onClick={() => setSignIn(true)}
                >
                  Login
                </button>
              </form>
            </div>
          </>
          {/* {SignIn ? (
            <SignUpScreen />
          ) : (
           
          )} */}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
