import React from "react";
import Button from "../common/Button/Button";
import "./LoginBtn.scss";

const LoginBtn = () => {
  return (
    <>
      <div className="login">
        <Button variant={"outlined"}>Login</Button>
      </div>
    </>
  );
};

export default LoginBtn;
