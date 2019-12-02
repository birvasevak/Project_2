import React, { Component } from "react";
import "./Mobile_toolbar.css";
import Arrow_forward from "../../image/arrow-forward.png";
import Arrow_backward from "../../image/arrow-backward.png";

class Mobile_toolbar extends Component {
  render() {
    return (
      <div className="mobile-toolbar-menu" style={{ display: "block" }}>
        <div className="header__logo-wrapper">
          <div className="header__logo">
            <div className="header-menu-mobile">
              <a href="/">
                <img src={Arrow_backward} alt="Backward Arrow" />
              </a>
            </div>
          </div>
          <div className="header-title">Menu</div>
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
