import React from "react";
import { ReactComponent as CheckBox } from "../../img/check-box.svg";
import Typography from "../common/Typography/Typography";
import "./OffersLeftBody.scss";

const OfferLeftBody = () => {
  return (
    <>
      <div className="o-body">
        <div className="ob-1 ob">
          <div className="icon-box">
            <CheckBox className="checkbox-icon" />
          </div>
          <Typography variant={"body1"}>
            Provides a smart EV charging locator solution to unlock potential of
            low-carbon mobility
          </Typography>
        </div>

        <div className="ob-2 ob">
          <div className="icon-box">
            <CheckBox className="checkbox-icon" />
          </div>
          <Typography variant={"body1"}>
            With more and more electric vechiles, EV charging software is a must
            have for businesses looking to provide a seamless charging
            experience to their customers and visitors
          </Typography>
        </div>

        <div className="ob-3 ob">
          <div className="icon-box">
            <CheckBox className="checkbox-icon" />
          </div>
          <Typography variant={"body1"}>
            Our EV charging platform offers tailor made solutions to meet your
            needs. Learn more about Spark's offerings today!
          </Typography>
        </div>
      </div>
    </>
  );
};

export default OfferLeftBody;
