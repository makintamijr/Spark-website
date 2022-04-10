import React from "react";
import "./FooterLeft.scss";
import Link from "../common/Link/Link";

const FooterLeft = () => {
  return (
    <>
      <div className="footer-left">
        <div className="links-1">
          <Link href="#">Email Marketing</Link>
          <Link href="#">Partners</Link>
          <Link href="#">Branding</Link>
          <Link href="#">Offline</Link>
          <Link href="#">Our Story</Link>
          <Link href="#">Benefits</Link>
          <Link href="#">Team</Link>
          <Link href="#">Careers</Link>
        </div>
        <Link href="#">FAQ</Link>

        <span className="copyright">
          &copy; 2022. Spark.io.All rights reserved
        </span>
      </div>
    </>
  );
};

export default FooterLeft;
