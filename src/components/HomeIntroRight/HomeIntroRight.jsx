import React from "react";
import Image from "../../components/common/Image/Image";
import "./HomeIntroRight.scss";

const HomeIntroRight = ({ img1, img2 }) => {
  return (
    <>
      <div className="home-right">
        <Image src={img1} className="img1" />
        <Image src={img2} className="img2" />
      </div>
    </>
  );
};

export default HomeIntroRight;
