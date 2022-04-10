import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import logo from "../../img/sparklogo.png";
import FooterLeft from "./../FooterLeft/FooterLeft";
import FooterRight from "./../FooterRight/FooterRight";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-contents">
            <div className="footer-logo">
              <Logo logo={logo} />
            </div>
            <div className="footer-lns">
              <FooterLeft />

              <FooterRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
