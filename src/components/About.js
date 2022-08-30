import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO ANNPURNA CATERERS</h1>
            <p>
            Annpurna Caterers offers catering for all kinds of events like 
            weddings, theme parties, corporate events, garba events, product 
            launch events, get-togethers, community functions, conferences, 
            exhibitions, farewells, etc. We are committed to make your occasions 
            memorable, unique and successful. We have a team of experts who 
            take care of the event so that you can relax and enjoy your occasion 
            without any hassles.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
