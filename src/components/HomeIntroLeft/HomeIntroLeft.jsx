import React from "react";
import SearchInput from "../../components/common/SearchInput/SearchInput";
import Typography from "../../components/common/Typography/Typography";
import "./HomeIntroLeft.scss";

const HomeIntroLeft = () => {
  return (
    <>
      <div className="home-left">
        <Typography variant={"h1"}>
          Find The Nearest Charging Station For Your Car
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
      </div>
    </>
  );
};

export default HomeIntroLeft;
