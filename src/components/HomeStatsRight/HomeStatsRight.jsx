import React from "react";
import Typography from "../common/Typography/Typography";
import "./HomeStatsRight.scss";

const HomeStatsRight = () => {
  return (
    <>
      <div className="stats-right">
        <Typography variant={"h1"}>98%</Typography>
        <Typography variant={"body1"}>
          All Users of Our Service Application
        </Typography>
      </div>
    </>
  );
};

export default HomeStatsRight;
