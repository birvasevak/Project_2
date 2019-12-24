/** @import modules
 * 'npm i --save react'
 * 'npm i --save react-router-dom'
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Arrow_backward from "../../image/arrow-backward.png";
import Mobile_toolbar from "../Mobile_toolbar/Mobile_toolbar";
/** @import CSS styles */
import "./Terms_and_Conditions.css";
import "../Mobile_toolbar/Mobile_toolbar.css";

/**
 * @description Displays Terms and Conditions text
 * @class Terms_and_Conditions
 * @extends React.Component
 * @type {Text}
 * @example <Terms_and_Conditions />
 * pre-condition: all the imports
 * post-condition: returns the Terms and Conditions text
 * @returns {Terms_and_Conditions}
 * @todo insert the required text
 */
class Terms_and_Conditions extends React.Component {
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
            <div className="header-title">Terms and Conditions</div>
          </div>
          <div className="account-menu__content">
            {/* <div className="account-menu__item">
              <a href="/"> Address</a>
            </div> */}
            <h1>Terms and Conditions</h1>
          </div>
          {/* </div> */}
          <Route path="/Menu" exact component={Mobile_toolbar} />
        </div>
      </Router>
    );
  }
}

export default Terms_and_Conditions;
