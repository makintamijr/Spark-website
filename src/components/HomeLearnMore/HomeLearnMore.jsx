import React from "react";
import img1 from "../../img/hlm-img1.png";
import img2 from "../../img/hlm-img2.png";
import "./HomeLearMore.scss";
import HomeLearnLeft from "./../HomeLearnLeft/HomeLearnLeft";
import HomeLearnRight from "./../HomeLearnRight/HomeLearnRight";

const HomeLearnMore = () => {
  return (
    <>
      <div className="homelearn-wrapper">
        <div className="homelearn-container">
          <HomeLearnLeft img1={img1} img2={img2} />

          <HomeLearnRight />
        </div>
      </div>
    </>
  );
};

export default HomeLearnMore;
