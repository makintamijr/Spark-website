import React from "react";
import Button from "../common/Button/Button";
import Typography from "../common/Typography/Typography";
import { motion } from "framer-motion";
import "./HomeDiscoverLeft.scss";

const HomeDiscoverLeft = () => {
  return (
    <>
      <div className="discover-left">
        <Typography variant={"h1"}>
          Discover Charging Stations Nearby
        </Typography>

        <div className="discover-body">
          <Typography variant={"body1"}>
            Spark is the only platform that offers unique booking features for
            EV drivers. Use our mobile app to book charging stations at the most
            convenient time and location.
          </Typography>
        </div>

        <div className="discover-btn">
          <Button variant={"outlined"}>Discover More</Button>
        </div>
      </div>
    </>
  );
};

export default HomeDiscoverLeft;
