import React, { useState } from "react";
import "./signUpScreen.css";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // register
  const register = async (e) => {
    e.preventDefault();

    // create a new user with firebase authentication
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      // user successfully created ,user redirected to login
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="sign-in-screen">
      <form onSubmit={register}>
        <h1>Sign Up</h1>

        <input
          value={email}
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={SignUpScreen}>
          Sign Up
        </button>
        <h4>
          <span className="sign-in-screen-grey">New to Netflix?</span>
          <Link to="/" className="sign-in-screen-link">
            Login
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
