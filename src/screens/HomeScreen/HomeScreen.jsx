import React from "react";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import HomeStats from "../../components/HomeStats/HomeStats";
import HomeLearnMore from "../../components/HomeLearnMore/HomeLearnMore";
import HomeDiscover from "../../components/HomeDiscover/HomeDiscover";
import Partners from "../../components/Partners/Partners";
import Offers from "../../components/Offer/Offers";
import { motion } from "framer-motion";
import RouteTransitionIn from "../../RouteTransitionIn";

const HomeScreen = () => {
  return (
    <>
      <motion.div
        variants={RouteTransitionIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <HomeIntro />

        <HomeStats />

        <HomeLearnMore />

        <HomeDiscover />

        <Partners />

        <Offers />
      </motion.div>
    </>
  );
};

export default HomeScreen;
