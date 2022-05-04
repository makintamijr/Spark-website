import HomeIntroRight from "../HomeIntroRight/HomeIntroRight";
import HomeIntroLeft from "../HomeIntroLeft/HomeIntroLeft";
import React from "react";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import "./HomeIntro.scss";

const HomeIntro = () => {
  return (
    <>
      <div className="homeintro-wrapper">
        <div className="background-container">
          <div className="homeintro-container">
            <HomeIntroLeft />

            <HomeIntroRight img1={img1} img2={img2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIntro;
