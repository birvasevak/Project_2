import React, { Component } from "react";
import "../Projects.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Arrow_backward from "../../../image/arrow-backward.png";
import CharityProject from "../CharityProject";

class ProjectReport extends React.Component {
  render() {
    return (
      <Router>
        <div className="content" style={{ position: "absolute" }}>
          <div className="page" style={{ display: "flex" }}>
            <div className="header__wrapper">
              <div className="header-menu-mobile">
                <NavLink
                  to={"/Projects/CharityProjects"}
                  onClick={this.closeProjects}
                >
                  <a href="/Projects/CharityProjects">
                    <img src={Arrow_backward} alt="Backward Arrow" />
                  </a>
                </NavLink>
              </div>
              <div className="header-title">Project Report</div>
            </div>
          </div>
        </div>
        <Route
          path="/Projects/CharityProjects"
          exact
          component={CharityProject}
        />
      </Router>
    );
  }
}

export default ProjectReport;
