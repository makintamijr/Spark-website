import React from "react";
import "./FooterRight.scss";
import { ReactComponent as Facebook } from "../../img/facebook.svg";
import { ReactComponent as Twitter } from "../../img/twitter.svg";
import { ReactComponent as Instagram } from "../../img/instagram.svg";

const FooterRight = () => {
  return (
    <>
      <div className="footer-right">
        <div className="socials">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <div className="tnc">
          <span className="terms">Terms & Conditions</span>
          <span className="terms">Privacy Policy</span>
        </div>
      </div>
    </>
  );
};

export default FooterRight;
