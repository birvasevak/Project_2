import React, { Component } from "react";
import Arrow_backward from "../../image/arrow-backward.png";
import "./Account.css";
// import "../Mobile_toolbar/Mobile_toolbar.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mobile_toolbar from "../Mobile_toolbar/Mobile_toolbar";
import Settings_camera from "../../site_media/Settings_Camera_3b9f9d.png";
import Settings_email from "../../site_media/Settings_Email_3b9f9d.png";

class Account extends React.Component {
  render() {
    return (
      // <div style={{ display: "block" }}>
      //   <h1>Account</h1>
      // </div>
      // <div className="mobile-toolbar-menu" style={{ display: "block" }}>
      <Router>
        <div
          className="account-menu"
          id="container"
          style={{ display: "block" }}
        >
          <div className="header__wrapper">
            <div className="header__logo">
              <div className="header-menu-mobile">
                <NavLink to={"/Menu"}>
                  <a href="/Menu">
                    <img src={Arrow_backward} alt="Backward Arrow" />
                  </a>
                </NavLink>
              </div>
            </div>
            <div className="header-title">My Account</div>
          </div>
          <div className="account-menu__content">
            <div className="account-menu__item_title">
              <a href="/"> Name</a>
              <img src={Settings_camera} alt="Settings_camera" />
            </div>
            <div className="account-menu__item">
              <a href="/"> Address</a>
            </div>
            <div className="account-menu__item">
              {/* <img src={Settings_email} alt="Settings_email" /> */}
              <a href="/"> Email</a>
            </div>
            <div className="account-menu__item">
              <a href="/"> Mobile</a>
            </div>
            <div className="account-menu__item">
              <a href="/"> Notifications</a>
            </div>
          </div>
          {/* </div> */}
          <Route path="/Menu" exact component={Mobile_toolbar} />
        </div>
      </Router>
    );
  }
}

export default Account;
