import React from "react";
import SideBarCloseIcon from "./../SideBarCloseIcon/SideBarCloseIcon";
import Link from "../common/Link/Link";
import LoginBtn from "../LoginBtn/LoginBtn";
import { selectSparks } from "../../features/spark/SparkLinksSlice";
import { useSelector } from "react-redux";

const SideBarLinks = ({ active, setActive }) => {
  const sparks = useSelector(selectSparks);
  return (
    <ul className={active ? "sidebar-list" : "active"}>
      <SideBarCloseIcon setActive={setActive} />

      {sparks &&
        sparks.map((spark, index) => (
          <li key={index}>
            <Link href="#">{spark}</Link>
          </li>
        ))}
      <LoginBtn className="sidebar-btn" />
    </ul>
  );
};

export default SideBarLinks;
