import React, { Component } from "react";
import Arrow_backward from "../../image/arrow-backward.png";
import "./Account.css";
// import "../Mobile_toolbar/Mobile_toolbar.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mobile_toolbar from "../Mobile_toolbar/Mobile_toolbar";
import Settings_camera from "../../site_media/Settings_Camera_3b9f9d.png";
import Settings_email from "../../site_media/Settings_Email_3b9f9d.png";
import Settings_home from "../../site_media/Settings_Address_3b9f9d.png";
import Settings_mobile from "../../site_media/Settings_Mobile_3b9f9d.png";
import Settings_notifications from "../../site_media/Settings_Notifications_3b9f9d.png";

class Account extends React.Component {
  render() {
    return (
      // <div style={{ display: "block" }}>
      //   <h1>Account</h1>
      // </div>
      // <div className="mobile-toolbar-menu" style={{ display: "block" }}>
      <Router>
        <div className="menu" id="container" style={{ display: "block" }}>
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
            <div className="header-title">
              My Account
              <div className="header-link">Save</div>
            </div>
          </div>
          <div className="menu__content">
            <div className="menu__item_title">
              <a href="/"> Name</a>
              <img src={Settings_camera} alt="Settings_camera" />
            </div>
            <div className="menu__item">
              <img src={Settings_home} alt="Settings_home" />
              <a href="/"> Address</a>
            </div>
            <div className="menu__item">
              <img src={Settings_email} alt="Settings_email" />
              <a href="/"> Email</a>
            </div>
            <div className="menu__item">
              <img
                src={Settings_mobile}
                alt="Settings_mobile"
                style={{ width: "20px", paddingRight: "10px" }}
              />
              <a href="/"> Mobile</a>
            </div>
            <div className="menu__item">
              <img src={Settings_notifications} alt="Settings_notifications" />
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
