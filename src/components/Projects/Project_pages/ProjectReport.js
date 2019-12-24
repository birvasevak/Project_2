/** @import modules
 * 'npm i --save react'
 * 'npm i --save react-router-dom'
 * 'npm i --save react-switch'
 */
import React, { Component } from "react";
import Switch from "react-switch";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Arrow_backward from "../../../image/arrow-backward.png";
import CharityProject from "../CharityProject";
/** @import CSS styles */
import "../Projects.css";

/**
 * @description Creates a page for the project report
 * @class ProjectReport
 * @implements BroweserRouter as Router
 * @extends React.Component
 * @type {ProjectReport}
 * @example <ProjectReport />
 * pre-condition: all the imports
 * post-condition: returns a page with project report
 * @param null
 * @returns {ProjectReport}
 * @todo connect to database to fetch and upload project data
 */
/**
 * @function constructor
 * @param null
 * @returns {element}
 */
/**
 * @function handleSwitchChange
 * @param {boolean} checked
 * @returns {boolean}
 */
class ProjectReport extends React.Component {
  constructor() {
    super();
    this.state = {
      isCharityProjectOpen: true,
      checked: false
    };
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

  handleSwitchChange(checked) {
    this.setState({ checked: true });
  }
  render() {
    return (
      <Router>
        <div className="projects-content">
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
          <div className="projects-centralpart">
            <div className="Image">
              <div className="Outline" style={{ marginBottom: "10px" }}>
                <a href="/changeimage">
                  <div className="CoverImage">Project's Cover Image</div>
                </a>
              </div>
            </div>
            <div className="project-emblem">
              <div className="projectTitle">Charity_Project Charity_Name</div>
              <NavLink to="/www.charityname.com" className="projectLink">
                status
              </NavLink>
            </div>

            <div className="Outline">
              <div className="project-subheadings">
                <h4>My Impact Report</h4>
              </div>
              <div className="ProjectSection">
                <div className="Spt_project">
                  <div className="Project_icons"></div>
                </div>

                <button className="uploadButton uploadButton-mobile">
                  UPLOAD REPORT
                </button>
              </div>
            </div>
            <div className="Outline">
              <div className="outlineHeading">Total Project Impact</div>

              <form className="impactForm">
                <div className="impact-item ">
                  <label>
                    Total Volunter
                    <br /> Hour Worked:
                  </label>
                  <input type="text" placeholder="# of Hours for Myself" />
                </div>
                <div className="impact-item ">
                  <label>
                    Total Family <br />
                    Volunterr Hours:{" "}
                  </label>
                  <input type="text" placeholder="# of Hours for My Family" />
                </div>
                <div className="impact-item ">
                  <label>Fundraise:</label>
                  <input type="text" placeholder="$" />
                </div>
                <div className="impact-item ">
                  <label>
                    Total People <br />
                    Reached:
                  </label>
                  <input type="text" placeholder="# of People" />s
                </div>
              </form>
            </div>
            <div className="Outline">
              <div className="outlineHeading">
                Unicorn Oath & Project Declaration
              </div>
              <p>
                I hereby promise to believe in myself. I will serve my community
                with strength and purpose. I will work with my peers to achieve
                our goals. And we will be an example to others, together as one!
              </p>
              <p>
                I delcare that I have worked closely with my blessings, the
                Helpful Hearts, in contributing towards this Charity Project. I
                have completed the following project work.
              </p>
              <li className="switch-list">
                <label className="switch-labels">
                  <Switch
                    className="react-switch"
                    onChange={this.handleSwitchChange}
                    checked={this.state.checked}
                  />
                  label 1
                </label>
              </li>

              <li className="switch-list">
                <label className="switch-labels">
                  <Switch
                    className="react-switch"
                    onChange={this.handleSwitchChange}
                    checked={this.state.checked}
                  />
                  label 2
                </label>
              </li>

              <li className="switch-list">
                <label className="switch-labels">
                  <Switch
                    className="react-switch"
                    onChange={this.handleSwitchChange}
                    checked={this.state.checked}
                  />
                  label 3
                </label>
              </li>

              <li className="switch-list">
                <label className="switch-labels">
                  <Switch
                    className="react-switch"
                    onChange={this.handleSwitchChange}
                    checked={this.state.checked}
                  />
                  label 4
                </label>
              </li>
              <li className="switch-list">
                <label className="switch-labels">
                  <Switch
                    className="react-switch"
                    onChange={this.handleSwitchChange}
                    checked={this.state.checked}
                  />
                  label 5
                </label>
              </li>
              <div className="sign-label">Signed By:</div>
              <div className="signature-box">Unicorn Signature</div>
              <button className="submitButton">SUBMIT REPORT</button>
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
