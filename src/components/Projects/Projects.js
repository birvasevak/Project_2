/** @import modules
 * 'npm i --save react'
 * 'npm i --save react-router-dom'
 */
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharityProject from "./CharityProject";
import Arrow_backward from "../../image/arrow-backward.png";
/** @import CSS styles */
import "./Projects.css";

/**
 * @description Creates the grid view of all the projects user is enrolled in
 * @class Projects
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {Projects}
 * @example <Projects />
 * pre-condition: all the imports
 * post-condition: returns the grid view of all the projects
 * @param null
 * @returns {Projects}
 * @todo connect to database to fetch the projects of the user
 */
class Projects extends React.Component {
  super() {
    this.state = { isProjectsOpen: true };
  }

  closeProjects = () => {
    this.setState = { isProjectsOpen: false };
  };

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
      <Router>
        <div className="content">
          <div className="page" style={{ display: "block" }}>
            <div className="header__wrapper">
              <div className="header-menu-mobile">
                <a href="/">
                  <img src={Arrow_backward} alt="Backward Arrow" />
                </a>
              </div>
              <div className="header-title">My Charity Projects</div>
            </div>
          </div>

          <div className="grid-wrapper">
            {/* {this.createProjects()} */}

            <div className="one">
              <NavLink
                to={"/Projects/CharityProject"}
                className="NavLink"
                // onClick={this.closeProjects}
              >
                Project One
              </NavLink>
            </div>

            <div className="two">
              <NavLink to={"/Projects/CharityProject"} className="NavLink">
                Project Two
              </NavLink>
            </div>
            <div className="three">
              <NavLink to={"/Projects/CharityProject"} className="NavLink">
                Project Three
              </NavLink>
            </div>

            <div className="newProject">
              <NavLink
                to={"/Projects/CharityProject"}
                className="NavLink"
                onClick={() => this.closeProjects()}
              >
                Add New Project
              </NavLink>
            </div>
          </div>
        </div>
        {/* <SidebarProfile /> */}

        {/* <Route path="/" exact component={Homepage} /> */}
        <Route
          path="/Projects/CharityProject"
          exact
          component={CharityProject}
        />
        {/* <Route
          path="/Projects/CharityProject"
          exact
          strict
          render={() =>
            this.state.closeProjects ? <CharityProject /> : <Redirect to="/" />
          }
        /> */}
      </Router>
    );
  }
}
export default Projects;
