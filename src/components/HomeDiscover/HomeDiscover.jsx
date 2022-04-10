import React from "react";
import "./HomeDiscover.scss";
import HomeDiscoverRight from "./../HomeDiscoverRight/HomeDiscoverRight";
import HomeDiscoverLeft from "./../HomeDiscoverLeft/HomeDiscoverLeft";

const HomeDiscover = () => {
  return (
    <>
      <div className="homediscover-wrapper">
        <div className="homediscover-container">
          <HomeDiscoverLeft />

          <HomeDiscoverRight />
        </div>
      </div>
    </>
  );
};

export default HomeDiscover;
