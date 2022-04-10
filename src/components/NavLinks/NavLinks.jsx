import React from "react";
import Link from "../common/Link/Link";
import "./NavLinks.scss";
import { selectSparks } from "../../features/spark/SparkLinksSlice";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const sparks = useSelector(selectSparks);
  return (
    <>
      <div className="nav-links">
        <ul>
          {sparks &&
            sparks.map((spark, index) => (
              <li key={index}>
                <Link href="#">{spark}</Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
