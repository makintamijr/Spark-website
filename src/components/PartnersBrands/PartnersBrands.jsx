import React from "react";
import { ReactComponent as Toyota } from "../../img/toyota.svg";
import { ReactComponent as Tesla } from "../../img/tesla.svg";
import { ReactComponent as Audi } from "../../img/audi.svg";
import { ReactComponent as Hyundai } from "../../img/hyundai-logo .svg";
import "./PartnersBrands.scss";

const PartnersBrands = () => {
  return (
    <>
      <div className="brands">
        <Toyota className="brand-icons" />
        <Tesla className="brand-icons" />
        <Audi className="brand-icons" />
        <Hyundai className="brand-icons" />
      </div>
    </>
  );
};

export default PartnersBrands;
