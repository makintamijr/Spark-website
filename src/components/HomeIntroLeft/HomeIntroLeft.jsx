import React from "react";
import SearchInput from "../../components/common/SearchInput/SearchInput";
import Typography from "../../components/common/Typography/Typography";
import "./HomeIntroLeft.scss";
import { motion } from "framer-motion";

const HomeIntroLeft = () => {
  return (
    <>
      <motion.div
        className="home-left"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "tween" }}
      >
        <Typography variant={"h1"}>
          Find The Nearest Charging Station For Your Carsssssssss uuukn
        </Typography>

        <div className="homeintro-body">
          <Typography variant={"body1"}>
            Spark is the first digital experience platform for e-mobility. We
            enable you to go futher, by providing reservation on available
            chargers, and access to facilities and services while charging.
          </Typography>
        </div>

        <div className="search">
          <SearchInput placeholder="EV Points, Etc." />
        </div>
      </motion.div>
    </>
  );
};

export default HomeIntroLeft;
