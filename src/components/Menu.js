import React from "react";

const Menu = () => {
  return (
    <div className="about" id="menu">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/thali.jpg" alt="Thali" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Annpurana Menu</h3>
            <h1>ANNPURNA DELICIOUS</h1>
            <p>
            Paneer Green Peas Korma, Tandoori Kadhai Paneer, Tomato Panner, Cheese Paneer Butter Masala, Aloo Paneer Kofta, 
            Lahori Malai Kofta, Anguri Bharava Aloo Pyaj, Paneer Lababdar, 
            Shahi Paneer, Paneer Butter Masala, Kadhayi Paneer, Paneer Tikka Masala, Paneer ka Salan, Paneer Lajawab, 
            Paneer Laziz, Nargis Kofta, Khoya Kaju, Deewani Handi, Palak Baby Corn, Palak Kofta, Matar Mushroom ,
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
