import React from "react";
import "./Offers.scss";
import OffersRight from "./../OffersRight/OffersRight";
import OffersLeft from "./../OffersLeft/OffersLeft";

const Offers = () => {
  return (
    <>
      <div className="offers-wrapper">
        <div className="offers-container">
          <OffersLeft />

          <OffersRight />
        </div>
      </div>
    </>
  );
};

export default Offers;
