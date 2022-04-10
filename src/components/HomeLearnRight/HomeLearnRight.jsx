import React from "react";
import Button from "../common/Button/Button";
import Typography from "../common/Typography/Typography";
import "./HomeLearnRight.scss";

const HomeLearnRight = () => {
  return (
    <div className="homelearn-right">
      <Typography variant={"h1"}>Nature Freindly Solutions</Typography>
      <div className="homelearn-body">
        <Typography variant={"body1"}>
          Reducing carbon emissions, polutions, and tackling the problems of
          global warming in the environment. The positive impact of using
          electric vechiles technology.
        </Typography>
      </div>
      <div className="learnmore-btn">
        <Button variant={"outlined"}>Learn More</Button>
      </div>
    </div>
  );
};

export default HomeLearnRight;
