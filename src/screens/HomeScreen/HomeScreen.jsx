import React from "react";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import HomeStats from "../../components/HomeStats/HomeStats";
import HomeLearnMore from "../../components/HomeLearnMore/HomeLearnMore";
import HomeDiscover from "../../components/HomeDiscover/HomeDiscover";
import Partners from "../../components/Partners/Partners";
import Offers from "../../components/Offer/Offers";

const HomeScreen = () => {
  return (
    <>
      <HomeIntro />

      <HomeStats />

      <HomeLearnMore />

      <HomeDiscover />

      <Partners />

      <Offers />
    </>
  );
};

export default HomeScreen;
