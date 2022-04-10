import React from "react";
import "./Button.scss";
import classNames from "classnames";

// const variantMapping = {
//   contained: "contained",
//   outlined: "outlined",
// };

const Button = ({
  variant,
  color,
  backgroundColor,
  border,
  borderRadius,
  onClick,
  children,
  ...props
}) => {
  //

  return (
    <>
      <button
        onClick={onClick}
        className={classNames({ [`variant-${variant}`]: variant })}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
