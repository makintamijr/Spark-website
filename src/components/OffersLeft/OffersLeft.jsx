import React from "react";
import Typography from "../common/Typography/Typography";
import OfferLeftBody from "./../OfferLeftBody/OfferLeftBody";
import LearnMoreBtn from "./../LearnMoreBtn/LearnMoreBtn";
import "./OffersLeft.scss";

const OffersLeft = () => {
  return (
    <>
      <div className="o-left">
        <Typography variant={"h1"}>What Do We Offer You</Typography>

        <OfferLeftBody />

        <div className="o-btn">
          <LearnMoreBtn />
        </div>
      </div>
    </>
  );
};

export default OffersLeft;
