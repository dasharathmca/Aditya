import React from "react";
import ServiceCard1 from '../components/services/ServiceCard1'
import ServiceCard2 from '../components/services/ServiceCard2'
import ServiceCard3 from '../components/services/ServiceCard3'
import ServiceCard4 from '../components/services/ServiceCard4'
import ServiceCard5 from '../components/services/ServiceCard5'
import ServiceCard6 from '../components/services/ServiceCard6'

const Prices = () => {
  return (
    <div className="prices" id="services">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ServiceCard1></ServiceCard1>
          </div>

          <div className="col-4">
            <ServiceCard2></ServiceCard2>
          </div>

          <div className="col-4">
            <ServiceCard3></ServiceCard3>
          </div>

          <div className="col-4">
            <ServiceCard4></ServiceCard4>
          </div>

          <div className="col-4">
            <ServiceCard5></ServiceCard5>
          </div>

          <div className="col-4">
            <ServiceCard6></ServiceCard6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
