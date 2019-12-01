import React, { Component } from "react";
import "./Mobile_toolbar.css";
import Mobile_logo from "../../image/Logo-mobile.png";
import Desktop_logo from "../../image/desktop_logo.png";
import Arrow_forward from "../../image/arrow-forward.png";
import { NavLink } from "react-router-dom";

class Mobile_toolbar extends Component {
  render() {
    return (
      <div className="mobile-toolbar-menu" style={{ display: "block" }}>
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
              <a href="/">
                <img
                  src={Arrow_forward}
                  // className="return-button"
                  alt="Forward Arrow"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mobile-toolbar-menu__content">
          <div className="mobile-toolbar-menu__item">
            <a href="/">My Account</a>
          </div>
          <div className="mobile-toolbar-menu__item">
            <a href="/">My Children</a>
          </div>
          <div className="mobile-toolbar-menu__item">
            <a href="/">Payments</a>
            <a href="/Payments">
              <img
                src={Arrow_forward}
                className="return-button"
                alt="Forward Arrow"
              />
            </a>
          </div>
          <div className="mobile-toolbar-menu__item">
            <a href="/" className="logout-link">
              Terms and Conditions
            </a>
            <a href="/Terms and Conditions">
              <img
                src={Arrow_forward}
                className="return-button"
                alt="Forward Arrow"
              />
            </a>
          </div>
          <div className="mobile-toolbar-menu__item">
            <a href="/" className="logput-link">
              Security and Privacy
            </a>
            <a href="/Security and Privacy">
              <img
                src={Arrow_forward}
                className="return-button"
                alt="Forward Arrow"
              />
            </a>
          </div>
          <div className="mobile-toolbar-menu__item">
            <a href="/" className="logout-link">
              Logout
            </a>
            <a href="/Logout">
              <img
                src={Arrow_forward}
                className="return-button"
                alt="Forward Arrow"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Mobile_toolbar;
