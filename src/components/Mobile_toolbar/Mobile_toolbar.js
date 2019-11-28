import React, { Component } from "react";
import "./Mobile_toolbar.css";
import Mobile_logo from "../../image/Logo-mobile.png";
import Desktop_logo from "../../image/desktop_logo.png";
import Arrow_forward from "../../image/arrow-forward.png";

class Mobile_toolbar extends Component {
  render() {
    return (
      <div className="mobile-toolbar-menu">
        <div className="header__logo-wrapper">
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
    );
  }
}

export default Mobile_toolbar;
