import React from "react";
import "./HomeLearnLeft.scss";
import Image from "../common/Image/Image";

const HomeLearnLeft = ({ img1, img2 }) => {
  return (
    <>
      <div className="homelearn-left">
        <Image src={img1} />
        <Image src={img2} className="img2" />
      </div>
    </>
  );
};

export default HomeLearnLeft;
