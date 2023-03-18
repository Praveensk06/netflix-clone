import React, { useEffect, useState } from "react";
import "../style/navbar.css";

import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

import { useNavigate } from "react-router-dom";

// This component defines navigation bar for this website
const Navbar = () => {
  // The nav bar state value is default it will false
  const [show, handleShow] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // side effect for event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // when user scroll down more than 100px
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      //component in unmounted - performance issue help performance and memory management.
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav-black" : ""}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <button onClick={logout} className="log-out-btn">
        Logout
      </button>
      <div>
        <img
          className="nav-avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
