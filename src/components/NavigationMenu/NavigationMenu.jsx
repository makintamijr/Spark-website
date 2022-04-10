import { useState } from "react";
import LoginBtn from "./../LoginBtn/LoginBtn";
import NavLinks from "./../NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import "./NavigationMenu.scss";
import logo from "../../img/sparklogo.png";
import MenuIcon from "@mui/icons-material/DragHandle";
import SideBarMenu from "./../SideBarMenu/SideBarMenu";

const NavigationMenu = () => {
  const [active, setActive] = useState("false");

  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-container">
          <Logo logo={logo} />

          <div className="nav-center">
            <NavLinks className="nav-links" />
          </div>

          <div className="nav-right">
            <LoginBtn className="login" />

            <MenuIcon onClick={() => setActive(false)} className="buger-menu" />
          </div>
        </div>
      </div>

      <SideBarMenu active={active} setActive={setActive} />
    </>
  );
};

export default NavigationMenu;
