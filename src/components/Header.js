import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner" id="#home">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            
            <h1>Annpurna Caterers</h1>
            <p>
            We are well equipped and committed to offer personalized services to cater 
            to your modern theme party requirements as well as traditional functions.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                KNOW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
