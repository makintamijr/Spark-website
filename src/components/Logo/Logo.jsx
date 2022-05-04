import React from "react";
import Link from "../common/Link/Link";
import Image from "../common/Image/Image";
import "./Logo.scss";

const Logo = ({ logo }) => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="logo" className="logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
