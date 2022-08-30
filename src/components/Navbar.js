import React from "react";
// import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HashLink as Link} from "react-router-hash-link";


const Navbar = () => {
  // const [fix, setFix] = useState(false)

  // function setFixed(){
  //   if(window.scrollY >= 392){
  //     setFix = true
  //   }
  //   else{
  //     setFix = false
  //   }

  //   window.addEventListener("scroll",setFixed)

  //}
  return (
    <Router>
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <br></br><br></br><br></br>
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <Link smooth to ="#home">Home</Link>
          </li>
          <li>
          <Link smooth to ="#about">About</Link>
          </li>
          <li>
            <Link smooth to ="#menu">Menu</Link>
          </li>
          <li>
          <Link smooth to ="#services">Services</Link>
          </li>
          <li>
          <Link smooth to ="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    </Router>
  );
};

export default Navbar;
