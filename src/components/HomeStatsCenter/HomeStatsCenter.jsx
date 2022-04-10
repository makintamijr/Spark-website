import React from "react";
import Typography from "../common/Typography/Typography";
import "./HomeStatsCenter.scss";

const HomeStatsCenter = () => {
  return (
    <>
      <div className="stats-center">
        <Typography variant={"h1"}>10K</Typography>
        <Typography variant={"body1"}>Scattered All Over The City</Typography>
      </div>
    </>
  );
};

export default HomeStatsCenter;
