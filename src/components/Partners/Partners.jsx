import React from "react";
import "./Partners.scss";
import PatnersHead from "./../PartnersHead/PatnersHead";
import PartnersBrands from "./../PartnersBrands/PartnersBrands";

const Partners = () => {
  return (
    <>
      <div className="partners-wrapper">
        <div className="partners-container">
          <PatnersHead />

          <PartnersBrands />
        </div>
      </div>
    </>
  );
};

export default Partners;
