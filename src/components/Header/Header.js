// src/components/Header/index.js
import React, { Component } from "react";
import "./Header.css";
import Settings from "../Settings/Settings";
// import Horizontal_logo from "../../image/Logo_Horizontal-No_Background_080719.png";
import Mobile_logo from "../../image/Logo-mobile.png";
import Desktop_logo from "../../image/desktop_logo.png";
import Arrow_forward from "../../image/arrow-forward.png";
import Toolbar from "./Toolbar";
import Mobile_menu_icon from "../../site_media/Images/mobile_menu_icon.png";
import Mobile_toolbar from "../Mobile_toolbar/Mobile_toolbar";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__mobile-child-select">
          <div className="child-select__item">
            <div
              className="child-select__avatar child-select__avatar--mobile-header"
              // style={{background-image: url('../../image/birva.png')}}
              style={{ backgroundColor: "#ffaacc" }}
              alt="Gemma"
            ></div>
          </div>
        </div>
        <div className="header__logo main">
          <a href="/">
            <img
              src={Desktop_logo}
              className="header__logo-desktop"
              alt="Unicorn Charity Club"
            />
            <img
              src={Mobile_logo}
              className="header__logo-mobile"
              alt="Unicorn Charity Club"
            />
          </a>
        </div>
        <div className="header__toolbar logged-in">
          <div className="header__child-select">
            <div className="child-select__item--main">
              <div className="child-select__item">
                <div
                  className="child-select__avatar"
                  /* style="background-image: url('/site_media/upload/children/photo/b5afe4579435f4ecf017e341606b0e2e.jpg');" */
                  style={{ backgroundColor: "#ffaacc" }}
                  alt="Gemma"
                ></div>
                <div className="child-select__info">
                  <div className="child-select__name">
                    Gemma<span className="dropdown-icon"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="child-select__dropdown-menu">
              <div className="child-select__header">
                <div className="header">
                  <div className="header__logo">
                    <a href="/">
                      <img
                        src={Desktop_logo}
                        className="header__logo-desktop"
                        alt="Unicorn Charity Club"
                      />
                      <img
                        src={Mobile_logo}
                        className="header__logo-mobile logo-popup"
                        alt="Unicorn Charity Club"
                      />
                    </a>
                    <div className="header-menu-mobile">
                      <img
                        className="return-button"
                        src={Arrow_forward}
                        alt="Forward Arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="child-select-title-mobile">
                Who wants to play and learn?
              </div>

              <Toolbar />
            </div>
          </div>
          <Settings />
        </div>
        <div className="header__mobile-toolbar">
          <a href="/Mobile_toolbar" onClick={<Mobile_toolbar />}>
            <img src={Mobile_menu_icon} alt="Mobile Menu Icon" />
          </a>
        </div>
        {/* <div className="mobile-toolbar-menu" style={{ display: "block" }}>
          {/*<div className="header__logo-wrapper">
            <div className="header__logo">
              <a href="/">
                <img
                  src={Desktop_logo}
                  className="header__logo-desktop"
                  alt="Unicorn CHarity Club"
                />
                <img
                  src={Mobile_logo}
                  className="header__logo-mobile logo-popup"
                  alt="Unicorn Charity Club"
                />
              </a>
              <div className="header-menu-mobile">
                <img
                  src={Arrow_forward}
                  className="return-button"
                  alt="Forward Arrow"
                />
              </div>
            </div>
          </div>
        </div> 

          <div className="mobile-toolbar-menu__content">
            <div className="mobile-toolbar-menu__item">
              <a href="/">Home</a>
            </div>
            <div className="mobile-toolbar-menu__item">
              <a href="/">My Account</a>
            </div>
            <div className="mobile-toolbar-menu__item">
              <a href="/">Child Settings</a>
            </div>
            <div className="mobile-toolbar-menu__item">
              <a href="/" className="logout-link">
                About US
              </a>
            </div>
            <div className="mobile-toolbar-menu__item">
              <a href="/" className="logput-link">
                Contact
              </a>
            </div>
            <div className="mobile-toolbar-menu__item">
              <a href="/" className="logout-link">
                Logout
              </a>
            </div>
          </div>
        </div>
       */}
        <Mobile_toolbar />
      </header>
    );
  }
}
export default Header;
