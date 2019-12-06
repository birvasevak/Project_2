import React, { Component } from "react";
import "./MyChildren.css";
import Arrow_backward from "../../image/arrow-backward.png";
import "../Account/Account.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyChildren from "./MyChildren";

class ChildName extends React.Component {
  render() {
    return (
      <Router>
        <div className="menu" id="container" style={{ display: "block" }}>
          <div className="header__wrapper">
            <div className="header__logo">
              <div className="header-menu-mobile">
                <NavLink to={"/Menu/MyChildren"}>
                  <a href="/Menu">
                    <img src={Arrow_backward} alt="Backward Arrow" />
                  </a>
                </NavLink>
              </div>
            </div>
            <div className="header-title">Child's Name</div>
          </div>
        </div>
        <Route path="/Menu/MyChildren" exact component={MyChildren} />
      </Router>
    );
  }
}

export default ChildName;
