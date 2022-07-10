import { React } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNav.scss";
import logo_home from "../../assets/img/logo/home.png";
import logo_land from "../../assets/img/logo/location-pin.png";
import logo_rent from "../../assets/img/logo/clock.png";

function HeaderNav() {
  return (
    <ul className="row-page">
      <li>
        <label htmlFor="nav-mobile-input">
          <NavLink to="thue-nha-dat">
            <img src={logo_home} height="25px" alt="logo_home" />
            <p>Thuê nhà đất</p>
          </NavLink>
        </label>
      </li>
      <li>
        <label htmlFor="nav-mobile-input">
          <NavLink to="mua-nha-dat">
            <img src={logo_land} height="25px" alt="logo_home" />
            <p>Mua nhà đất</p>
          </NavLink>
        </label>
      </li>
      <li>
        <label htmlFor="nav-mobile-input">
          <NavLink to="thue-phong-tro">
            <img src={logo_rent} height="25px" alt="logo_home" />
            <p>Thuê phòng trọ</p>
          </NavLink>
        </label>
      </li>
    </ul>
  );
}

export default HeaderNav;
