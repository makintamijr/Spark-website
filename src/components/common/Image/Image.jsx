import React from "react";
import "./Image.scss";

const Image = ({ ...props }) => {
  return (
    <>
      <img {...props} />
    </>
  );
};

export default Image;
