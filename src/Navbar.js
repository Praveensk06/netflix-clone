import React, { useEffect, useState } from "react";
import "./navbar.css";

// This component defines navigation bar for this website
const Navbar = () => {
  // The nav bar state value is default it will false
  const [show, handleShow] = useState(false);

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
      <img
        className="nav-avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
};

export default Navbar;
