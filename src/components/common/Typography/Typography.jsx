import React from "react";
import "./Typography.scss";
import classNames from "classnames";

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
};
//

const Typography = ({ variant, color, children, ...props }) => {
  //
  const Component = variant ? variantMapping[variant] : "p";

  return (
    <>
      <Component
        className={classNames({
          [`variant-${variant}`]: variant,
          [`color-${color}`]: color,
        })}
        {...props}
      >
        {children}
      </Component>
    </>
  );
};

export default Typography;
