/** @import modules
 * 'npm i --save react'
 */
import React, { Component } from "react";
import Arrow_backward from "../../image/arrow-backward.png";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mobile_toolbar from "../Mobile_toolbar/Mobile_toolbar";
/** @import CSS styles */
import "./Security_and_Privacy.css";
import "../Mobile_toolbar/Mobile_toolbar.css";

/**
 * @description Displays Security and Privacy text
 * @class Security_and_Privacy
 * @extends React.Component
 * @type {Text}
 * @example <Security_and_Privacy />
 * pre-condition: all the imports
 * post-condition: returns the Security and Privacy text
 * @returns {Security_and_Privacy}
 * @todo insert the required text
 */
class Security_and_Privacy extends React.Component {
  render() {
    return (
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
            <div className="header-title">Security and Privacy</div>
          </div>
          <div className="account-menu__content">
            {/* <div className="account-menu__item">
              <a href="/"> Address</a>
            </div> */}
            <h1>Security and Privacy</h1>
          </div>
          {/* </div> */}
          <Route path="/Menu" exact component={Mobile_toolbar} />
        </div>
      </Router>
    );
  }
}

export default Security_and_Privacy;
