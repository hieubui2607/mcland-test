import React from "react";
// import PropTypes from "prop-types";
import Logo from "../../assets/img/logo/MCLANDLOGO.png";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import HeaderRight from "../../components/HeaderRight/HeaderRight";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="container-fluid header">
        <div className="header-row">
          <div className="header-bars-btn">
            <label htmlFor="nav-mobile-input">
              <i className="fa-solid fa-bars"></i>
            </label>
          </div>
          <input
            className="nav_overlay"
            hidden
            type="checkbox"
            id="nav-mobile-input"
          />
          <div className="header-logo">
            <a href="/">
              <img alt="logomcland" src={Logo} height="85px" />
            </a>
          </div>
          <div className="header-page">
            <HeaderNav />
          </div>
          <label
            htmlFor="nav-mobile-input"
            className="header-nav_overlay"
          ></label>
          <div className="header-page_mobile">
            <label htmlFor="nav-mobile-input" className="page-mobile_page">
              <i className="fa-solid fa-xmark"></i>
            </label>
            <HeaderNav />
          </div>
          <div className="header-right">
            <div className="row-right">
              <HeaderRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Header.propTypes = {
//   // title: PropTypes.object.isRequired,
//   // action: PropTypes.object,
// };

// Header.defaultProps = {
//   // action: null,
// };

export default Header;
