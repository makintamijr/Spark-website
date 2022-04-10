import { useState } from "react";
import "./BugerMenu.scss";

const BugerMenu = () => {
  const [status, setStatus] = useState("close");

  return (
    <>
      <div
        className="menu-wrapper"
        role={"button"}
        onClick={() => setStatus(status === "open" ? "close" : "open")}
      >
        <div className="menu-container">
          <i className={status}></i>
          <i className={status}></i>
          <i className={status}></i>
        </div>
      </div>
    </>
  );
};

export default BugerMenu;
