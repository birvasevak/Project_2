/** @import modules
 * 'npm i --save react'
 * 'npm i --save react-router-dom'
 */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Arrow_backward from "../../image/arrow-backward.png";
import Mobile_toolbar from "../Mobile_toolbar/Mobile_toolbar";
import Add_child from "../../site_media/Child Settings Menu_Add Child_3b9f9d.png";
import Child_avatar from "../../site_media/Child Settings Menu_Default Avatar_3b9f9d.png";
import ChildName from "./ChildName";
/** @import CSS styles */
import "../Account/Account.css";
import "../Mobile_toolbar/Mobile_toolbar.css";

/**
 * @description Creates a page with list of kinds under that account
 * @class MyChildren
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {MyChildren}
 * @example <MyChildren />
 * pre-condition: all the imports
 * post-condition: returns a page with list of kinds under that account
 * @param null
 * @returns {MyChildren}
 * @todo connect to database to get the list of kids under that account
 */
class MyChildren extends React.Component {
  render() {
    return (
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
            <div className="header-title">My Children</div>
          </div>
          <div className="menu__content">
            <NavLink to={"/Child_name1"}>
              <div className="menu__item">
                <img src={Child_avatar} alt="child avatar" />
                <a href="/"> Child's Name</a>
              </div>
            </NavLink>
            <NavLink to={"/Child_name2"}>
              <div className="menu__item">
                <img src={Child_avatar} alt="child avatar" />
                <a href="/"> Child's Name</a>
              </div>
            </NavLink>
            <NavLink to={"/addChild"}>
              <div className="menu__item">
                <img src={Add_child} alt="add achild" />
                <a href="/"> Add Child</a>
              </div>
            </NavLink>
          </div>
          {/* </div> */}
          <Route path="/Child_name1" exact component={ChildName} />
          <Route path="/Child_name2" exact component={ChildName} />
          <Route path="/Menu" exact component={Mobile_toolbar} />
          <Route path="/addChild" exact component={ChildName} />
        </div>
      </Router>
    );
  }
}

export default MyChildren;
