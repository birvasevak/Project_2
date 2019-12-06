import React, { Component } from "react";
import Arrow_backward from "../../image/arrow-backward.png";
// import "./MyChildren.css";
import "../Account/Account.css";
import "../Mobile_toolbar/Mobile_toolbar.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mobile_toolbar from "../Mobile_toolbar/Mobile_toolbar";
import Add_child from "../../site_media/Child Settings Menu_Add Child_3b9f9d.png";
import Child_avatar from "../../site_media/Child Settings Menu_Default Avatar_3b9f9d.png";
import ChildName from "./ChildName";

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
            <div className="menu__item">
              <img src={Add_child} alt="add achild" />
              <a href="/"> Add Child</a>
            </div>
          </div>
          {/* </div> */}
          <Route path="/Child_name1" exact component={ChildName} />
          <Route path="/Child_name2" exact component={ChildName} />
          <Route path="/Menu" exact component={Mobile_toolbar} />
        </div>
      </Router>
    );
  }
}

export default MyChildren;
