import React from "react";
import Button from "../common/Button/Button";

const LearnMoreBtn = ({ onClick }) => {
  return (
    <>
      <div>
        <Button variant={"outlined"} onClick={onClick}>
          Learn More
        </Button>
      </div>
    </>
  );
};

export default LearnMoreBtn;
