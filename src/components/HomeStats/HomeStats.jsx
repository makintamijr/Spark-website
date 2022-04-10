import React from "react";
import "./HomeStats.scss";
import HomeStatsRight from "./../HomeStatsRight/HomeStatsRight";
import HomeStatsCenter from "./../HomeStatsCenter/HomeStatsCenter";
import HomeStatsLeft from "./../HomeStatsLeft/HomeStatsLeft";

const HomeStats = () => {
  return (
    <>
      <div className="homestats-wrapper">
        <div className="homestats-container">
          <HomeStatsLeft />

          <HomeStatsCenter />

          <HomeStatsRight />
        </div>
      </div>
    </>
  );
};

export default HomeStats;
