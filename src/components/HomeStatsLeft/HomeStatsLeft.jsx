import React from "react";
import Typography from "../common/Typography/Typography";
import "./HomeStatsLeft.scss";

const HomeStatsLeft = () => {
  return (
    <>
      <div className="stats-left">
        <Typography variant={"h1"}>45K</Typography>
        <Typography variant={"body1"}>
          Trusted EV Charger by Many Consumers
        </Typography>
      </div>
    </>
  );
};

export default HomeStatsLeft;
