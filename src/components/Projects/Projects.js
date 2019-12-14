import React, { Component } from "react";
import "./Projects.css";
import Arrow_backward from "../../image/arrow-backward.png";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Grid from "@material-ui/core/Grid/";
import Paper from "@material-ui/core/Paper";

class Projects extends React.Component {
  createProjects = () => {
    const n = 5;
    let projects = [];
    projects.length = n;
    let i, j;

    for (i = 1; i < 3; i++) {
      for (j = 1; j < 4; j++) {
        projects.push(<div style={{ gridColumn: i, gridRow: j }}>One</div>);
      }
    }

    return projects;
  };

  render() {
    return (
      // <div>
      //   <h3>The project page</h3>
      //   <p>Content here</p>
      // </div>
      <Router>
        <div className="content">
          <div className="page" style={{ display: "block" }}>
            <div className="header__wrapper">
              <div className="header-menu-mobile">
                {/* <NavLink to={"/"}> */}
                <a href="/">
                  <img src={Arrow_backward} alt="Backward Arrow" />
                </a>
                {/* </NavLink> */}
              </div>
              <div className="header-title">My Charity Projects</div>
            </div>
          </div>

          <div class="grid-wrapper">
            {/* {this.createProjects()} */}
            <div class="one">One</div>
            <div class="one1">One</div>
            <div class="one2">One</div>
          </div>
        </div>

        {/* <Route path="/" exact component={Homepage} /> */}
      </Router>
    );
  }
}
export default Projects;
