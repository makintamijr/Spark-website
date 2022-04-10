import SideBarLinks from "./../SideBarLinks/SideBarLinks";
import React from "react";
import "./SideBarMenu.scss";

const SideBarMenu = ({ active, setActive }) => {
  return (
    <div className="sidebar-nav">
      <SideBarLinks active={active} setActive={setActive} />
    </div>
  );
};

export default SideBarMenu;
